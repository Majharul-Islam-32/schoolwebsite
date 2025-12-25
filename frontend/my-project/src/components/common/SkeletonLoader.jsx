import React from 'react';

const SkeletonLoader = ({ type = 'text', count = 1, className = '' }) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'text':
        return <div className={`h-4 bg-gray-200 rounded animate-pulse ${className}`}></div>;
      case 'rect':
        return <div className={`bg-gray-200 rounded animate-pulse ${className}`}></div>;
      case 'circle':
        return <div className={`rounded-full bg-gray-200 animate-pulse ${className}`}></div>;
      case 'card':
        return (
          <div className={`bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 ${className}`}>
            <div className="h-48 bg-gray-200 animate-pulse"></div>
            <div className="p-4 space-y-3">
              <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
              <div className="h-20 bg-gray-200 rounded w-full animate-pulse"></div>
            </div>
          </div>
        );
      case 'table-row':
        return (
          <tr className="animate-pulse border-b border-gray-100">
            <td className="py-4 px-6"><div className="h-4 bg-gray-200 rounded w-8"></div></td>
            <td className="py-4 px-6"><div className="h-4 bg-gray-200 rounded w-3/4"></div></td>
            <td className="py-4 px-6"><div className="h-4 bg-gray-200 rounded w-24"></div></td>
            <td className="py-4 px-6"><div className="h-8 w-8 bg-gray-200 rounded mx-auto"></div></td>
          </tr>
        );
      default:
        return <div className={`bg-gray-200 animate-pulse ${className}`}></div>;
    }
  };

  return (
    <>
      {Array(count).fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {renderSkeleton()}
        </React.Fragment>
      ))}
    </>
  );
};

export default SkeletonLoader;
