import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg'; 
import blog1 from '../../assets/images/bgrnd1.jpg'; 
import blog2 from '../../assets/images/hero2.png';
import blog3 from '../../assets/images/hero.png';
import author1 from '../../assets/images/author1.jpg'; 
import author2 from '../../assets/images/author2.jpg';
import author3 from '../../assets/images/author3.jpg';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const blogData = [
    { id: 1, title: 'Top Travel Destinations in 2023', description: 'Explore top destinations.', category: 'Travel', image: blog1, author: 'John Doe', authorAvatar: author1, date: 'Oct 10, 2023' },
    { id: 2, title: 'Healthy Eating Habits', description: 'Maintain a balanced diet.', category: 'Health', image: blog2, author: 'Jane Smith', authorAvatar: author2, date: 'Oct 11, 2023' },
    { id: 3, title: 'Tech Gadgets You Need in 2023', description: 'Discover the latest tech.', category: 'Technology', image: blog3, author: 'Alice Johnson', authorAvatar: author3, date: 'Oct 12, 2023' },
  ];

  const filteredBlogs = blogData.filter(blog => 
    (selectedCategory === 'All' || blog.category === selectedCategory) &&
    (blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || blog.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100 && !isLoading) {
        setIsLoading(true);
        setTimeout(() => {
          setVisiblePosts(prev => prev + 6);
          setIsLoading(false);
        }, 1000);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Logo at the Top */}
        <div className="flex justify-center mb-6">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </Link>
        </div>

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <input type="text" placeholder="Search blog posts..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full md:w-1/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-red-600 mb-4 md:mb-0" />
          <div className="flex space-x-4">
            {['All', 'Travel', 'Health', 'Technology'].map(category => (
              <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 rounded-lg ${selectedCategory === category ? 'bg-red-600 text-white' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'}`}>{category}</button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.slice(0, visiblePosts).map(blog => (
            <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img src={blog.authorAvatar} alt={blog.author} className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="text-sm font-semibold">{blog.author}</p>
                    <p className="text-xs text-gray-500">{blog.date}</p>
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                <p className="text-gray-700 mb-4">{blog.description}</p>
                <Link to={`/blog/${blog.id}`} className="text-red-600 hover:text-red-800 font-semibold">Read More →</Link>
              </div>
            </div>
          ))}
        </div>

        {/* Loading Spinner */}
        {isLoading && <div className="flex justify-center mt-8"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div></div>}
      </div>
    </div>
  );
};

export default Blog;
