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
    <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto mb-6">
      <button className="bg-red-300 mx-auto block w-64 h-12 mt-12 rounded-md text-white font-bold">
        CREATE NEW PROJECT
      </button>
      <div className="w-11/12 mx-auto mt-24 relative border border-black">
        <h4 className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-11/12 h-14 bg-fbFillColor text-center text-white text-lg pt-3">
          All Projects in your database
        </h4>
        <div class="pl-4 pt-12">
          <label for="table-search" class="sr-only">
            Search
          </label>
          <div class="relative mt-1">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Project"
            />
          </div>
        </div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-12">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Project Name
              </th>
              <th scope="col" class="px-6 py-3">
                Project Description
              </th>
              <th scope="col" class="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                My Project 1
              </th>
              <td class="px-6 py-4">My Project 1 Description</td>
              <td class="px-6 py-4">
                <ul className="list-disc">
                  <li className="text-fbFillColor cursor-pointer underline hover:text-black">
                    Manage Users
                  </li>
                  <li className="text-fbFillColor cursor-pointer underline hover:text-black">
                    Details
                  </li>
                </ul>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                My Project 2
              </th>
              <td class="px-6 py-4">My Project 2 Description</td>
              <td class="px-6 py-4">
                <ul className="list-disc">
                  <li className="text-fbFillColor cursor-pointer underline hover:text-black">
                    Manage Users
                  </li>
                  <li className="text-fbFillColor cursor-pointer underline hover:text-black">
                    Details
                  </li>
                </ul>
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                My Project 3
              </th>
              <td class="px-6 py-4">My Project 3 Description</td>
              <td class="px-6 py-4">
                <ul className="list-disc">
                  <li className="text-fbFillColor cursor-pointer underline hover:text-black">
                    Manage Users
                  </li>
                  <li className="text-fbFillColor cursor-pointer underline hover:text-black">
                    Details
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProjects;