//* READ FIRESTORE DATABASE WITH QUERY

import {
  collection,
  collectionGroup,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, useAuth } from "../firebase/firebaseConfig";

export const useGetDocsArrayQuery = (colName, qu, endPoint) => {
  const [dbData, setDbData] = useState(null);
  const [loading, setLoading] = useState(false);
  let ALL_DATA_FIRESTORE = [];
  let PARENT_PATH = [];
  const currentUser = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const docRef = collectionGroup(db, colName);
      const q = query(docRef, where(qu, "array-contains", endPoint));
      const querySnapShot = await getDocs(q);
      //GET THE ID OF PARENT ELEMENTS
      querySnapShot.forEach((doc) => {
        const documentRef = doc.ref;
        const parentCollectionRef = documentRef;
        PARENT_PATH.push(parentCollectionRef.path);
      });

      PARENT_PATH.forEach((path) => {
        const docRef = doc(db, path);
        onSnapshot(docRef, (item) => {
          setDbData((prev) => [...prev, { ...item.data(), id: item.id }]);
        });
      });

      setDbData(ALL_DATA_FIRESTORE);
      setLoading(false);
    };
    fetchData();
  }, [currentUser, colName, qu, endPoint]);
  return { dbData, loading };
};
