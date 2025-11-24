import React, { useState } from 'react';
import { Search, Award, AlertCircle } from 'lucide-react';

const Result = () => {
  const [searchParams, setSearchParams] = useState({ class: '', roll: '', year: '2024' });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      if (searchParams.roll === '1') {
        setResult({
          name: 'Rahim Uddin',
          class: searchParams.class,
          roll: searchParams.roll,
          gpa: '5.00',
          grade: 'A+',
          marks: [
            { subject: 'Bangla', mark: 85, grade: 'A+' },
            { subject: 'English', mark: 80, grade: 'A+' },
            { subject: 'Mathematics', mark: 95, grade: 'A+' },
            { subject: 'Science', mark: 88, grade: 'A+' },
            { subject: 'Religion', mark: 90, grade: 'A+' },
          ]
        });
      } else {
        setError('Result not found. Please check your Class and Roll number.');
      }
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Exam Results</h1>
          <p className="text-gray-600">Check your academic performance online.</p>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Search Form */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 mb-8">
            <form onSubmit={handleSearch} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Class</label>
                <select 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required
                  onChange={(e) => setSearchParams({...searchParams, class: e.target.value})}
                >
                  <option value="">-- Select Class --</option>
                  <option value="Class 1">Class 1</option>
                  <option value="Class 2">Class 2</option>
                  <option value="Class 3">Class 3</option>
                  <option value="Class 4">Class 4</option>
                  <option value="Class 5">Class 5</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Roll Number</label>
                <input 
                  type="number" 
                  placeholder="Enter Roll Number" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required
                  onChange={(e) => setSearchParams({...searchParams, roll: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Exam Year</label>
                <select 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  onChange={(e) => setSearchParams({...searchParams, year: e.target.value})}
                >
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors flex justify-center items-center"
                disabled={loading}
              >
                {loading ? (
                  <span className="animate-pulse">Searching...</span>
                ) : (
                  <>
                    <Search size={20} className="mr-2" /> Get Result
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center justify-center mb-8 animate-fade-in">
              <AlertCircle size={20} className="mr-2" /> {error}
            </div>
          )}

          {/* Result Display */}
          {result && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 animate-fade-in-up">
              <div className="bg-blue-600 p-6 text-white text-center">
                <Award size={48} className="mx-auto mb-2 text-yellow-300" />
                <h2 className="text-2xl font-bold">{result.name}</h2>
                <p className="opacity-90">{result.class} | Roll: {result.roll}</p>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-6 bg-gray-50 p-4 rounded-lg">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">GPA</p>
                    <p className="text-2xl font-bold text-blue-600">{result.gpa}</p>
                  </div>
                  <div className="h-10 w-px bg-gray-300"></div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Grade</p>
                    <p className="text-2xl font-bold text-green-600">{result.grade}</p>
                  </div>
                </div>

                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 text-gray-600 font-medium">Subject</th>
                      <th className="text-right py-2 text-gray-600 font-medium">Marks</th>
                      <th className="text-right py-2 text-gray-600 font-medium">Grade</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {result.marks.map((mark, index) => (
                      <tr key={index}>
                        <td className="py-3 text-gray-800">{mark.subject}</td>
                        <td className="py-3 text-right text-gray-800">{mark.mark}</td>
                        <td className="py-3 text-right font-bold text-blue-600">{mark.grade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                <div className="mt-8 text-center">
                  <button className="text-blue-600 hover:underline text-sm font-medium">Download Marksheet</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Result;
