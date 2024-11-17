// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2ebcb.firebaseapp.com",
  projectId: "mern-estate-2ebcb",
  storageBucket: "mern-estate-2ebcb.firebasestorage.app",
  messagingSenderId: "50025477240",
  appId: "1:50025477240:web:6bbbe342136ba74ac3298d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);