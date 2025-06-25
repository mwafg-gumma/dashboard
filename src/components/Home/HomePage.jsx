
import { useState } from "react"
import SideDashboard from "../SideDashboard"
import DetailsDashboard from "../DetailsDashboard"

const HomePage = () => { 
    const [sidebar, setSidebar] = useState(false)
    return (
        <div className="flex h-[250px] bg-sky-400 md:w-full w-[520px]">
            {/* Sidebar for desktop */}
            <div className="hidden md:block w-[280px] bg-white shadow-lg">
                <SideDashboard />
            </div>
            {/* Sidebar for mobile */}
            <div
                className={`fixed top-0 left-0 h-full w-[260px] bg-white shadow-lg z-40 transform transition-transform duration-300 ${
                    sidebar ? "translate-x-0" : "-translate-x-full"
                } md:hidden`}
            >
                <SideDashboard />
            </div>
            {/* Overlay */}
            {sidebar && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
                    onClick={() => setSidebar(false)}
                />
            )}
            {/* Main Content */}
            <div className="flex-1 flex flex-col p-6">
                {/* Top Details Bar */}
                <DetailsDashboard onMenuClick={() => setSidebar(true)} />
                {/* Example main content */}
                <div className="mt-8 bg-white rounded-lg shadow p-8">
                    <h1 className="text-2xl font-bold text-gray-700 mb-4">Welcome to the Dashboard</h1>
                    <p className="text-gray-600">
                        Here you can view your statistics, manage your projects, and explore more features using the sidebar menu.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomePage