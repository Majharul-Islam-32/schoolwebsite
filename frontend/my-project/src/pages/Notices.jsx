import React, { useState } from 'react';
import { Calendar, ArrowRight, Bell } from 'lucide-react';
import NoticeTicker from '../components/ui/NoticeTicker';
import FadeInSection from '../components/ui/FadeInSection';

const Notices = () => {
  const [filter, setFilter] = useState('all');

  const allNotices = [
    {
      id: 1,
      title: "Annual Sports Day 2025 Registration",
      date: "Nov 24, 2024",
      category: "event",
      description: "Registration for the annual sports day is now open for all students. Please contact your class teacher to register. The event will be held on February 15, 2025."
    },
    {
      id: 2,
      title: "Winter Vacation Announcement",
      date: "Nov 20, 2024",
      category: "holiday",
      description: "The school will remain closed for winter vacation from December 15 to December 30, 2024. Classes will resume on January 1, 2025."
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting",
      date: "Nov 18, 2024",
      category: "meeting",
      description: "A meeting will be held on November 28 regarding the upcoming final exams. All parents are requested to attend."
    },
    {
      id: 4,
      title: "New Library Books Arrival",
      date: "Nov 15, 2024",
      category: "general",
      description: "We have added 500+ new books to our school library. Students are encouraged to visit and explore the new collection."
    },
    {
      id: 5,
      title: "Final Examination Schedule",
      date: "Nov 10, 2024",
      category: "exam",
      description: "The final examination for all classes will start from December 5, 2024. Detailed schedule will be published soon."
    },
    {
      id: 6,
      title: "School Uniform Reminder",
      date: "Nov 5, 2024",
      category: "general",
      description: "All students must wear proper school uniform. Casual dress is not allowed on regular school days."
    },
    {
      id: 7,
      title: "Science Fair 2024",
      date: "Oct 28, 2024",
      category: "event",
      description: "The annual science fair will be held on November 30. Students interested in participating should submit their project proposals by November 20."
    },
    {
      id: 8,
      title: "Admission Notice for 2025",
      date: "Oct 20, 2024",
      category: "admission",
      description: "Admission for Class 1 will start from January 1, 2025. Application forms are available at the school office."
    }
  ];

  const filteredNotices = filter === 'all' 
    ? allNotices 
    : allNotices.filter(notice => notice.category === filter);

  const categories = [
    { value: 'all', label: 'All Notices' },
    { value: 'event', label: 'Events' },
    { value: 'exam', label: 'Exams' },
    { value: 'holiday', label: 'Holidays' },
    { value: 'meeting', label: 'Meetings' },
    { value: 'admission', label: 'Admission' },
    { value: 'general', label: 'General' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <NoticeTicker />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
            <Bell className="mr-3 text-blue-600" size={36} />
            All Notices
          </h1>
          <p className="text-gray-600">Stay updated with the latest announcements and news</p>
        </div>

        {/* Filter Buttons */}
        <FadeInSection>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  filter === cat.value
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-blue-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </FadeInSection>

        {/* Notices List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredNotices.map((notice, index) => (
            <FadeInSection key={notice.id} delay={index * 0.05}>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col sm:flex-row gap-4">
                <div className="flex-shrink-0 flex flex-col items-center justify-center bg-blue-50 text-blue-700 rounded-lg p-4 w-full sm:w-24 text-center">
                  <Calendar size={24} className="mb-1" />
                  <span className="text-xs font-bold uppercase">{notice.date.split(' ')[0]}</span>
                  <span className="text-2xl font-bold">{notice.date.split(' ')[1].replace(',', '')}</span>
                  <span className="text-xs">{notice.date.split(' ')[2]}</span>
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 cursor-pointer transition-colors">
                      {notice.title}
                    </h3>
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full capitalize ml-2 flex-shrink-0">
                      {notice.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {notice.description}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {filteredNotices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No notices found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notices;
