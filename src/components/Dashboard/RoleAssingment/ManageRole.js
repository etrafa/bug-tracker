import { collection } from "firebase/firestore";
import { useGetDocs } from "../../../customHooks/useGetDocs";
import { db } from "../../../firebase/firebaseConfig";
import LoadSpinner from "../../Utilities/LoadSpinner";
import RoleAssingment from "./RoleAssingment";
import YourPersonel from "./YourPersonel";

const ManageRole = () => {
  const colRef = collection(db, "users");

  const { dbData, loading } = useGetDocs(colRef);

  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-4">Manage User Roles</h1>

      {loading && <LoadSpinner />}

      <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto lg:flex lg:gap-12 lg:mt-12">
        {dbData && <RoleAssingment dbData={dbData} />}
        {dbData && <YourPersonel dbData={dbData} />}
      </div>
    </div>
  );
};

export default ManageRole;
