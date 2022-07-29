import { useAuth } from "../../firebase/firebaseConfig";
import { useGetSingleDoc } from "../../customHooks/useGetSingleDoc";

const NavbarLargeScreen = ({ setIsProjectModalOpen, setIsTicketModalOpen }) => {
  const currentUser = useAuth(); // get current user
  const { dbData: userRole } = useGetSingleDoc("users", currentUser?.uid); // get current user role

  console.log(userRole?.role);

  return (
    <div className="hidden lg:flex lg:w-[calc(100%_-_16rem)] lg:h-[calc(5rem_-_7px)] lg:items-center lg:ml-auto lg:justify-end lg:mx-8">
      {/* SHOW CREATE PROJECT BUTTON ONLY FOR ADMIN */}
      {userRole?.role === "admin" ? (
        <button
          onClick={() => setIsProjectModalOpen(true)}
          className="bg-white hover:bg-slate-100 w-64 lg:mx-6 h-12 rounded-md text-black font-bold border"
        >
          CREATE NEW PROJECT
        </button>
      ) : null}

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
