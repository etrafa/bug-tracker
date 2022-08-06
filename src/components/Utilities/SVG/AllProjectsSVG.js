import { NavLink } from "react-router-dom";

const AllProjectsSVG = (props) => {
  return (
    <li onClick={props.clickHandler}>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "flex items-center p-2 text-base font-bold bg-blue-600 !text-white rounded-lg stroke-white fill-white"
            : "flex items-center p-2 text-base !text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 !dark:hover:bg-gray-700 stroke-current fill-current"
        }
        to="/all-projects"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <span className="flex-1 ml-3 whitespace-nowrap">All Projects</span>
      </NavLink>
    </li>
  );
};

export default AllProjectsSVG;
