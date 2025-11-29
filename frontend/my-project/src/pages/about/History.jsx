import React from 'react';
import { Clock, Award, BookOpen } from 'lucide-react';

const History = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-blue-600 p-8 text-white text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Our History</h1>
            <p className="text-blue-100">A Legacy of Education and Excellence</p>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Clock className="mr-3 text-blue-600" /> Founding Story
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Abdullapur Bazar Government Primary School was established in 1990 with a vision to provide quality primary education to the children of our village. Starting with just 2 classrooms and 50 students, the school was founded by a group of dedicated community leaders who believed that education is the key to development.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The land for the school was generously donated by Late Haji Abdul Malek, a respected philanthropist of the area. His dream was to see every child in the village holding a book and smiling with the joy of learning.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Award className="mr-3 text-blue-600" /> Milestones
              </h2>
              <ul className="space-y-4 border-l-2 border-blue-200 pl-4 ml-2">
                <li className="relative">
                  <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-blue-600"></div>
                  <span className="font-bold text-gray-800 block">1990</span>
                  <p className="text-gray-600">School established with 50 students.</p>
                </li>
                <li className="relative">
                  <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-blue-600"></div>
                  <span className="font-bold text-gray-800 block">1995</span>
                  <p className="text-gray-600">Recognized as the best primary school in the Upazila.</p>
                </li>
                <li className="relative">
                  <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-blue-600"></div>
                  <span className="font-bold text-gray-800 block">2005</span>
                  <p className="text-gray-600">New 2-story building constructed by the government.</p>
                </li>
                <li className="relative">
                  <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-blue-600"></div>
                  <span className="font-bold text-gray-800 block">2015</span>
                  <p className="text-gray-600">Digital classroom inaugurated.</p>
                </li>
                <li className="relative">
                  <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-blue-600"></div>
                  <span className="font-bold text-gray-800 block">2023</span>
                  <p className="text-gray-600">Achieved 100% pass rate in scholarship exams.</p>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <BookOpen className="mr-3 text-blue-600" /> Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to foster a safe, inclusive, and stimulating learning environment where every child is valued and encouraged to reach their full potential. We strive to instill moral values, critical thinking, and a love for learning in our students, preparing them to become responsible citizens of the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
