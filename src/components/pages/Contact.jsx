import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.jpg';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      {/* Clickable Logo */}
      <div className="max-w-6xl mx-auto px-4">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-12 w-auto mb-6 cursor-pointer" />
        </Link>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-8 text-red-600">Contact Us</h1>

        {/* Contact Form and Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gradient-to-r from-red-50 to-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-red-600"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-red-600"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-red-600"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-red-600"
                  rows="5"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details and Map */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-red-50 to-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Details</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <p className="text-gray-700">info@jedhub.com</p>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-gray-700">+1 (123) 456-7890</p>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-gray-700">123 Main Street, City, Country</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Location</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.95373531531664!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6d2e2a4b3b4!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1633033223456!5m2!1sen!2sus"
                className="w-full h-64 rounded-lg border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
