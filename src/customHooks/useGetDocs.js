//* READ FIRESTORE DATABASE

import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useGetDocs = (url) => {
  const [dbData, setDbData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await getDocs(url);
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
