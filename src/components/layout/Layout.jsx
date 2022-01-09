import React from "react";

import Sidebar from "../sidebar/Sidebar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../../pages/Dashboard";
import Customers from "../../pages/Customers";

const Layout = () => {
  return (
    <BrowserRouter>
      <div className="layout__content">
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
