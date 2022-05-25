//firebase
import { db } from "../../../firebase/firebaseConfig";
import { collection } from "firebase/firestore";

//useGetDocs Hook
import { useGetDocs } from "../../../customHooks/useGetDocs";

const MyProjects = () => {
  const projectCollectionRef = collection(db, "projects");
  const { dbData } = useGetDocs(projectCollectionRef);

  console.log(dbData);

  return (
    <div>
      <h2>Hey</h2>
      <h3>hey</h3>
      <h2>Hey</h2>
      <h3>hey</h3>
      <h2>Hey</h2>
      <h3>hey</h3>
    </div>
  );
};

export default MyProjects;
