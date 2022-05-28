import DefaultProfilePicture from "../../assets/default-user-profile-picture.png";

const Navbar = ({ setIsProjectModalOpen }) => {
  return (
    <nav className="bg-mainGreen w-full lg:w-[calc(100%_-_16rem)] ml-auto">
      <ul className="h-[calc(5rem_-_7px)] flex justify-end items-center ">
        {/* <li>
          <div className="relative mr-8 w-full">
            <input className="h-8 rounded-md" type="text" />
            <svg
              className="w-8 h-8 text-black absolute right-0 top-0 cursor-pointer"
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
        </li> */}
        <li>
          <button
            onClick={() => setIsProjectModalOpen(true)}
            className="bg-red-300 mx-auto block w-64 h-12  ounded-md text-white font-bold mr-8"
          >
            CREATE NEW PROJECT
          </button>
        </li>
        <li className="text-white text-2xl mr-8 cursor-pointer">HOME</li>
        <li>
          <svg
            className="h-6 w-6 text-gray-500 mr-8 cursor-pointer"
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
        <li>
          <img
            className="rounded-xl mr-8 cursor-pointer"
            width={36}
            src={DefaultProfilePicture}
            alt="user-profile"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
