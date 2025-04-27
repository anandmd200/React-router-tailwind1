import React, { createContext, useEffect, useState } from "react";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import AppRoute from "./routes/AppRoute";


export const ChannelContext = createContext(null);
const App = () => {
  const [notificationData, setNotificationData] = useState({
    notification: "Hi this is notifcation data",
  });
  const [userInfo, setUserInfo] = useState({
    name: "Anish",
    email: "ani2004@gmail.com",
    employeeId: "036",
    dob: "03/06/2004",
    role: "Admin",
  });
  const names = [
    "Anand",
    "Aditya",
    "Anish",
    "Aakash",
    "Abhishek",
    "Aditya2",
    "Nami",
    "Nikita",
  ];

  const handleNotificationUpdate = () => {
    const messages = [
      "Hi, this is your first random message!",
      "Hello! Here’s another update for you.",
      "New notification: Stay awesome!",
      "Reminder: You're doing great!",
      "Alert: Check out the latest updates!",
      "Hey Wassup",
      "Greet: You're doing great!",
      "Hlo...! Here’s another update for you.",
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    setNotificationData({ notification: messages[randomIndex] });
    setUserInfo({ ...userInfo, name: names[randomIndex] });
  };
  return (
    <div>
      {/* <Login />
      
      <Dashboard /> */}
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
        onClick={handleNotificationUpdate}
      >
        Update Notification data
      </button>
      <ChannelContext.Provider value={{ notificationData: notificationData, userInfo: userInfo }}>
        <AppRoute />
      </ChannelContext.Provider>

    </div>
  );
};

export default App;
