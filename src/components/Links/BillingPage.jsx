

import { useState } from "react"
import SideDashboard from "../SideDashboard"
import Billing from "./Billing"

const BillingPage = () => {
    const [sidebar, setSidebar] = useState(false)
    return (
        <div className="flex h-[250px] bg-sky-400 md:w-full w-[520px] relative">
        {/* Sidebar for desktop */}
        <div className="hidden md:block w-[280px]">
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
            <Billing onMenuClick={() => setSidebar(true)} />
        </div>
        </div>
    )
}

export default BillingPage