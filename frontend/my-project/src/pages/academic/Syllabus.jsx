import React from 'react';
import { FileText, Download, BookOpen } from 'lucide-react';

const Syllabus = () => {
  const syllabusList = [
    { class: 'Class 1', year: '2024', size: '2.5 MB' },
    { class: 'Class 2', year: '2024', size: '2.8 MB' },
    { class: 'Class 3', year: '2024', size: '3.1 MB' },
    { class: 'Class 4', year: '2024', size: '3.5 MB' },
    { class: 'Class 5', year: '2024', size: '3.8 MB' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Academic Syllabus</h1>
          <p className="text-gray-600">Download the latest syllabus for all classes.</p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {syllabusList.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 border border-gray-100 flex items-center justify-between group">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{item.class} Syllabus</h3>
                  <p className="text-sm text-gray-500">Year: {item.year} • Size: {item.size}</p>
                </div>
              </div>
              
              <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors" title="Download PDF">
                <Download size={24} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center max-w-4xl mx-auto border border-blue-100">
          <FileText size={48} className="mx-auto text-blue-400 mb-4" />
          <h3 className="text-xl font-bold text-blue-800 mb-2">Need Help?</h3>
          <p className="text-gray-600 mb-6">
            If you are unable to download the syllabus or need a physical copy, please contact the school office during working hours.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Contact Office
          </button>
        </div>

      </div>
    </div>
  );
};

export default Syllabus;
