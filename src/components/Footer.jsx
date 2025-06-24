import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-white shadow mt-8">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
            {/* Left: Copyright */}
            <div className="text-gray-600 text-sm mb-3 md:mb-0">
            &copy; {new Date().getFullYear()} by mwafggomma. All rights reserved.
            </div>
            {/* Right: Four columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-700 text-sm">
            <span className="hover:text-sky-600 cursor-pointer">About</span>
            <span className="hover:text-sky-600 cursor-pointer">Contact</span>
            <span className="hover:text-sky-600 cursor-pointer">Privacy</span>
            <span className="hover:text-sky-600 cursor-pointer">Terms</span>
            </div>
        </div>
        </footer>
    )
}

export default Footer