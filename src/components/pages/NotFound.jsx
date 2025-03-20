import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        {/* Fun/Creative Message */}
        <h1 className="text-9xl font-bold text-red-600 dark:text-red-400">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
          Oops! Page Not Found
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Back to Home Button */}
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;