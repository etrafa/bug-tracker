//* READ FIRESTORE DATABASE

import { getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useGetSingleDoc = (url) => {
  const [dbData, setDbData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getDoc(url);
      const data = res.data();
      setDbData(data);
    };
    fetchData();
  }, []);
  return { dbData };
};
