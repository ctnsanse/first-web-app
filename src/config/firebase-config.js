import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDITSV0fGD6sloFDnJaOPShM35mE0M-e-s",
  authDomain: "fafofri-44e0c.firebaseapp.com",
  projectId: "fafofri-44e0c",
  storageBucket: "fafofri-44e0c.appspot.com",
  messagingSenderId: "792013002968",
  appId: "1:792013002968:web:fea7e129d0eea4225e9fad",
  measurementId: "G-RJ3BNZCYSN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);