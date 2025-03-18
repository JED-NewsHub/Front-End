import React from 'react';
import feature1 from '../assets/images/hero.png';
import feature2 from '../assets/images/hero2.png';
import feature3 from '../assets/images/bgrnd1.jpg';

const Feature = () => {
  return (
    <div className="bg-gray-100 py-12">
      {/* Featured Section */}
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Why Choose <span className="text-red-600">JED-HUB?</span>
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Explore a platform that keeps you informed, engaged, and ahead of the latest news and insights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Cards */}
          {[
            { img: feature1, title: 'Latest News', text: 'Stay updated with the most relevant news worldwide.', color: 'text-red-500' },
            { img: feature2, title: 'Expert Blogs', text: 'Read insightful blogs from experts in various fields.', color: 'text-blue-500' },
            { img: feature3, title: 'User-Friendly', text: 'Enjoy a seamless and intuitive experience on our platform.', color: 'text-green-500' },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                <img src={feature.img} alt={feature.title} className="w-20 h-20 object-cover rounded-full border-4 border-gray-200 shadow-md" />
              </div>
              <h3 className={`text-2xl font-bold ${feature.color} mb-4`}>{feature.title}</h3>
              <p className="text-gray-700">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
