import React, { useState, useEffect } from 'react';
import { Users, Bell, Calendar, TrendingUp, BookOpen, Clock } from 'lucide-react';
import { dashboardService } from '../../services/dashboardService';
import { useTranslation } from '../../hooks/useTranslation';

const Dashboard = () => {
  const { t } = useTranslation();
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalTeachers: 0,
    totalNotices: 0,
    todaysNotices: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await dashboardService.getStats();
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch dashboard stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const statCards = [
    { 
      label: t('totalStudents'), 
      value: stats.totalStudents, 
      icon: Users, 
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50'
    },
    { 
      label: t('totalTeachers'), 
      value: stats.totalTeachers, 
      icon: BookOpen, 
      color: 'bg-green-500',
      bgColor: 'bg-green-50'
    },
    { 
      label: t('totalNotices'), 
      value: stats.totalNotices, 
      icon: Bell, 
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50'
    },
    { 
      label: t('activeUsers'), 
      value: '156', // Placeholder for now as we don't have user tracking yet
      icon: TrendingUp, 
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50'
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">{t('dashboardOverview')}</h1>
        <p className="text-gray-500 mt-1">{t('welcomeAdmin')}</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">{stat.label}</p>
                <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
              </div>
              <div className={`${stat.bgColor} p-4 rounded-xl`}>
                <stat.icon size={24} className={`${stat.color.replace('bg-', 'text-')}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Today's Notices */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Bell size={20} className="text-blue-600" />
              {t('todaysNotices')}
            </h2>
            <span className="bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">
              {stats.todaysNotices.length} {t('new')}
            </span>
          </div>
          <div className="p-6">
            {stats.todaysNotices.length > 0 ? (
              <div className="space-y-4">
                {stats.todaysNotices.map((notice) => (
                  <div key={notice.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="bg-white p-2 rounded-lg shadow-sm text-center min-w-[60px]">
                      <span className="block text-xs font-bold text-gray-500 uppercase">
                        {new Date(notice.publishDate).toLocaleString('default', { month: 'short' })}
                      </span>
                      <span className="block text-xl font-bold text-blue-600">
                        {new Date(notice.publishDate).getDate()}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{notice.title}</h4>
                      <p className="text-gray-600 text-sm line-clamp-2">{notice.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 text-gray-500">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Bell size={24} className="text-gray-400" />
                </div>
                <p>{t('noNoticesToday')}</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions / Welcome Card */}
        <div className="space-y-6">


          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Clock size={18} className="text-gray-400" />
              {t('systemStatus')}
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">{t('serverStatus')}</span>
                <span className="flex items-center gap-1 text-green-600 font-medium">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  {t('online')}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">{t('lastBackup')}</span>
                <span className="text-gray-800 font-medium">{t('today')}, 04:00 AM</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">{t('databaseVersion')}</span>
                <span className="text-gray-800 font-medium">v1.0.2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

