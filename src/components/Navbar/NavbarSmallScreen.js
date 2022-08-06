//components
import AllProjectsSVG from "../Utilities/SVG/AllProjectsSVG";
import AllTicketsSVG from "../Utilities/SVG/AllTicketsSVG";
import CloseButtonSVG from "../Utilities/SVG/CloseButtonSVG";
import DashboardHomeSVG from "../Utilities/SVG/DashboardHomeSVG";
import LogoutSVG from "../Utilities/SVG/LogoutSVG";
import ManageProjectSVG from "../Utilities/SVG/ManageProjectSVG";
import ManageRoleSVG from "../Utilities/SVG/ManageRoleSVG";
import MyProjectsSVG from "../Utilities/SVG/MyProjectsSVG";
import MyTicketsSVG from "../Utilities/SVG/MyTicketsSVG";
import ProfileSVG from "../Utilities/SVG/ProfileSVG";

//firebase
import { useGetSingleDoc } from "../../customHooks/useGetSingleDoc";
import { useAuth } from "../../firebase/firebaseConfig";

const NavbarSmallScreen = ({
  setIsNavbarOpen,
  setIsProjectModalOpen,
  setIsTicketModalOpen,
}) => {
  const currentUser = useAuth(); // get current user

  const { dbData: userRole } = useGetSingleDoc("users", currentUser?.uid);

  return (
    <div className="w-full lg:hidden min-h-screen bg-gray-200 fixed top-0 bottom-0 z-50 overflow-y-auto">
      <CloseButtonSVG clickHandler={() => setIsNavbarOpen(false)} />
      <ul className="flex flex-col space-y-6">
        {/* //if user role is admin show all the components
          /*if user role is user hide following components 
                1.manage role assignment   2. manage project users
                3.all projects             4. all tickets
           */}
        <DashboardHomeSVG clickHandler={() => setIsNavbarOpen(false)} />
        {userRole?.role === "admin" ? (
          <ManageRoleSVG clickHandler={() => setIsNavbarOpen(false)} />
        ) : null}
        {userRole?.role === "admin" ? (
          <ManageProjectSVG clickHandler={() => setIsNavbarOpen(false)} />
        ) : null}
        <MyProjectsSVG clickHandler={() => setIsNavbarOpen(false)} />
        <MyTicketsSVG clickHandler={() => setIsNavbarOpen(false)} />
        {userRole?.role === "admin" ? (
          <AllProjectsSVG clickHandler={() => setIsNavbarOpen(false)} />
        ) : null}
        {userRole?.role === "admin" ? (
          <AllTicketsSVG clickHandler={() => setIsNavbarOpen(false)} />
        ) : null}
        <ProfileSVG clickHandler={() => setIsNavbarOpen(false)} />
        <LogoutSVG />

        {/* //CREATE TICKET AND PROJECT BUTTON */}
        {userRole?.role === "admin" ? (
          <li className="my-4 mx-auto">
            <button
              onClick={() => setIsProjectModalOpen(true)}
              className="bg-white hover:bg-slate-100 w-64 lg:mx-6 h-12 rounded-md text-black font-bold border"
            >
              CREATE NEW PROJECT
            </button>
          </li>
        ) : null}

        <li className="my-4 mx-auto">
          <button
            onClick={() => setIsTicketModalOpen(true)}
            className="bg-fbFillColor hover:bg-blue-400 w-64 lg:mx-6 h-12 rounded-md text-white font-bold"
          >
            CREATE NEW TICKET
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavbarSmallScreen;
