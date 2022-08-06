import { NavLink } from "react-router-dom";

const ManageRoleSVG = (props) => {
  return (
    <li onClick={props.clickHandler}>
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
  );
};

export default ManageRoleSVG;
