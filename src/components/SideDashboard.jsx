import { FaChartPie,FaHome, FaLaptop,FaCalendar,FaWallet,FaGlobe,FaUser,FaSignInAlt,FaUserPlus } from "react-icons/fa"
import Document from '../assets/image/Document.png'
import {NavLink} from 'react-router-dom'
const SideDashboard = () => {
return (
    <>
<section className="  flex-row bg-sky-400 h-[250px] md:pt-4 md:-ml-0 -ml-5 md:w-full w-[100px]  ">
        <div className="flex flex-col items center gap-3 bg-white shadow-md rounded-xl justify-center w-[250px] py-3 md:mx-4   md:block ">
        <div className=" mt-3 flex flex-row justify-center items-center ">
                <FaChartPie className="text-3xl " />
            <h3 className="text-xl font-bold px-3 ">Main Dashboard</h3>
        </div>
        <p className="border-b mx-5" ></p>
        {/* links side */}
        <div className="my-3  cursor-pointer" title="Dashboard" >
            <NavLink to="/" className = {({isActive}) => isActive ?"flex flex-row bg-sky-100 rounded-md py-2 justify-center items-center" :"flex flex-row  rounded-md py-2 justify-center items-center"}>
                <FaLaptop className="text-indigo-400 -ml-10 text-xl" /> 
            <p className="text-lg font-normal mx-2 ">Dashboard</p>
            </NavLink>
        </div>
        <div className=" my-3 cursor-pointer " title="Table" >
            <NavLink to="/table" className= {({isActive}) => isActive ?"flex flex-row bg-sky-100 rounded-md py-2 justify-center items-center" :"flex flex-row  rounded-md py-2 justify-center items-center"}>
                <FaCalendar className="text-orange-400 -ml-20 text-xl" />
            <p className="text-lg font-normal mx-2 ">Tables</p>
            </NavLink>
        </div>
        <div className=" my-3  cursor-pointer" title="Billing" >
            <NavLink to="/bill" className= {({isActive}) => isActive ?"flex flex-row bg-sky-100 rounded-md py-2 justify-center items-center" :"flex flex-row  rounded-md py-2 justify-center items-center"}>
                <FaWallet className="text-green-400 -ml-20 text-xl" />
            <p className="text-lg font-normal mx-2 ">Billing</p>
            </NavLink>
        </div>
        <div className=" my-3 py-2 rounded md:mx-5 ml-1 cursor-pointer" title="This Page is Not  Available" >
            <NavLink to="#" className=" flex flex-row justify-center items-center -ml-24 cursor-pointer">
                <FaGlobe className="text-red-400 text-xl" />
            <p className="text-lg font-normal mx-2 ">Billing</p>
            </NavLink>
        </div>
          {/* Account Bar */}
            <h2 className="md:text-center md:mx-0 mx-10 font-normal text-lg text-gray-600">
            ACCOUNT PAGES
            </h2>
            <div className="flex flex-col items-center ">
                {/*  */}
            <div className=" my-3 cursor-pointer" title="Profile" >
            <NavLink to="/profile" className={({isActive}) => isActive ?"flex flex-row bg-sky-100 rounded-md py-2 px-24 justify-center items-center" :"flex flex-row  rounded-md py-2 justify-center items-center"}>
                <FaUser className="text-gray-900 -ml-20 text-xl" />
            <p className="text-lg font-normal mx-2 ">Profile</p>
            </NavLink>
        </div>
            <div className=" my-3 p cursor-pointer" title="Sign in" >
            <NavLink to="/SigIn" className={({isActive}) => isActive ?"flex flex-row bg-sky-100 rounded-md py-2 px-24 justify-center items-center" :"flex flex-row  rounded-md py-2 justify-center items-center"}>
                <FaSignInAlt className="text-lime-400 -ml-20 text-xl" />
            <p className="text-lg font-normal mx-2 ">Sing In</p>
            </NavLink>
        </div>
            <div className=" my-3 cursor-pointer" title="Sing Up" >
            <NavLink to="/SigUp" className={({isActive}) => isActive ?"flex flex-row bg-sky-100 rounded-md py-2 px-24 justify-center items-center" :"flex flex-row  rounded-md py-2 justify-center items-center"}>
                <FaUserPlus className="text-emerald-400 -ml-20 text-xl" />
            <p className="text-lg font-normal mx-2 ">Sing Up</p>
            </NavLink>
        </div>
        {/*  */}
            </div>
            {/* help side */}
            <div className="my-1 text-center">
                <img src={Document} alt="Document" className="w-[150px] object-cover mx-10" />
                <div className="mx-1">
                    <h3 className="py-2 px-3 text-lg text-sky-500">Need help ?</h3>
                    <p className="text-sm mx-5">Please Check Our Docs</p>
                </div>
                <button className="bg-sky-800 rounded-md text-white text-lg py-1 px-10 mt-3 mx-8 hover:duration-300 ease-in ">
                        Documentation
                    </button>
                <button className="bg-sky-400 rounded-md text-white px-10 text-lg py-1 mt-3 mx-10 ">
                        Get to PRO
                    </button>
            </div>
        </div>
        {/* description side */}
</section>
    </>
)
}

export default SideDashboard
