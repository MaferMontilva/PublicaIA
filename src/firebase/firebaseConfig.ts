import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDryMHWw5dvoFwG30FH90g9c8PdFwi131g",
  authDomain: "publicaia.firebaseapp.com",
  projectId: "publicaia",
  storageBucket: "publicaia.firebasestorage.app",
  messagingSenderId: "1054365333529",
  appId: "1:1054365333529:web:9796e100f688a9f2239288",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);