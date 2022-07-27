//* READ FIRESTORE DATABASE

import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, useAuth } from "../firebase/firebaseConfig";

export const useGetDocs = (colName) => {
  const [dbData, setDbData] = useState(null);
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const docRef = collection(db, colName);
      onSnapshot(docRef, (item) => {
        setDbData(
          item.docs.map((i) => {
            return { ...i.data(), id: i.id };
          })
        );
      });
      setLoading(false);
    };
    fetchData();
  }, [currentUser]);
  return { dbData, loading };
};
