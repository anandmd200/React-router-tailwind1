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
    name: "Anand",
    email: "anandmd2001@gmail.com",
    employeeId: "0236",
    dob: "02/06/1999",
    role: "Admin",
  });

  const handleNotificationUpdate = () => {
    const messages = [
      "Hi, this is your first random message!",
      "Hello! Here’s another update for you.",
      "New notification: Stay awesome!",
      "Reminder: You're doing great!",
      "Alert: Check out the latest updates!",
      "Alert: Checki n the latest updates!",
      "Alert: Good the latest updates!",
      "Alert: Go out the latest updates!",
    ];

    const names = [
      "Anand",
      "Aditya",
      "Anish",
      "Aaksah",
      "Abhishek",
      "Aditya2",
      "Nami",
      "Nikita",
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

      <ChannelContext.Provider
        value={{ notificationData: notificationData, userInfo: userInfo }}
      >
        <AppRoute />
      </ChannelContext.Provider>
    </div>
  );
};

export default App;
