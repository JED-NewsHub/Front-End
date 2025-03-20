import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SingleNews = () => {
  const { id } = useParams(); // Get the news ID from the URL
  const navigate = useNavigate(); // Initialize navigate for navigation
  const [news, setNews] = useState(null);

  // Fetch news data based on ID (mock data for now)
  useEffect(() => {
    const mockNewsData = [
      {
        id: 1,
        title: 'Breaking News: Technology Advancements',
        description: 'Discover the latest breakthroughs in technology and how they are shaping the future.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        category: 'Technology',
        image: 'https://via.placeholder.com/800x400',
        author: 'John Doe',
        date: 'October 10, 2023',
      },
      {
        id: 2,
        title: 'Business Trends in 2023',
        description: 'Explore the top business trends that are dominating the market this year.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        category: 'Business',
        image: 'https://via.placeholder.com/800x400',
        author: 'Jane Smith',
        date: 'October 11, 2023',
      },
      {
        id: 3,
        title: 'Health and Wellness Tips',
        description: 'Learn about the best practices for maintaining a healthy lifestyle in today’s fast-paced world.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        category: 'Health',
        image: 'https://via.placeholder.com/800x400',
        author: 'Alice Johnson',
        date: 'October 12, 2023',
      },
    ];

    const selectedNews = mockNewsData.find((item) => item.id === parseInt(id));
    setNews(selectedNews);
  }, [id]);

  if (!news) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Arrow */}
        <button 
          onClick={() => navigate('/news')} 
          className="text-blue-500 mb-4 flex items-center"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 mr-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to News
        </button>

        {/* News Title */}
        <h1 className="text-4xl font-bold mb-6">{news.title}</h1>

        {/* News Meta (Author and Date) */}
        <div className="flex items-center space-x-4 mb-8">
          <p className="text-gray-600">By {news.author}</p>
          <p className="text-gray-600">•</p>
          <p className="text-gray-600">{news.date}</p>
        </div>

        {/* News Image */}
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />

        {/* News Content */}
        <div className="prose max-w-none">
          <p className="text-gray-700">{news.content}</p>
        </div>

        {/* Related Articles (Optional) */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Example Related Article */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Related Article"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Related Article Title</h3>
                <p className="text-gray-700">This is a brief description of the related article.</p>
              </div>
            </div>
            {/* Repeat for other related articles */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;