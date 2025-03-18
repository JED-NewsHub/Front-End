import React, { useState, useMemo } from "react";
import news1 from "../../assets/images/bgrnd1.jpg"; // Import news images
import news2 from "../../assets/images/hero.png";
import news3 from "../../assets/images/hero2.png";
import logo from "../../assets/images/logo.jpg"; // Import your logo image
import { Link } from "react-router-dom";

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of articles per page

  // Sample news data
  const newsData = [
    {
      id: 1,
      title: "Breaking News: Technology Advancements",
      description:
        "Discover the latest breakthroughs in technology and how they are shaping the future.",
      category: "Technology",
      image: news1,
    },
    {
      id: 2,
      title: "Business Trends in 2023",
      description: "Explore the top business trends that are dominating the market this year.",
      category: "Business",
      image: news2,
    },
    {
      id: 3,
      title: "Health and Wellness Tips",
      description:
        "Learn about the best practices for maintaining a healthy lifestyle in today’s fast-paced world.",
      category: "Health",
      image: news3,
    },
  ];

  // Optimize filtering using useMemo
  const filteredNews = useMemo(() => {
    return newsData
      .filter(
        (news) =>
          selectedCategory === "All" || news.category === selectedCategory
      )
      .filter(
        (news) =>
          news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          news.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
  }, [selectedCategory, searchQuery]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNews = filteredNews.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Clickable Logo */}
        <div className="text-center mb-8">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-16 mx-auto" />
          </Link>
        </div>

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Latest News
        </h1>

        {/* Search Bar and Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Search Bar */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
              aria-label="Search news"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {["All", "Technology", "Business", "Health"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition ${
                  selectedCategory === category
                    ? "bg-red-600 text-white"
                    : "bg-gray-300 text-gray-800 hover:bg-gray-400"
                }`}
                aria-label={`Filter by ${category}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentNews.length > 0 ? (
            currentNews.map((news) => (
              <div
                key={news.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{news.title}</h2>
                  <p className="text-gray-700 mb-4">{news.description}</p>
                  <Link to={`/news/${news.id}`} className="text-red-600 hover:text-red-800 font-semibold">
                    Read More →
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">
              No news articles found.
            </p>
          )}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
            aria-label="Previous Page"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={indexOfLastItem >= filteredNews.length}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
            aria-label="Next Page"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;