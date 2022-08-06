import { NavLink } from "react-router-dom";

const MyProjectsSVG = (props) => {
  return (
    <li onClick={props.clickHandler}>
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
  );
};

export default MyProjectsSVG;
