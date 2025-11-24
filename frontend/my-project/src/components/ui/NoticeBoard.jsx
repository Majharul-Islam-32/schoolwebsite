import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import NoticeTicker from './NoticeTicker';

const NoticeBoard = () => {
  const notices = [
    {
      id: 1,
      title: "Annual Sports Day 2025 Registration",
      date: "Nov 24, 2025",
      description: "Registration for the annual sports day is now open for all students. Please contact your class teacher."
    },
    {
      id: 2,
      title: "Winter Vacation Announcement",
      date: "Nov 20, 2025",
      description: "The school will remain closed for winter vacation from Dec 15 to Dec 30."
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting",
      date: "Nov 18, 2025",
      description: "A meeting will be held on Nov 28 regarding the upcoming final exams."
    },
    {
      id: 4,
      title: "New Library Books Arrival",
      date: "Nov 15, 2025",
      description: "We have added 500+ new books to our school library. Students are encouraged to visit."
    }
  ];

  return (
    <section className="bg-gray-50 pb-12">
      {/* Ticker Section */}
      <NoticeTicker />

      <div className="container mx-auto px-4 mt-12">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Main Notice List */}
          <div className="w-full md:w-2/3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-600 pl-3">
                Latest Notices
              </h2>
              <button className="text-blue-600 font-medium hover:text-blue-800 flex items-center transition-colors">
                View All <ArrowRight size={16} className="ml-1" />
              </button>
            </div>

            <div className="space-y-4">
              {notices.map((notice) => (
                <div key={notice.id} className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col sm:flex-row gap-4">
                  <div className="flex-shrink-0 flex flex-col items-center justify-center bg-blue-50 text-blue-700 rounded-lg p-3 w-full sm:w-20 text-center">
                    <Calendar size={20} className="mb-1" />
                    <span className="text-xs font-bold uppercase">{notice.date.split(' ')[0]}</span>
                    <span className="text-lg font-bold">{notice.date.split(' ')[1].replace(',', '')}</span>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-600 cursor-pointer transition-colors">
                      {notice.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                      {notice.description}
                    </p>
                    <button className="text-sm text-blue-500 font-medium hover:underline">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar / Important Links */}
          <div className="w-full md:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Important Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/routine" className="block p-3 bg-gray-50 rounded hover:bg-blue-50 hover:text-blue-600 transition-colors flex justify-between items-center group">
                    <span>Class Routine</span>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link to="/result" className="block p-3 bg-gray-50 rounded hover:bg-blue-50 hover:text-blue-600 transition-colors flex justify-between items-center group">
                    <span>Exam Results</span>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link to="/admission" className="block p-3 bg-gray-50 rounded hover:bg-blue-50 hover:text-blue-600 transition-colors flex justify-between items-center group">
                    <span>Admission Info</span>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link to="/syllabus" className="block p-3 bg-gray-50 rounded hover:bg-blue-50 hover:text-blue-600 transition-colors flex justify-between items-center group">
                    <span>Syllabus</span>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="block p-3 bg-gray-50 rounded hover:bg-blue-50 hover:text-blue-600 transition-colors flex justify-between items-center group">
                    <span>Photo Gallery</span>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="mt-6 bg-blue-600 text-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-2">Need Help?</h3>
              <p className="text-blue-100 mb-4 text-sm">Contact our administration office for any queries.</p>
              <Link to="/contact" className="inline-block bg-white text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-blue-50 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;
