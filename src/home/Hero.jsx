import React from "react";
import heroImage from "../assets/images/bg.jpg";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroImage})` }}></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-grey bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6">Welcome to JED-HUB</h1>
        <p className="text-xl mb-8">
          Your go-to source for the latest news, blogs, and insights. Stay updated with the world around you.
        </p>
        <a
          href="/news"
          className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
        >
          Explore News
        </a>
      </div>
    </div>
  );
};

export default Hero;
