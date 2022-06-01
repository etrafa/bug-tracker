import { useState } from "react";

const Navbar = ({ setIsProjectModalOpen, setIsNewProjectModalOpen }) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <nav className="bg-mainGreen w-full lg:w-[calc(100%_-_16rem)] ml-auto relative">
      <ul className="h-[calc(5rem_-_7px)] flex justify-end items-center ">
        <li>
          <button
            onClick={() => setIsProjectModalOpen(true)}
            className="bg-red-300 mx-auto block w-64 h-12  ounded-md text-white font-bold mr-8"
          >
            CREATE NEW PROJECT
          </button>
        </li>
        <li>
          <button
            onClick={() => setIsNewProjectModalOpen(true)}
            className="bg-yellow-300 mx-auto block w-64 h-12  ounded-md text-white font-bold mr-8"
          >
            CREATE NEW TICKET
          </button>
        </li>
        <li>
          <svg
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            className="h-8 w-8  mr-8 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </li>
      </ul>
      {isNotificationOpen && (
        <div className=" w-60 h-60 bg-red-400 absolute top-18 right-0 z-50">
          No Notification
        </div>
      )}
    </nav>
  );
};

export default Navbar;
