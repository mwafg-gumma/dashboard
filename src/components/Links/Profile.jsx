import user6 from "../../assets/image/user6.png"
import { useNavigate } from "react-router-dom"
import {FaHome ,FaSearch,FaBell,FaUser,FaBars ,FaCube,FaEnvelope,FaTimesCircle,FaCheckCircle, FaPen,FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa'
import { FaGear } from "react-icons/fa6"
import user7 from '../../assets/image/user7.png'
import user8 from '../../assets/image/user8.png'
import user2 from '../../assets/image/user2.png'
import user5 from '../../assets/image/user5.png'
import user3 from '../../assets/image/user3.png'
import project2 from "../../assets/image/project2.png"
import project3 from "../../assets/image/project3.png"
import project4 from "../../assets/image/project4.png"

const Profile = ({onMenuClick}) => {
    const navigate = useNavigate()
return (
    <>
        <section>
        <div className="flex flex-row items-center justify-between bg-sky-400  p-4 rounded-xl shadow mb-6">
                {/* Heading */}
                <div className="flex flex-row items-center">
                <button onClick={() => navigate("/")}>
                <FaHome className="text-white text-lg" />
                </button>
                    <span className="text-white mx-2">/</span>
                    <h3 className="text-white text-xl mx-2">Profile</h3>
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
            {/* profile  side*/}
            <div className="flex flex-col md:flex-row justify-between items-center bg-white shadow-md rounded-md mt-20 mx-3 py-3">
                {/* name&img */}
                <div className="flex flex-row items-center mx-2">
                    <img src={user6} alt="profile img" className="w-full h-[100px] md:w-[50px] md:h-[50px] object-cover rounded-xl" />
                    <div className="px-5">
                        <h1 className="md:text-xl text-sm md:px-2 px-8 ">
                            Alex Thompson
                        </h1>
                        <p className="text-gray-600 md:px-0 px-1 text-sm">
                            CEO / Co-Founder
                        </p>
                    </div>
                </div>
                {/* icon side */}
                <div className="flex flex-row items-center bg-gray-50 py-1 rounded-md shadow-md mx-3">
                    <div className="flex flex-row rounded-xl shadow-md  bg-gray-100 items-center p-2">
                    <FaCube className="text-3xl p-1"/>
                    <p className="text-lg px-2 text-gray-600">APP</p>
                    </div>
                    <div className="flex flex-rounded-xl  items-center p-2">
                        <FaEnvelope className="text-3xl p-1"/>
                    <p className="text-lg px-2 text-gray-600">Message</p>
                    </div>
                    <div className="flex flex-rounded-xl  items-center p-2">
                        <FaGear className="text-3xl p-1"/>
                    <p className="text-xl px-2 text-gray-600">Settings</p>
                    </div>
                </div>
            </div>
            {/* profile settings */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 my-5 mx-3">
                {/* crd1 */}
                <div className="mx-2 bg-white shadow-md rounded-md p-4">
                    <h1 className="p-2 text-xl font-normal text-gray-800">
                        platform settings
                    </h1>
                    <h3 className="p-2 font-bold text-gray-500">
                        ACCOUNT
                    </h3>
                    <div className="mx-2">
                        <div className="flex flex-row items-center ga3 py-2">
                            <FaCheckCircle className="text-green-400 md:text-2xl text-lg "/>
                            <p className="px-4 text-gray-500">
                                Email me when someone follows me
                            </p>
                        </div>
                    </div>
                {/* 2 */}
                    <div className="mx-2">
                        <div className="flex flex-row items-center ga3 py-2">
                            <FaTimesCircle className="text-red-400 md:text-2xl text-lg "/>
                            <p className="px-4 text-gray-500">
                                Email me when someone answers on my post
                            </p>
                        </div>
                    </div>
                {/* 3 */}
                    <div className="mx-2">
                        <div className="flex flex-row items-center ga3 py-2">
                            <FaCheckCircle className="text-green-400 md:text-2xl text-lg "/>
                            <p className="px-4 text-gray-500">
                                Email me when someone mentions me
                            </p>
                        </div>
                    </div>
                    {/* application */}
                    <h3 className="p-2 font-bold text-gray-500">
                            APPLICATION
                    </h3>
                    <div className="mx-2">
                        <div className="flex flex-row items-center ga3 py-2">
                            <FaTimesCircle className="text-red-400 md:text-2xl text-xl "/>
                            <p className="px-4 text-gray-500 text-sm">
                                New launches and projects
                            </p>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="mx-2">
                        <div className="flex flex-row items-center ga3 py-2">
                            <FaCheckCircle className="text-green-400 md:text-2xl text-xl "/>
                            <p className="px-4 text-gray-500 text-sm">
                                Monthly product updates
                            </p>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className="mx-2">
                        <div className="flex flex-row items-center ga3 py-2">
                            <FaCheckCircle className="text-green-400 md:text-2xl text-xl "/>
                            <p className="px-4 text-gray-500 text-sm">
                                Subscribe to newsletter
                            </p>
                        </div>
                    </div>
                    </div>
                {/* card 2 */}
                <div className="bg-white rounded-md shadow-md mx-1 pb-11">
                    <div className="flex flex-row items-center justify-between p-3">
                        <h3 className="font-normal text-xl text-gray-700">
                            profile information
                        </h3>
                        <FaPen className="mx-2 text-gray-500"/>
                    </div>
                    <p className="p-3 text-gray-500">
                        Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is no. If two equally difficult paths,
                        choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
                    </p>
                    {/* name&email side */}
                    <div>
                        {/* name */}
                        <div className=" flex flex-row items-center px-4 py-2">
                        <h3 className="text-sm font-bold text-gray-600 ">
                        full name: 
                        </h3>
                        <span className="px-1 text-gray-400 font-light mx-3">
                        Alec M. Thompson
                        </span>
                    </div>
                    {/* mobile */}
                        <div className=" flex flex-row items-center px-4 py-2">
                        <h3 className="text-sm font-bold text-gray-600 ">
                        Mobile: 
                        </h3>
                        <span className="px-1 text-gray-400 font-light mx-3">
                            (44) 123 1234 123
                        </span>
                    </div>
                    {/* email */}
                        <div className=" flex flex-row items-center px-4 py-2">
                        <h3 className="text-sm font-bold text-gray-600 ">
                        Email: 
                        </h3>
                        <span className="px-1 text-gray-400 font-light mx-3">
                            alecthompson@mail.com
                        </span>
                    </div>
                    {/* location */}
                        <div className=" flex flex-row items-center px-4 py-2">
                        <h3 className="text-sm font-bold text-gray-600 ">
                        Location: 
                        </h3>
                        <span className="px-1 text-gray-400 font-light mx-3">
                        USA
                        </span>
                    </div>
                    {/* social */}
                        <div className=" flex flex-row items-center px-4 py-2">
                        <h3 className="text-sm font-bold text-gray-600 ">
                        Social: 
                        </h3>
                        <div className=" flex flex-row items-center px-1 text-gray-400 font-light mx-3">
                            <FaTwitter className="text-sky-400 text-xl mx-1"/>
                            <FaFacebook className="text-blue-500 text-xl mx-1"/>
                            <FaInstagram className="text-red-400 text-xl mx-1"/>
                        </div>
                    </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className="bg-white rounded-md shadow-md my-2 ">
                <h1 className="px-2 py-5 text-xl font-normal text-gray-800 ">conversations</h1>
                {/* 1 */}
                <div className="flex flex-row items-center justify-between mx-2 my-2 ">
                <img src={user7} alt="profile" loading="lazy" className="md:w-[80px] w-[60px] h-[60px] object-cover rounded-md" />
                <div className="mx-4">
                    <h1 className="font-bold text-sm text-gray-900 py-1">
                        Sophie B
                    </h1>
                    <p className="text-gray-600 text-sm">
                        Hi! I need more information..
                    </p>
                </div>
                <button className="text-blue-400 font-bold mx-2" >
                    Replay
                </button>
                </div >
                {/* 2 */}
                <div className="flex flex-row items-center justify-between mx-2 my-2 ">
                <img src={user8} alt="profile" loading="lazy" className="w-[60px] h-[60px] object-cover rounded-md" />
                <div className="mx-4">
                    <h1 className="font-bold text-sm text-gray-900 py-1">
                        Anne Marie
                    </h1>
                    <p className="text-gray-600 text-sm">
                        Awesome work, can you..
                    </p>
                </div>
                <button className="text-blue-400 font-bold mx-2" >
                    Replay
                </button>
                </div >
                {/* 3 */}
                <div className="flex flex-row items-center justify-between mx-2 my-2 ">
                <img src={user2} alt="profile" loading="lazy" className="w-[60px] h-[60px] object-cover rounded-md" />
                <div className="mx-4">
                    <h1 className="font-bold text-sm text-gray-900 py-1">
                        Ivanna
                    </h1>
                    <p className="text-gray-600 text-sm">
                        About files I can..
                    </p>
                </div>
                <button className="text-blue-400 font-bold mx-2" >
                    Replay
                </button>
                </div >
                {/* 4 */}
                <div className="flex flex-row items-center justify-between mx-2 my-2 ">
                <img src={user3} alt="profile" loading="lazy" className="w-[60px] h-[60px] object-cover rounded-md" />
                <div className="mx-4">
                    <h1 className="font-bold text-sm text-gray-900 py-1">
                        Peterson
                    </h1>
                    <p className="text-gray-600 text-sm">
                        Have a great afternoon..
                    </p>
                </div>
                <button className="text-blue-400 font-bold mx-2" >
                    Replay
                </button>
                </div >
                {/* 5 */}
                    <div className="flex flex-row items-center justify-between mx-2 my-2 ">
                <img src={user5} alt="profile" loading="lazy" className="w-[60px] h-[60px] object-cover rounded-md" />
                <div className="mx-4">
                    <h1 className="font-bold text-sm text-gray-900 py-1">
                        Nick Daniel
                    </h1>
                    <p className="text-gray-600 text-sm">
                        Hi! I need more information..
                    </p>
                </div>
                <button className="text-blue-400 font-bold mx-2" >
                    Replay
                </button>
                </div >
                {/* 6 */}
                </div>
                {/*  */}
            </div>
            {/* project side */}
<div className="bg-white shadow-md rounded-md mx-1 mt-2">
    <h1 className="p-3 text-gray-700 font-normal">Project</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-1 mt-3">
    {/* Project Card 1 */}
    <div className=" p-4 flex flex-col items-center">
        <img src={project2} loading="lazy" alt="project img" className="rounded-md h-40 object-cover mb-3 w-full" />
        <h2 className="text-lg font-bold text-gray-800 mb-1 md:-ml-24 -ml-80">Project #1</h2>
        <h3 className="text-gray-600 font-semibold mb-1 md:-ml-24 -ml-80">Modern</h3>
        <p className="text-sm text-gray-500 mb-3 ">
            As Uber works through a huge amount of internal management turmoil.
        </p>
        <div className="flex flex-row items-center justify-between w-full mt-auto">
            <button className="border border-blue-300 rounded-md px-2 py-2 text-sm text-blue-400 font-semibold">
            View Project
            </button>
            <div className="flex flex-row ml-2">
            <img src={user2} alt="user img" className="w-7 h-7 rounded-full object-cover -mx-1" />
            <img src={user3} alt="user img" className="w-7 h-7 rounded-full object-cover -mx-1" />
            <img src={user7} alt="user img" className="w-7 h-7 rounded-full object-cover -mx-1" />
            <img src={user8} alt="user img" className="w-7 h-7 rounded-full object-cover -mx-1" />
            </div>
        </div>
        </div>
        {/* Project Card 2 */}
            <div className=" p-4 flex flex-col items-center">
        <img src={project3} loading="lazy" alt="project img" className="rounded-md h-40 object-cover mb-3 w-full" />
        <h2 className="text-lg font-bold text-gray-800 mb-1 md:-ml-24 -ml-80">Project #2</h2>
        <h3 className="text-gray-600 font-semibold mb-1 md:-ml-24 -ml-80">scandinavian</h3>
        <p className="text-sm text-gray-500 mb-3 ">
            Music is something that every person has his or her own specific opinion about.
        </p>
        <div className="flex flex-row items-center justify-between w-full mt-auto">
            <button className="border border-blue-300 rounded-md px-2 py-2 text-sm text-blue-400 font-semibold">
            View Project
            </button>
            <div className="flex flex-row ml-2">
            <img src={user2} alt="user img" className="w-7 h-7 rounded-full object-cover -mx-1" />
            <img src={user3} alt="user img" className="w-7 h-7 rounded-full object-cover -mx-1" />
            <img src={user7} alt="user img" className="w-7 h-7 rounded-full object-cover -mx-1" />
            <img src={user8} alt="user img" className="w-7 h-7 rounded-full object-cover -mx-1" />
            </div>
        </div>
        </div>
    {/* Project Card 3 */}
        <div className=" p-4 flex flex-col items-center">
        <img src={project4} loading="lazy" alt="project img" className="rounded-md h-40 object-cover mb-3 w-full" />
        <h2 className="text-lg font-bold text-gray-800 mb-1 md:-ml-24 -ml-80">Project #3</h2>
        <h3 className="text-gray-600 font-semibold mb-1 md:-ml-24 -ml-80">minimalist</h3>
        <p className="text-sm text-gray-400 mb-3 ">
            Different people have different taste, and various types of music.
        </p>
        <div className="flex flex-row items-center justify-between w-full mt-auto">
            <button className="border border-blue-300 rounded-md px-2 py-2 text-sm text-blue-400 font-semibold">
            View Project
            </button>
            <div className="flex flex-row ml-2">
            <img src={user2} alt="user img" className="w-7 h-7 rounded-full object-cover -mx-1" />
            <img src={user3} alt="user img" className="w-7 h-7 rounded-full object-cover -mx-1" />
            <img src={user7} alt="user img" className="w-7 h-7 rounded-full object-cover -mx-1" />
            <img src={user8} alt="user img" className="w-7 h-7 rounded-full object-cover -mx-1" />
            </div>
        </div>
        </div>

    {/* Project Card 4 */}
    <div className="border border-gray-300 rounded-xl md:h-[370px] md:mt-3">
        <div className="mt-40 mx-11">
        <h1 className="text-center font-bold py-2 text-gray-500 text-2xl">
            +
        </h1>
        <h2 className="text-gray-400 font-bold text-xl">
            New Project
        </h2>
        </div>
    </div>
    {/*  */}
    </div>
</div>

        </section>
    </>
)
}

export default Profile
