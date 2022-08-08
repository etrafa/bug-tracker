// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  serverTimestamp,
  updateDoc,
  where,
  deleteField,
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
export const deleteProject = async (id, userList, projectName) => {
  // 1.delete ticket belonging to selected project
  await userList.forEach(async (user) => {
    const colRef = query(collection(db, "users", user?.id, "tickets"));
    const q = query(colRef, where("projectName", "==", projectName));
    const querySnapShot = await getDocs(q);
    querySnapShot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });

    //2.delete selected project from assigned users database

    await userList.forEach(async (user) => {
      const userDocRef = doc(db, "users", user?.id, "my-projects", projectName);
      try {
        await deleteDoc(userDocRef);
      } catch (err) {
        console.log(err);
      }

      //3.delete project

      const deleteProject = doc(db, "projects", id);
      await deleteDoc(deleteProject);
    });
  });
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
export const addUser = async (
  colName,
  docID,
  subCol,
  newUser,
  messageVisible,
  isModalOpen
) => {
  const colRef = collection(db, colName, docID, subCol);
  newUser.forEach(async (item) => {
    await addDoc(colRef, { ...item });
  });
  await messageVisible(true);
  setTimeout(() => {
    isModalOpen(false);
  }, 3000);
};

//remove assigned user from the db
export const removeUser = async (colName, docID, subCol, user) => {
  //* 1.remove user from selected project
  const docRef = doc(db, colName, docID, subCol, user?.id);
  await deleteDoc(docRef);

  //* 2.remove user's ticket from selected project
  const colRefQuery = collection(db, colName, docID, "tickets");
  const q = query(
    colRefQuery,
    where("userEmails", "array-contains", user?.email)
  );
  const res = await getDocs(q);

  res.docs.forEach(async (doc) => {
    const docRef = doc.ref;
    try {
      await updateDoc(docRef, {
        userEmails: arrayRemove(user?.email),
        assignedUsers: arrayRemove({
          email: user?.email,
          fullName: user?.fullName,
          id: user?.id,
          role: user?.role,
          tickets: [],
        }),
      });
    } catch (err) {
      console.log(err);
    }
  });
};

//add ticket to the project and selected user's database
export const createTicket = async (docID, ticket, modal, closeModal) => {
  const colRef = collection(db, "projects", docID, "tickets");
  await addDoc(colRef, {
    ...ticket,
  }).then(async (refID) => {
    const docRef = doc(db, "projects", docID, "tickets", refID.id);
    await updateDoc(docRef, { id: refID.id });
    modal(true);
    setTimeout(() => {
      closeModal(false);
    }, 2000);
  });
};

//update ticket
export const updateTicket = async (
  ticketDescription,
  updatedTicket,
  successMessage,
  isModalOpen
) => {
  //find current ticket in the project database
  const colRef = collection(db, "projects");
  const res = await getDocs(colRef);
  res.forEach(async (item) => {
    const colRef = collection(db, "projects", item.ref.id, "tickets");
    const q = query(
      colRef,
      where("ticketDescription", "==", ticketDescription)
    );
    const res = await getDocs(q);
    res.docs.forEach(async (data) => {
      await updateDoc(data.ref, updatedTicket);
    });
  });
  await successMessage(true);
  setTimeout(() => {
    isModalOpen(false);
  }, 3000);
};

//add comment to the ticket
export const addTicketComment = async (docID, comment, commentOwner) => {
  const colRef = collection(db, "projects");
  const res = await getDocs(colRef);
  res.docs.map(async (item) => {
    const colRef = collection(db, "projects", item.ref.id, "tickets");
    const q = query(colRef, where("id", "==", docID));

    const result = await getDocs(q);

    result.docs.map(async (item) => {
      const childPath = item.ref;
      const parentPath = childPath.parent;
      const grandParentPath = parentPath.parent.path;

      const collectionReference = collection(db, grandParentPath, "comments");

      console.log(grandParentPath);

      await addDoc(collectionReference, {
        comment: comment,
        commentOwner: commentOwner,
        createdAt: serverTimestamp(),
      });
    });
  });
};
