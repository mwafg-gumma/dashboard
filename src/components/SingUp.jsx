import Background from "../assets/image/Background.png"
import { NavLink } from "react-router-dom"
import { FaUser, FaTachometerAlt,FaFacebook,FaInstagram,FaTwitter,FaLinkedin,FaGithub } from "react-icons/fa"

const SingUp = () => {
  return (
    <>
      <section
        className="relative h-[600px] md:w-[1250px] m-1 rounded-md flex flex-col "
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Overlay for dark effect */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0 rounded-md"></div>
        {/* NavBar */}
        <div className="relative z-10 flex flex-row items-center justify-between md:px-8 px-2 py-4">
          <h2 className="md:text-2xl text-sm font-bold text-white">Argon Dashboard 2</h2>
          <div className="flex flex-row gap-6">
            <NavLink to="/profile" className="flex items-center gap-1 text-white hover:text-blue-200 font-semibold text-sm md:text-lg">
              <FaUser className="text-lg" />
              Profile
            </NavLink>
            <NavLink to="/" className="flex items-center gap-2 text-white hover:text-blue-200 font-semibold text-sm md:text-lg">
              <FaTachometerAlt className="text-lg" />
              Dashboard
            </NavLink> 
          </div>
        </div>
        {/* Centered Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center mb-4">
            Welcome to Argon Dashboard 2
          </h1>
          <p className="text-white text-lg md:text-xl text-center mb-8 drop-shadow-lg max-w-xl">
            Create your account to access powerful analytics and modern UI components. Enjoy a seamless experience with our dashboard.
          </p>
        </div>
        {/* Register Form at the bottom center */}
        <div className="absolute left-1/2 bottom-[-200px] transform -translate-x-1/2 z-20 w-full max-w-md mt-20 mb-1 md:mb-8">
          <form className="bg-white rounded-md shadow-lg px-8 py-8 flex flex-col items-center ">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Register</h2>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-5 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md transition"
            >
              Sign Up
            </button>
            <p className="mt-4 text-gray-600 text-sm">
              Already have an account?{" "}
              <NavLink to="/signin" className="text-blue-600 hover:underline">
                Sign In
              </NavLink>
            </p>
          </form>
        </div>
      </section>
      <footer className="mt-56 text-center ">
        <div className="flex flex-row items-center justify-center">
          <NavLink className="md:text-lg text-sm text-gray-600 md:px-5 px-2">
            Company
          </NavLink>
          <NavLink className="md:text-lg text-sm text-gray-600 md:px-5 px-2">
            About
          </NavLink>
          <NavLink className="md:text-lg text-sm text-gray-600 md:px-5 px-2">
            Team
          </NavLink>
          <NavLink className="md:text-lg text-sm text-gray-600 md:px-5 px-2">
            Products
          </NavLink>
          <NavLink className="md:text-lg text-sm text-gray-600 md:px-5 px-2">
            Blog
          </NavLink>
          <NavLink className="md:text-lg text-sm text-gray-600 md:px-5 px-2">
            Pricing
          </NavLink>
        </div>
            <div className="flex flex-row items-center justify-center py-10">
          <FaInstagram className="text-4xl px-2 text-gray-600  hover:text-gray-700 cursor-pointer"/>
          <FaFacebook className="text-4xl px-2 text-gray-600  hover:text-gray-700 cursor-pointer"/>
          <FaLinkedin className="text-4xl px-2 text-gray-600  hover:text-gray-700 cursor-pointer"/>
          <FaTwitter className="text-4xl px-2 text-gray-600  hover:text-gray-700 cursor-pointer"/>
          <FaGithub className="text-4xl px-2 text-gray-600  hover:text-gray-700 cursor-pointer"/>
        </div>
        <p className="text-gray-600 pb-4">
          &copy;{new Date().getFullYear()} All rights reserved By Mr. Mwafg Gomma
        </p>
      </footer>
    </>
  )
}

export default SingUp