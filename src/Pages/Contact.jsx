import React from 'react';
import Navbar from "../component/Nav";

const ContactUs = () => {
    return (
        <div className="min-h-screen flex bg-gray-100">

            {/* Sidebar / Navbar */}
            <aside className="w-64 bg-white shadow-md h-screen sticky top-0">
                <Navbar />
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
                    <p className="text-gray-600 mb-8">
                        Have questions or need support? Feel free to reach out to us by filling the form below.
                    </p>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your Name"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                rows="5"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your message..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-600 text-white py-2 rounded hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default ContactUs;
