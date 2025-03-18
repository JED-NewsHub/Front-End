import React from 'react';
import trending1 from '../assets/images/hero.png'; // Import your images
import trending2 from '../assets/images/hero2.png';
import trending3 from '../assets/images/bgrnd1.jpg';

const Trending = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-8">Trending Now</h1>

        {/* Trending Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Trending Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src={trending1}
              alt="Trending Post 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Trending Post Title 1</h2>
              <p className="text-gray-700 mb-4">
                This is a brief description of the trending post. It provides a quick overview of the content.
              </p>
              <a
                href="/news/1"
                className="text-red-600 hover:text-red-800 font-semibold"
              >
                Read More →
              </a>
            </div>
          </div>

          {/* Trending Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src={trending2}
              alt="Trending Post 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Trending Post Title 2</h2>
              <p className="text-gray-700 mb-4">
                This is a brief description of the trending post. It provides a quick overview of the content.
              </p>
              <a
                href="/news/2"
                className="text-red-600 hover:text-red-800 font-semibold"
              >
                Read More →
              </a>
            </div>
          </div>

          {/* Trending Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src={trending3}
              alt="Trending Post 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Trending Post Title 3</h2>
              <p className="text-gray-700 mb-4">
                This is a brief description of the trending post. It provides a quick overview of the content.
              </p>
              <a
                href="/news/3"
                className="text-red-600 hover:text-red-800 font-semibold"
              >
                Read More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;