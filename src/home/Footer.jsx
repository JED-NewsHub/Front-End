import React from 'react';
import logo from '../assets/images/logo.jpg'; // Import your logo
import { FaTwitter, FaFacebook, FaWhatsapp, FaTiktok } from 'react-icons/fa'; // Import social icons

const Footer = () => {
  return (
    <footer className="relative bg-red-400 text-white mt-16 pt-20"> {/* Added pt-20 for top padding */}
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
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="mb-8 md:mb-0">
            <img
              src={logo}
              alt="JED-HUB Logo"
              className="w-32 mb-4"
            />
            <p className="text-sm">
              Your go-to source for the latest news, blogs, and insights. Stay updated with the world around you.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-300 transition duration-300">Home</a></li>
              <li><a href="/news" className="hover:text-gray-300 transition duration-300">News</a></li>
              <li><a href="/blog" className="hover:text-gray-300 transition duration-300">Blog</a></li>
              <li><a href="/about" className="hover:text-gray-300 transition duration-300">About</a></li>
              <li><a href="/contact" className="hover:text-gray-300 transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Links with Hover Effects */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition duration-300"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition duration-300"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition duration-300"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition duration-300"
              >
                <FaTiktok className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe</h3>
            <p className="text-sm mb-4">
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
        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} JED-HUB. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;