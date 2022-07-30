import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../firebase/firebaseConfig";
import { logOut } from "../../firebase/firebaseConfig";
import { useGetSingleDoc } from "../../customHooks/useGetSingleDoc";

const SideBar = () => {
  const currentUser = useAuth();
  const navigate = useNavigate();

  /* track user's role and if user is 
  ADMIN: SHOW MANAGE ROLE ASSIGNMENT PAGE AND MANAGE PROJECT USERS
   if user's role is 
   NOT ADMIN: DO NOT SHOW ROLE ASSIGNMENT PAGE AND MANAGE PROJECT USERS 
   */
  const { dbData } = useGetSingleDoc("users", currentUser?.uid);
  const userRole = dbData?.role;

  return (
    <aside
      className="w-64 min-h-screen bg-gray-50 fixed top-0 left-0 hidden lg:block"
      aria-label="Sidebar"
    >
      <div className="overflow-y-auto py-4 px-3 rounded ">
        <h1 className="text-center">
          Welcome, <br />
          <span className="font-bold">{currentUser?.displayName}</span>
          <span className="font-bold block">Role:{dbData?.role}</span>
        </h1>
        <hr className="mt-2" />
        <ul className="space-y-2 mt-10">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 text-base font-bold bg-blue-600 !text-white rounded-lg stroke-white fill-white"
                  : "flex items-center p-2 text-base !text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 !dark:hover:bg-gray-700 stroke-current fill-current"
              }
              to="/"
            >
              <svg
                className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span className="ml-3">Dashboard Home</span>
            </NavLink>
          </li>

          {userRole === "admin" ? (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-base font-bold bg-blue-600 !text-white rounded-lg stroke-white fill-white"
                    : "flex items-center p-2 text-base !text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 !dark:hover:bg-gray-700 stroke-current fill-current"
                }
                to="/role-assignment"
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="{2}"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Manage Role Assingment
                </span>
              </NavLink>
            </li>
          ) : null}
          {userRole === "admin" ? (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-base font-bold bg-blue-600 !text-white rounded-lg stroke-white fill-white"
                    : "flex items-center p-2 text-base !text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 !dark:hover:bg-gray-700 stroke-current fill-current"
                }
                to="/manage-project-user"
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="{2}"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Manage Project Users
                </span>
              </NavLink>
            </li>
          ) : null}
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 text-base font-bold bg-blue-600 !text-white rounded-lg stroke-white fill-white"
                  : "flex items-center p-2 text-base !text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 !dark:hover:bg-gray-700 stroke-current fill-current"
              }
              to="/my-projects"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">My Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 text-base font-bold bg-blue-600 !text-white rounded-lg stroke-white fill-white"
                  : "flex items-center p-2 text-base !text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 !dark:hover:bg-gray-700 stroke-current fill-current"
              }
              to="/my-tickets"
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="{2}"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">My Tickets</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 text-base font-bold bg-blue-600 !text-white rounded-lg stroke-white fill-white"
                  : "flex items-center p-2 text-base !text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 !dark:hover:bg-gray-700 stroke-current fill-current"
              }
              to="/my-profile"
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
            </NavLink>
          </li>
          <li className="flex items-center p-2 text-base font-normal !text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 !dark:hover:bg-gray-700 cursor-pointer">
            <svg
              className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>

            <span
              onClick={() => logOut(navigate)}
              className="flex-1 ml-3 whitespace-nowrap"
            >
              Log out
            </span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
