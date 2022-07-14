//* READ FIRESTORE DATABASE

import { collection, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";

export const useGetDocs = (colName) => {
  const [dbData, setDbData] = useState(null);
  const [loading, setLoading] = useState(false);

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
  }, []);
  return { dbData, loading };
};
