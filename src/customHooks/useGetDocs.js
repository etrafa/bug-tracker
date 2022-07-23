//* READ FIRESTORE DATABASE

import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, useAuth } from "../firebase/firebaseConfig";

export const useGetDocs = (colName) => {
  const [dbData, setDbData] = useState(null);
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await getDocs(collection(db, colName));
      const data = res.docs.map((items) => {
        return { id: items.id, ...items.data() };
      });
      setLoading(false);
      setDbData(data);
    };
    fetchData();
  }, [currentUser]);
  return { dbData, loading };
};
