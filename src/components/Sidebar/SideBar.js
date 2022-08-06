//components
import DashboardHomeSVG from "../Utilities/SVG/DashboardHomeSVG";
import ManageRoleSVG from "../Utilities/SVG/ManageRoleSVG";
import ManageProjectSVG from "../Utilities/SVG/ManageProjectSVG";
import MyProjectsSVG from "../Utilities/SVG/MyProjectsSVG";
import MyTicketsSVG from "../Utilities/SVG/MyTicketsSVG";
import AllProjectsSVG from "../Utilities/SVG/AllProjectsSVG";
import AllTicketsSVG from "../Utilities/SVG/AllTicketsSVG";
import ProfileSVG from "../Utilities/SVG/ProfileSVG";
import LogoutSVG from "../Utilities/SVG/LogoutSVG";

//firebase
import { useAuth } from "../../firebase/firebaseConfig";
import { useGetSingleDoc } from "../../customHooks/useGetSingleDoc";

const SideBar = () => {
  const currentUser = useAuth();

  const { dbData } = useGetSingleDoc("users", currentUser?.uid);
  const userRole = dbData?.role;

  return (
    <aside
      className="w-64 min-h-screen bg-gray-50 fixed top-0 left-0 hidden lg:block"
      aria-label="Sidebar"
    >
      <div className="overflow-y-auto py-4 px-3 rounded ">
        <h1 className="text-center">
          Welcome, <br />
          <span className="font-bold">{currentUser?.displayName}</span>
          <span className="font-bold block">Role:{dbData?.role}</span>
        </h1>
        <hr className="mt-2" />
        {/* //if user role is admin show all the components
          /*if user role is user hide following components 
                1.manage role assignment   2. manage project users
                3.all projects             4. all tickets
           */}
        <ul className="space-y-2 mt-10">
          <DashboardHomeSVG />
          {userRole === "admin" ? <ManageRoleSVG /> : null}
          {userRole === "admin" ? <ManageProjectSVG /> : null}
          <MyProjectsSVG />
          <MyTicketsSVG />
          {userRole === "admin" ? <AllProjectsSVG /> : null}
          {userRole === "admin" ? <AllTicketsSVG /> : null}
          <ProfileSVG />
          <LogoutSVG />
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
