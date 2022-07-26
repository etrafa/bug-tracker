//components
import AssignedUserForSingleProject from "./AssignedUserForSingleProject";
import TicketForSingleProject from "./TicketForSingleProject";

//hook
import { useGetSingleDoc } from "../../customHooks/useGetSingleDoc";
import { Link, useParams } from "react-router-dom";

//context
import { useContext } from "react";
import { TrackerContext } from "../../context/TrackerContext";

const SingleProject = () => {
  const { projectId } = useParams();

  const { dbData } = useGetSingleDoc("projects", projectId);

  const { setDeleteProjectModal, setProjectId } = useContext(TrackerContext);

  console.log(dbData?.projectName);
  console.log(dbData?.assignedUsers[0]?.id);

  return (
    <div>
      {dbData && (
        <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto mb-6 block">
          <div className="w-11/12 mx-auto mt-24 relative border border-black pb-12">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-11/12 bg-fbFillColor text-center text-white text-lg pt-3">
              <h1>Details for {dbData?.projectName}</h1>
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
                <p className="text-lg lg:text-center mt-2">
                  {dbData?.projectName}
                </p>
              </div>
              <div>
                <span className="text-gray-400 text-xl underline">
                  Project Description
                </span>
                <p className="text-lg lg:text-center mt-2">
                  {dbData?.projectDescription}
                </p>
              </div>
            </div>
            <hr className="mt-10 lg:mt-0" />
            <div className="w-full mt-8 flex flex-col lg:flex-row lg:justify-between">
              <AssignedUserForSingleProject dbData={dbData} />
              <div className="h-scren border"></div>
              <TicketForSingleProject />
            </div>
            <div className="text-center mt-12 lg:mr-16">
              <button
                onClick={() => {
                  setProjectId(projectId);
                  setDeleteProjectModal(true);
                }}
                type="button"
                className="text-white bg-blue-600 mx-auto hover:bg-blue-400  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                Delete this Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProject;
