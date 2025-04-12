import React, { useState } from "react";
import { Navigate, Outlet } from "react-router";
import Header from "../component/Header";

const ProtectedRoute = ({ childern }) => {
  const [isUserAuthorised, setIsUserAuthorized] = useState(true);

  if (isUserAuthorised === false) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {/* <Header /> */}
      {childern}
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
