import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  Search, MapPin, Phone, Mail, User, Building2, Headphones, Radio, ShoppingBag, Music, 
  Copy, CheckCircle2, Edit3, Trash2, Plus, Lock, X, AlertCircle, Sparkles, SlidersHorizontal, 
  Filter, Star, LogIn, LogOut, Upload, FileSpreadsheet, ClipboardList, Send, Calendar, CheckSquare, RefreshCw
} from 'lucide-react';
import { initializeApp, getApps } from 'firebase/app';
import { 
  getAuth, signInAnonymously, onAuthStateChanged, signInWithEmailAndPassword, 
  signOut, createUserWithEmailAndPassword 
} from 'firebase/auth';
import { 
  getFirestore, collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc 
} from 'firebase/firestore';

// ============================================================================
// 🔑 FIREBASE CONFIGURATION
// Replace these with your actual credentials from the Firebase Web App setup.
// ============================================================================
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "the-industry-connect.firebaseapp.com",
  projectId: "the-industry-connect",
  storageBucket: "the-industry-connect.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcd1234"
};

// Initialize Firebase safely
let app, auth, db;
const appId = "the-industry-connect-prod";

try {
  const config = typeof __firebase_config !== 'undefined' 
    ? JSON.parse(__firebase_config) 
    : firebaseConfig;

  if (getApps().length === 0) {
    app = initializeApp(config);
  } else {
    app = getApps()[0];
  }
  auth = getAuth(app);
  db = getFirestore(app);
} catch (error) {
  console.warn("Firebase initialization skipped or failed. Using offline local fallback modes.", error);
}

// ============================================================================
// 📦 INITIAL DATASET (Fallback and Auto-Seed Source)
// ============================================================================
const initialDirectoryData = {
  "Labels & A&R": [
    { title: "Top Dawg Ent. (TDE)", name: "Anthony \"Moosa\" Tiffith Jr.", role: "President", email: "info@tde.com", phone: "(310) 955-1445", location: "Los Angeles, CA", tags: "Record Label", notes: "" },
    { title: "Empire Distribution", name: "Tina Davis", role: "President", email: "deals@empiredistribution.com", phone: "(747) 500-1766", location: "Los Angeles, CA", tags: "Distribution", notes: "" },
    { title: "Aftermath Ent.", name: "Bruce Iglauer", role: "A&R / Executive", email: "info@aftermath-ent.com", phone: "(310) 865-7642", location: "Los Angeles, CA", tags: "Record Label", notes: "" },
    { title: "Death Row Records", name: "Snoop Dogg", role: "Owner / CEO", email: "licensing@deathrowrecords.com", phone: "(310) 550-1000", location: "Los Angeles, CA", tags: "Classic Hip Hop", notes: "" },
    { title: "Stones Throw Records", name: "Oscar P.", role: "A&R (Demos)", email: "demos@stonesthrow.com", phone: "(323) 539-2520", location: "Los Angeles, CA", tags: "Independent", notes: "" },
    { title: "Interscope Records", name: "Nicole Wyskoarko", role: "EVP / Urban A&R", email: "info@interscope.com", phone: "(310) 865-1000", location: "Los Angeles, CA", tags: "Major Label", notes: "" },
    { title: "Sick Wid It Records", name: "E-40", role: "CEO / Founder", email: "contact@sickwiditrecords.com", phone: "N/A", location: "Vallejo, CA", tags: "Bay Area", notes: "" },
    { title: "Slovenly Recordings", name: "Pete Menchetti", role: "Founder / Owner", email: "info@slovenly.com", phone: "(775) 358-7865", location: "Las Vegas, NV", tags: "Independent", notes: "" },
    { title: "Imirage Sound Lab", name: "Tom Gordon", role: "Chief Engineer & Manager", email: "tom@inspired-amateur.com", phone: "(775) 358-7484", location: "Reno, NV", tags: "Studio", notes: "" },
    { title: "Granny's Recording Studio", name: "Studio Operations", role: "Booking Coordinator", email: "General Form Contact Only", phone: "(775) 786-2622", location: "Reno, NV", tags: "Studio", notes: "" }
  ],
  "Streaming": [
    { title: "Apple Music", name: "Apple Music for Artists Portal", role: "A&R / Editorial Submission", email: "press@apple.com", phone: "N/A", location: "SF / Cupertino, CA", tags: "DSP Portal", notes: "" },
    { title: "Audiomack", name: "Audiomack Creators / Artist Pro", role: "A&R / Editorial Submission", email: "support@audiomack.com", phone: "N/A", location: "New York, NY", tags: "Discovery Engine", notes: "" },
    { title: "SoundCloud", name: "SoundCloud for Artists / \"First Fans\"", role: "A&R / Editorial Submission", email: "press@soundcloud.com", phone: "N/A", location: "International", tags: "Discovery Engine", notes: "" },
    { title: "Spotify", name: "Spotify for Artists Pitching Tool", role: "A&R / Editorial Submission", email: "press@spotify.com", phone: "N/A", location: "New York, NY", tags: "DSP Portal", notes: "" },
    { title: "TIDAL", name: "TIDAL Artist Home", role: "A&R / Editorial Submission", email: "press@tidal.com", phone: "N/A", location: "New York, NY", tags: "DSP Portal", notes: "" },
    { title: "YouTube Music", name: "YouTube for Artists / Studio", role: "A&R / Editorial Submission", email: "press@google.com", phone: "N/A", location: "SF / San Bruno, CA", tags: "Video & Streaming", notes: "" }
  ],
  "Radio Directors": [
    { title: "Power 106 (KPWR)", subtitle: "Los Angeles", name: "DJ E-Man (Emanuel Coquia)", role: "Program Director", email: "eman@power106.com", phone: "(818) 953-4200", location: "Los Angeles, CA", tags: "Urban Radio", notes: "" },
    { title: "Real 92.3 (KRRL)", subtitle: "Los Angeles", name: "Doc Wynter", role: "iHeartMedia Urban Lead", email: "docwynter@iheartmedia.com", phone: "(818) 559-2252", location: "Los Angeles, CA", tags: "Urban Radio", notes: "" },
    { title: "93.5 KDAY", subtitle: "Los Angeles", name: "E-Man", role: "Programming Lead", email: "programming@935kday.com", phone: "(818) 953-4200", location: "Los Angeles, CA", tags: "Classic Hip Hop", notes: "" },
    { title: "106.1 KMEL", subtitle: "San Francisco", name: "Donashea Guy", role: "Program Director", email: "donasheaguy@iheartmedia.com", phone: "(415) 358-1061", location: "San Francisco, CA", tags: "Urban Radio", notes: "" },
    { title: "KBLX 102.9", subtitle: "San Francisco", name: "Elroy Smith", role: "Program Director", email: "elroy.smith@urban1.com", phone: "(415) 765-8800", location: "San Francisco, CA", tags: "Urban Radio", notes: "" },
    { title: "KUBE 93.3", subtitle: "Seattle", name: "Mark Adams", role: "VP of Programming", email: "markadams@iheartmedia.com", phone: "N/A", location: "Seattle, WA", tags: "Pacific NW", notes: "" },
    { title: "KXJM (JAM'N 107.5)", subtitle: "Portland", name: "Tim Rainey", role: "Program Director", email: "timrainey@iheartmedia.com", phone: "(503) 225-1190", location: "Portland, OR", tags: "Pacific NW", notes: "" },
    { title: "XHTZ (Z90.3)", subtitle: "San Diego", name: "R Dub! (Randy Williams)", role: "Program Director", email: "rdub@z90.com", phone: "(619) 426-9090", location: "Long Beach / SD", tags: "Urban Radio", notes: "" },
    { title: "K-V101.1 (KHYL)", subtitle: "Sacramento", name: "Complex", role: "Program Director", email: "complex@v1011fm.com", phone: "(916) 334-7777", location: "Sacramento, CA", tags: "Urban Radio", notes: "" }
  ],
  "Retail & Brand": [
    { title: "Culture Kings", subtitle: "Clothing/Hats/Shoes", name: "Retail Director", role: "Lead Contact", email: "info@culturekings.com", phone: "(702) 473-5100", location: "Las Vegas, NV", tags: "Streetwear", notes: "" },
    { title: "Diamond Supply Co.", subtitle: "Streetwear/Skate", name: "Nick Tershay", role: "Founder", email: "sales@diamondsupplyco.com", phone: "(213) 621-4200", location: "Los Angeles, CA", tags: "Streetwear", notes: "" },
    { title: "The Hundreds", subtitle: "Apparel/Lifestyle", name: "Bobby Hundreds", role: "Co-Founder", email: "info@thehundreds.com", phone: "(323) 230-7780", location: "Los Angeles, CA", tags: "Streetwear", notes: "" },
    { title: "Flight Club LA", subtitle: "Rare Sneakers", name: "Consignment Mgr", role: "Lead Contact", email: "la@flightclub.com", phone: "(323) 782-8616", location: "Los Angeles, CA", tags: "Sneakers", notes: "" },
    { title: "Mr. Bling Grillz", subtitle: "Custom Grills", name: "Lead Jeweler", role: "Lead Contact", email: "mrblingm2h@gmail.com", phone: "(213) 265-7570", location: "Los Angeles, CA", tags: "Collectibles", notes: "" },
    { title: "True", subtitle: "Streetwear", name: "Manager", role: "Lead Contact", email: "info@true-sf.com", phone: "(415) 626-2882", location: "San Francisco, CA", tags: "Streetwear", notes: "" },
    { title: "Proper LBC", subtitle: "Sneakers", name: "Lead Buyer", role: "Lead Contact", email: "contact@properlbc.com", phone: "(562) 628-9100", location: "Long Beach, CA", tags: "Sneakers", notes: "" },
    { title: "Bait Inc.", subtitle: "Collectibles", name: "Marketing Manager", role: "Lead Contact", email: "info@baitme.com", phone: "(909) 396-1800", location: "Los Angeles, CA", tags: "Collectibles", notes: "" }
  ],
  "DJs": [
    { title: "DJ Mustard", subtitle: "YG / Chart-topping Producer", name: "Los Angeles", role: "Primary Market", email: "info@djmustard.com", phone: "(310) 275-6135", location: "Los Angeles, CA", tags: "Producer", notes: "" },
    { title: "DJ E-Man", subtitle: "Power 106 PD / Club Resident", name: "Burbank / LA", role: "Primary Market", email: "eman@power106.com", phone: "(818) 953-4200", location: "Los Angeles, CA", tags: "Radio DJ", notes: "" },
    { title: "DJ Quik", subtitle: "G-Funk Legend / Touring DJ", name: "Compton / LA", role: "Primary Market", email: "booking@djquik.com", phone: "(310) 865-1000", location: "Los Angeles, CA", tags: "Classic", notes: "" },
    { title: "DJ Muggs", subtitle: "Cypress Hill / Soul Assassins", name: "Los Angeles", role: "Primary Market", email: "info@soulassassins.com", phone: "(323) 654-1234", location: "Los Angeles, CA", tags: "Classic", notes: "" },
    { title: "DJ Amen", subtitle: "Young California / Real 92.3", name: "SF / Bay Area", role: "Primary Market", email: "djamen@real923la.com", phone: "(415) 358-1061", location: "San Francisco, CA", tags: "Open Format", notes: "" },
    { title: "DJ Toure", subtitle: "Hieroglyphics / Souls of Mischief", name: "Oakland", role: "Primary Market", email: "info@hieroglyphics.com", phone: "(510) 465-4376", location: "San Francisco, CA", tags: "Hip Hop Heritage", notes: "" },
    { title: "DJ Skee", subtitle: "DASH Radio / Event Host", name: "Los Angeles", role: "Primary Market", email: "booking@djskee.com", phone: "(323) 539-2520", location: "Los Angeles, CA", tags: "Radio DJ", notes: "" },
    { title: "REMiXnet", subtitle: "Open Format / Luxury Events", name: "San Diego", role: "Primary Market", email: "info@remixnet.live", phone: "(619) 456-7890", location: "Long Beach / SD", tags: "Open Format", notes: "" }
  ]
};

const CATEGORIES = ["Labels & A&R", "Streaming", "Radio Directors", "Retail & Brand", "DJs"];

const categoryIcons = {
  "Labels & A&R": <Building2 size={18} />,
  "Streaming": <Headphones size={18} />,
  "Radio Directors": <Radio size={18} />,
  "Retail & Brand": <ShoppingBag size={18} />,
  "DJs": <Music size={18} />
};

// --- SPLASH SCREEN COMPONENT ---
const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setFadeOut(true), 400);
          setTimeout(() => onComplete(), 900);
          return 100;
        }
        return prev + Math.floor(Math.random() * 20) + 5;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 bg-neutral-950 z-50 flex flex-col items-center justify-center p-6 transition-all duration-700 ${fadeOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100'}`}>
      <div className="relative flex flex-col items-center max-w-sm w-full">
        <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-amber-500/20 animate-pulse relative mb-8 group">
          <div className="absolute inset-0.5 bg-neutral-950 rounded-[14px] flex items-center justify-center">
            <svg className="w-12 h-12 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11 21c-.4 0-.8-.2-1-.6-.3-.5-.2-1.1.2-1.4l5.6-4H10c-.4 0-.8-.2-1-.6-.2-.4-.2-.9 0-1.3l4-7c.3-.5.9-.7 1.4-.4.5.3.7.9.4 1.4L10.2 11H15c.4 0 .8.2 1 .6.2.4.2.9 0 1.3l-4 7c-.2.3-.6.5-1 .5z"/>
            </svg>
          </div>
          <div className="absolute -inset-1 bg-amber-500/30 blur-xl opacity-70 rounded-2xl animate-ping duration-1000" />
        </div>

        <h2 className="text-2xl font-extrabold text-white tracking-wider uppercase mb-1 flex items-center gap-2">
          THE INDUSTRY <span className="text-amber-500">CONNECT</span>
        </h2>
        <p className="text-neutral-500 text-xs font-mono tracking-widest uppercase mb-12 text-center">Unified Hub & Outreach CRM</p>

        <div className="w-full bg-neutral-900 border border-neutral-800 rounded-full h-1.5 p-0.5 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-amber-500 to-amber-400 h-full rounded-full transition-all duration-150"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <div className="flex justify-between w-full mt-2 text-[10px] font-mono text-neutral-500 tracking-wider">
          <span>CONNECTING INTEGRATIONS...</span>
          <span>{Math.min(progress, 100)}%</span>
        </div>
      </div>
    </div>
  );
};

// --- CONTACT CARD COMPONENT ---
const ContactCard = ({ data, isAdmin, isBookmarked, onToggleBookmark, onEdit, onDelete, onUpdateNotes }) => {
  const [copied, setCopied] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showNotesEditor, setShowNotesEditor] = useState(false);
  const [tempNotes, setTempNotes] = useState(data.notes || "");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNotesSave = () => {
    onUpdateNotes(data.id, tempNotes);
    setShowNotesEditor(false);
  };

  return (
    <div className="bg-neutral-800/50 border border-neutral-700/40 rounded-xl p-5 hover:bg-neutral-800 transition-all hover:border-neutral-600 shadow-lg flex flex-col h-full relative group">
      
      {/* Favorite/Bookmark Toggle */}
      <button 
        onClick={() => onToggleBookmark(data.id)}
        className="absolute top-4 right-4 z-10 p-1 rounded bg-neutral-900/60 border border-neutral-700/40 hover:bg-neutral-800 text-amber-500 transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100"
        title="Toggle Favorite"
      >
        <Star size={14} fill={isBookmarked ? "currentColor" : "none"} />
      </button>

      {/* Admin Controls Overlay */}
      {isAdmin && (
        <div className="absolute top-4 right-12 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900/80 p-1 rounded-lg backdrop-blur-sm z-10 border border-neutral-700">
          <button onClick={() => onEdit(data)} className="p-1 text-blue-400 hover:bg-blue-400/20 rounded transition-colors" title="Edit Contact">
            <Edit3 size={13} />
          </button>
          <button onClick={() => setShowDeleteConfirm(true)} className="p-1 text-red-400 hover:bg-red-400/20 rounded transition-colors" title="Delete Contact">
            <Trash2 size={13} />
          </button>
        </div>
      )}

      {/* Delete Confirmation Overlap */}
      {showDeleteConfirm && (
        <div className="absolute inset-0 bg-neutral-900/95 rounded-xl z-20 flex flex-col items-center justify-center p-4 text-center">
          <AlertCircle size={28} className="text-red-500 mb-1" />
          <h4 className="text-white text-sm font-bold mb-1">Delete this record?</h4>
          <p className="text-neutral-400 text-[10px] mb-3">This change updates database for all clients.</p>
          <div className="flex gap-2">
            <button onClick={() => setShowDeleteConfirm(false)} className="px-2.5 py-1 bg-neutral-700 hover:bg-neutral-600 text-white rounded text-xs transition-colors">
              Cancel
            </button>
            <button onClick={() => { onDelete(data.id); setShowDeleteConfirm(false); }} className="px-2.5 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-xs transition-colors">
              Delete
            </button>
          </div>
        </div>
      )}

      <div className="mb-4 pr-16">
        <div className="flex flex-wrap items-center gap-1.5 mb-1">
          <h3 className="text-lg font-extrabold text-white tracking-tight break-words max-w-full">{data.title}</h3>
          {data.tags && (
            <span className="px-1.5 py-0.5 bg-neutral-700/60 rounded text-[9px] uppercase font-bold text-amber-400 tracking-wider border border-neutral-600/40">
              {data.tags}
            </span>
          )}
        </div>
        {data.subtitle && <p className="text-xs font-semibold text-neutral-400">{data.subtitle}</p>}
      </div>

      <div className="flex-grow space-y-2.5 text-xs">
        <div className="flex items-start gap-2.5">
          <User className="text-neutral-500 mt-0.5 shrink-0" size={15} />
          <div>
            <p className="text-neutral-200 font-bold">{data.name || 'N/A'}</p>
            <p className="text-neutral-400 text-[10px]">{data.role}</p>
          </div>
        </div>

        {data.email && data.email !== "N/A" && (
          <div className="flex items-start gap-2.5">
            <Mail className="text-neutral-500 mt-0.5 shrink-0" size={15} />
            <div className="flex items-center gap-1.5 flex-wrap">
              <a href={`mailto:${data.email}`} className="text-amber-400 hover:text-amber-300 hover:underline break-all font-medium">
                {data.email}
              </a>
              <button 
                onClick={() => handleCopy(data.email)}
                className="text-neutral-500 hover:text-white transition-colors p-0.5 rounded hover:bg-neutral-700"
                title="Copy Email"
              >
                {copied ? <CheckCircle2 size={12} className="text-green-400" /> : <Copy size={12} />}
              </button>
            </div>
          </div>
        )}

        {data.phone && data.phone !== "N/A" && (
          <div className="flex items-start gap-2.5">
            <Phone className="text-neutral-500 mt-0.5 shrink-0" size={15} />
            <a href={`tel:${data.phone.replace(/[^0-9]/g, '')}`} className="text-neutral-300 hover:text-white">
              {data.phone}
            </a>
          </div>
        )}

        {data.location && data.location !== "N/A" && (
          <div className="flex items-start gap-2.5">
            <MapPin className="text-neutral-500 mt-0.5 shrink-0" size={15} />
            <p className="text-neutral-300">{data.location}</p>
          </div>
        )}
      </div>

      {/* CRM Interaction Log Notes Panel */}
      <div className="mt-4 pt-3 border-t border-neutral-700/40">
        <div className="flex justify-between items-center mb-1 text-[10px] font-mono uppercase tracking-wider text-neutral-500">
          <span className="flex items-center gap-1"><ClipboardList size={11} /> Interaction Notes:</span>
          <button 
            onClick={() => { setShowNotesEditor(!showNotesEditor); setTempNotes(data.notes || ""); }}
            className="text-amber-500 hover:text-amber-400 transition-colors"
          >
            {showNotesEditor ? "Cancel" : "Edit Log"}
          </button>
        </div>

        {showNotesEditor ? (
          <div className="space-y-2 mt-1.5">
            <textarea
              value={tempNotes}
              onChange={(e) => setTempNotes(e.target.value)}
              placeholder="e.g. Sent demo pack on 5/15. Follow up next week."
              rows={2}
              className="w-full text-xs p-2 bg-neutral-900 border border-neutral-700 rounded text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-amber-500"
            />
            <button 
              onClick={handleNotesSave}
              className="w-full py-1 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold rounded text-[10px] uppercase tracking-wider"
            >
              Save Log
            </button>
          </div>
        ) : (
          <p className="text-[11px] text-neutral-400 italic bg-neutral-900/40 p-2 rounded border border-neutral-800/40 min-h-[32px] break-words">
            {data.notes ? data.notes : "No outreach recorded yet."}
          </p>
        )}
      </div>
    </div>
  );
};

// --- APP ENTRY CONTROL POINT ---
export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState("Labels & A&R");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Custom Filter Parameters
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [viewFavoritesOnly, setViewFavoritesOnly] = useState(false);
  
  // Storage collection streams
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  
  // Bookmark local-cache persistence
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem('industry_connect_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Admin and Auth Management Panel
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [loginError, setLoginError] = useState("");
  
  // Modals Forms Administration
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingContact, setEditingContact] = useState(null);
  const [formData, setFormData] = useState({});
  const [isSaving, setIsSaving] = useState(false);

  // Bulk Ingestion Drop-Zone Form state
  const [showBulkUploadModal, setShowBulkUploadModal] = useState(false);
  const [bulkCsvText, setBulkCsvText] = useState("");
  const [bulkError, setBulkError] = useState("");

  const isSeedingRef = useRef(false);

  // Sync bookmarks changes to localStorage
  useEffect(() => {
    localStorage.setItem('industry_connect_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  // Handle Firebase User State Changes
  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }
    const initAuth = async () => {
      try {
        await signInAnonymously(auth);
      } catch (error) {
        console.error("Firebase auth link failure:", error);
      }
    };
    initAuth();
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser && !currentUser.isAnonymous) {
        setIsAdmin(true); // Elevate privileges if they signed in with credentials
        setUserEmail(currentUser.email);
      } else {
        setIsAdmin(false);
        setUserEmail("");
      }
    });
    return () => unsubscribe();
  }, []);

  // Fetch directory documents
  useEffect(() => {
    if (!user || !db) {
      setLoading(false);
      return;
    }
    const contactsRef = collection(db, 'artifacts', appId, 'public', 'data', 'contacts');
    const unsubscribe = onSnapshot(contactsRef, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setContacts(data);
      setLoading(false);
    }, (error) => {
      console.warn("Using offline memory datasets fallback.", error);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [user]);

  // Seeding trigger (Executes in background if DB is completely empty)
  useEffect(() => {
    if (!loading && contacts.length === 0 && db && user && !isSeedingRef.current) {
      isSeedingRef.current = true;
      const autoSeed = async () => {
        try {
          const contactsRef = collection(db, 'artifacts', appId, 'public', 'data', 'contacts');
          
          // Map initial data items into single, clean Firestore records
          const fallbackData = [];
          Object.entries(initialDirectoryData).forEach(([category, items]) => {
            items.forEach((item) => {
              fallbackData.push({ category, ...item });
            });
          });

          for (const item of fallbackData) {
            await addDoc(contactsRef, item);
          }
        } catch (error) {
          console.error("Auto seeding process failed:", error);
        } finally {
          isSeedingRef.current = false;
        }
      };
      autoSeed();
    }
  }, [loading, contacts, user]);

  const activeContacts = useMemo(() => {
    return contacts.length > 0 ? contacts : fallbackContactsArray;
  }, [contacts]);

  // Compute Tags/Locations contextually based on active directory tab
  const availableTags = useMemo(() => {
    const tabData = activeContacts.filter(c => c.category === activeTab);
    const tagsSet = new Set(["All"]);
    tabData.forEach(item => { if (item.tags) tagsSet.add(item.tags); });
    return Array.from(tagsSet);
  }, [activeContacts, activeTab]);

  const availableLocations = useMemo(() => {
    const tabData = activeContacts.filter(c => c.category === activeTab);
    const locationsSet = new Set(["All"]);
    
    tabData.forEach(item => {
      if (!item.location || item.location === "N/A") return;
      const str = item.location.toLowerCase();
      if (str.includes("los angeles") || str.includes("la")) locationsSet.add("LA");
      else if (str.includes("san francisco") || str.includes("sf") || str.includes("oakland") || str.includes("vallejo")) locationsSet.add("SF / Bay Area");
      else if (str.includes("las vegas") || str.includes("vegas")) locationsSet.add("Las Vegas");
      else if (str.includes("long beach")) locationsSet.add("Long Beach");
      else if (str.includes("reno") || str.includes("sparks")) locationsSet.add("Reno / Sparks");
    });
    
    return Array.from(locationsSet);
  }, [activeContacts, activeTab]);

  useEffect(() => {
    setSelectedTag("All");
    setSelectedLocation("All");
  }, [activeTab]);

  // Main Filter Logic Pipeline
  const filteredData = useMemo(() => {
    let output = activeContacts.filter(c => c.category === activeTab);
    
    // Filter by bookmarks if toggled
    if (viewFavoritesOnly) {
      output = output.filter(item => bookmarks.includes(item.id));
    }

    if (selectedTag !== "All") {
      output = output.filter(item => item.tags === selectedTag);
    }

    if (selectedLocation !== "All") {
      output = output.filter(item => {
        if (!item.location) return false;
        const loc = item.location.toLowerCase();
        if (selectedLocation === "LA") return loc.includes("los angeles") || loc.includes("ca") && loc.includes("carson") || loc.includes("burbank") || loc.includes("sylmar") || loc.includes("santa monica");
        if (selectedLocation === "SF / Bay Area") return loc.includes("san francisco") || loc.includes("sf") || loc.includes("oakland") || loc.includes("vallejo");
        if (selectedLocation === "Las Vegas") return loc.includes("las vegas") || loc.includes("vegas");
        if (selectedLocation === "Long Beach") return loc.includes("long beach") || loc.includes("lbc");
        if (selectedLocation === "Reno / Sparks") return loc.includes("reno") || loc.includes("sparks");
        return false;
      });
    }

    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      output = output.filter(item => {
        return (
          (item.title && item.title.toLowerCase().includes(lowerQuery)) ||
          (item.subtitle && item.subtitle.toLowerCase().includes(lowerQuery)) ||
          (item.name && item.name.toLowerCase().includes(lowerQuery)) ||
          (item.role && item.role.toLowerCase().includes(lowerQuery)) ||
          (item.location && item.location.toLowerCase().includes(lowerQuery)) ||
          (item.tags && item.tags.toLowerCase().includes(lowerQuery))
        );
      });
    }

    return output;
  }, [activeContacts, activeTab, selectedTag, selectedLocation, searchQuery, bookmarks, viewFavoritesOnly]);

  // Batch Outreach Clipboard copier
  const copyAllVisibleEmails = () => {
    const emailsList = filteredData
      .map(item => item.email)
      .filter(email => email && email !== "N/A" && email.includes("@"));
    
    if (emailsList.length === 0) return;
    
    const clipboardText = emailsList.join(", ");
    navigator.clipboard.writeText(clipboardText);
    alert(`Success: Copied ${emailsList.length} targeting email routes directly to clipboard!`);
  };

  // Toggle Bookmark Handler
  const handleToggleBookmark = (id) => {
    setBookmarks(prev => 
      prev.includes(id) ? prev.filter(bId => bId !== id) : [...prev, id]
    );
  };

  // Update outreach log notes in Firestore
  const handleUpdateNotes = async (contactId, notesText) => {
    if (!db) return;
    try {
      const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'contacts', contactId);
      await updateDoc(docRef, { notes: notesText });
    } catch (err) {
      console.error("Failed to commit notes to remote repository:", err);
    }
  };

  // Security Email Authorization Actions
  const handleAdminAuthAction = async (e) => {
    e.preventDefault();
    if (!auth) return;
    setLoginError("");
    
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, authEmail, authPassword);
      } else {
        await signInWithEmailAndPassword(auth, authEmail, authPassword);
      }
      setShowAdminLogin(false);
      setAuthEmail("");
      setAuthPassword("");
    } catch (err) {
      setLoginError(err.message.replace("Firebase:", ""));
    }
  };

  const handleAdminSignOut = async () => {
    if (!auth) return;
    try {
      await signOut(auth);
      await signInAnonymously(auth); // Keep read connections alive anonymously
    } catch (err) {
      console.error("Sign out process failed:", err);
    }
  };

  // Modal actions handlers
  const openAddModal = () => {
    setEditingContact(null);
    setFormData({
      category: activeTab,
      title: "", subtitle: "", name: "", role: "", email: "", phone: "", location: "", tags: "", notes: ""
    });
    setIsModalOpen(true);
  };

  const openEditModal = (contact) => {
    const cleanId = contact.id.startsWith("fallback-") ? null : contact.id;
    setEditingContact(cleanId ? contact : null);
    setFormData({ ...contact, id: cleanId });
    setIsModalOpen(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveContact = async (e) => {
    e.preventDefault();
    if (!db) return;
    setIsSaving(true);
    try {
      const contactsRef = collection(db, 'artifacts', appId, 'public', 'data', 'contacts');
      if (editingContact && editingContact.id) {
        const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'contacts', editingContact.id);
        const { id, ...updateData } = formData;
        await updateDoc(docRef, updateData);
      } else {
        await addDoc(contactsRef, formData);
      }
      setIsModalOpen(false);
    } catch (error) {
      console.error("Failed to commit directory modifications:", error);
    }
    setIsSaving(false);
  };

  const handleDeleteContact = async (contactId) => {
    if (!db) return;
    if (contactId.startsWith("fallback-")) {
      setContacts(prev => prev.filter(c => c.id !== contactId));
      return;
    }
    try {
      const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'contacts', contactId);
      await deleteDoc(docRef);
    } catch (error) {
      console.error("Failed to delete record:", error);
    }
  };

  // Bulk Ingestion Processors
  const handleBulkIngest = async (e) => {
    e.preventDefault();
    if (!db || !bulkCsvText.trim()) return;
    setBulkError("");
    setIsSaving(true);

    try {
      const rows = bulkCsvText.split("\n");
      const headers = rows[0].split(",").map(h => h.trim().toLowerCase());
      
      const parsedContacts = [];
      const contactsRef = collection(db, 'artifacts', appId, 'public', 'data', 'contacts');

      for (let i = 1; i < rows.length; i++) {
        if (!rows[i].trim()) continue;
        
        // Simple regex CSV parsing logic to handle inner quotation marks correctly
        const rowValues = rows[i].match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || rows[i].split(",");
        const entry = { category: activeTab };

        headers.forEach((header, index) => {
          let value = rowValues[index] ? rowValues[index].replace(/^"|"$/g, '').trim() : "";
          if (header === "title" || header === "company" || header === "business name") entry.title = value;
          else if (header === "name" || header === "contact") entry.name = value;
          else if (header === "subtitle" || header === "specialty" || header === "category") entry.subtitle = value;
          else if (header === "role" || header === "title/role") entry.role = value;
          else if (header === "email" || header === "email address") entry.email = value;
          else if (header === "phone" || header === "phone number") entry.phone = value;
          else if (header === "location" || header === "address" || header === "physical address") entry.location = value;
          else if (header === "tags") entry.tags = value;
          else if (header === "notes") entry.notes = value;
        });

        // Ensure essential schema integrity
        if (entry.title) {
          parsedContacts.push(entry);
        }
      }

      if (parsedContacts.length === 0) {
        throw new Error("Could not parse any valid entries. Verify your first row contains headers like 'Title, Name, Email, Phone, Location'.");
      }

      // Add parsed batches to Firestore
      for (const batchEntry of parsedContacts) {
        await addDoc(contactsRef, batchEntry);
      }

      setBulkCsvText("");
      setShowBulkUploadModal(false);
      alert(`Successfully added ${parsedContacts.length} contacts to your repository catalog!`);

    } catch (err) {
      setBulkError(err.message);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-200 font-sans selection:bg-amber-500/30 selection:text-amber-200 flex flex-col relative">
      
      {/* Launch entrance splash animation screen */}
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      {/* Navigation Header */}
      <header className="bg-neutral-950 border-b border-neutral-800 sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-amber-500 text-neutral-950 font-black rounded-lg flex items-center justify-center text-lg tracking-tighter">
                  ⚡
                </div>
                <h1 className="text-xl md:text-2xl font-black text-white tracking-tight">
                  THE INDUSTRY <span className="text-amber-500">CONNECT</span>
                </h1>
                {isAdmin && <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 text-[10px] font-black uppercase tracking-widest border border-amber-500/20">Admin Privileges</span>}
              </div>
              <p className="text-neutral-400 mt-1 text-xs md:text-sm font-medium">
                SaaS Outreach CRM & Vetted Hip-Hop industry network analytics.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              
              {/* Filter Global Search Bar */}
              <div className="relative w-full md:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={15} className="text-neutral-500" />
                </div>
                <input
                  type="text"
                  placeholder={`Search ${activeTab.toLowerCase()}...`}
                  className="block w-full pl-9 pr-3 py-2 border border-neutral-800 rounded-lg bg-neutral-900 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all text-xs"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-500 hover:text-white">
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 items-stretch">
                <button
                  onClick={() => setViewFavoritesOnly(!viewFavoritesOnly)}
                  className={`px-3 py-2 rounded-lg border transition-colors flex items-center justify-center gap-1.5 text-xs font-bold ${
                    viewFavoritesOnly 
                      ? "bg-amber-500/15 border-amber-500/40 text-amber-400" 
                      : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:bg-neutral-800 hover:text-white"
                  }`}
                  title="Toggle favorites"
                >
                  <Star size={14} fill={viewFavoritesOnly ? "currentColor" : "none"} />
                  <span>Favorites</span>
                </button>

                {isAdmin && (
                  <>
                    <button 
                      onClick={() => setShowBulkUploadModal(true)}
                      className="px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-700/60 hover:bg-neutral-700 text-neutral-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                      title="Bulk Ingestion Tools"
                    >
                      <Upload size={14} />
                      <span className="hidden sm:inline">Bulk CSV</span>
                    </button>

                    <button 
                      onClick={openAddModal}
                      className="flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold px-3 py-2 rounded-lg transition-colors text-xs shrink-0 shadow-lg shadow-amber-500/15"
                    >
                      <Plus size={14} />
                      <span>Add</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation Categories Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto hide-scrollbar border-b border-neutral-800 gap-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`whitespace-nowrap py-3.5 px-0.5 border-b-2 font-bold text-sm flex items-center gap-2 transition-colors tracking-tight ${
                  activeTab === cat
                    ? "border-amber-500 text-amber-500"
                    : "border-transparent text-neutral-400 hover:text-neutral-200"
                }`}
              >
                {categoryIcons[cat]}
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Attributes Sub-filters Shelf */}
      <section className="bg-neutral-900/40 border-b border-neutral-800/60 py-3 backdrop-blur-sm sticky top-[165px] md:top-[90px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-3 md:flex-row md:items-center justify-between text-xs">
          
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* Tags Specialities Filter */}
            {availableTags.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar shrink-0">
                <span className="text-neutral-500 font-bold uppercase tracking-wider flex items-center gap-1">
                  <SlidersHorizontal size={11} /> Specialty:
                </span>
                <div className="flex gap-1">
                  {availableTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`px-2 py-0.5 rounded text-[11px] font-medium border transition-all ${
                        selectedTag === tag 
                          ? "bg-amber-500/15 border-amber-500/40 text-amber-400 font-bold" 
                          : "bg-neutral-800/40 border-neutral-700/40 text-neutral-400 hover:bg-neutral-800"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {availableTags.length > 1 && availableLocations.length > 1 && (
              <span className="hidden sm:inline text-neutral-800">|</span>
            )}

            {/* Location Filter */}
            {availableLocations.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
                <span className="text-neutral-500 font-bold uppercase tracking-wider flex items-center gap-1">
                  <Filter size={11} /> Location:
                </span>
                <div className="flex gap-1">
                  {availableLocations.map(loc => (
                    <button
                      key={loc}
                      onClick={() => setSelectedLocation(loc)}
                      className={`px-2 py-0.5 rounded text-[11px] font-medium border transition-all ${
                        selectedLocation === loc 
                          ? "bg-amber-500/15 border-amber-500/40 text-amber-400 font-bold" 
                          : "bg-neutral-800/40 border-neutral-700/40 text-neutral-400 hover:bg-neutral-800"
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Batch Email Copier Outreach utility */}
          {filteredData.length > 0 && (
            <button
              onClick={copyAllVisibleEmails}
              className="text-[11px] py-1 px-2 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700/60 rounded text-neutral-300 font-bold flex items-center justify-center gap-1.5 transition-colors ml-auto md:ml-0 shadow"
            >
              <Send size={11} />
              <span>Copy All Filtered Emails</span>
            </button>
          )}

        </div>
      </section>

      {/* Grid Directory Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 flex-grow w-full pb-16">
        
        {/* Statistics and status dashboard heading */}
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-xs font-bold text-neutral-400 uppercase tracking-widest font-mono flex items-center gap-1.5">
            <Sparkles size={14} className="text-amber-500" />
            Active Index File / {activeTab} 
            <span className="text-neutral-600">({filteredData.length} records found)</span>
          </h2>
        </div>

        {/* Catalog layout render */}
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredData.map((item) => (
              <ContactCard 
                key={item.id} 
                data={item} 
                isAdmin={isAdmin}
                isBookmarked={bookmarks.includes(item.id)}
                onToggleBookmark={handleToggleBookmark}
                onEdit={openEditModal}
                onDelete={handleDeleteContact}
                onUpdateNotes={handleUpdateNotes}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-neutral-800/20 rounded-2xl border border-neutral-800 border-dashed flex flex-col items-center max-w-xl mx-auto mt-8">
            <Search className="mx-auto h-10 w-10 text-neutral-700 mb-3" />
            <h3 className="text-base font-bold text-neutral-300 tracking-tight">No records located</h3>
            <p className="text-neutral-500 text-xs mt-1 px-6">
              No matching index criteria aligns with your active attribute parameter configurations. Toggle favorites off or reset parameters.
            </p>
            <button 
              onClick={() => { setSearchQuery(""); setSelectedTag("All"); setSelectedLocation("All"); setViewFavoritesOnly(false); }}
              className="mt-5 text-xs font-bold text-amber-500 hover:text-amber-400 underline"
            >
              Reset Search Parameters
            </button>
          </div>
        )}
      </main>
      
      {/* Footer & Admin Controls */}
      <footer className="bg-neutral-950 border-t border-neutral-900 mt-auto shadow-inner">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-xs font-medium text-neutral-500 gap-3">
          <p>© 2026 The Industry Connect Ecosystem</p>
          <div className="flex items-center gap-3">
            {userEmail && <span className="text-neutral-400">Authenticated: <strong className="text-amber-500 font-bold">{userEmail}</strong></span>}
            {!isAdmin ? (
              <button onClick={() => { setShowAdminLogin(true); setLoginError(""); }} className="flex items-center gap-1.5 hover:text-neutral-300 transition-colors">
                <Lock size={12} /> Admin Workspace Login
              </button>
            ) : (
              <button onClick={handleAdminSignOut} className="flex items-center gap-1.5 text-amber-500 hover:text-amber-400 transition-colors font-bold">
                <LogOut size={12} /> Exit Workspace Session
              </button>
            )}
          </div>
        </div>
      </footer>

      {/* Admin Credentials Login/Registration Panel Modal */}
      {showAdminLogin && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 w-full max-w-md shadow-2xl relative">
            <button onClick={() => setShowAdminLogin(false)} className="absolute top-4 right-4 text-neutral-500 hover:text-white">
              <X size={18} />
            </button>
            <div className="flex items-center justify-center w-10 h-10 bg-amber-500/10 rounded-lg mb-3 mx-auto">
              <Lock className="text-amber-500" size={20} />
            </div>
            <h3 className="text-lg font-bold text-white text-center tracking-tight mb-1">
              {isRegistering ? "Register Admin Account" : "Administrative Authorization Portal"}
            </h3>
            <p className="text-neutral-400 text-xs text-center mb-5">
              Secure authentication allows multi-device writing and log notes editing.
            </p>
            
            <form onSubmit={handleAdminAuthAction} className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase tracking-wider font-bold text-neutral-500 mb-1">Email Address</label>
                <input
                  type="email"
                  value={authEmail}
                  onChange={(e) => setAuthEmail(e.target.value)}
                  placeholder="admin@theindustryconnect.com"
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-white placeholder-neutral-700 focus:outline-none focus:border-amber-500 text-xs font-medium"
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider font-bold text-neutral-500 mb-1">Password</label>
                <input
                  type="password"
                  value={authPassword}
                  onChange={(e) => setAuthPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-white placeholder-neutral-700 focus:outline-none focus:border-amber-500 text-xs font-medium"
                  required
                />
              </div>

              {loginError && <p className="text-red-400 text-[11px] text-center font-semibold bg-red-900/10 border border-red-800/20 p-2 rounded">{loginError}</p>}

              <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold py-2.5 rounded-lg transition-colors text-xs uppercase tracking-wider">
                {isRegistering ? "Create Admin Credentials" : "Authorize Session"}
              </button>

              <div className="text-center pt-2">
                <button 
                  type="button" 
                  onClick={() => { setIsRegistering(!isRegistering); setLoginError(""); }} 
                  className="text-neutral-400 hover:text-amber-500 transition-colors text-xs underline"
                >
                  {isRegistering ? "Existing Administrator? Log In" : "Need to register first admin? Sign Up"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CSV Bulk Ingestion Tool Panel Modal */}
      {showBulkUploadModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl w-full max-w-xl shadow-2xl relative">
            <div className="p-4 border-b border-neutral-800 flex justify-between items-center">
              <h2 className="text-md font-bold text-white flex items-center gap-2">
                <FileSpreadsheet className="text-amber-500" size={18} />
                <span>Bulk CSV Ingestion Matrix</span>
              </h2>
              <button onClick={() => setShowBulkUploadModal(false)} className="text-neutral-500 hover:text-white p-1">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleBulkIngest} className="p-5 space-y-4">
              <p className="text-xs text-neutral-400 leading-relaxed">
                Ingest lists directly into the active <strong className="text-amber-400">"{activeTab}"</strong> index directory collection. Ensure the first line represents column schema mapping:
                <code className="block mt-2 p-2 bg-neutral-950 text-amber-500/80 rounded border border-neutral-800/80 font-mono text-[10px]">
                  title, subtitle, name, role, email, phone, location, tags
                </code>
              </p>

              <textarea
                value={bulkCsvText}
                onChange={(e) => setBulkCsvText(e.target.value)}
                placeholder="Empire Distribution, Tina Davis, Deals, info@empire.com, N/A, Sylmar CA, Record Label"
                rows={8}
                className="w-full text-xs p-3 font-mono bg-neutral-950 border border-neutral-800 rounded-lg text-amber-300 placeholder-neutral-700 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 leading-normal"
                required
              />

              {bulkError && <p className="text-red-400 text-xs font-semibold bg-red-950/25 p-2 rounded border border-red-800/20">{bulkError}</p>}

              <div className="flex justify-end gap-3 pt-3 border-t border-neutral-800 text-xs">
                <button 
                  type="button" onClick={() => setShowBulkUploadModal(false)}
                  className="px-4 py-2 rounded text-neutral-400 hover:text-white"
                >
                  Cancel
                </button>
                <button 
                  type="submit" disabled={isSaving}
                  className="px-5 py-2 rounded bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold disabled:opacity-50 tracking-wider flex items-center gap-1.5 shadow"
                >
                  <RefreshCw size={12} className={isSaving ? "animate-spin" : ""} />
                  {isSaving ? "Parsing Row Blocks..." : "Ingest CSV Data"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Standard Individual Contact Modals */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl w-full max-w-xl shadow-2xl relative my-8">
            <div className="sticky top-0 bg-neutral-900 border-b border-neutral-800 p-4 rounded-t-xl flex justify-between items-center z-10">
              <h2 className="text-lg font-bold text-white flex items-center gap-2 tracking-tight">
                {editingContact ? <Edit3 size={18} className="text-amber-500"/> : <Plus size={18} className="text-amber-500"/>}
                {editingContact ? "Modify Directory Index" : "Append New Directory Index"}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-neutral-500 hover:text-white p-1">
                <X size={18} />
              </button>
            </div>
            
            <form onSubmit={handleSaveContact} className="p-5 space-y-4 text-xs font-medium">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-neutral-400 mb-1 font-bold uppercase tracking-wider">Catalog Target *</label>
                    <select 
                      name="category" 
                      value={formData.category || ""} 
                      onChange={handleFormChange}
                      required
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                    >
                      {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-neutral-400 mb-1 font-bold uppercase tracking-wider">Company / Entity Title *</label>
                    <input 
                      type="text" name="title" value={formData.title || ""} onChange={handleFormChange} required
                      placeholder="e.g. Culture Kings"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-400 mb-1 font-bold uppercase tracking-wider">Subtitle / Specialty</label>
                    <input 
                      type="text" name="subtitle" value={formData.subtitle || ""} onChange={handleFormChange}
                      placeholder="e.g. Rare Sneakers"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-400 mb-1 font-bold uppercase tracking-wider">Filter Tag Category</label>
                    <input 
                      type="text" name="tags" value={formData.tags || ""} onChange={handleFormChange}
                      placeholder="Streetwear, Sneakers, Collectibles, Record Label"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-neutral-400 mb-1 font-bold uppercase tracking-wider">Key Contact Person Name</label>
                    <input 
                      type="text" name="name" value={formData.name || ""} onChange={handleFormChange}
                      placeholder="e.g. Tina Davis"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-400 mb-1 font-bold uppercase tracking-wider">Operational Role Title</label>
                    <input 
                      type="text" name="role" value={formData.role || ""} onChange={handleFormChange}
                      placeholder="e.g. Lead Buyer / President"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-400 mb-1 font-bold uppercase tracking-wider">Email Route</label>
                    <input 
                      type="text" name="email" value={formData.email || ""} onChange={handleFormChange}
                      placeholder="e.g. info@domain.com"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-400 mb-1 font-bold uppercase tracking-wider">Phone Link</label>
                    <input 
                      type="text" name="phone" value={formData.phone || ""} onChange={handleFormChange}
                      placeholder="e.g. (310) 555-1212"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

              </div>

              <div>
                <label className="block text-neutral-400 mb-1 font-bold uppercase tracking-wider">Physical Location / Address</label>
                <input 
                  type="text" name="location" value={formData.location || ""} onChange={handleFormChange}
                  placeholder="e.g. Los Angeles, CA or 451 N Fairfax Ave"
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="pt-4 border-t border-neutral-800 flex justify-end gap-3 text-sm">
                <button 
                  type="button" onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg text-neutral-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit" disabled={isSaving}
                  className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold transition-colors disabled:opacity-50 shadow-md shadow-amber-500/10"
                >
                  {isSaving ? "Saving Metrics..." : "Commit Record"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Webkit scroll override overrides layout */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}
