import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const RequestDemoPage: React.FC = () => {
  return (
    <div className="bg-lightBg min-h-screen text-textDark">
        <Navbar />
        <div className="bg-lightBg min-h-screen text-textLight flex flex-col items-center py-14 px-4">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="bg-[#11212E] p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-6 text-primary">Skyline</h1>
            <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="first-name" className="block text-sm font-medium">
                    First Name
                    </label>
                    <input
                    type="text"
                    id="first-name"
                    className="mt-1 block w-full rounded-md bg-[#1A2B3C] border-none p-2 text-sm focus:ring-primary focus:border-primary"
                    placeholder="Enter first name"
                    />
                </div>
                <div>
                    <label htmlFor="last-name" className="block text-sm font-medium">
                    Last Name
                    </label>
                    <input
                    type="text"
                    id="last-name"
                    className="mt-1 block w-full rounded-md bg-[#1A2B3C] border-none p-2 text-sm focus:ring-primary focus:border-primary"
                    placeholder="Enter last name"
                    />
                </div>
                </div>
                <div>
                <label htmlFor="email" className="block text-sm font-medium">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md bg-[#1A2B3C] border-none p-2 text-sm focus:ring-primary focus:border-primary"
                    placeholder="Enter email"
                />
                </div>
                <div>
                <label htmlFor="phone" className="block text-sm font-medium">
                    Phone
                </label>
                <input
                    type="text"
                    id="phone"
                    className="mt-1 block w-full rounded-md bg-[#1A2B3C] border-none p-2 text-sm focus:ring-primary focus:border-primary"
                    placeholder="Enter phone number"
                />
                </div>
                <div>
                <label htmlFor="company" className="block text-sm font-medium">
                    Company
                </label>
                <input
                    type="text"
                    id="company"
                    className="mt-1 block w-full rounded-md bg-[#1A2B3C] border-none p-2 text-sm focus:ring-primary focus:border-primary"
                    placeholder="Enter company name"
                />
                </div>
                <button
                type="submit"
                className="w-full bg-primary text-lightBg py-2 rounded-md font-bold hover:opacity-90"
                >
                Request Demo
                </button>
            </form>
            </div>

            {/* Information Section */}
            <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-bold leading-tight">
            Discover How Skyline Transforms AWS Setup
            </h2>
            <p className="text-gray-400">
            Unlock the power of automation with Skyline, the AI-driven solution that simplifies AWS setup and management. From resource provisioning to security and scalability, Skyline automates every step with precision, eliminating manual tasks and reducing errors. With real-time adaptation to AWS updates, Skyline ensures your infrastructure stays optimized, compliant, and ready to scale. Experience faster, smarter cloud management today.
            </p>
            <div className="flex items-center">
            </div>
            </div>
        </div>
        </div>
    <Footer />
    </div>
  );
};

export default RequestDemoPage;
