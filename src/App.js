//components
import TicketByPriority from "./components/Dashboard/Tickets/TicketByPriority";
import Login from "./components/Login/Login";
import MyProjects from "./components/Dashboard/MyProjects/MyProjects";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/SideBar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import DashboardHome from "./components/Dashboard/Tickets/DashboardHome";
import { Chart as ChartJS } from "chart.js/auto";
import ManageRole from "./components/Dashboard/RoleAssingment/ManageRole";
import MyTickets from "./components/Dashboard/MyTickets/MyTickets";
import CreateNewProjectModal from "./components/Modals/CreateNewProjectModal";
import { useState } from "react";
import NewProjectModalMessage from "./components/Modals/NewProjectModalMessage";
import SingleProject from "./components/SingleProject/SingleProject";

function App() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isProjectMessageModalOpen, setIsProjectMessageModalOpen] =
    useState(false);

  return (
    <Router>
      <Sidebar />
      <Navbar setIsProjectModalOpen={setIsProjectModalOpen} />
      {/* <Login /> */}
      {isProjectModalOpen && (
        <CreateNewProjectModal
          setIsProjectModalOpen={setIsProjectModalOpen}
          setIsProjectMessageModalOpen={setIsProjectMessageModalOpen}
        />
      )}
      {isProjectMessageModalOpen && (
        <NewProjectModalMessage
          setIsProjectMessageModalOpen={setIsProjectMessageModalOpen}
        />
      )}
      <Routes>
        <Route path="/dashboard-home" element={<DashboardHome />} />
        <Route path="/my-projects" element={<MyProjects />} />
        <Route path="/role-assignment" element={<ManageRole />} />
        <Route path="/my-tickets" element={<MyTickets />} />
        <Route path="/my-projects/:projetId" element={<SingleProject />} />
      </Routes>
    </Router>
  );
}

export default App;
