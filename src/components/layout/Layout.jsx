import React, { useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import TopNav from "../topnav/TopNav";
import "./layout.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import ThemeAction from "../../redux/actions/ThemeAction";
import Discount from "../../pages/Discount";
import Dashboard from "../../pages/Dashboard";
import Customers from "../../pages/Customers";
import Employees from "../../pages/Employees";
import Login from "../login/Login";
import Analytics from "../../pages/Analytics";
import Categories from "../../pages/Categories";
import Orders from "../../pages/Orders";
import Settings from "../../pages/Settings";
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
              <Route exact path="/" element={<Login />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/discount" element={<Discount />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/Settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
