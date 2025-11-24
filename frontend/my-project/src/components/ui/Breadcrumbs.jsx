import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  
  // Don't show breadcrumbs on home page
  if (location.pathname === '/') return null;

  // Route name mapping
  const routeNames = {
    'history': 'History',
    'committee': 'Committee',
    'headmaster': 'Headmaster',
    'teachers': 'Teachers',
    'contact': 'Contact',
    'gallery': 'Gallery',
    'notices': 'Notice Board',
    'routine': 'Class Routine',
    'syllabus': 'Syllabus',
    'result': 'Exam Results',
    'admission': 'Admission',
  };

  // Parent route mapping
  const parentRoutes = {
    'history': 'About Us',
    'committee': 'About Us',
    'headmaster': 'About Us',
    'teachers': 'About Us',
    'routine': 'Academic',
    'syllabus': 'Academic',
    'result': 'Academic',
  };

  const pathnames = location.pathname.split('/').filter((x) => x);
  
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center text-sm text-gray-600">
          <Link 
            to="/" 
            className="flex items-center hover:text-blue-600 transition-colors"
          >
            <Home size={16} className="mr-1" />
            Home
          </Link>
          
          {pathnames.map((value, index) => {
            const isLast = index === pathnames.length - 1;
            const routeName = routeNames[value] || value;
            const parentRoute = parentRoutes[value];
            
            return (
              <React.Fragment key={value}>
                <ChevronRight size={16} className="mx-2 text-gray-400" />
                
                {/* Show parent category if exists */}
                {parentRoute && index === 0 && (
                  <>
                    <span className="text-gray-500">{parentRoute}</span>
                    <ChevronRight size={16} className="mx-2 text-gray-400" />
                  </>
                )}
                
                {isLast ? (
                  <span className="text-blue-600 font-medium capitalize">
                    {routeName}
                  </span>
                ) : (
                  <Link 
                    to={`/${pathnames.slice(0, index + 1).join('/')}`}
                    className="hover:text-blue-600 transition-colors capitalize"
                  >
                    {routeName}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumbs;
