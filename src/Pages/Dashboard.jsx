import React, { useContext, useEffect } from "react";
import Header from "../component/Header";
import { Outlet, useNavigate } from "react-router";
import useOnlineStatus from "../customhooks/useOnlineStatus";
import Profit from "../component/Profit";
import { ChannelContext } from "../App";

const Dashboard = () => {
  const navigate = useNavigate();
  const { userInfo } = useContext(ChannelContext);

  console.log(userInfo);

  const isonline = useOnlineStatus();

  console.log("Is userOnline", isonline);

  // const { userInfo, notification } = useContext(UserRoleContext);

  // console.log(userInfo, notification);

  const handleLogout = () => {
    const isConfirmed = window.confirm(
      "Are you sure want to logout from the app?"
    );
    if (isConfirmed) {
      localStorage.clear();
      navigate("/login");
    }
  };

  useEffect(() => {
    console.log("Initializing phase .....mounting phase");
    getDataformRandomAPI();

    return () => {
      console.log("Cleanup calling.... unmounting phase");
    };
  }, []);

  const getDataformRandomAPI = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    console.log(data);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-6 font-bold text-xl border-b">Dashboard</div>
        <nav className="p-4 space-y-2">
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-200">
            Home
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-200">
            Analytics
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-200">
            Settings
          </a>

          <button
            onClick={() => navigate("")}
            className="block px-4 py-2 rounded hover:bg-gray-200"
          >
            Logout
          </button>

          <button
            onClick={handleLogout}
            className="block px-4 py-2 rounded hover:bg-gray-200"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Welcome Back!</h1>
          <div className="flex items-center space-x-4">
            <span
              className={`h-3 w-3 rounded-full ${
                isonline ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>
            <span>{isonline ? "online" : "offline"}</span>
            <span className="text-gray-600">{userInfo?.name}</span>
            <span className="text-gray-600 ">{userInfo?.role}</span>
            <img
              src="https://i.pravatar.cc/40"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Example Card */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">Total Users</h2>
              <p className="text-3xl font-bold">1,250</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">Revenue</h2>
              <p className="text-3xl font-bold">$34,500</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">New Orders</h2>
              <p className="text-3xl font-bold">320</p>
            </div>

            <Profit />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
