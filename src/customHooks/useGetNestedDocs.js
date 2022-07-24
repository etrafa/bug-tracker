//* READ FIRESTORE DATABASE

import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, useAuth } from "../firebase/firebaseConfig";

export const useGetNestedDocs = (colName, user, subCol) => {
  const [dbData, setDbData] = useState(null);
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await getDocs(collection(db, colName, user?.uid, subCol));
      const data = res.docs.map((items) => {
        return { ...items.data() };
      });
      setLoading(false);
      setDbData(data);
    };
    fetchData();
  }, [currentUser]);
  return { dbData, loading };
};
