//components
import LoadSpinner from "../../Utilities/LoadSpinner";
import RoleAssingment from "./RoleAssingment";
import YourPersonel from "./YourPersonel";

//firebase function
import { useGetDocs } from "../../../customHooks/useGetDocs";

const ManageRole = () => {
  const { dbData, loading } = useGetDocs("users");

  return (
    <div>
      <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto">
        <h1 className="text-center text-4xl my-4 text-fbFillColor font-black">
          Manage User Roles
        </h1>
      </div>
      {loading && <LoadSpinner />}
      <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto lg:flex lg:gap-12 lg:mt-12">
        {dbData && <RoleAssingment dbData={dbData} />}
        {dbData && <YourPersonel dbData={dbData} />}
      </div>
    </div>
  );
};

export default ManageRole;
