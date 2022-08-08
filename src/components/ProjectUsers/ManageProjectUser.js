//firebase
import { useGetDocs } from "../../customHooks/useGetDocs";
import { useGetSingleDoc } from "../../customHooks/useGetSingleDoc";

//react
import { useState } from "react";

import { removeUser } from "../../firebase/firebaseConfig";
import { useContext } from "react";
import { TrackerContext } from "../../context/TrackerContext";

const ManageProjectUser = () => {
  const { dbData } = useGetDocs("projects");

  const [currentProject, setCurrentProject] = useState("");

  // const { dbData: singleProject } = useGetSingleDoc("projects", currentProject);

  const { dbData: singleProject } = useGetDocs(
    `projects/${currentProject}/users`
  );

  const { setIsAssignUserModalOpen } = useContext(TrackerContext);

  //pagination show only 10 user's per page
  const [pageNumber, setPageNumber] = useState(0);
  const USERS_PER_PAGE = 10;
  const pagesVisited = pageNumber * USERS_PER_PAGE;
  const pageCount = Math.ceil(dbData?.assignedUsers?.length / USERS_PER_PAGE);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const [searchTerm, setSearchTerm] = useState("");

  const showUsers = singleProject
    ?.filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (
        val.fullName.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return val;
      }
    })
    .slice(pagesVisited, pagesVisited + USERS_PER_PAGE)
    .map((user) => {
      console.log(user);
      return (
        <tbody key={user?.id}>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
              {user.fullName}
            </th>
            <td className="px-6 py-4">{user.role}</td>
            <td>
              <svg
                onClick={() => {
                  // removeUser(
                  //   "projects",
                  //   currentProject,
                  //   user,
                  //   singleProject?.projectName
                  // );
                  removeUser("projects", currentProject, "users", user);
                  console.log(user?.email);
                }}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:stroke-gray-400 cursor-pointer"
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
            </td>
          </tr>
        </tbody>
      );
    });

  return (
    <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto mb-6">
      <div className="w-11/12 mx-auto mt-24 relative border border-black min-h-[calc(100vh_-_60vh)]">
        <h1 className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-11/12 h-14 bg-fbFillColor text-center text-white text-2xl font-bold pt-3">
          Manage Users
        </h1>
        <div class="pl-4 pt-12">
          <h2 className="font-bold">Select Project</h2>
          <select
            onChange={(e) => setCurrentProject(e.target.value)}
            className="border w-44 h-10"
          >
            <option defaultChecked defaultValue={"Please Select"}>
              Please Select
            </option>
            {dbData &&
              dbData.map((project) => (
                <option key={project?.id} value={project?.id}>
                  {project?.projectName}
                </option>
              ))}
          </select>
          <button
            onClick={() => setIsAssignUserModalOpen(true)}
            className="flex mt-6 font-sm text-gray-500 group hover:text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 group-hover:stroke-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="gray"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
            Add Users
          </button>

          {singleProject && singleProject?.assignedUsers?.length === 0 ? (
            <p className="font-bold mt-12 text-center">No user found.</p>
          ) : (
            <table className="w-full lg:mx-auto text-sm text-left text-gray-500 dark:text-gray-400 mt-6">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-3">User Name</th>
                  <th className="px-6 py-3">Role</th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              {showUsers}
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageProjectUser;
