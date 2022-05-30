//components
import AssignedUserForSingleProject from "./AssignedUserForSingleProject";
import TicketForSingleProject from "./TicketForSingleProject";

//hook
import { useGetSingleDoc } from "../../customHooks/useGetSingleDoc";
import { Link, useParams } from "react-router-dom";

//firebase
import { db } from "../../firebase/firebaseConfig";
import { doc } from "firebase/firestore";

const SingleProject = () => {
  const { projectId } = useParams();
  const singleProjectRef = doc(db, "projects", projectId);
  const { dbData } = useGetSingleDoc(singleProjectRef);

  return (
    <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto mb-6 block">
      <div className="w-11/12 mx-auto mt-24 relative border border-black pb-12">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-11/12 bg-fbFillColor text-center text-white text-lg pt-3">
          <h1>Details for Google Home</h1>
          <ul className="flex justify-center my-4 gap-12">
            <Link to="/my-projects">
              <li className="underline cursor-pointer text-white">
                Back to List
              </li>
            </Link>
            <li className="underline cursor-pointer">Edit</li>
          </ul>
        </div>
        <div className="w-full h-20 mt-20 lg:w-6/12 lg:mx-auto lg:flex lg:justify-evenly lg:items-center">
          <div>
            <span className="text-gray-400 text-xl underline">
              Project Name
            </span>
            <p className="text-lg lg:text-center mt-2">Hello Hello Hello.</p>
          </div>
          <div>
            <span className="text-gray-400 text-xl underline">
              Project Description
            </span>
            <p className="text-lg lg:text-center mt-2">Hello Hello Hello.</p>
          </div>
        </div>
        <hr className="mt-10 lg:mt-0" />
        <div className="w-full mt-8 flex flex-col lg:flex-row lg:justify-between">
          <AssignedUserForSingleProject />
          <div className="h-scren border"></div>
          <TicketForSingleProject />
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
