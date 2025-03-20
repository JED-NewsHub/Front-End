import React from 'react';
import trending1 from '../assets/images/hero.png';
import trending2 from '../assets/images/hero2.png';
import trending3 from '../assets/images/bgrnd1.jpg';

const Trending = () => {
  return (
    <div className="relative py-16 mb-16 overflow-hidden">
      {/* Shadow-based Background Separator */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-200 to-transparent z-0"></div>
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-200 to-transparent z-0"></div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%3Cg fill%3D%22%23000000%22 fill-opacity%3D%220.1%22%3E%3Cpath d%3D%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] z-0"></div>

      {/* Trending Section Content */}
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Section Title with Shadow Elements */}
        <div className="flex items-center justify-center mb-12">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-300"></div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mx-4 relative">
            Trending <span className="text-red-600 relative">Now
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-500 rounded-full shadow-sm"></span>
            </span>
          </h1>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-300"></div>
        </div>

        {/* Main Content Container with Shadow Effects */}
        <div className="bg-white rounded-xl shadow-2xl p-8 my-12 border border-gray-100 relative">
          {/* Shadow Accents */}
          <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-gradient-to-br from-gray-100 to-white rounded-xl -z-10 opacity-80 blur-md"></div>
          <div className="absolute -top-1 -left-1 -right-1 -bottom-1 bg-white rounded-xl shadow-lg -z-10"></div>

          {/* Trending Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
            {[
              { img: trending1, title: 'Trending Post Title 1', text: 'This is a brief description of the trending post. It provides a quick overview of the content.', href: '/news/1' },
              { img: trending2, title: 'Trending Post Title 2', text: 'This is a brief description of the trending post. It provides a quick overview of the content.', href: '/news/2' },
              { img: trending3, title: 'Trending Post Title 3', text: 'This is a brief description of the trending post. It provides a quick overview of the content.', href: '/news/3' },
            ].map((trend, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-lg bg-white transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group border border-gray-100"
              >
                {/* Shadow Top Accent Instead of Border */}
                <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-gray-200/50 to-transparent z-10"></div>
                
                <div className="relative overflow-hidden">
                  <img
                    src={trend.img}
                    alt={trend.title}
                    className="w-full h-56 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-300">
                    {trend.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">{trend.text}</p>
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

      {/* Bottom Decorative Element with Shadow */}
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