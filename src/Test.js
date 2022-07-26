import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig";

const Test = () => {
  const clickHandler = async () => {};

  return (
    <button onClick={clickHandler} className="w-44 h-44 mt-60 ml-96 bg-red-500">
      DELETE
    </button>
  );
};

export default Test;
