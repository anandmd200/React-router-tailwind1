import React from 'react';
import Navbar from "../component/Nav";

const Home = () => {
    return (
        <div className="min-h-screen flex bg-gray-100">

            {/* Sidebar / Navbar */}
            <aside className="w-64 bg-white shadow-md h-screen sticky top-0">
                <Navbar />
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Website!</h1>
                    <p className="text-gray-600 text-lg mb-8">
                        Explore a wide range of items, check your profile, and enjoy a seamless experience.
                    </p>

                    {/* Hero Section */}
                    <div className="bg-gradient-to-r from-red-500 to-indigo-600 text-white p-10 rounded-xl shadow-lg mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Discover Amazing Products</h2>
                        <p>Find great deals, new arrivals, and much more tailored just for you.</p>
                    </div>

                    {/* Features Section */}
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                            <p className="text-gray-600">Get your items delivered quickly and safely to your doorstep.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2">Best Quality</h3>
                            <p className="text-gray-600">We offer only the highest quality products at the best prices.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
                            <p className="text-gray-600">24/7 support to help you whenever you need assistance.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
