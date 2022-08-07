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
  user,
  modal,
  projectName,
  projectItem
) => {
  //this will add user to current project
  const docRef = doc(db, colName, docID);
  await updateDoc(docRef, {
    assignedUsers: arrayUnion(...user),
  })
    //this will add current project to user's database.
    .then(() => {
      user
        .forEach((item) => {
          const userDocRef = doc(
            db,
            "users",
            item?.id,
            "my-projects",
            projectName
          );
          setDoc(userDocRef, { ...projectItem });

          modal(false);
        })
        .catch((err) => console.log(err));
    });
};

//remove assigned user from the db
export const removeUser = async (colName, docID, user, projectName) => {
  //this will remove user from "projects" collection
  const docRef = doc(db, colName, docID);
  await updateDoc(docRef, {
    assignedUsers: arrayRemove({
      email: user.email,
      fullName: user.fullName,
      id: user.id,
      role: user.role,
    }),
  })
    .then(() => {
      //this will remove selected project from user's database.
      const userDocRef = doc(db, "users", user?.id, "my-projects", projectName);
      deleteDoc(userDocRef);
    })
    .then(async () => {
      //this will remove selected tickets from user's database.
      const colRef = query(collection(db, "users", user?.id, "tickets"));
      const q = query(colRef, where("projectName", "==", projectName));
      const querySnapShot = await getDocs(q);
      querySnapShot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });
    });
};

//add ticket to the project and selected user's database
export const createTicket = async (
  docID,
  ticket,
  modal,
  closeModal,
  userIDArray,
  currentUser
) => {
  const colRef = collection(db, "projects", docID, "tickets");
  await addDoc(colRef, {
    ...ticket,
  }).then(async (refID) => {
    const docRef = doc(db, "projects", docID, "tickets", refID.id);
    await updateDoc(docRef, { id: refID.id });
  });
  // .then(() => {
  //   const ticketOwnerRef = collection(
  //     db,
  //     "users",
  //     currentUser?.uid,
  //     "tickets"
  //   );
  //   addDoc(ticketOwnerRef, {
  //     ...ticket,
  //   });
  // })
  // .then(() => {
  //   userIDArray.forEach((user) => {
  //     const userRef = collection(db, "users", user, "tickets");
  //     addDoc(userRef, {
  //       ...ticket,
  //     });
  //   });
  //   modal(true);
  //   setTimeout(() => {
  //     closeModal(false);
  //   }, 2000);
  // });
};

//update ticket
/*


*/
export const updateTicket = async (
  ticketDescription,
  updatedTicket,
  userID
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
    //1.update ticket in the project section in the firebase firestore

    const res = await getDocs(q);
    res.docs.forEach(async (data) => {
      await updateDoc(data.ref, updatedTicket);
    });
    // // 2.update ticket in the userID + ticket section for each user in the firestore
    // const userRef = collection(db, "users");
    // const userQuery = query(
    //   userRef,
    //   where("ticketDescription", "==", ticketDescription)
    // );
    // const result = await getDocs(userQuery);
    // result.docs.forEach(async (data) => {
    //   console.log(ticketDescription);
    //   // await updateDoc(data.ref, updatedTicket);
    // });
  });
};

//add comment to the ticket
export const addTicketComment = async (docID, comment, commentOwner) => {
  // const colRef = collection(db, "projects", docID, "comments");
  // await addDoc(colRef, { ...comment });

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
