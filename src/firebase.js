// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env["FIREBASE_API_KEY"],
  authDomain: "deeej-portfolio.firebaseapp.com",
  projectId: "deeej-portfolio",
  storageBucket: "deeej-portfolio.appspot.com",
  messagingSenderId: "262496850247",
  appId: "1:262496850247:web:89422a417cd3e9ab467c62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const storage = getStorage();