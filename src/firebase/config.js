// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgbBspDNa52NGm7DdF77HaAor2w1UQB_A",
  authDomain: "qr-code-based-feedback-system.firebaseapp.com",
  projectId: "qr-code-based-feedback-system",
  storageBucket: "qr-code-based-feedback-system.appspot.com",
  messagingSenderId: "845668546834",
  appId: "1:845668546834:web:bc9d4f78d1628a27f75bcb",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);
