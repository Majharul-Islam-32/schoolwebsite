import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, PlayCircle, Image as ImageIcon } from 'lucide-react';

const EventDetails = () => {
  const { id } = useParams();

  // In a real app, fetch data based on ID. Here we mock it.
  const event = {
    id: id,
    title: "Annual Sports Day 2024",
    date: "February 15, 2024",
    description: "The Annual Sports Day 2024 was a grand success. Students from all classes participated in various events including 100m race, relay race, long jump, and high jump. The event started with a march past by the students, followed by the oath-taking ceremony. The Headmaster inaugurated the event by releasing balloons. Parents and guardians were also present to encourage the young athletes.",
    images: [
      "/slider1.png", "/slider2.png", "/slider3.png", "/slider1.png", "/slider2.png", "/slider3.png"
    ],
    videos: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ" // Dummy video link
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        
        {/* Back Button */}
        <Link to="/gallery" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" /> Back to Gallery
        </Link>

        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-gray-100">
          <div className="flex items-center text-blue-600 mb-3">
            <Calendar size={18} className="mr-2" />
            <span className="font-medium">{event.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{event.title}</h1>
          <p className="text-gray-600 leading-relaxed text-lg">
            {event.description}
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <PlayCircle className="mr-3 text-red-600" /> Event Videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {event.videos.map((video, index) => (
              <div key={index} className="aspect-video bg-black rounded-xl overflow-hidden shadow-md">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={video} 
                  title="Event Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            ))}
            {/* Placeholder for adding more videos */}
            <div className="aspect-video bg-gray-200 rounded-xl border-2 border-dashed border-gray-400 flex flex-col items-center justify-center text-gray-500">
              <PlayCircle size={48} className="mb-2 opacity-50" />
              <p>Video Placeholder</p>
              <span className="text-xs">(Add more video embeds here)</span>
            </div>
          </div>
        </div>

        {/* Image Gallery Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <ImageIcon className="mr-3 text-blue-600" /> Event Photos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {event.images.map((img, index) => (
              <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group relative">
                <img 
                  src={img} 
                  alt={`Event ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
            ))}
            {/* Placeholder for adding more images */}
            <div className="aspect-square bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 hover:bg-gray-200 transition-colors cursor-pointer">
              <ImageIcon size={32} className="mb-2 opacity-50" />
              <p>Add Photos</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EventDetails;
