import Back from '../assets/image/Back.jpg'
import {FaUser,FaRoute} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Background from "../assets/image/Background.jpg"

const Sigin = () => {
return (
    <>
    <section className="mt-5">
        <div className="md:mx-20 mx-2 py-3">
            <div className="bg-gradient-to-r from-white to-sky-200 shadow-md rounded-md flex flex-row items-center justify-between gap-3 py-3">
                {/* logo */}
                <div className="mx-2 " >
                    <h2 className='md:text-xl text-sm font-bold px-4 text-blue-800'>Argon Dashboard 2</h2>
                </div>
                {/* icon */}
                <div className="flex flex-row items-center  ">
                    <div className="flex flex-rwo items-center md:mx-2">
                        <FaUser className='text-gray-500 text-lg'/>
                        <NavLink to='/profile' className="text-sm md:text-lg text-gray-700 font-light px-2">
                            Profile
                        </NavLink>
                    </div>
                    <div className="flex flex-rwo items-center md:mx-2">
                        <FaRoute className='bg-gray-500 text-white rounded-full p-2 text-3xl'/>
                        <NavLink to="/" className="text-sm md:text-lg text-gray-700 font-light px-2">
                            Dashboard
                        </NavLink>
                    </div>
                </div>
                {/* button */}
                <div className="mx-2 hidden md:block">
                    <button className='text-white text-lg bg-blue-500 rounded-md py-1 px-3 '>
                        Free Download
                    </button>
                </div>
            </div>
            {/* for main */}

            <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center mx-4 my-2">
                {/* sing */}
                <div className="flex flex-col items-center gap-3 p-3">
                    <h1 className='text-blue-800 font-bold text-2xl'>
                        Sing In
                    </h1>
                    <p className="text-gray-500 py-3">
                        Enter your email and password to sign in
                    </p>
                    <div className="my-2 -ml-24">
                        <input type="text" placeholder='Email' className='border border-gray-300 py-2 px-2 rounded-md' />
                    </div>
                    <div className="my-2 -ml-24">
                        <input type="password" placeholder='Password' className='border border-gray-300 py-2 px-2 rounded-md' />
                    </div>
                    <div className="py-1 -ml-44">
                    <NavLink className='text-light text-gray-500 hover:text-gray-600 '>
                        Remember me ?
                    </NavLink>
                    </div>
                    <div className="py-3 -ml-20">
                        <button className='bg-sky-400 text-white hover:bg-sky-500 font-bold py-2 px-20 rounded-md'>
                            Sing In
                        </button>
                    </div>
                    <div className="py-1 text-sm -ml-10">
                        Don't have an accountDon't have an account? <NavLink className="text-sky-600 text-lg"> Sing Up</NavLink>
                    </div>
                </div>
                {/* img */}
              {/* img */}
            <div className="mx-3 relative flex items-center justify-center">
            <img
                src={Back}
                alt="Sing Img"
                className="rounded-md w-[700px] h-[450px] object-cover brightness-75"
                style={{ backgroundColor: "white" }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg text-center">
                Welcome Back!
                </h2>
                <p className="text-white text-sm mx-24 p-2">
                    The more effortless the writing looks, the more effort the writer actually put into the process.
                </p>
            </div>
            </div>
            </div>
        </div>
    </section>
    </>
)
}

export default Sigin
