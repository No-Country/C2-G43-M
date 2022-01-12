import React, { useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import TopNav from "../topnav/TopNav";
import "./layout.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import ThemeAction from "../../redux/actions/ThemeAction";

import Dashboard from "../../pages/Dashboard";
import Customers from "../../pages/Customers";

const Layout = ({ props }) => {
  const ThemeReducer = useSelector((state) => state.ThemeReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

    dispatch(ThemeAction.setMode(themeClass));

    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className={`layout ${ThemeReducer.mode} ${ThemeReducer.color}`}>
        <TopNav />
        <div className="layout__content">
          <Sidebar {...props} />
          <div className="layout__content-main">
            <Routes>
              <Route path="/customers" element={<Customers />} />
              <Route exact path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
