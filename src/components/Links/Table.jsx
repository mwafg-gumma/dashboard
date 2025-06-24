import { FaHome,FaSearch,FaUser,FaBell,FaBars } from "react-icons/fa"
import Footer from "../Footer"
import { useNavigate } from "react-router-dom"
import user1 from "../../assets/image/user1.jpg"
import user2 from "../../assets/image/user2.jpg"
import user3 from "../../assets/image/user3.jpg"
import user4 from "../../assets/image/user4.jpg"
import user5 from "../../assets/image/user5.jpg"
import user6 from "../../assets/image/user6.jpg"

const Table = ({onMenuClick}) => {
    const navigate = useNavigate()
return (
    <>
        <section >
                <div className="flex flex-row items-center justify-between bg-sky-400  p-4 rounded-xl shadow mb-6">
                        {/* Heading */}
                        <div className="flex flex-row items-center">
                        <button onClick={() => navigate("/")}>
                        <FaHome className="text-white text-lg" />
                        </button>
                            <span className="text-white mx-3">/</span>
                            <h3 className="text-white text-xl">Tables</h3>
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
                            <FaBars className="text-white text-xl cursor-pointer " onClick={onMenuClick} />
                        </div>
                    </div>
                    {/*  tables*/}
                    <div className="mx-2 bg-white shadow-md rounded-md p-2 my-2">
                        <h1 className="text-xl font-normal text-gray-900 p-3">
                            Authors tables
                        </h1>
                        {/* for table */}
                        <table className="table-auto w-full my-2">
                            <thead >
                                <tr className="text-left ">
                                <th className="p-2 font-normal text-gray-500 ">AUTHOR</th>
                                <th className="p-2 px-1 font-normal text-gray-500 ">FUNCTION</th>
                                <th className="p-2 font-normal text-gray-500">STATUS</th>
                                <th className="p-2 font-normal text-gray-500">EMPLOYED</th>
                                <th className="p-2 font-normal text-gray-500">ACTION</th>
                                </tr>
                            </thead>
                            <tbody >
                                {/* 1 */}
                                <tr>
                                    <td className="flex flex-row items-center gap-3 my-3">
                                        <img src={user1} alt="profile img" className="w-[40px] h-[40px] rounded-full object-cover" loading="lazy" />
                                        <div className="px-2">
                                            <h3 className="px-2 text-gray-900 text-xl font-normal">John Michael </h3>
                                            <span className="px-2 text-gray-500">john@creative-tim.com</span>
                                        </div>
                                    </td>
                                    <td >
                                        <h2 className=" font-normal text-gray-600">Manager</h2>
                                        <p className="text-gray-400 ">Organization</p>
                                    </td>
                                    <td>
                                        <p className="text-white  rounded-md w-[70px] px-2 py-1 text-sm   bg-gradient-to-r from-green-300 to-blue-400 ">ONLINE</p>
                                    </td>
                                    <td>
                                        <p className="text-gray-400 px-3">23/04/18</p>
                                    </td>
                                    <td>
                                        <p className="text-gray-600 px-4 font-bold">Edit</p>
                                    </td>
                                </tr>
                                {/* 2 */}
                                <tr className="p-1 ">
                                    <td className="flex flex-row items-center gap-3 mb-3">
                                        <img src={user6} alt="profile img" className="w-[40px] h-[40px] rounded-full object-cover" loading="lazy" />
                                        <div className="px-2">
                                            <h3 className="px-2 text-gray-900 text-xl font-normal">Alexa Liras </h3>
                                            <span className="px-2 text-gray-500">Alexa@creative-tim.com</span>
                                        </div>
                                    </td>
                                    <td >
                                        <h2 className=" font-normal text-gray-600">Programator</h2>
                                        <p className="text-gray-400 ">Developer</p>
                                    </td>
                                    <td>
                                        <p className="text-white  rounded-md w-[70px] px-2 py-1 text-sm  bg-gradient-to-r from-gray-600 to-gray-400 ">OFFLINE</p>
                                    </td>
                                    <td>
                                        <p className="text-gray-400 px-3">11/01/19</p>
                                    </td>
                                    <td>
                                        <p className="text-gray-600 px-4 font-bold">Edit</p>
                                    </td>
                                </tr>
                                {/* 3*/}
                                <tr className="p-1 ">
                                    <td className="flex flex-row items-center gap-3 mb-3">
                                        <img src={user2} alt="profile img" className="w-[40px] h-[40px] rounded-full object-cover" loading="lazy" />
                                        <div className="px-2">
                                            <h3 className="px-2 text-gray-900 text-xl font-normal">Amira Metrics  </h3>
                                            <span className="px-2 text-gray-500">Amira@creative-tim.com</span>
                                        </div>
                                    </td>
                                    <td >
                                        <h2 className=" font-normal text-gray-600">Manager</h2>
                                        <p className="text-gray-400 ">Organization</p>
                                    </td>
                                    <td>
                                        <p className="text-white  rounded-md w-[70px] px-2  bg-gradient-to-r from-green-300 to-blue-400 ">ONLINE</p>
                                    </td>
                                    <td>
                                        <p className="text-gray-400 px-3">15/08/10</p>
                                    </td>
                                    <td>
                                        <p className="text-gray-600 px-4 font-bold">Edit</p>
                                    </td>
                                </tr>
                                {/* 4 */}
                                <tr className="p-1 ">
                                    <td className="flex flex-row items-center gap-3 mb-3">
                                        <img src={user3} alt="profile img" className="w-[40px] h-[40px] rounded-full object-cover" loading="lazy" />
                                        <div className="px-2">
                                            <h3 className="px-2 text-gray-900 text-xl font-normal">Laurent Perrier </h3>
                                            <span className="px-2 text-gray-500">Laurent@creative-tim.com</span>
                                        </div>
                                    </td>
                                    <td >
                                        <h2 className=" font-normal text-gray-600">Executive</h2>
                                        <p className="text-gray-400 ">Projects</p>
                                    </td>
                                    <td>
                                        <p className="text-white  rounded-md w-[70px] px-2 py-1 text-sm    bg-gradient-to-r from-green-300 to-blue-400 ">ONLINE</p>
                                    </td>
                                    <td>
                                        <p className="text-gray-400 px-3">19/09/17</p>
                                    </td>
                                    <td>
                                        <p className="text-gray-600 px-4 font-bold">Edit</p>
                                    </td>
                                </tr>
                                {/* 5 */}
                                <tr className="p-1 ">
                                    <td className="flex flex-row items-center gap-3 mb-3">
                                        <img src={user4} alt="profile img" className="w-[40px] h-[40px] rounded-full object-cover" loading="lazy" />
                                        <div className="px-2">
                                            <h3 className="px-2 text-gray-900 text-xl font-normal">Michael Levi </h3>
                                            <span className="px-2 text-gray-500">Michael@creative-tim.com</span>
                                        </div>
                                    </td>
                                    <td >
                                        <h2 className=" font-normal text-gray-600">Programator</h2>
                                        <p className="text-gray-400 ">Developer</p>
                                    </td>
                                    <td>
                                        <p className="text-white  rounded-md w-[70px] px-2 py-1 text-sm  bg-gradient-to-r from-gray-500 to-gray-300 ">OFFLINE</p>
                                    </td>
                                    <td>
                                        <p className="text-gray-400 px-3">23/12/08</p>
                                    </td>
                                    <td>
                                        <p className="text-gray-600 px-4 font-bold">Edit</p>
                                    </td>
                                </tr>
                                {/* 6 */}
                                <tr className="p-1 ">
                                    <td className="flex flex-row items-center gap-3 mb-3">
                                        <img src={user5} alt="profile img" className="w-[40px] h-[40px] rounded-full object-cover" />
                                        <div className="px-2">
                                            <h3 className="px-2 text-gray-900 text-xl font-normal">Richard Gran </h3>
                                            <span className="px-2 text-gray-500">Richard@creative-tim.com</span>
                                        </div>
                                    </td>
                                    <td >
                                        <h2 className=" font-normal text-gray-600">Manager</h2>
                                        <p className="text-gray-400 ">Executive</p>
                                    </td>
                                    <td>
                                        <p className="text-white  rounded-md w-[70px] px-2 py-1 text-sm   bg-gradient-to-r from-green-300 to-blue-400 ">ONLINE</p>
                                    </td>
                                    <td>
                                        <p className="text-gray-400 px-3">03/10/21</p>
                                    </td>
                                    <td>
                                        <p className="text-gray-600 px-4 font-bold">Edit</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div> 
                    <Footer />
                    </section>
    </>
)
}

export default Table
