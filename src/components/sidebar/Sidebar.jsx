import React from "react";

import { Link } from "react-router-dom";

import "./sidebar.css";

import logo from "../../assets/images/logofintech.png";
import menu from "../../assets/images/menu.png";
import SidebarItem from "./SidebarItem";
import sidebar_items from "../../assets/JsonData/sidebar_routes.json";

const Sidebar = (props) => {
  const activeItem = sidebar_items.findIndex(
    (item) => item.route === window.location.pathname
  );

  return (
    <div className="sidebar">
    <div className="sidebar__logo">
      <div className="sidebar__item-logo">
        <i><img src={menu} alt="company logo" /></i>
        <span><img src={logo} alt="company logo" /></span>
      </div>
    </div>
      {sidebar_items.map((item, index) => (
        <Link to={item.route} key={index}>
          <SidebarItem
            title={item.display_name}
            icon={item.icon}
            active={index === activeItem}
          />
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
