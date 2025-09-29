import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDNUxaIuQiyLyuGc1tQ8LpkOCrfBsCXmfE",
  authDomain: "shopping-cart-b1710.firebaseapp.com",
  projectId: "shopping-cart-b1710",
  storageBucket: "shopping-cart-b1710.firebasestorage.app",
  messagingSenderId: "218137450891",
  appId: "1:218137450891:web:9c25281ab1c3e4d125778e",
  measurementId: "G-73JZYPZWNM"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);

