import React, { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaTiktok, FaBars, FaTimes, FaChevronDown, FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg"; // Ensure the logo path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Load theme from localStorage or default to light mode
    return localStorage.getItem("theme") === "dark";
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state

  // Apply theme on mount and when isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-red-600 text-white py-2 text-sm flex justify-between items-center px-4 md:px-6">
        {/* Social Icons */}
        <div className="flex gap-3">
          <FaTwitter className="cursor-pointer hover:text-gray-200 transition duration-300" />
          <FaFacebookF className="cursor-pointer hover:text-gray-200 transition duration-300" />
          <FaWhatsapp className="cursor-pointer hover:text-gray-200 transition duration-300" />
          <FaTiktok className="cursor-pointer hover:text-gray-200 transition duration-300" />
        </div>
        {/* Subscribe Button */}
        <button className="bg-white text-red-600 px-4 py-1 rounded font-bold hover:bg-gray-200 transition duration-300">
        <Link to='/privacy'>Privacy Policy</Link>  
        </button>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white dark:bg-gray-800 shadow-md py-4 px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="JED-HUB Logo" className="h-10" />
        </Link>

        {/* Navigation Links */}
        <ul
          className={`md:flex gap-6 text-gray-700 dark:text-gray-200 absolute md:static bg-white dark:bg-gray-800 md:bg-transparent w-full md:w-auto left-0 md:left-auto top-16 md:top-auto transition-all duration-300 ease-in ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="cursor-pointer hover:text-red-600 dark:hover:text-red-400 font-bold p-4 md:p-0 border-b md:border-none">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="cursor-pointer hover:text-red-600 dark:hover:text-red-400 font-bold p-4 md:p-0 border-b md:border-none">
            <Link to="/news" onClick={() => setIsOpen(false)}>News</Link>
          </li>
          <li className="cursor-pointer hover:text-red-600 dark:hover:text-red-400 font-bold p-4 md:p-0 border-b md:border-none">
            <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
          </li>
          {/* Dropdown Menu */}
          <li
            className="relative cursor-pointer hover:text-red-600 dark:hover:text-red-400 font-bold p-4 md:p-0 border-b md:border-none"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div className="flex items-center gap-1">
              <span>Categories</span>
              <FaChevronDown className="text-sm" />
            </div>
            {isDropdownOpen && (
              <ul className="absolute top-10 left-0 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 w-48">
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Link to="/category/technology" onClick={() => setIsOpen(false)}>Technology</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Link to="/category/business" onClick={() => setIsOpen(false)}>Business</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Link to="/category/health" onClick={() => setIsOpen(false)}>Health</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="cursor-pointer hover:text-red-600 dark:hover:text-red-400 font-bold p-4 md:p-0 border-b md:border-none">
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li className="cursor-pointer hover:text-red-600 dark:hover:text-red-400 font-bold p-4 md:p-0 border-b md:border-none">
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>

        {/* Right Side: Dark Mode Toggle and Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition duration-300"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 dark:text-gray-200 text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;