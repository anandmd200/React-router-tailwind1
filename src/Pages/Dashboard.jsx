import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-6 font-bold text-xl border-b">Dashboard</div>
        <nav className="p-4 space-y-2">
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-200">Home</a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-200">Analytics</a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-gray-200">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Welcome Back!</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">John Doe</span>
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
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
