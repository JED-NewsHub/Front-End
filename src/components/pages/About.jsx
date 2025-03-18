import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg'; // Import the logo image
import team1 from '../../assets/images/author1.jpg'; // Import team member images
import team2 from '../../assets/images/author2.jpg';
import team3 from '../../assets/images/author3.jpg';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Logo */}
        <div className="flex justify-start mb-6">
          <Link to="/">
            <img src={logo} alt="JED-HUB Logo" className="w-14 h-14" />
          </Link>
        </div>
        
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-8 text-red-600">About Us</h1>

        {/* Introduction Section */}
        <div className="bg-gradient-to-r from-red-50 to-white p-8 rounded-lg shadow-lg mb-12 transform transition duration-500 hover:scale-105">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Welcome to JED-HUB</h2>
          <p className="text-gray-700">
            JED-HUB is your go-to source for the latest news, blogs, and insights. We are dedicated to providing high-quality content that keeps you informed, inspired, and engaged. Our team of experts works tirelessly to bring you the most relevant and up-to-date information.
          </p>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-r from-red-50 to-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h2>
            <p className="text-gray-700">
              Our mission is to deliver accurate, timely, and engaging content that empowers our readers to make informed decisions and stay ahead in their fields.
            </p>
          </div>
          <div className="bg-gradient-to-r from-red-50 to-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h2>
            <p className="text-gray-700">
              We envision a world where everyone has access to reliable information and insights that inspire growth, innovation, and positive change.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-red-600">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gradient-to-r from-red-50 to-white p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105">
              <img
                src={team1}
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-red-600"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800">John Doe</h3>
              <p className="text-gray-700">Founder & CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gradient-to-r from-red-50 to-white p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105">
              <img
                src={team2}
                alt="Team Member 2"
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-red-600"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800">Jane Smith</h3>
              <p className="text-gray-700">Content Strategist</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gradient-to-r from-red-50 to-white p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105">
              <img
                src={team3}
                alt="Team Member 3"
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-red-600"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800">Alice Johnson</h3>
              <p className="text-gray-700">Lead Editor</p>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105">
          <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
          <p className="text-gray-200 mb-6">
            Stay updated with the latest news and blogs by subscribing to our newsletter.
          </p>
          <form className="flex justify-center">
            <input
              type="email"
              placeholder="Your email"
              className="w-64 px-4 py-2 rounded-l-lg focus:outline-none text-gray-800"
            />
            <button
              type="submit"
              className="bg-white text-red-600 px-6 py-2 rounded-r-lg hover:bg-gray-100 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
