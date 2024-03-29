//components
import TicketByPriority from "./components/Dashboard/Tickets/TicketByPriority";
import Login from "./components/Login/Login";
import MyProjects from "./components/Dashboard/MyProjects/MyProjects";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/SideBar";
import { Route, Routes, useNavigate } from "react-router-dom";
import DashboardHome from "./components/Dashboard/Tickets/DashboardHome";
import { Chart as ChartJS } from "chart.js/auto";
import ManageRole from "./components/Dashboard/RoleAssingment/ManageRole";
import MyTickets from "./components/Dashboard/MyTickets/MyTickets";
import CreateNewProjectModal from "./components/Modals/CreateNewProjectModal";
import { useEffect, useState } from "react";
import NewProjectModalMessage from "./components/Modals/NewProjectModalMessage";
import SingleProject from "./components/SingleProject/SingleProject";
import SignUp from "./components/SignUp/SignUp";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { useAuth } from "./firebase/firebaseConfig";
import { TrackerContext } from "./context/TrackerContext";
import SignUpMessageModal from "./components/Modals/SignUpMessageModal";
import CreateNewTicketModal from "./components/Modals/NewTicketModal/CreateNewTicketModal";
import ManageProjectUser from "./components/ProjectUsers/ManageProjectUser";
import UserProfile from "./components/UserProfile/UserProfile";
import DeleteProjectModal from "./components/Modals/DeleteProjectModal";
import SideBar from "./components/Sidebar/SideBar";
import AssignUserModal from "./components/Modals/AssignUserModal";
import SingleTicket from "./components/SingleTicket/SingleTicket";
import EditTicketModal from "./components/Modals/EditTicket/EditTicketModal";
import AllProjects from "./components/Dashboard/MyProjects/AllProjects";
import AllTickets from "./components/Dashboard/MyTickets/AllTickets";

function App() {
  // MODALS
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isProjectMessageModalOpen, setIsProjectMessageModalOpen] =
    useState(false);
  const [requiredFieldModal, setRequiredFieldModal] = useState(false);
  const [signUpErrorMessage, setSignUpErrorMessage] = useState("");
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [deleteProjectModal, setDeleteProjectModal] = useState(false);
  const [isAssignUserModalOpen, setIsAssignUserModalOpen] = useState(false);
  const [editTicketOpen, setEditTicketOpen] = useState(false);
  const [currentTicketID, setCurrentTicketID] = useState();

  //* TRACK IF USER LOGGED IN
  const currentUser = useAuth();

  //* NAVIGATE USER TO LOGIN PAGE IF NOT LOGGED IN YET, OTHERWISE SHOW HOME PAGE

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    } else {
      navigate("/log-in");
    }
  }, [currentUser]);

  return (
    <TrackerContext.Provider
      value={{
        requiredFieldModal,
        setRequiredFieldModal,
        signUpErrorMessage,
        setSignUpErrorMessage,
        setDeleteProjectModal,
        setIsAssignUserModalOpen,
        setEditTicketOpen,
        currentTicketID,
        setCurrentTicketID,
      }}
    >
      {currentUser && <Sidebar />}
      {currentUser && (
        <Navbar
          setIsProjectModalOpen={setIsProjectModalOpen}
          setIsTicketModalOpen={setIsTicketModalOpen}
        />
      )}
      {isProjectModalOpen && (
        <CreateNewProjectModal
          setIsProjectModalOpen={setIsProjectModalOpen}
          setIsProjectMessageModalOpen={setIsProjectMessageModalOpen}
        />
      )}
      {isTicketModalOpen && (
        <CreateNewTicketModal setIsTicketModalOpen={setIsTicketModalOpen} />
      )}
      {isProjectMessageModalOpen && (
        <NewProjectModalMessage
          setIsProjectMessageModalOpen={setIsProjectMessageModalOpen}
        />
      )}
      {requiredFieldModal && (
        <SignUpMessageModal setRequiredFieldModal={setRequiredFieldModal} />
      )}

      {deleteProjectModal && (
        <DeleteProjectModal setDeleteProjectModal={setDeleteProjectModal} />
      )}

      {isAssignUserModalOpen && (
        <AssignUserModal setIsAssignUserModalOpen={setIsAssignUserModalOpen} />
      )}
      {editTicketOpen && (
        <EditTicketModal setEditTicketOpen={setEditTicketOpen} />
      )}

      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/my-projects" element={<MyProjects />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="/role-assignment" element={<ManageRole />} />
        <Route path="/my-tickets" element={<MyTickets />} />
        <Route path="/all-tickets" element={<AllTickets />} />
        <Route path="/my-projects/:project" element={<SingleProject />} />
        <Route path="my-tickets/:ticketId" element={<SingleTicket />} />
        <Route path="/create-account" element={<SignUp />} />
        <Route path="/manage-project-user" element={<ManageProjectUser />} />
        <Route path="/my-profile" element={<UserProfile />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </TrackerContext.Provider>
  );
}

export default App;
