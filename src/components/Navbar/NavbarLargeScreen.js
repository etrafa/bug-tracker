const NavbarLargeScreen = ({
  setIsProjectModalOpen,
  setIsTicketModalOpen,
  isNotificationOpen,
  setIsNotificationOpen,
}) => {
  return (
    <div className="hidden lg:flex lg:w-[calc(100%_-_16rem)] lg:h-[calc(5rem_-_7px)] lg:items-center lg:ml-auto lg:justify-end lg:mx-8">
      <button
        onClick={() => setIsProjectModalOpen(true)}
        className="bg-red-600 w-64 lg:mx-6 h-12 rounded-md text-white font-bold"
      >
        CREATE NEW PROJECT
      </button>
      <button
        onClick={() => setIsTicketModalOpen(true)}
        className=" bg-yellow-400 w-64 lg:mx-6 h-12 rounded-md text-white font-bold"
      >
        CREATE NEW TICKET
      </button>
      <svg
        onClick={() => setIsNotificationOpen(!isNotificationOpen)}
        className="h-8 w-8 cursor-pointer"
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
    </div>
  );
};

export default NavbarLargeScreen;
