import React from 'react';
import trending1 from '../assets/images/hero.png';
import trending2 from '../assets/images/hero2.png';
import trending3 from '../assets/images/bgrnd1.jpg';

const Trending = () => {
  const trendingData = [
    { img: trending1, title: 'Trending Post Title 1', text: 'This is a brief description of the trending post. It provides a quick overview of the content.', href: '/news/1' },
    { img: trending2, title: 'Trending Post Title 2', text: 'This is a brief description of the trending post. It provides a quick overview of the content.', href: '/news/2' },
    { img: trending3, title: 'Trending Post Title 3', text: 'This is a brief description of the trending post. It provides a quick overview of the content.', href: '/news/3' },
    { img: trending1, title: 'Trending Post Title 1', text: 'This is a brief description of the trending post. It provides a quick overview of the content.', href: '/news/1' },
    { img: trending3, title: 'Trending Post Title 3', text: 'This is a brief description of the trending post. It provides a quick overview of the content.', href: '/news/3' },
  ];

  return (
    <div className="relative py-16 mt-14 mb-16 overflow-hidden bg-gray-100">
      {/* Trending Section Content */}
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Section Title */}
        <div className="flex items-center justify-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 text-center mx-4 relative">
            Trending <span className="text-black">Now</span>
          </h1>
        </div>

        {/* Main Content Container */}
        <div className="bg-white rounded-xl shadow-2xl p-8 my-12 border border-gray-200 relative">
          {/* Featured Card with Side List Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Card */}
            <div className="lg:col-span-2 rounded-xl shadow-lg bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group border border-gray-100">
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={trendingData[0].img}
                  alt={trendingData[0].title}
                  className="w-full h-96 object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {trendingData[0].title}
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">{trendingData[0].text}</p>
                <a
                  href={trendingData[0].href}
                  className="inline-flex items-center text-red-600 hover:text-red-800 font-semibold transition-colors duration-300 group-hover:underline"
                >
                  Read More
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Side List */}
            <div className="space-y-6">
              {trendingData.slice(1).map((trend, index) => (
                <div
                  key={index}
                  className="flex items-center rounded-xl shadow-lg bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group border border-gray-100"
                >
                  <div className="w-1/3">
                    <img
                      src={trend.img}
                      alt={trend.title}
                      className="w-full h-24 object-cover rounded-l-xl"
                    />
                  </div>
                  <div className="w-2/3 p-4">
                    <h2 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors duration-300">
                      {trend.title}
                    </h2>
                    <a
                      href={trend.href}
                      className="inline-flex items-center text-red-600 hover:text-red-800 font-semibold transition-colors duration-300 group-hover:underline"
                    >
                      Read More
                      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="relative mt-16 mb-12">
        <div className="h-px w-2/3 mx-auto bg-gradient-to-r from-transparent via-gray-300 to-transparent shadow-sm"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-8 bg-white flex items-center justify-center">
          <div className="w-6 h-6 rounded-full border border-gray-200 shadow-inner bg-gradient-to-br from-white to-gray-50"></div>
        </div>
      </div>
    </div>
  );
};

export default Trending;