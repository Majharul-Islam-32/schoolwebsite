import React, { useState, useEffect } from 'react';
import { User, Phone, Mail, Loader2 } from 'lucide-react';

const Committee = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/committee-members?activeOnly=true');
      if (response.ok) {
        const data = await response.json();
        setMembers(data);
      }
    } catch (error) {
      console.error('Error fetching committee members:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <Loader2 className="animate-spin text-blue-600" size={48} />
      </div>
    );
  }

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

        {members.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {members.map((member) => (
              <div key={member.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden flex-shrink-0 border border-gray-200 flex items-center justify-center">
                  {member.imageUrl ? (
                    <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <User size={32} className="text-gray-400" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 font-medium text-sm">{member.role}</p>
                  <div className="mt-2 space-y-1">
                    {member.phone && (
                      <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <Phone size={12} />
                        <span>{member.phone}</span>
                      </div>
                    )}
                    {member.email && (
                      <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <Mail size={12} />
                        <span>{member.email}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-block p-4 rounded-full bg-gray-100 mb-4">
              <User size={48} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-900">No Committee Members Found</h3>
            <p className="text-gray-500 mt-2">Please check back later for updates.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Committee;
