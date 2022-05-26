//components
import TicketByPriority from "./components/Dashboard/Tickets/TicketByPriority";
// import Login from "./components/Login/Login";
import MyProjects from "./components/Dashboard/MyProjects/MyProjects";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/SideBar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Tickets from "./components/Dashboard/Tickets/Tickets";
import { Chart as ChartJS } from "chart.js/auto";

function App() {
  return (
    <Router>
      <Sidebar />
      <Navbar />
      <Tickets />
      <Routes>
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;
