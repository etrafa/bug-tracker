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

function App() {
  return (
    <Router>
      <Sidebar />
      <Navbar />
      {/* <Login /> */}
      <Routes>
        <Route path="/dashboard-home" element={<DashboardHome />} />
        <Route path="/my-projects" element={<MyProjects />} />
        <Route path="/role-assignment" element={<ManageRole />} />
        <Route path="/my-tickets" element={<MyTickets />} />
      </Routes>
    </Router>
  );
}

export default App;
