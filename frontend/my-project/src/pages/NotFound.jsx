import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[200px] font-bold text-blue-600 opacity-20 leading-none">
            404
          </h1>
          <div className="-mt-16 md:-mt-24">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Oops! The page you are looking for doesn't exist or has been moved.
            </p>
          </div>
        </div>

        {/* Illustration or Icon */}
        <div className="mb-12">
          <div className="inline-block p-6 bg-blue-100 rounded-full">
            <Search size={64} className="text-blue-600" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            <Home size={20} className="mr-2" />
            Go to Homepage
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">You might be looking for:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/notices" className="text-blue-600 hover:underline">Notice Board</Link>
            <span className="text-gray-300">•</span>
            <Link to="/gallery" className="text-blue-600 hover:underline">Gallery</Link>
            <span className="text-gray-300">•</span>
            <Link to="/admission" className="text-blue-600 hover:underline">Admission</Link>
            <span className="text-gray-300">•</span>
            <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
