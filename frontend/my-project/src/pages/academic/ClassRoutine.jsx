import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

const ClassRoutine = () => {
  const [activeClass, setActiveClass] = useState('Class 1');

  const classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'];

  // Dummy routine data
  const routineData = {
    'Class 1': [
      { day: 'Sunday', periods: ['Bangla', 'English', 'Math', 'Drawing'] },
      { day: 'Monday', periods: ['Bangla', 'English', 'Math', 'Religion'] },
      { day: 'Tuesday', periods: ['Bangla', 'English', 'Math', 'General Science'] },
      { day: 'Wednesday', periods: ['Bangla', 'English', 'Math', 'Drawing'] },
      { day: 'Thursday', periods: ['Bangla', 'English', 'Math', 'Physical Exercise'] },
    ],
    'Class 2': [
      { day: 'Sunday', periods: ['English', 'Bangla', 'Math', 'Religion'] },
      { day: 'Monday', periods: ['English', 'Bangla', 'Math', 'Drawing'] },
      { day: 'Tuesday', periods: ['English', 'Bangla', 'Math', 'General Science'] },
      { day: 'Wednesday', periods: ['English', 'Bangla', 'Math', 'Social Science'] },
      { day: 'Thursday', periods: ['English', 'Bangla', 'Math', 'Physical Exercise'] },
    ],
    // ... add more classes as needed, using fallback for now
  };

  const currentRoutine = routineData[activeClass] || routineData['Class 1'];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Class Routine</h1>
          <p className="text-gray-600">Academic Year 2024</p>
        </div>

        {/* Class Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {classes.map((cls) => (
            <button
              key={cls}
              onClick={() => setActiveClass(cls)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeClass === cls
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              {cls}
            </button>
          ))}
        </div>

        {/* Routine Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-blue-800 uppercase tracking-wider">Day</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-blue-800 uppercase tracking-wider">1st Period<br/><span className="text-xs font-normal text-gray-500">10:00 - 10:45</span></th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-blue-800 uppercase tracking-wider">2nd Period<br/><span className="text-xs font-normal text-gray-500">10:45 - 11:30</span></th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-blue-800 uppercase tracking-wider">Break<br/><span className="text-xs font-normal text-gray-500">11:30 - 12:00</span></th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-blue-800 uppercase tracking-wider">3rd Period<br/><span className="text-xs font-normal text-gray-500">12:00 - 12:45</span></th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-blue-800 uppercase tracking-wider">4th Period<br/><span className="text-xs font-normal text-gray-500">12:45 - 01:30</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {currentRoutine.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-800 bg-gray-50">
                      {row.day}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">{row.periods[0]}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">{row.periods[1]}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-400 italic bg-gray-50">Break</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">{row.periods[2]}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-600">{row.periods[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            <Calendar className="mr-2" size={18} /> Download Full Routine (PDF)
          </button>
        </div>

      </div>
    </div>
  );
};

export default ClassRoutine;
