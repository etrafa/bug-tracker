// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  addDoc,
  arrayRemove,
  collection,
  deleteDoc,
  doc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";

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
const auth = getAuth();

//signup
export const signUp = async (email, password, name) => {
  await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(auth.currentUser, { displayName: name });
  const userID = auth?.currentUser?.uid;
  await setDoc(doc(db, "users", userID), {
    email: email,
    fullName: name,
    role: "user",
  });
};

//signin
export const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

//logout
export const logOut = async (navigate) => {
  await signOut(auth);
  await navigate("/log-in");
};

//onAuthChange
export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
};

//delete project
export const deleteProject = async (docName, id) => {
  const deleteProject = doc(db, docName, id);
  await deleteDoc(deleteProject);
};

//create doc
export const createDoc = async (docName, fullName, email, role) => {
  const addDocument = collection(db, docName);
  await addDoc(addDocument, {
    fullName,
    email,
    role,
  });
};

//update user's role

export const updateUserRole = async (
  docID,
  role,
  successMessage,
  errorMessage
) => {
  const docRef = doc(db, "users", docID);
  try {
    await updateDoc(docRef, {
      role: role,
    });
    successMessage(true);
  } catch {
    errorMessage(true);
  }
};

//remove assigned user from the db

export const removeUser = async (colName, docID, user) => {
  const washingtonRef = doc(db, colName, docID);
  await updateDoc(washingtonRef, {
    assignedUsers: arrayRemove({
      email: user.email,
      fullName: user.fullName,
      id: user.id,
      role: user.role,
    }),
  })
    .then((e) => console.log(e))
    .catch((err) => console.log(err));
};
