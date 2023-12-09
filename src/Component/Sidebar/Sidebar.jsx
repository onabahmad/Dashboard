import React, { useState } from "react";
import "./Sidebar.css";
import {
  LuCalendarDays,
  LuBookMarked,
  LuMessageSquare,
  LuLayoutGrid,
} from "react-icons/lu";
import { HiOutlineSupport } from "react-icons/hi";
import { PiSignOutBold } from "react-icons/pi";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div className="togglebutton-container">
        <button className="toggle-button" onClick={toggleSidebar}>
          ☰
        </button>
      </div>
      <div className="sidebar_logo">
        <h3>GENEFITLETICS</h3>
      </div>
      <div className="options">
        <ul className="option1">
          <li className="sidebar-icons">
            <LuLayoutGrid />
            Overview
          </li>
          <li className="sidebar-icons">
            <LuCalendarDays />
            Schedule
          </li>
          <li className="sidebar-icons">
            <LuBookMarked />
            Manage Slots
          </li>
          <li className="sidebar-icons">
            <LuMessageSquare />
            Messages
          </li>
          <li className="sidebar-icons">
            <HiOutlineSupport />
            Support
          </li>
        </ul>
        <ul className="option2">
          <li className="sidebar-icons">
            <PiSignOutBold />
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
