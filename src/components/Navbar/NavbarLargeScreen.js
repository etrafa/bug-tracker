const NavbarLargeScreen = ({ setIsProjectModalOpen, setIsTicketModalOpen }) => {
  return (
    <div className="hidden lg:flex lg:w-[calc(100%_-_16rem)] lg:h-[calc(5rem_-_7px)] lg:items-center lg:ml-auto lg:justify-end lg:mx-8">
      <button
        onClick={() => setIsProjectModalOpen(true)}
        className="bg-white hover:bg-slate-100 w-64 lg:mx-6 h-12 rounded-md text-black font-bold border"
      >
        CREATE NEW PROJECT
      </button>
      <button
        onClick={() => setIsTicketModalOpen(true)}
        className="bg-fbFillColor hover:bg-blue-400 w-64 lg:mx-6 h-12 rounded-md text-white font-bold"
      >
        CREATE NEW TICKET
      </button>
    </div>
  );
};

export default NavbarLargeScreen;
