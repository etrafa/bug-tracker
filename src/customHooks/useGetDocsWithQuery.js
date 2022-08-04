//* READ FIRESTORE DATABASE WITH QUERY

import {
  collection,
  collectionGroup,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  QuerySnapshot,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, useAuth } from "../firebase/firebaseConfig";

export const useGetDocsWithQuery = (colName, qu, endPoint) => {
  const [dbData, setDbData] = useState(null);
  const [loading, setLoading] = useState(false);
  let GRAND_PARENT_PATH = [];
  let ALL_DATA_FIRESTORE = [];
  const currentUser = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const docRef = collectionGroup(db, colName);
      const q = query(docRef, where(qu, "==", endPoint));
      const querySnapShot = await getDocs(q);
      //GET THE ID OF PARENT ELEMENTS
      querySnapShot.forEach((doc) => {
        const documentRef = doc.ref;
        const parentCollectionRef = documentRef.parent;
        const grandParentDocumentRef = parentCollectionRef.parent;
        if (grandParentDocumentRef) {
          GRAND_PARENT_PATH.push(grandParentDocumentRef.id);
        }
      });

      //   const q2 = collection(GRAND_PARENT_PATH);
      //   onSnapshot(q2, (item) => {
      //     setDbData(
      //       item.docs.map((i) => {
      //         return { ...i.data(), id: i.id };
      //       })
      //     );
      //   });,

      GRAND_PARENT_PATH.forEach(async (id) => {
        const documentRef = doc(db, "projects", id);
        onSnapshot(documentRef, (item) =>
          setDbData((prev) => [...prev, { ...item.data(), id: item.id }])
        );
      });

      setDbData(ALL_DATA_FIRESTORE);
      setLoading(false);
    };
    fetchData();
  }, [currentUser, colName, qu, endPoint]);
  return { dbData, loading };
};
