import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, MapPin, Phone, Mail, User, Building2, Headphones, Radio, ShoppingBag, Music, Copy, CheckCircle2, Edit3, Trash2, Plus, Lock, X, AlertCircle, Database } from 'lucide-react';
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

// ============================================================================
// 🔑 FIREBASE CONFIGURATION
// Replace the values below with your actual credentials from your Firebase Console.
// ============================================================================
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase safely (prevents duplicate initialization errors)
let app, auth, db;
const appId = "the-industry-connect-prod"; // Static ID for your cloud database path

try {
  // If we are running in a sandbox environment that provides dynamic config, use it.
  // Otherwise, use the manually populated config above.
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
    { title: "Top Dawg Ent. (TDE)", name: "Anthony \"Moosa\" Tiffith Jr.", role: "President", email: "info@tde.com", phone: "(310) 955-1445", location: "1041 E. Cass Pl, Carson, CA 90746" },
    { title: "Empire Distribution", name: "Tina Davis", role: "President", email: "deals@empiredistribution.com", phone: "(747) 500-1766", location: "12249 Foothill Blvd, Sylmar, CA 91342" },
    { title: "Aftermath Ent.", name: "Bruce Iglauer", role: "A&R / Executive", email: "info@aftermath-ent.com", phone: "(310) 865-7642", location: "2220 Colorado Blvd, Santa Monica, CA 90404" },
    { title: "Death Row Records", name: "Snoop Dogg", role: "Owner / CEO", email: "licensing@deathrowrecords.com", phone: "(310) 550-1000", location: "10000 Santa Monica Blvd, Los Angeles, CA 90067" },
    { title: "Stones Throw Records", name: "Oscar P.", role: "A&R (Demos)", email: "demos@stonesthrow.com", phone: "(323) 539-2520", location: "2658 Griffith Park Blvd #504, Los Angeles, CA 90039" },
    { title: "Interscope Records", name: "Nicole Wyskoarko", role: "EVP / Urban A&R", email: "info@interscope.com", phone: "(310) 865-1000", location: "2220 Colorado Ave, Santa Monica, CA 90404" },
    { title: "Sick Wid It Records", name: "E-40", role: "CEO / Founder", email: "contact@sickwiditrecords.com", phone: "N/A", location: "Vallejo, CA" },
    { title: "Slovenly Recordings", name: "Pete Menchetti", role: "Founder / Owner", email: "info@slovenly.com", phone: "(775) 358-7865", location: "1055 Industrial Way Ste 1, Sparks, NV, 89431" },
    { title: "Imirage Sound Lab", name: "Tom Gordon", role: "Chief Engineer & Manager", email: "tom@inspired-amateur.com", phone: "(775) 358-7484", location: "1558 Linda Way, Sparks, NV, 89431" },
    { title: "Granny's Recording Studio", name: "Studio Operations", role: "Booking Coordinator", email: "General Form Contact Only", phone: "(775) 786-2622", location: "1515 Plumas St, Reno, NV, 89509" }
  ],
  "Streaming": [
    { title: "Apple Music", name: "Apple Music for Artists Portal", role: "A&R / Editorial Submission", email: "press@apple.com", phone: "N/A", location: "1 Apple Park Way, Cupertino, CA 95014" },
    { title: "Audiomack", name: "Audiomack Creators / Artist Pro", role: "A&R / Editorial Submission", email: "support@audiomack.com", phone: "N/A", location: "648 Broadway, New York, NY 10012" },
    { title: "SoundCloud", name: "SoundCloud for Artists / \"First Fans\"", role: "A&R / Editorial Submission", email: "press@soundcloud.com", phone: "N/A", location: "Rheinsberger Str. 76/77, 10115 Berlin, Germany" },
    { title: "Spotify", name: "Spotify for Artists Pitching Tool", role: "A&R / Editorial Submission", email: "press@spotify.com", phone: "N/A", location: "150 Greenwich St, 62nd Floor, New York, NY 10007" },
    { title: "TIDAL", name: "TIDAL Artist Home", role: "A&R / Editorial Submission", email: "press@tidal.com", phone: "N/A", location: "540 W 26th St, 8th Floor, New York, NY 10001" },
    { title: "YouTube Music", name: "YouTube for Artists / Studio", role: "A&R / Editorial Submission", email: "press@google.com", phone: "N/A", location: "901 Cherry Ave, San Bruno, CA 94066" }
  ],
  "Radio Directors": [
    { title: "Power 106 (KPWR)", subtitle: "Los Angeles", name: "DJ E-Man (Emanuel Coquia)", role: "Program Director", email: "eman@power106.com", phone: "(818) 953-4200", location: "2600 W Olive Ave, 8th Fl, Burbank, CA 91505" },
    { title: "Real 92.3 (KRRL)", subtitle: "Los Angeles", name: "Doc Wynter", role: "iHeartMedia Urban Lead", email: "docwynter@iheartmedia.com", phone: "(818) 559-2252", location: "3400 W Olive Ave #550, Burbank, CA 91505" },
    { title: "93.5 KDAY", subtitle: "Los Angeles", name: "E-Man", role: "Programming Lead", email: "programming@935kday.com", phone: "(818) 953-4200", location: "2600 W Olive Ave, 8th Fl, Burbank, CA 91505" },
    { title: "106.1 KMEL", subtitle: "San Francisco", name: "Donashea Guy", role: "Program Director", email: "donasheaguy@iheartmedia.com", phone: "(415) 358-1061", location: "340 Townsend St, San Francisco, CA 94107" },
    { title: "KBLX 102.9", subtitle: "San Francisco", name: "Elroy Smith", role: "Program Director", email: "elroy.smith@urban1.com", phone: "(415) 765-8800", location: "201 3rd St, San Francisco, CA 94103" },
    { title: "KUBE 93.3", subtitle: "Seattle", name: "Mark Adams", role: "VP of Programming", email: "markadams@iheartmedia.com", phone: "N/A", location: "Seattle, WA" },
    { title: "KXJM (JAM'N 107.5)", subtitle: "Portland", name: "Tim Rainey", role: "Program Director", email: "timrainey@iheartmedia.com", phone: "(503) 225-1190", location: "13333 SW 68th Pkwy #310, Tigard, OR 97223" },
    { title: "XHTZ (Z90.3)", subtitle: "San Diego", name: "R Dub! (Randy Williams)", role: "Program Director", email: "rdub@z90.com", phone: "(619) 426-9090", location: "6112 Regents Rd, San Diego, CA 92122" },
    { title: "K-V101.1 (KHYL)", subtitle: "Sacramento", name: "Complex", role: "Program Director", email: "complex@v1011fm.com", phone: "(916) 334-7777", location: "1440 Ethan Way #200, Sacramento, CA 95825" }
  ],
  "Retail & Brand": [
    { title: "Culture Kings", subtitle: "Clothing/Hats/Shoes", name: "Retail Director", role: "Lead Contact", email: "info@culturekings.com", phone: "(702) 473-5100", location: "3500 Las Vegas Blvd S" },
    { title: "Diamond Supply Co.", subtitle: "Streetwear/Skate", name: "Nick Tershay", role: "Founder", email: "sales@diamondsupplyco.com", phone: "(213) 621-4200", location: "451 N Fairfax Ave, Los Angeles, CA 90036" },
    { title: "The Hundreds", subtitle: "Apparel/Lifestyle", name: "Bobby Hundreds", role: "Co-Founder", email: "info@thehundreds.com", phone: "(323) 230-7780", location: "501 N Fairfax Ave, Los Angeles, CA 90036" },
    { title: "Flight Club LA", subtitle: "Rare Sneakers", name: "Consignment Mgr", role: "Lead Contact", email: "la@flightclub.com", phone: "(323) 782-8616", location: "535 N Fairfax Ave, Los Angeles, CA 90036" },
    { title: "Mr. Bling Grillz", subtitle: "Custom Grills", name: "Lead Jeweler", role: "Lead Contact", email: "mrblingm2h@gmail.com", phone: "(213) 265-7570", location: "629 S Hill St #604, Los Angeles, CA" },
    { title: "True", subtitle: "Streetwear", name: "Manager", role: "Lead Contact", email: "info@true-sf.com", phone: "(415) 626-2882", location: "1429 Haight St, San Francisco, CA 94117" },
    { title: "Proper LBC", subtitle: "Sneakers", name: "Lead Buyer", role: "Lead Contact", email: "contact@properlbc.com", phone: "(562) 628-9100", location: "425 E 1st St, Long Beach, CA 90802" },
    { title: "Bait Inc.", subtitle: "Collectibles", name: "Marketing Manager", role: "Lead Contact", email: "info@baitme.com", phone: "(909) 396-1800", location: "7708 Melrose Ave, Los Angeles, CA 90046" }
  ],
  "DJs": [
    { title: "DJ Mustard", subtitle: "YG / Chart-topping Producer", name: "Los Angeles", role: "Primary Market", email: "info@djmustard.com", phone: "(310) 275-6135", location: "N/A" },
    { title: "DJ E-Man", subtitle: "Power 106 PD / Club Resident", name: "Burbank / LA", role: "Primary Market", email: "eman@power106.com", phone: "(818) 953-4200", location: "N/A" },
    { title: "DJ Quik", subtitle: "G-Funk Legend / Touring DJ", name: "Compton / LA", role: "Primary Market", email: "booking@djquik.com", phone: "(310) 865-1000", location: "N/A" },
    { title: "DJ Muggs", subtitle: "Cypress Hill / Soul Assassins", name: "Los Angeles", role: "Primary Market", email: "info@soulassassins.com", phone: "(323) 654-1234", location: "N/A" },
    { title: "DJ Amen", subtitle: "Young California / Real 92.3", name: "SF / Bay Area", role: "Primary Market", email: "djamen@real923la.com", phone: "(415) 358-1061", location: "N/A" },
    { title: "DJ Toure", subtitle: "Hieroglyphics / Souls of Mischief", name: "Oakland", role: "Primary Market", email: "info@hieroglyphics.com", phone: "(510) 465-4376", location: "N/A" },
    { title: "DJ Skee", subtitle: "DASH Radio / Event Host", name: "Los Angeles", role: "Primary Market", email: "booking@djskee.com", phone: "(323) 539-2520", location: "N/A" },
    { title: "REMiXnet", subtitle: "Open Format / Luxury Events", name: "San Diego", role: "Primary Market", email: "info@remixnet.live", phone: "(619) 456-7890", location: "N/A" }
  ]
};

// Map fallback list into clean flat objects with stable, unique IDs
const fallbackContactsArray = [];
Object.entries(initialDirectoryData).forEach(([category, items]) => {
  items.forEach((item, index) => {
    fallbackContactsArray.push({
      id: `fallback-${category}-${index}`,
      category,
      ...item
    });
  });
});

const CATEGORIES = ["Labels & A&R", "Streaming", "Radio Directors", "Retail & Brand", "DJs"];

const categoryIcons = {
  "Labels & A&R": <Building2 size={18} />,
  "Streaming": <Headphones size={18} />,
  "Radio Directors": <Radio size={18} />,
  "Retail & Brand": <ShoppingBag size={18} />,
  "DJs": <Music size={18} />
};

// --- CONTACT CARD COMPONENT ---
const ContactCard = ({ data, isAdmin, onEdit, onDelete }) => {
  const [copied, setCopied] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-neutral-800/60 border border-neutral-700/50 rounded-xl p-5 hover:bg-neutral-800 transition-colors shadow-lg flex flex-col h-full relative group">
      
      {/* Admin Operations Panel */}
      {isAdmin && (
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900/80 p-1.5 rounded-lg backdrop-blur-sm z-10 border border-neutral-700">
          <button onClick={() => onEdit(data)} className="p-1.5 text-blue-400 hover:bg-blue-400/20 rounded-md transition-colors" title="Edit Contact">
            <Edit3 size={16} />
          </button>
          <button onClick={() => setShowDeleteConfirm(true)} className="p-1.5 text-red-400 hover:bg-red-400/20 rounded-md transition-colors" title="Delete Contact">
            <Trash2 size={16} />
          </button>
        </div>
      )}

      {/* Delete Confirmation Overlap */}
      {showDeleteConfirm && (
        <div className="absolute inset-0 bg-neutral-900/95 rounded-xl z-20 flex flex-col items-center justify-center p-4 text-center">
          <AlertCircle size={32} className="text-red-500 mb-2" />
          <h4 className="text-white font-medium mb-1">Delete this contact?</h4>
          <p className="text-neutral-400 text-xs mb-4">This action cannot be undone.</p>
          <div className="flex gap-3">
            <button onClick={() => setShowDeleteConfirm(false)} className="px-3 py-1.5 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg text-sm transition-colors">
              Cancel
            </button>
            <button onClick={() => { onDelete(data.id); setShowDeleteConfirm(false); }} className="px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm transition-colors">
              Delete
            </button>
          </div>
        </div>
      )}

      <div className="mb-4 pr-12">
        <h3 className="text-xl font-bold text-white mb-1">{data.title}</h3>
        {data.subtitle && <p className="text-sm font-medium text-amber-400">{data.subtitle}</p>}
      </div>

      <div className="flex-grow space-y-3">
        <div className="flex items-start gap-3">
          <User className="text-neutral-400 mt-0.5 shrink-0" size={16} />
          <div>
            <p className="text-neutral-200 font-medium">{data.name || 'N/A'}</p>
            <p className="text-neutral-400 text-xs">{data.role}</p>
          </div>
        </div>

        {data.email && data.email !== "N/A" && (
          <div className="flex items-start gap-3 group/email">
            <Mail className="text-neutral-400 mt-0.5 shrink-0" size={16} />
            <div className="flex items-center gap-2 flex-wrap">
              <a href={`mailto:${data.email}`} className="text-amber-400 hover:text-amber-300 hover:underline text-sm break-all">
                {data.email}
              </a>
              <button 
                onClick={() => handleCopy(data.email)}
                className="text-neutral-500 hover:text-white transition-colors p-1 rounded-md hover:bg-neutral-700"
                title="Copy Email"
              >
                {copied ? <CheckCircle2 size={14} className="text-green-400" /> : <Copy size={14} />}
              </button>
            </div>
          </div>
        )}

        {data.phone && data.phone !== "N/A" && (
          <div className="flex items-start gap-3">
            <Phone className="text-neutral-400 mt-0.5 shrink-0" size={16} />
            <a href={`tel:${data.phone.replace(/[^0-9]/g, '')}`} className="text-neutral-300 hover:text-white text-sm">
              {data.phone}
            </a>
          </div>
        )}

        {data.location && data.location !== "N/A" && (
          <div className="flex items-start gap-3">
            <MapPin className="text-neutral-400 mt-0.5 shrink-0" size={16} />
            <p className="text-neutral-300 text-sm">{data.location}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// --- APP ENTRY POINT ---
export default function App() {
  const [activeTab, setActiveTab] = useState("Labels & A&R");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Data States
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  
  // Ref locks to avoid continuous write processes
  const isSeedingRef = useRef(false);
  
  // Admin State Panel
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminPin, setAdminPin] = useState("");
  const [loginError, setLoginError] = useState("");
  
  // Modal Administration Forms
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingContact, setEditingContact] = useState(null);
  const [formData, setFormData] = useState({});
  const [isSaving, setIsSaving] = useState(false);

  // Authenticate to database anonymously
  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }
    const initAuth = async () => {
      try {
        await signInAnonymously(auth);
      } catch (error) {
        console.error("Anonymous Authentication failed:", error);
      }
    };
    initAuth();
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Fetch data live from Cloud Firestore
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
      console.error("Firestore database connection failed:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  // AUTOMATIC SEED TRIGGER
  // Populates database live if it loads with zero contacts, preventing empty dashboards
  useEffect(() => {
    if (!loading && contacts.length === 0 && db && user && !isSeedingRef.current) {
      isSeedingRef.current = true;
      const autoSeed = async () => {
        try {
          const contactsRef = collection(db, 'artifacts', appId, 'public', 'data', 'contacts');
          for (const category of CATEGORIES) {
            const items = initialDirectoryData[category] || [];
            for (const item of items) {
              await addDoc(contactsRef, { ...item, category });
            }
          }
        } catch (error) {
          console.error("Cloud seeding processes failed:", error);
        } finally {
          isSeedingRef.current = false;
        }
      };
      autoSeed();
    }
  }, [loading, contacts, user]);

  // Merge Firestore streams with direct memory objects if database is loading or empty
  const activeContacts = useMemo(() => {
    return contacts.length > 0 ? contacts : fallbackContactsArray;
  }, [contacts]);

  // Search filter implementation
  const filteredData = useMemo(() => {
    const tabData = activeContacts.filter(c => c.category === activeTab);
    
    if (!searchQuery) return tabData;

    const lowerQuery = searchQuery.toLowerCase();
    return tabData.filter(item => {
      return Object.entries(item).some(([key, val]) => {
        if (key === 'id') return false;
        return String(val).toLowerCase().includes(lowerQuery);
      });
    });
  }, [activeContacts, activeTab, searchQuery]);

  // Admin access validator
  const handleAdminSubmit = (e) => {
    e.preventDefault();
    if (adminPin === "1234") {
      setIsAdmin(true);
      setShowAdminLogin(false);
      setAdminPin("");
      setLoginError("");
    } else {
      setLoginError("Incorrect PIN.");
    }
  };

  // Administration Form Dialog Actions
  const openAddModal = () => {
    setEditingContact(null);
    setFormData({
      category: activeTab,
      title: "", subtitle: "", name: "", role: "", email: "", phone: "", location: ""
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
      console.error("Failed to commit changes to database:", error);
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
      console.error("Failed to delete from remote database:", error);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-200 font-sans selection:bg-amber-500/30 selection:text-amber-200 flex flex-col relative">
      
      {/* Navigation Header */}
      <header className="bg-neutral-950 border-b border-neutral-800 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
                  <span className="text-amber-500">I</span>
                  The Industry Connect
                </h1>
                {isAdmin && <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-wider border border-amber-500/30">Admin</span>}
              </div>
              <p className="text-neutral-400 mt-1 text-sm md:text-base">
                Curated A&R, Radio, and Retail contacts for Hip-Hop professionals.
              </p>
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto">
              {/* Filter Search Input */}
              <div className="relative w-full md:w-80">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-neutral-500" />
                </div>
                <input
                  type="text"
                  placeholder="Search names, companies, cities..."
                  className="block w-full pl-10 pr-3 py-2 border border-neutral-700 rounded-lg leading-5 bg-neutral-800 text-neutral-300 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all sm:text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              {/* Creator Button */}
              {isAdmin && (
                <button 
                  onClick={openAddModal}
                  className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold px-4 py-2 rounded-lg transition-colors shrink-0"
                >
                  <Plus size={18} />
                  <span className="hidden sm:inline">Add Contact</span>
                </button>
              )}
            </div>
          </div>
        </div>
        
        {/* Main Categories Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto hide-scrollbar border-b border-neutral-800 gap-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveTab(cat);
                  setSearchQuery("");
                }}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors ${
                  activeTab === cat
                    ? "border-amber-500 text-amber-500"
                    : "border-transparent text-neutral-400 hover:text-neutral-200 hover:border-neutral-600"
                }`}
              >
                {categoryIcons[cat]}
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Grid View */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex-grow w-full pb-16">
        
        {/* Statistics Head */}
        <div className="mb-6 flex justify-between items-end">
          <h2 className="text-xl font-semibold text-white">
            {activeTab} <span className="text-neutral-500 text-base font-normal">({filteredData.length})</span>
          </h2>
        </div>

        {/* Directory Layout grid */}
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredData.map((item) => (
              <ContactCard 
                key={item.id} 
                data={item} 
                isAdmin={isAdmin}
                onEdit={openEditModal}
                onDelete={handleDeleteContact}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-neutral-800/30 rounded-xl border border-neutral-800 border-dashed flex flex-col items-center">
            <Search className="mx-auto h-12 w-12 text-neutral-600 mb-4" />
            <h3 className="text-lg font-medium text-neutral-300">No results found</h3>
            <p className="text-neutral-500 mt-1">Try adjusting your search terms for "{searchQuery}".</p>
          </div>
        )}
      </main>
      
      {/* Application Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-900 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-sm text-neutral-500">
          <p>© 2026 The Industry Connect</p>
          {!isAdmin ? (
            <button onClick={() => setShowAdminLogin(true)} className="flex items-center gap-1.5 hover:text-neutral-300 transition-colors">
              <Lock size={14} /> Admin Access
            </button>
          ) : (
            <button onClick={() => setIsAdmin(false)} className="flex items-center gap-1.5 text-amber-500 hover:text-amber-400 transition-colors">
              Exit Admin Mode
            </button>
          )}
        </div>
      </footer>

      {/* Admin Authorization Shield */}
      {showAdminLogin && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 w-full max-w-sm shadow-2xl relative">
            <button onClick={() => setShowAdminLogin(false)} className="absolute top-4 right-4 text-neutral-500 hover:text-white">
              <X size={20} />
            </button>
            <div className="flex items-center justify-center w-12 h-12 bg-amber-500/10 rounded-full mb-4 mx-auto">
              <Lock className="text-amber-500" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-1">Admin Access</h3>
            <p className="text-neutral-400 text-sm text-center mb-6">Enter PIN to manage directory data.</p>
            
            <form onSubmit={handleAdminSubmit}>
              <div className="mb-4">
                <input
                  type="password"
                  value={adminPin}
                  onChange={(e) => setAdminPin(e.target.value)}
                  placeholder="Enter PIN (Use 1234)"
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-center tracking-widest text-lg"
                  autoFocus
                />
                {loginError && <p className="text-red-400 text-xs mt-2 text-center">{loginError}</p>}
              </div>
              <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold py-3 rounded-lg transition-colors">
                Unlock
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Add / Modify Contact Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl w-full max-w-2xl shadow-2xl relative my-8">
            <div className="sticky top-0 bg-neutral-900 border-b border-neutral-800 p-5 rounded-t-xl flex justify-between items-center z-10">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                {editingContact ? <Edit3 size={20} className="text-amber-500"/> : <Plus size={20} className="text-amber-500"/>}
                {editingContact ? "Edit Contact" : "Add New Contact"}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-neutral-500 hover:text-white p-1">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSaveContact} className="p-5 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* General Data fields */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-1">Category *</label>
                    <select 
                      name="category" 
                      value={formData.category || ""} 
                      onChange={handleFormChange}
                      required
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                    >
                      {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-1">Company / Main Title *</label>
                    <input 
                      type="text" name="title" value={formData.title || ""} onChange={handleFormChange} required
                      placeholder="e.g. Empire Distribution"
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-1">Subtitle / Specialty</label>
                    <input 
                      type="text" name="subtitle" value={formData.subtitle || ""} onChange={handleFormChange}
                      placeholder="e.g. Los Angeles or Streetwear"
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-1">Contact Name</label>
                    <input 
                      type="text" name="name" value={formData.name || ""} onChange={handleFormChange}
                      placeholder="e.g. Tina Davis"
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                {/* Network & Physical location fields */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-1">Role / Title</label>
                    <input 
                      type="text" name="role" value={formData.role || ""} onChange={handleFormChange}
                      placeholder="e.g. President"
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-1">Email</label>
                    <input 
                      type="email" name="email" value={formData.email || ""} onChange={handleFormChange}
                      placeholder="e.g. contact@domain.com"
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-1">Phone</label>
                    <input 
                      type="text" name="phone" value={formData.phone || ""} onChange={handleFormChange}
                      placeholder="e.g. (555) 123-4567"
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-1">Location</label>
                    <input 
                      type="text" name="location" value={formData.location || ""} onChange={handleFormChange}
                      placeholder="e.g. Los Angeles, CA"
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>
              </div>

              {/* Form trigger layout controls */}
              <div className="pt-6 mt-4 border-t border-neutral-800 flex justify-end gap-3">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800 font-medium transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={isSaving}
                  className="px-6 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold transition-colors disabled:opacity-50"
                >
                  {isSaving ? "Saving..." : "Save Contact"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Styled browser element overrides */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}
