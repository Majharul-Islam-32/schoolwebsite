import React from 'react';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';

const NoticeTicker = () => {
  const notices = [
    "School will remain closed tomorrow due to public holiday.",
    "Annual sports day registration is open.",
    "Class 5 scholarship exam results will be published next week."
  ];

  return (
    <div className="bg-blue-900 text-white py-2 overflow-hidden flex items-center">
      <div className="container mx-auto flex items-center px-4">
        <div className="flex items-center bg-red-600 px-3 py-1 rounded mr-4 z-10 shadow-md whitespace-nowrap">
          <Bell size={16} className="mr-2 animate-pulse" />
          <span className="font-bold text-sm">Notice</span>
        </div>
        
        <div className="flex-grow overflow-hidden relative h-6">
          <motion.div 
            className="whitespace-nowrap absolute"
            animate={{ x: ["100%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {notices.map((notice, index) => (
              <span key={index} className="mr-12 text-sm md:text-base">
                {notice} •
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NoticeTicker;
