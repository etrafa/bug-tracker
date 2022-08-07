//* READ FIRESTORE DATABASE NESTED

import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, useAuth } from "../firebase/firebaseConfig";

export const useGetDocsNested = (colName, subCol) => {
  const [dbData, setDbData] = useState(null);
  const [loading, setLoading] = useState(false);
  let FIREBASE_DATA = [];
  const currentUser = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const colRef = collection(db, colName);
      const res = await getDocs(colRef);
      res.docs.map(async (item) => {
        const docRef = collection(db, `${colName}/${item.id}/${subCol}`);
        const result = await getDocs(docRef);

        result.docs.map((item) => {
          FIREBASE_DATA.push({ ...item.data(), id: item.id });
          setDbData([...FIREBASE_DATA]);
        });
      });

      setLoading(false);
    };
    fetchData();
  }, [currentUser, colName, subCol]);
  return { dbData, loading };
};
