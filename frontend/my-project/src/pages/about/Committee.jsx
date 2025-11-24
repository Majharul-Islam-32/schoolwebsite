import React from 'react';
import { User } from 'lucide-react';

const Committee = () => {
  const members = [
    { id: 1, name: "Alhaj Md. Rafiqul Islam", role: "President", phone: "01711-XXXXXX" },
    { id: 2, name: "Mrs. Salma Begum", role: "Vice President", phone: "01819-XXXXXX" },
    { id: 3, name: "Md. Abdul Karim", role: "Member Secretary (Headmaster)", phone: "01912-XXXXXX" },
    { id: 4, name: "Mr. Kamal Hossain", role: "Donor Member", phone: "01712-XXXXXX" },
    { id: 5, name: "Mrs. Fatema Khatun", role: "Guardian Member", phone: "01611-XXXXXX" },
    { id: 6, name: "Mr. Rahim Uddin", role: "Guardian Member", phone: "01515-XXXXXX" },
    { id: 7, name: "Mrs. Nasrin Akter", role: "Teacher Representative", phone: "01715-XXXXXX" },
    { id: 8, name: "Mr. Jamal Uddin", role: "Ward Member", phone: "01818-XXXXXX" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Managing Committee</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our School Managing Committee (SMC) plays a vital role in the development and governance of the school. 
            They are dedicated to ensuring the best educational environment for our students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {members.map((member) => (
            <div key={member.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <User size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                <p className="text-blue-600 font-medium text-sm">{member.role}</p>
                <p className="text-gray-500 text-xs mt-1">{member.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Committee;
