import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "../Pages/Profile";
import Item from "../Pages/Item";
import Home from "../Pages/Home";
import ContactUs from "../Pages/Contact";


const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="login" />} />
      <Route path="login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route path="home" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="item" element={<Item />} />
        <Route path="contact" element={<ContactUs />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
