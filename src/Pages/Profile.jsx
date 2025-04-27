import React from 'react';
import { useOnlineStatus } from "../CustomHook/userstatus";
import Navbar from "../component/Nav";

const Profile = () => {
  const isOnline = useOnlineStatus();

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar / Navbar */}
      <aside className="w-64 bg-white shadow-md h-screen sticky top-0">
        <Navbar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto bg-white shadow rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-red-500 to-indigo-600 p-6 text-white flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                className="w-20 h-20 rounded-full border-4 border-white shadow"
                src="https://i.pravatar.cc/150?img=3"
                alt="User Avatar"
              />
              <div>
                <h2 className="text-2xl font-bold">John Doe</h2>
                <p className="text-sm opacity-80">UI/UX Designer</p>
              </div>
            </div>

            <span className="flex items-center gap-2">
              <span
                className={`h-3 w-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}
              ></span>
              {isOnline ? 'Online' : 'Offline'}
            </span>
          </div>

          {/* Profile Details */}
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4 border-b pb-2">Profile Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-600">Full Name</label>
                <p className="text-gray-800 font-medium">Jane Doe</p>
              </div>
              <div>
                <label className="text-gray-600">Email</label>
                <p className="text-gray-800 font-medium">jane.doe@example.com</p>
              </div>
              <div>
                <label className="text-gray-600">Phone</label>
                <p className="text-gray-800 font-medium">+1 234 567 890</p>
              </div>
              <div>
                <label className="text-gray-600">Location</label>
                <p className="text-gray-800 font-medium">San Francisco, CA</p>
              </div>
            </div>

            {/* Optional: Edit Button */}
            <div className="mt-6 text-right">
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
