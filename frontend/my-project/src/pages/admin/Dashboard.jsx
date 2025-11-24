import React from 'react';
import { Users, Bell, Calendar, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Total Notices', value: '24', icon: Bell, color: 'bg-blue-500' },
    { label: 'Total Events', value: '12', icon: Calendar, color: 'bg-green-500' },
    { label: 'Total Teachers', value: '18', icon: Users, color: 'bg-purple-500' },
    { label: 'Active Users', value: '156', icon: TrendingUp, color: 'bg-orange-500' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-4 rounded-lg`}>
                <stat.icon size={24} className="text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Welcome Card */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-md p-8 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome to Admin Panel</h2>
        <p className="text-blue-100">
          Manage your school website content from here. You can create, edit, and delete notices, events, and more.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
