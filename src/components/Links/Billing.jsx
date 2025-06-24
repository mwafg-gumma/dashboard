import { useNavigate } from "react-router-dom"
import { FaHome,FaBell,FaBars, FaWifi ,FaBuilding ,FaPaypal ,FaFilePdf,FaPen,FaTrash ,FaCalculator ,FaArrowCircleUp,FaArrowAltCircleDown, FaArrowAltCircleUp ,FaSpinner} from "react-icons/fa"
import Footer from '../Footer'
const Billing = ({onMenuClick}) => {
    const navigate = useNavigate()
return (
    <>
    <section>
        <div className="flex flex-row items-center bg-sky-400 py-6 px-2 md:px-56 rounded-xl shadow mb-6">
                                {/* Heading */}
                                <div className="flex flex-row items-center">
                                <button onClick={() => navigate("/")}>
                                <FaHome className="text-white text-lg" />
                                </button>
                                    <span className="text-white mx-3">/</span>
                                    <h3 className="text-white text-xl">Billing</h3>
                                </div>
                                {/* Icons */}
                                <div className="flex flex-row items-center gap-4 mx-5">
                                    <FaBell className="text-white text-xl" />
                                    <FaBars className="text-white text-xl cursor-pointer "onClick={onMenuClick}  />
                                </div>
                            </div>
                            {/* for carding */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center ">
                                {/* card1 */}
                                <div className=" rounded-md bg-gray-900 text-white md:w-[320px] w-[360px] p-3 md:-mt-24">
                                    <FaWifi className="text-2xl " />
                                    <div className="my-8 mx-5">
                                        <span className="px-3">8764</span>
                                        <span className="px-3">8764</span>
                                        <span className="px-3">8764</span>
                                        <span className="px-3">8764</span>
                                    </div>
                                    <div className="flex flex-row items-center justify-between">
                                        <div className="mx-5">
                                            <h3 className="text-gray-300 font-normal text-sm">
                                                Card Holder
                                            </h3>
                                            <h4 className="text-sm font-normal">
                                                Jack Peterson
                                            </h4>
                                        </div>
                                        <div className="mx-3">
                                            <h2 className="text-xl text-gray-300">
                                                Expires
                                            </h2>
                                            <p className="font-bold text-xl">
                                                11/22
                                            </p>
                                        </div>
                                        <div className="mx-2">
                                            <span className="bg-red-500 rounded-full text-2xl p-3 inline-block "></span>
                                            <span className="bg-orange-400 rounded-full text-2xl p-3 inline-block -ml-2"></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                                {/* 2 */}
                                <div className="flex flex-col md:flex-row items-center justify-center md:-mt-24">
                                        <div className="items-center text-center bg-white rounded-md shadow-md mx-3 md:w-[200px] w-full my-2">
                                    <FaBuilding className="text-white md:mx-10 mx-40 bg-blue-500 text-4xl p-2 rounded-md mt-3 mb-1"/>
                                <h3 className="text-xl text-blue-900 py-2">Salary</h3>
                                    <p className="py-2 text-sm text-gray-600 ">Belong Interactive</p>
                                    <p className="py-3 text-xl font-normal">+ $2000</p>
                                    </div>
                                {/* 3 */}
                                <div className="items-center text-center bg-white rounded-md shadow-md   mx-3 md:w-[200px] w-full my-2">
                                    <FaPaypal className="text-white md:mx-10 mx-40 bg-blue-500 text-4xl p-1 rounded-md mt-1 mb-3"/>
                                <h3 className="text-xl text-blue-900 py-2 ">Salary</h3>
                                    <p className="py-2 text-sm text-gray-600 ">Belong Interactive</p>
                                    <p className="py-3 text-xl font-normal">+ $2000</p>
                                    </div>
                                </div>
                                {/* 3*/}
                                <div className="bg-white shadow-md rounded-md mx-3">
                                    <div className="flex flex-rwo items-center justify-between p-3">
                                        <h1 className="text-lg font-normal px-2">Invoices</h1>
                                        <button className="border border-blue-300 rounded-md py-2 px-4">View All</button>
                                    </div>
                                    {/* for details */}
                                    <div className="flex flex-row items-center justify-between px-2 my-2">
                                        <div className="mx-2">
                                            <h1 className="py-2 text-gray-600 font-normal ">March,01,2020</h1>
                                            <p className="text-sm text-gray-400 ">#MS-415646</p>
                                        </div>
                                        <p className="text-gray-400 font-light ">$180</p>
                                        <div className="flex flex-row items-center">
                                            <FaFilePdf className="text-lg" />
                                            <p className="text-gray-500 px-2">PDF</p>
                                        </div>
                                        </div>
                                        {/* 2 */}
                                                <div className="flex flex-row items-center justify-between px-2 my-2">
                                        <div className="mx-2">
                                            <h1 className="py-2 text-gray-600 font-normal ">March,01,2020</h1>
                                            <p className="text-sm text-gray-400 ">#MS-415646</p>
                                        </div>
                                        <p className="text-gray-400 font-light ">$180</p>
                                        <div className="flex flex-row items-center">
                                            <FaFilePdf className="text-lg" />
                                            <p className="text-gray-500 px-2">PDF</p>
                                        </div>
                                        </div>
                                        {/*3  */}
                                                <div className="flex flex-row items-center justify-between px-2 my-2">
                                        <div className="mx-2">
                                            <h1 className="py-2 text-gray-600 font-normal ">March,01,2020</h1>
                                            <p className="text-sm text-gray-400 ">#MS-415646</p>
                                        </div>
                                        <p className="text-gray-400 font-light ">$180</p>
                                        <div className="flex flex-row items-center">
                                            <FaFilePdf className="text-lg" />
                                            <p className="text-gray-500 px-2">PDF</p>
                                        </div>
                                        </div>
                                        {/* 4 */}
                                                <div className="flex flex-row items-center justify-between px-2 my-2">
                                        <div className="mx-2">
                                            <h1 className="py-2 text-gray-600 font-normal ">March,01,2020</h1>
                                            <p className="text-sm text-gray-400 ">#MS-415646</p>
                                        </div>
                                        <p className="text-gray-400 font-light ">$180</p>
                                        <div className="flex flex-row items-center">
                                            <FaFilePdf className="text-lg" />
                                            <p className="text-gray-500 px-2">PDF</p>
                                        </div>
                                        </div>
                                        {/*  */}
                                        {/*  */}
                                </div>
                            </div>
                            {/* for last card */}
                            <div className="bg-white shadow-md rounded-md mx-3 my-4 md:w-[600px] md:-mt-20 md:ml-5">
                                <div className="flex flex row items-center justify-between p-3">
                                    <h3 className="text-lg font-normal text-gray-600">Payment Method</h3>
                                    <button className="text-white bg-black rounded-md p-3"> + Add New Card</button>
                                </div>
                                {/* 1 */}
                                <div className="flex md:flex-row flex-col items-center justify-between my-3">
                                <div className="border py-2 px-5 mx-1 flex flex-row items-center justify-between rounded-md mb-3 ">
                                    <div className="mx-2 ">
                                            <span className="bg-red-500 rounded-full text-3xl p-2 inline-block "></span>
                                            <span className="bg-orange-400 rounded-full text-3xl p-2 inline-block -ml-2"></span>
                                            <p className="text-sm">MD</p>
                                    </div>
                                    <div className="mx-2">
                                        <span>****</span>
                                    </div>
                                    <div className="mx-2">
                                        <span>****</span>
                                    </div>
                                    <div className="mx-1">
                                        <span>****</span>
                                    </div>
                                    <div className="flex flex-rwo items-center mx-2">
                                        <p className="text-gray-500 font-normal px-1">7852</p>
                                        <p><FaPen className="text-sm text-gray-600 "/> </p>
                                    </div>
                                </div>
                                {/* 2 */}
                                    <div className="flex flex-row ms:flex-col items-center justify-between my-3">
                                <div className="border px-3 py-4 mx-1 flex flex-row items-center justify-between rounded-md mb-3 ">
                                    <div className="mx-2 ">
                                            <p className="text-xl font-bold text-blue-500">VISA</p>
                                    </div>
                                    <div className="mx-2">
                                        <span>****</span>
                                    </div>
                                    <div className="mx-2">
                                        <span>****</span>
                                    </div>
                                    <div className="mx-2">
                                        <span>****</span>
                                    </div>
                                    <div className="flex flex-rwo items-center">
                                        <p className="text-gray-500 font-normal px-3">5248</p>
                                        <p><FaPen className="text-sm mx-2 text-gray-600 "/> </p>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                            {/* for information */}
                            <div className="grid grid-cols-1  md:grid-cols-2 gap-3 mx-3 mt-5 items-center">
                                {/* 1 */}
                                <div className="md:mx-1 -ml-7">
                                <div className="bg-white rounded-md shadow-md mx-3 my-2">
                        <h1 className="text-lg font-normal text-gray-600 p-3">Billing Information</h1>
                        <div className="flex flex-row justify-between gap-3 m-2 bg-gray-50 rounded-xl">
                            {/* Billing Row */}
                            <div className="flex flex-row justify-between items-center w-full px-4 py-3">
                            {/* Column 1: Name and details */}
                            <div className="flex-1">
                                <h2 className="font-bold text-gray-800 text-lg">Oliver Liam</h2>
                                <p className="text-gray-600 text-sm">Company Name: <span className="font-bold">Viking Burrito</span></p>
                                <p className="text-gray-600 text-sm">Email Address: <span className="font-bold">oliver@burrito.com</span></p>
                                <p className="text-gray-600 text-sm">VAT Number: <span className="font-bold">FRB1235476</span></p>
                            </div>
                            {/* Column 2: Delete */}
                            <div className="flex flex-col items-center mx-4 min-w-[70px]">
                                <FaTrash className="text-red-500 text-2xl mb-1" />
                                <span className="text-red-500 text-sm">Delete</span>
                            </div>
                            {/* Column 3: Edit */}
                            <div className="flex flex-col items-center min-w-[70px]">
                                <FaPen className="text-gray-500 text-xl mb-1" />
                                <span className="text-gray-500 text-sm">Edit</span>
                            </div>
                            </div>
                            {/* Repeat the above div for more billing rows if needed */}
                        </div>
                        </div>
                        {/* 2 */}
                                <div className="bg-white rounded-md shadow-md mx-3 my-2">
                        <div className="flex flex-row justify-between gap-3 m-2 bg-gray-50 rounded-xl">
                            {/* Billing Row */}
                            <div className="flex flex-row justify-between items-center w-full px-4 py-3">
                            {/* Column 1: Name and details */}
                            <div className="flex-1">
                                <h2 className="font-bold text-gray-800 text-lg">Oliver Liam</h2>
                                <p className="text-gray-600 text-sm">Company Name: <span className="font-bold">Viking Burrito</span></p>
                                <p className="text-gray-600 text-sm">Email Address: <span className="font-bold">oliver@burrito.com</span></p>
                                <p className="text-gray-600 text-sm">VAT Number: <span className="font-bold">FRB1235476</span></p>
                            </div>
                            {/* Column 2: Delete */}
                            <div className="flex flex-col items-center mx-4 min-w-[70px]">
                                <FaTrash className="text-red-500 text-2xl mb-1" />
                                <span className="text-red-500 text-sm">Delete</span>
                            </div>
                            {/* Column 3: Edit */}
                            <div className="flex flex-col items-center min-w-[70px]">
                                <FaPen className="text-gray-500 text-xl mb-1" />
                                <span className="text-gray-500 text-sm">Edit</span>
                            </div>
                            </div>
                            {/* Repeat the above div for more billing rows if needed */}
                        </div>
                        </div>
                        {/* 3 */}
                        <div className="bg-white rounded-md shadow-md mx-3 my-2">
                        <div className="flex flex-row justify-between gap-3 m-2 bg-gray-50 rounded-xl">
                            {/* Billing Row */}
                            <div className="flex flex-row justify-between items-center w-full px-4 py-3">
                            {/* Column 1: Name and details */}
                            <div className="flex-1">
                                <h2 className="font-bold text-gray-800 text-lg">Oliver Liam</h2>
                                <p className="text-gray-600 text-sm">Company Name: <span className="font-bold">Viking Burrito</span></p>
                                <p className="text-gray-600 text-sm">Email Address: <span className="font-bold">oliver@burrito.com</span></p>
                                <p className="text-gray-600 text-sm">VAT Number: <span className="font-bold">FRB1235476</span></p>
                            </div>
                            {/* Column 2: Delete */}
                            <div className="flex flex-col items-center mx-4 min-w-[70px]">
                                <FaTrash className="text-red-500 text-2xl mb-1" />
                                <span className="text-red-500 text-sm">Delete</span>
                            </div>
                            {/* Column 3: Edit */}
                            <div className="flex flex-col items-center min-w-[70px]">
                                <FaPen className="text-gray-500 text-xl mb-1" />
                                <span className="text-gray-500 text-sm">Edit</span>
                            </div>
                            </div>
                        </div>
                        </div>
                                </div>
                        {/*  2*/}
                        <div className="bg-white shadow-md rounded-md md:mx-3 -ml-8 my-2 ">
                            <div className="flex flex-row items-center justify-between py-4">
                                <h3 className="md:text-lg text-sm font-normal text-gray-600 px-4">Your Transaction's</h3>
                                <div className="flex flex-row items-center md:mx-3 -ml-8 text-gray-500">
                                    <FaCalculator />
                                    <p className="px-1 md:px-3 text-sm">23 - 30 March 2050</p>
                                </div>
                            </div>
                            <h3 className="px-4 font-normal text-gray-700 py-5"> NEWEST</h3>
                            {/* 1 */}
                            <div className="my-4 flex flex-row items-center justify-between mx-3">
                                <div className="flex flex-row items-center">
                                    <FaArrowAltCircleDown className="text-red-500 border border-red-500 rounded-full p-2 text-4xl" />
                                    <div className="mx-3 items-center">
                                        <span >Netflix</span>
                                        <p className="text-gray-500"> 27 March 2020, at 12:30 PM</p>
                                    </div>
                                </div>
                                <h3 className="text-red-500 md:mx-3 mx-1 text-sm">- $ 2,500</h3>
                            </div>
                                  {/* 1 */}
                            <div className="my-4 flex flex-row items-center justify-between mx-3">
                                <div className="flex flex-row items-center">
                                    <FaArrowAltCircleUp className="text-green-500 border border-green-500 rounded-full p-2 text-4xl" />
                                    <div className="mx-3 items-center">
                                        <span>Netflix</span>
                                        <p className="text-gray-500"> 27 March 2020, at 04:30 AM</p>
                                    </div>
                                </div>
                                <h3 className="text-green-500 md:mx-3 mx-1 text-sm">+ $ 2,500</h3>
                            </div>
                            {/*  */}
                            <h3 className="px-4 font-normal text-gray-700 py-5"> YESTERDAY</h3>
                            {/* 1 */}
                            <div className="my-4 flex flex-row items-center justify-between mx-3">
                                <div className="flex flex-row items-center">
                                    <FaArrowAltCircleUp className="text-green-500 border border-green-500 rounded-full p-2 text-4xl" />
                                    <div className="mx-3 items-center">
                                        <span>Stripe</span>
                                        <p className="text-gray-500">26 March 2020, at 13:45 PM</p>
                                    </div>
                                </div>
                                <h3 className="text-green-500  md:mx-3 mx-1 text-sm">+ $ 750</h3>
                            </div>
                            {/* 1 */}
                            <div className="my-4 flex flex-row items-center justify-between mx-3">
                                <div className="flex flex-row items-center">
                                    <FaArrowAltCircleUp className="text-green-500 border border-green-500 rounded-full p-2 text-4xl" />
                                    <div className="mx-3 items-center">
                                        <span>HubSpot</span>
                                        <p className="text-gray-500"> 27 March 2020, at 04:30 AM</p>
                                    </div>
                                </div>
                                <h3 className="text-green-500  md:mx-3 mx-1 text-sm">+ $ 1,000</h3>
                            </div>
                            {/* 1 */}
                            <div className="my-4 flex flex-row items-center justify-between mx-3">
                                <div className="flex flex-row items-center">
                                    <FaArrowAltCircleUp className="text-green-500 border border-green-500 rounded-full p-2 text-4xl" />
                                    <div className="mx-3 items-center">
                                        <span>Creative Tim</span>
                                        <p className="text-gray-500"> 27 March 2020, at 04:30 AM</p>
                                    </div>
                                </div>
                                <h3 className="text-green-500  md:mx-3 mx-1 text-sm">+ $ 2,500  </h3>
                            </div>
                            {/* 1 */}
                            <div className="my-4 flex flex-row items-center justify-between mx-3">
                                <div className="flex flex-row items-center">
                                    <FaSpinner className="text-gray-500 border border-gray-500 rounded-full p-2 text-4xl" />
                                    <div className="mx-3 items-center">
                                        <span>Webflow</span>
                                        <p className="text-gray-500"> 27 March 2020, at 04:30 AM</p>
                                    </div>
                                </div>
                                <h3 className="text-gray-500  md:mx-3 mx-1 text-sm">Pending </h3>
                            </div>
                            {/*  */}
                        </div>
                        {/*  */}
                </div>
                {/* footer */}
                <div className="mt-5">
                    <Footer />
                </div>
            </section>
    </>
    )
}

export default Billing
