// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANXSrj1ghPBx_7oMXS8meZ41FlnyP7pKw",
  authDomain: "selling-7688c.firebaseapp.com",
  projectId: "selling-7688c",
  storageBucket: "selling-7688c.firebasestorage.app",
  messagingSenderId: "759205860237",
  appId: "1:759205860237:web:0347b15dc25b5ecc5863c4",
  measurementId: "G-ZBMTTXWS0L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export{auth, analytics,firestore,storage}