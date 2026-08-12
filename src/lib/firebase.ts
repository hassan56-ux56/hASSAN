import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  limit, 
  serverTimestamp, 
  doc, 
  updateDoc, 
  increment 
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase App safely
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore with specific database ID if available
export const db = firebaseConfig.firestoreDatabaseId 
  ? getFirestore(app, firebaseConfig.firestoreDatabaseId)
  : getFirestore(app);

export interface ContactMessageData {
  name: string;
  email: string;
  organization?: string;
  subject: string;
  message: string;
}

export interface GuestbookEntry {
  id: string;
  name: string;
  affiliation?: string;
  message: string;
  createdAt?: any;
  likes: number;
}

// Helper: Submit contact message to Firestore
export const submitContactMessage = async (data: ContactMessageData) => {
  try {
    const docRef = await addDoc(collection(db, 'contact_messages'), {
      ...data,
      organization: data.organization || 'Individual',
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting contact message to Firestore:', error);
    throw error;
  }
};

// Helper: Fetch Guestbook entries from Firestore
export const getGuestbookEntries = async (): Promise<GuestbookEntry[]> => {
  try {
    const q = query(collection(db, 'guestbook'), orderBy('createdAt', 'desc'), limit(30));
    const querySnapshot = await getDocs(q);
    const entries: GuestbookEntry[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      entries.push({
        id: doc.id,
        name: data.name || 'Anonymous Visitor',
        affiliation: data.affiliation || 'Public Health Enthusiast',
        message: data.message || '',
        createdAt: data.createdAt,
        likes: data.likes || 0,
      });
    });
    return entries;
  } catch (error) {
    console.error('Error fetching guestbook entries:', error);
    return [];
  }
};

// Helper: Add Guestbook entry
export const addGuestbookEntry = async (data: { name: string; affiliation?: string; message: string }) => {
  try {
    const docRef = await addDoc(collection(db, 'guestbook'), {
      name: data.name.trim(),
      affiliation: data.affiliation?.trim() || 'Public Health Advocate',
      message: data.message.trim(),
      likes: 0,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error adding guestbook entry:', error);
    throw error;
  }
};

// Helper: Like Guestbook entry
export const likeGuestbookEntry = async (entryId: string) => {
  try {
    const entryRef = doc(db, 'guestbook', entryId);
    await updateDoc(entryRef, {
      likes: increment(1)
    });
    return { success: true };
  } catch (error) {
    console.error('Error liking guestbook entry:', error);
    throw error;
  }
};
