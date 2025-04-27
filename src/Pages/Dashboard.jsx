import React, { useContext } from "react";
import { useOnlineStatus } from "../CustomHook/userstatus";
import Navbar from "../component/Nav";
import { ChannelContext } from "../App";

const Dashboard = () => {
  const { notificationData, userInfo } = useContext(ChannelContext);
  const isOnline = useOnlineStatus();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-gradient-to-r from-red-500 to-indigo-600 text-white p-10 rounded-xl shadow-lg mb-8 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Welcome Back!</h1>
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-2">
              <span
                className={`h-3 w-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}
              ></span>
              {isOnline ? 'Online' : 'Offline'}
            </span>

            {/* User Info (Name above Role) */}
            <div className="flex flex-col text-right">
              <span className="text-white text-sm font-semibold">{userInfo?.name}</span>
              <span className="text-white text-xs">{userInfo?.role}</span>
            </div>

            {/* User Avatar */}
            <img
              src="https://i.pravatar.cc/40"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        {/* Main Content including Cards and Profit */}
        <main className="flex-1 p-6 space-y-6">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          </div>

          {/* Profit Section (Moved Up) */}
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h2 className="text-lg font-semibold mb-2">Profit</h2>
            <p className="text-3xl font-bold text-green-600">
              ${notificationData?.notification}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
