// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5tHcqHatdCH84ME7ZfXS3whdnWf-gvCw",
  authDomain: "bug-tracker-f7666.firebaseapp.com",
  projectId: "bug-tracker-f7666",
  storageBucket: "bug-tracker-f7666.appspot.com",
  messagingSenderId: "653372423461",
  appId: "1:653372423461:web:5dea35a30ed4dc42ea2ecc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
