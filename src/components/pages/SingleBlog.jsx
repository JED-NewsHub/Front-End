import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SingleBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize navigate for navigation
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status

  // Fetch blog data (mock data for now)
  useEffect(() => {
    const mockBlogData = {
      id: 1,
      title: 'Top Travel Destinations in 2023',
      content: 'Lorem ipsum dolor sit amet...',
      // Other blog fields...
    };
    setBlog(mockBlogData);
  }, [id]);

  // Fetch comments (mock data for now)
  useEffect(() => {
    const mockComments = [
      { id: 1, author: 'User1', text: 'Great post!', date: 'October 13, 2023' },
      { id: 2, author: 'User2', text: 'Thanks for sharing!', date: 'October 14, 2023' },
    ];
    setComments(mockComments);
  }, []);

  // Handle new comment submission
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (newComment.trim() && isAuthenticated) {
      // Simulate API call to post comment
      const comment = {
        id: comments.length + 1,
        author: 'Current User', // Replace with actual user data
        text: newComment,
        date: new Date().toLocaleDateString(),
      };
      setComments([...comments, comment]);
      setNewComment('');
    } else {
      alert('Please log in to post a comment.');
    }
  };

  if (!blog) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Arrow */}
        <button 
          onClick={() => navigate('/blog')} 
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
          Back to Blogs
        </button>

        {/* Blog Content */}
        <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
        <p className="text-gray-700">{blog.content}</p>

        {/* Comments Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Comments</h2>
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700">{comment.text}</p>
                <p className="text-sm text-gray-500 mt-2">- {comment.author}</p>
              </div>
            ))}
          </div>

          {/* Add Comment Form */}
          {isAuthenticated ? (
            <form onSubmit={handleCommentSubmit} className="mt-8">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-red-600"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300"
              >
                Submit Comment
              </button>
            </form>
          ) : (
            <p className="mt-8 text-gray-600">Please <a href="/login" className="text-red-600">log in</a> to post a comment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;