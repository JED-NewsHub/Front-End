import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaTiktok, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-red-600 text-white py-2 text-sm flex justify-between items-center px-6">
        {/* Social Icons */}
        <div className="flex gap-3">
          <FaTwitter className="cursor-pointer hover:text-gray-200" />
          <FaFacebookF className="cursor-pointer hover:text-gray-200" />
          <FaWhatsapp className="cursor-pointer hover:text-gray-200" />
          <FaTiktok className="cursor-pointer hover:text-gray-200" />
        </div>
        {/* Subscribe Button */}
        <button className="bg-white text-red-600 px-4 py-1 rounded font-bold hover:bg-gray-200">
          Subscribe
        </button>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800">JED-HUB</h1>
        
        {/* Navigation Links (Mobile & Desktop) */}
        <ul className={`md:flex gap-6 text-gray-700 absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 md:left-auto top-16 md:top-auto transition-all duration-300 ease-in ${isOpen ? "block" : "hidden"}`}>
          <li className="cursor-pointer hover:text-red-600 font-bold p-4 md:p-0">Home</li>
          <Link to='/news'><li className="cursor-pointer hover:text-red-600 font-bold p-4 md:p-0">News</li></Link>
          <Link to='/blog'><li className="cursor-pointer hover:text-red-600 font-bold p-4 md:p-0">Blog</li></Link>
          <Link to='/about'><li className="cursor-pointer hover:text-red-600 font-bold p-4 md:p-0">About</li></Link>
          <Link to='/contact'><li className="cursor-pointer hover:text-red-600 font-bold p-4 md:p-0">Contact</li></Link>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700 text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
