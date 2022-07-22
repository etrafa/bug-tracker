//* READ FIRESTORE DATABASE

import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, useAuth } from "../firebase/firebaseConfig";

export const useGetSingleDoc = (docName, docURL) => {
  const [dbData, setDbData] = useState(null);
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  useEffect(() => {
    if (currentUser) {
      const fetchData = async () => {
        setLoading(true);
        const docRef = doc(db, docName, docURL);
        // const res = await getDoc(docRef);
        const res = onSnapshot(docRef, (item) => {
          setDbData(item.data());
        });
        setLoading(false);
      };
      fetchData();
    }
  }, [currentUser, docURL]);
  return { dbData, loading };
};
