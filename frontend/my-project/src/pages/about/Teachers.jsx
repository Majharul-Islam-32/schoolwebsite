import React from 'react';
import { User, Phone, Mail } from 'lucide-react';

const Teachers = () => {
  // Dummy data for teachers
  const teachers = [
    { id: 1, name: "Md. Abdul Karim", designation: "Headmaster", phone: "01711-XXXXXX", email: "headmaster@school.com" },
    { id: 2, name: "Mrs. Salma Begum", designation: "Assistant Teacher", phone: "01819-XXXXXX", email: "salma@school.com" },
    { id: 3, name: "Mr. Rahim Uddin", designation: "Assistant Teacher", phone: "01912-XXXXXX", email: "rahim@school.com" },
    { id: 4, name: "Mrs. Fatema Khatun", designation: "Assistant Teacher", phone: "01712-XXXXXX", email: "fatema@school.com" },
    { id: 5, name: "Mr. Kamal Hossain", designation: "Assistant Teacher", phone: "01611-XXXXXX", email: "kamal@school.com" },
    { id: 6, name: "Mrs. Nasrin Akter", designation: "Assistant Teacher", phone: "01515-XXXXXX", email: "nasrin@school.com" },
    { id: 7, name: "Mr. Jamal Uddin", designation: "Assistant Teacher", phone: "01715-XXXXXX", email: "jamal@school.com" },
    { id: 8, name: "Mrs. Rina Parvin", designation: "Assistant Teacher", phone: "01818-XXXXXX", email: "rina@school.com" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Teachers</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated team of educators who are committed to nurturing the next generation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100 group">
              {/* Image Placeholder Section */}
              <div className="bg-blue-50 h-48 flex items-center justify-center relative overflow-hidden">
                {/* 
                  TODO: Replace the icon below with an actual image tag when images are available.
                  Example: <img src="/path/to/image.jpg" alt={teacher.name} className="w-full h-full object-cover" />
                */}
                <User size={64} className="text-blue-300 group-hover:scale-110 transition-transform duration-300" />
                
                {/* Overlay for Blueprint */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 font-medium text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">
                    View Profile
                  </span>
                </div>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-1">{teacher.name}</h3>
                <p className="text-blue-600 font-medium text-sm mb-4">{teacher.designation}</p>
                
                <div className="flex justify-center space-x-4 text-gray-500">
                  <a href={`tel:${teacher.phone}`} className="hover:text-blue-600 transition-colors" title="Call">
                    <Phone size={18} />
                  </a>
                  <a href={`mailto:${teacher.email}`} className="hover:text-blue-600 transition-colors" title="Email">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
