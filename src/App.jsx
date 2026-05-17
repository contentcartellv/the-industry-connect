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
    { title: "TIDAL", name: "TIDAL Artist Home", role: "A&R / Editorial Submission", email: "press@tidal.com", phone: "N/
