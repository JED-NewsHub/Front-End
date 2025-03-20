import React from 'react';
import feature1 from '../assets/images/hero.png';
import feature2 from '../assets/images/hero2.png';
import feature3 from '../assets/images/bgrnd1.jpg';

const Feature = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-16 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.8)_0%,_rgba(255,255,255,0)_70%)] z-0"></div>

      {/* Featured Section */}
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Why Choose <span className="text-red-600">JED-HUB?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore a platform that keeps you informed, engaged, and ahead of the latest news and insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Feature Cards */}
          {[
            { img: feature1, title: 'Latest News', text: 'Stay updated with the most relevant news worldwide.', color: 'text-red-500', bgColor: 'bg-red-50' },
            { img: feature2, title: 'Expert Blogs', text: 'Read insightful blogs from experts in various fields.', color: 'text-blue-500', bgColor: 'bg-blue-50' },
            { img: feature3, title: 'User-Friendly', text: 'Enjoy a seamless and intuitive experience on our platform.', color: 'text-green-500', bgColor: 'bg-green-50' },
          ].map((feature, index) => (
            <div
              key={index}
              className={`relative ${feature.bgColor} rounded-2xl shadow-xl p-8 text-center transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group`}
            >
              {/* Subtle Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

              <div className="relative flex justify-center mb-6">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className={`text-2xl font-semibold ${feature.color} mb-3`}>{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="mt-16 h-1 w-1/3 mx-auto bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
    </div>
  );
};

export default Feature;