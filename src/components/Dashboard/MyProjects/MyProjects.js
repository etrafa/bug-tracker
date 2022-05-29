//firebase
import { db } from "../../../firebase/firebaseConfig";
import { collection } from "firebase/firestore";

//useGetDocs Hook
import { useGetDocs } from "../../../customHooks/useGetDocs";

//React
import { Link } from "react-router-dom";

const MyProjects = () => {
  const projectCollectionRef = collection(db, "projects");
  const { dbData } = useGetDocs(projectCollectionRef);

  return (
    <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto mb-6">
      <div className="w-11/12 mx-auto mt-24 relative border border-black">
        <h4 className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-11/12 h-14 bg-fbFillColor text-center text-white text-lg pt-3">
          All Projects in your database
        </h4>
        <div class="pl-4 pt-12">
          <label className="sr-only">Search</label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Project"
            />
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-12">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Project Name</th>
              <th className="px-6 py-3">Project Description</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dbData &&
              dbData.map((project) => {
                return (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {project.projectName}
                    </th>
                    <td className="px-6 py-4">{project.projectDescription}</td>
                    <td className="px-6 py-4">
                      <ul className="list-disc">
                        <li className="text-fbFillColor cursor-pointer underline hover:text-black">
                          Manage Users
                        </li>
                        <Link to={`/my-projects/${project.id}`}>
                          <li className="text-fbFillColor cursor-pointer underline hover:text-black mt-3 ">
                            Details
                          </li>
                        </Link>
                      </ul>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProjects;
