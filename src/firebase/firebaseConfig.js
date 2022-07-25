// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getFirestore,
  serverTimestamp,
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
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROEJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
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
    tickets: [],
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

//add assigned user to db
export const addUser = async (colName, docID, user, modal) => {
  const docRef = doc(db, colName, docID);
  await updateDoc(docRef, {
    assignedUsers: arrayUnion(...user),
  })
    .then(() => modal(false))
    .catch((err) => console.log(err));
};

//remove assigned user from the db
export const removeUser = async (colName, docID, user) => {
  const docRef = doc(db, colName, docID);
  await updateDoc(docRef, {
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

//add ticket to the project and selected user's database
export const createTicket = async (
  colName,
  docID,
  ticket,
  modal,
  closeModal,
  userIDArray
) => {
  //convert ticket array to objet and save assigned users' database
  const TICKET_AS_ARRAY = ticket.map((item) => ({
    submitTime: item.submitTime,
    ticketDescription: item.ticketDescription,
    ticketOwner: item.ticketOwner,
    ticketPriority: item.ticketPriority,
    ticketStatus: item.ticketStatus,
    ticketType: item.ticketType,
    projectName: item.projectName,
    assignedUsers: item.assignedUsers,
    comments: [],
  }));
  const TICKET_AS_OBJECT = Object.assign({}, ...TICKET_AS_ARRAY);
  const docRef = doc(db, colName, docID);
  await updateDoc(docRef, {
    tickets: arrayUnion(...ticket),
  }).then(() => {
    userIDArray.forEach((user) => {
      const userRef = collection(db, "users", user, "tickets");
      addDoc(userRef, {
        tickets: TICKET_AS_OBJECT,
      });
    });
    modal(true);
    setTimeout(() => {
      closeModal(false);
    }, 2000);
  });
};

//add comment to the specific ticket
export const addTicket = async (
  colName,
  currentUser,
  subCol,
  ticketID,
  comment
) => {
  const docRef = doc(db, colName, currentUser?.uid, subCol, ticketID);
  //timestamp for ticket
  const timeStamp = new Date();
  const day = String(timeStamp.getDate()).padStart(2, "0");
  const month = String(timeStamp.getMonth() + 1).padStart(2, "0");
  const year = timeStamp.getFullYear();

  const SERVER_TIME = [month, day, year].join(".");

  await updateDoc(docRef, {
    comments: arrayUnion({
      comment: comment,
      commentOwner: currentUser?.displayName,
      createdAt: SERVER_TIME,
    }),
  });
};
