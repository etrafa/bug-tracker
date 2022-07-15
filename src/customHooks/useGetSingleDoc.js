//* READ FIRESTORE DATABASE

import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, useAuth } from "../firebase/firebaseConfig";

export const useGetSingleDoc = (docName, docURL) => {
  const [dbData, setDbData] = useState(null);
  const currentUser = useAuth();

  useEffect(() => {
    if (currentUser) {
      const fetchData = async () => {
        const docRef = doc(db, docName, docURL);
        const res = await getDoc(docRef);
        const data = res.data();
        setDbData(data);
      };
      fetchData();
    }
  }, [currentUser]);
  return { dbData };
};
