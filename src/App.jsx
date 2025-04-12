import React, { useEffect, useState } from "react";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import AppRoute from "./routes/AppRoute";

const App = () => {
  return (
    <div>
      {/* <Login />
      <Dashboard /> */}

      <AppRoute />
    </div>
  );
};

export default App;
