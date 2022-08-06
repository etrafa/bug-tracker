import { useNavigate } from "react-router-dom";
import { logOut } from "../../../firebase/firebaseConfig";

const LogoutSVG = () => {
  const navigate = useNavigate();
  return (
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
  );
};

export default LogoutSVG;
