import { useState } from "react";
import NavbarLargeScreen from "./NavbarLargeScreen";
import NavbarSmallScreen from "./NavbarSmallScreen";

const Navbar = ({ setIsProjectModalOpen, setIsTicketModalOpen }) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <nav className="bg-gray-50 w-full lg:w-[calc(100%_-_16rem)] h-[calc(5rem_-_7px)] ml-auto relative">
      <div className="flex justify-between p-5 text-black lg:hidden">
        <svg
          onClick={() => setIsNavbarOpen(true)}
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
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
      {/* NAVBAR MENU FOR SMALL SCREEN */}
      {isNavbarOpen && (
        <NavbarSmallScreen
          setIsNavbarOpen={setIsNavbarOpen}
          setIsProjectModalOpen={setIsProjectModalOpen}
          setIsTicketModalOpen={setIsTicketModalOpen}
        />
      )}

      {/* NAVBAR FOR LARGE SCREEN */}
      <NavbarLargeScreen
        setIsProjectModalOpen={setIsProjectModalOpen}
        setIsTicketModalOpen={setIsTicketModalOpen}
        isNotificationOpen={isNotificationOpen}
        setIsNotificationOpen={setIsNotificationOpen}
      />
    </nav>
  );
};

export default Navbar;
