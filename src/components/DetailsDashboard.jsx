

import { FaHome, FaSearch,FaBars, FaUser, FaBell,FaLayerGroup,FaGlobeAfrica,FaFileAlt,FaShoppingBag,FaMobile,FaTicketAlt,FaSmileBeam,FaArrowAltCircleRight } from "react-icons/fa"
import SalesOverviewChart from "./Home/SalesOverview"
import ImageSlider from "./Home/ImageSlider"
import Footer from "./Footer"

const DetailsDashboard = ({onMenuClick}) => {
    return (
        <section>
            <div className="flex flex-row items-center justify-between bg-sky-400 md:w-full   p-4 rounded-xl shadow mb-6">
            {/* Heading */}
            <div className="flex flex-row items-center">
                <FaHome className="text-white text-lg" />
                <span className="text-white mx-3">/</span>
                <h3 className="text-white text-xl">Home</h3>
            </div>
            {/* Input with icon inside */}
            <div className="relative w-70">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <FaSearch />
                </span>
                <input
                    type="text"
                    placeholder="Type Here"
                    className="pl-10  py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 md:w-full"
                />
            </div>
            {/* Icons */}
            <div className="flex flex-row items-center gap-4">
                <FaUser className="text-white text-xl mx-2" />
                <FaBell className="text-white text-xl" />
                <FaBars className="text-white text-xl " onClick={onMenuClick} />
            </div>
        </div>
        {/* box side */}
        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-3 justify-between ">
            {/* 1 */}
            <div className="flex flex-row items-center bg-white rounded-md shadow m-3 w-[230px] pb-2">
                <div className="p-3">
                    <h3 className="text-lg text-gray-600 font-bold">
                        TODAY'S MONEY
                    </h3>
                    <h4 className="font-bold text-sky-700">
                        $53,000
                    </h4>
                    <span className="text-green-500 font-bold text-sm">+55%</span> <span className="text-gray-400">Since yesterday</span>
                </div>
                {/* for icon */}
                <FaLayerGroup className="bg-blue-500 text-white rounded-full text-4xl mx-2 p-2" />
            </div>
            {/* 2 */}
            <div className="flex flex-row items-center bg-white rounded-md shadow m-3 w-[230px] pb-2">
                <div className="p-3">
                    <h3 className="text-lg text-gray-600 font-bold">
                        TODAY'S USER
                    </h3>
                    <h4 className="font-bold text-sky-700">
                        $3,000
                    </h4>
                    <span className="text-green-500 font-bold text-sm">-3%</span> <span className="text-gray-400">Since Last week</span>
                </div>
                {/* for icon */}
                <FaGlobeAfrica className="bg-red-500 text-white rounded-full text-4xl mx-2 p-2" />
            </div>
            {/* 3 */}
            <div className="flex flex-row items-center bg-white rounded-md shadow m-3 w-[230px] pb-2">
                <div className="p-3">
                    <h3 className="text-lg text-gray-600 font-bold">
                        NEWS CLIENTS
                    </h3>
                    <h4 className="font-bold text-sky-700">
                        $3,460
                    </h4>
                    <span className="text-orange-600 font-bold text-sm">-2%</span> <span className="text-gray-400"> Last quarter</span>
                </div>
                {/* for icon */}
                <FaFileAlt className="bg-green-500 text-white rounded-full text-4xl mx-2 p-2" />
            </div>
            {/* 4 */}
            <div className="flex flex-row items-center bg-white rounded-md shadow m-3 :w-[230px]  pb-2">
                <div className="p-3">
                    <h3 className="text-lg text-gray-600 font-bold">
                        SALES
                    </h3>
                    <h4 className="font-bold text-sky-700">
                        $103,430
                    </h4>
                    <span className="text-green-600 font-bold text-sm">-5%</span> <span className="text-gray-400"> last month</span>
                </div>
                {/* for icon */}
                <FaShoppingBag className="bg-orange-500 text-white rounded-full text-4xl mx-2 p-2" />
            </div>
        </div>
        {/* Line chart */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-40 gap-2">
            <SalesOverviewChart />
            {/* imag slider side */}
            <ImageSlider />
        </div>
        {/* country&Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 mt-2">
            {/* Country side */}
            <div className="mx-2 bg-white rounded-md shadow-md p-4">
        <h1 className="text-lg text-gray-800 font-normal mb-2">Sales By Country</h1>
        <table className="table-auto w-full my-2">
            <thead>
            <tr className="text-left bg-gray-100">
                <th className="py-2 px-2">Country</th>
                <th className="py-2 px-2">Sales</th>
                <th className="py-2 px-2">Value</th>
                <th className="py-2 px-2">Bounce</th>
            </tr>
            </thead>
            <tbody>
            <tr className="border-b">
                <td className="flex items-center gap-2 py-2 px-2">
                <img src="https://flagcdn.com/us.svg" alt="US" className="w-6 h-4 rounded-sm" />
                United States
                </td>
                <td className="py-2 px-2 text-gray-700">2,500</td>
                <td className="py-2 px-2 text-gray-700">$230,00</td>
                <td className="py-2 px-2 text-gray-700">29.9%</td>
            </tr>
            <tr className="border-b">
                <td className="flex items-center gap-2 py-2 px-2">
                <img src="https://flagcdn.com/br.svg" alt="Brazil" className="w-6 h-4 rounded-sm" />
                Brazil
                </td>
                <td className="py-2 px-2 text-gray-700">1,900</td>
                <td className="py-2 px-2 text-gray-700">$200,00</td>
                <td className="py-2 px-2 text-gray-700">24.5%</td>
            </tr>
            <tr className="border-b">
                <td className="flex items-center gap-2 py-2 px-2">
                <img src="https://flagcdn.com/de.svg" alt="Germany" className="w-6 h-4 rounded-sm" />
                Germany
                </td>
                <td className="py-2 px-2 text-gray-700">1,100</td>
                <td className="py-2 px-2 text-gray-700">$150,00</td>
                <td className="py-2 px-2 text-gray-700">19.2%</td>
            </tr>
            <tr>
                <td className="flex items-center gap-2 py-2 px-2">
                <img src="https://flagcdn.com/gb.svg" alt="Great Britain" className="w-6 h-4 rounded-sm" />
                Great Britain
                </td>
                <td className="py-2 px-2 text-gray-700">1,000</td>
                <td className="py-2 px-2 text-gray-700">$120,00</td>
                <td className="py-2 px-2 text-gray-700">17.5%</td>
            </tr>
            </tbody>
        </table>
        </div>
        {/* Categories side */}
    <div className="mx-2 bg-white shadow-md rounded-xl my-2 ">
    <h3 className="p-4 text-lg font-light">Categories</h3>
    <div className="flex flex-col gap-3 px-4 pb-4">
        {/* 1 */}
        <div className="flex flex-row justify-between items-center bg-gray-50 rounded-lg px-3 py-2">
        <FaMobile className="text-white text-2xl bg-gray-900 rounded-xl p-1" />
        <div className="flex-1 flex flex-col items-center">
            <h3 className="text-base font-normal text-gray-800">Devices</h3>
            <p className="text-sm font-light text-gray-500">250 in stock, 356+</p>
        </div>
        <FaArrowAltCircleRight className="text-xl text-gray-700" />
        </div>
        {/* 2 */}
        <div className="flex flex-row justify-between items-center bg-gray-50 rounded-lg px-3 py-2">
        <FaTicketAlt className="text-white text-2xl bg-blue-600 rounded-xl p-1" />
        <div className="flex-1 flex flex-col items-center">
            <h3 className="text-base font-normal text-gray-800">Tickets</h3>
            <p className="text-sm font-light text-gray-500">123 open, 45 closed</p>
        </div>
        <FaArrowAltCircleRight className="text-xl text-gray-700" />
        </div>
        {/* 3 */}
        <div className="flex flex-row justify-between items-center bg-gray-50 rounded-lg px-3 py-2">
        <FaSmileBeam className="text-white text-2xl bg-green-600 rounded-xl p-1" />
        <div className="flex-1 flex flex-col items-center">
            <h3 className="text-base font-normal text-gray-800">Customers</h3>
            <p className="text-sm font-light text-gray-500">1,200 happy users</p>
        </div>
        <FaArrowAltCircleRight className="text-xl text-gray-700" />
        </div>
        {/* 4 */}
        <div className="flex flex-row justify-between items-center bg-gray-50 rounded-lg px-3 py-2">
        <FaFileAlt className="text-white text-2xl bg-orange-500 rounded-xl p-1" />
        <div className="flex-1 flex flex-col items-center">
            <h3 className="text-base font-normal text-gray-800">Reports</h3>
            <p className="text-sm font-light text-gray-500">Monthly, Weekly, Daily</p>
        </div>
        <FaArrowAltCircleRight className="text-xl text-gray-700" />
        </div>
    </div>
    </div>
            </div>
            {/* footer */}
            <Footer />
        </section>
    )
}

export default DetailsDashboard