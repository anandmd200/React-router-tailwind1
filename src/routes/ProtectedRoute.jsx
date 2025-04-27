import React, { useState } from "react";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = ({ childern }) => {
  const isTokenAvailabe = localStorage.getItem("token");

  if (!isTokenAvailabe) {
    return <Navigate to="/login" />;
  }

  return (
    <>

      {childern}
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
