import React from 'react';
import { Calendar, FileText, CheckCircle, AlertCircle, Download, Users } from 'lucide-react';

const Admission = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Admission Information</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Welcome to the admission process for Abdullapur Bazar Government Primary School. 
            Please read the information carefully before applying.
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 max-w-4xl mx-auto rounded-r-lg">
          <div className="flex items-start">
            <AlertCircle className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-blue-800 mb-2">Important Notice</h3>
              <p className="text-gray-700 text-sm">
                Admission is conducted according to the Government Primary School Admission Policy. 
                All admissions are subject to availability and eligibility criteria.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Admission Timeline */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <Calendar className="text-blue-600 mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Admission Timeline 2025</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start pb-4 border-b border-gray-100">
                <div className="bg-blue-100 text-blue-600 font-bold px-4 py-2 rounded-lg mr-4 flex-shrink-0">
                  Jan 1-15
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Application Period</h4>
                  <p className="text-sm text-gray-600">Submit admission forms at the school office</p>
                </div>
              </div>
              <div className="flex items-start pb-4 border-b border-gray-100">
                <div className="bg-blue-100 text-blue-600 font-bold px-4 py-2 rounded-lg mr-4 flex-shrink-0">
                  Jan 20
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Merit List Publication</h4>
                  <p className="text-sm text-gray-600">Check the notice board for selected students</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-600 font-bold px-4 py-2 rounded-lg mr-4 flex-shrink-0">
                  Jan 25-30
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Final Admission & Fee Payment</h4>
                  <p className="text-sm text-gray-600">Complete admission formalities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Eligibility Criteria */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <Users className="text-green-600 mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Eligibility Criteria</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Class 1 (Prothom Shreni)</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-sm">Age: 6+ years (as of January 1st)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-sm">Birth Certificate required</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-sm">Guardian's NID copy</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Other Classes</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-sm">Previous class certificate</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-sm">Transfer Certificate (if applicable)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-sm">Subject to seat availability</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Required Documents */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <FileText className="text-orange-600 mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Required Documents</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 font-medium mb-1">1. Birth Certificate (Original + Photocopy)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 font-medium mb-1">2. Guardian's NID Card (Photocopy)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 font-medium mb-1">3. Recent Passport Size Photos (4 copies)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 font-medium mb-1">4. Previous School Certificate (if any)</p>
              </div>
            </div>
          </div>

          {/* Admission Fee */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-md p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Admission Fee Structure</h2>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg">Admission Fee</span>
                <span className="text-2xl font-bold">FREE</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg">Monthly Fee</span>
                <span className="text-2xl font-bold">FREE</span>
              </div>
              <p className="text-sm text-blue-100 mt-4">
                * As per Government Primary School policy, education is completely free. 
                Only nominal charges may apply for special activities.
              </p>
            </div>
          </div>

          {/* Download Forms */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Download Admission Form</h2>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
              <Download className="mr-2" size={20} />
              Download Application Form (PDF)
            </button>
            <p className="text-gray-600 text-sm mt-4">
              Fill the form and submit it to the school office during the admission period.
            </p>
          </div>

          {/* Contact for Queries */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
            <h3 className="font-bold text-gray-800 mb-2">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              For any admission-related queries, please contact the school office during working hours (10:00 AM - 4:00 PM).
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
              <span className="text-gray-700">📞 Phone: 01711-XXXXXX</span>
              <span className="text-gray-700">✉️ Email: info@villagegps.edu.bd</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Admission;
