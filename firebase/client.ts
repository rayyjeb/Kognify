// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBDD9IA1kFxEE1ZDfXl4sPjkDnY6-Nc8Og",
  authDomain: "kognify-4cc8f.firebaseapp.com",
  projectId: "kognify-4cc8f",
  storageBucket: "kognify-4cc8f.firebasestorage.app",
  messagingSenderId: "1074319355158",
  appId: "1:1074319355158:web:7bc84f1dfd264bd5243437",
  measurementId: "G-4SVVBX5GEM"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
