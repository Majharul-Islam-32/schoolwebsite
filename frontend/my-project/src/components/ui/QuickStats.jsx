import React from 'react';
import CountUp from 'react-countup';
import { Users, BookOpen, Award, UserCheck } from 'lucide-react';

const QuickStats = () => {
  const stats = [
    {
      id: 1,
      label: "Total Students",
      value: 329,
      icon: <Users size={40} />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 2,
      label: "Teachers",
      value: 6,
      icon: <UserCheck size={40} />,
      color: "bg-green-100 text-green-600"
    },
    {
      id: 3,
      label: "GPA 5 Achievers",
      value: 85,
      icon: <Award size={40} />,
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      id: 4,
      label: "Years of Excellence",
      value: 48,
      icon: <BookOpen size={40} />,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-blue-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-white blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center hover:transform hover:-translate-y-2 transition-transform duration-300 border border-white border-opacity-20">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${stat.color} bg-opacity-100`}>
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold mb-2">
                <CountUp end={stat.value} duration={2.5} enableScrollSpy />
                {stat.label.includes("Years") || stat.label.includes("Students") || stat.label.includes("Achievers") ? "" : ""}
              </h3>
              <p className="text-blue-100 font-medium text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStats;
