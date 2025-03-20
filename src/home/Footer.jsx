import React from 'react';
import logo from '../assets/images/logo.jpg'; // Import your logo
import {
  FaTwitter,
  FaFacebook,
  FaWhatsapp,
  FaTiktok,
  FaArrowUp,
  FaHome,
  FaNewspaper,
  FaBlog,
  FaUser,
  FaEnvelope,
} from 'react-icons/fa'; // Import icons

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-red-600 text-white mt-16 pt-20">
      {/* Overlay to reduce sharpness */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Wavy Background with Gradient */}
      <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ height: '100px' }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-full wave-animation"
          style={{ transform: 'rotate(180deg)' }}
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#f0f0f0', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: 'none', fill: 'url(#waveGradient)' }}
          ></path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16"> {/* Increased gap to 16 */}
          {/* Logo and Description */}
          <div className="mb-8 md:mb-0">
            <img
              src={logo}
              alt="JED-HUB Logo"
              className="w-32 mb-6"
            />
            <p className="text-sm leading-relaxed">
              Your go-to source for the latest news, blogs, and insights. Stay updated with the world around you.
            </p>
          </div>

          {/* Quick Links with Icons */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4"> {/* Increased spacing between links */}
              <li>
                <a
                  href="/"
                  className="flex items-center space-x-2 hover:text-gray-300 transition duration-300 group"
                >
                  <FaHome className="w-5 h-5" />
                  <span className="relative">
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/news"
                  className="flex items-center space-x-2 hover:text-gray-300 transition duration-300 group"
                >
                  <FaNewspaper className="w-5 h-5" />
                  <span className="relative">
                    News
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="flex items-center space-x-2 hover:text-gray-300 transition duration-300 group"
                >
                  <FaBlog className="w-5 h-5" />
                  <span className="relative">
                    Blog
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="flex items-center space-x-2 hover:text-gray-300 transition duration-300 group"
                >
                  <FaUser className="w-5 h-5" />
                  <span className="relative">
                    About
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="flex items-center space-x-2 hover:text-gray-300 transition duration-300 group"
                >
                  <FaEnvelope className="w-5 h-5" />
                  <span className="relative">
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links with Animated Icons */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-6">Follow Us</h3>
            <div className="flex space-x-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition duration-300 transform hover:scale-110"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition duration-300 transform hover:scale-110"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition duration-300 transform hover:scale-110"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition duration-300 transform hover:scale-110"
              >
                <FaTiktok className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-bold mb-6">Subscribe</h3>
            <p className="text-sm mb-6 leading-relaxed">
              Stay updated with our latest news and blogs.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-l-lg focus:outline-none text-gray-800"
              />
              <button
                type="submit"
                className="bg-white text-red-600 px-4 py-2 rounded-r-lg hover:bg-gray-100 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} JED-HUB. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back-to-Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-white text-red-600 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-110"
      >
        <FaArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;