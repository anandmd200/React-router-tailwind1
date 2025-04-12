import React from "react";
import { Route, Routes } from "react-router";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoute;
