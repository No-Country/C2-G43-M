import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import TopNav from "../topnav/TopNav";
import "./layout.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../../pages/Dashboard";
import Customers from "../../pages/Customers";

const Layout = ({ props }) => {
  return (
    <BrowserRouter>
      <div className="layout">
        <Sidebar {...props} />
        <div className="layout__content">
          <TopNav />
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
