import React from "react";
import "./Navbar.css";
import menu_icon from "../../../src/assets/menu.png";
import logo from "../../../src/assets/logo.png";
import search_icon from "../../../src/assets/search.png";
import upload_icon from "../../../src/assets/upload.png";
import more_icon from "../../../src/assets/more.png";
import notification_icon from "../../../src/assets/notification.png";
import profile_icon from "../../../src/assets/jack.png";

const Navbar = ({ setsidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu_icon"
          onClick={() => setsidebar((prev) => !prev)}
          src={menu_icon}
          alt="menu-icon"
        />
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <img src={search_icon} alt="search-icon" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="upload-icon" />
        <img src={more_icon} alt="more-icon" />
        <img src={notification_icon} alt="notification-icon" />
        <img src={profile_icon} className="user-icon" alt="profile-icon" />
      </div>
    </nav>
  );
};

export default Navbar;