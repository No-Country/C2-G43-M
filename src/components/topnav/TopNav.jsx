import React, { useEffect } from "react";

import "./topnav.css";

import { Link } from "react-router-dom";

import Dropdown from "../dropdown/Dropdown";

import ThemeMenu from "../thememenu/ThemeMenu";

import notifications from "../../assets/JsonData/notification.json";

import user_image from "../../assets/images/user.png";

import user_menu from "../../assets/JsonData/user_menus.json";

import { useSelector, useDispatch } from "react-redux";

import ThemeAction from "../../redux/actions/ThemeAction";

const curr_user = {
  display_name: "Usuario",
  image: user_image,
};

const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
);

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user.image} alt="" />
    </div>
    <div className="topnav__right-user__name">{user.display_name}</div>
  </div>
);

const renderUserMenu = (item, index) => (
  <Link to="/" key={index}>
    <div className="notification-item">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
);

const Topnav = () => {
  const ThemeReducer = useSelector((state) => state.ThemeReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

    dispatch(ThemeAction.setMode(themeClass));

    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch]);

  return (
    <div className={`topnav ${ThemeReducer.mode} ${ThemeReducer.color}`}>
      <div className="topnav__search">
        <input type="text" placeholder="Buscar" />
        <i className="bx bx-search"></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          >
            {user_menu.map((item, index) => (
              <Link to={item.route} key={index} />
            ))}
          </Dropdown>
        </div>
        <div className="topnav__right-item">
          <Dropdown
            icon="bx bx-bell"
            badge="12"
            contentData={notifications}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to="/">Ver más</Link>}
          />
        </div>
        <div className="topnav__right-item">
          <ThemeMenu />
        </div>
      </div>
    </div>
  );
};

export default Topnav;
