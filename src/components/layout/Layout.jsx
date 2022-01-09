import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./layout.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../../pages/Dashboard";
import Customers from "../../pages/Customers";

const Layout = ({ props }) => {
  return (
    <BrowserRouter>
      <div className="layout__content">
        <Sidebar {...props} />
        <div className="layout__content-main">
          <Routes>
            <Route path="/customers" element={<Customers />} />
            <Route exact path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
