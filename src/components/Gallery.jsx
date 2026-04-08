import React from 'react';
import { Camera, Maximize2, Play, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const items = [
    {
      id: 1,
      title: "Method Acting Workshop",
      category: "Classroom",
      size: "md:col-span-2 md:row-span-2",
      image: "/image1.jpg",
    },
    {
      id: 2,
      title: "Stage Performance",
      category: "Theater",
      size: "md:col-span-1 md:row-span-1",
      image: "/image2.jpg",
    },
    {
      id: 3,
      title: "On-Camera Practice",
      category: "Studio",
      size: "md:col-span-1 md:row-span-1",
      image: "/image3.jpg",
    },
    {
      id: 4,
      title: "Voice Training",
      category: "Workshop",
      size: "md:col-span-1 md:row-span-2",
      image: "/image4.jpg",
    },
    {
      id: 5,
      title: "Annual Showcase",
      category: "Event",
      size: "md:col-span-1 md:row-span-1",
      image: "/image5.jpg",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 border border-yellow-100">
              <Camera size={14} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">The Archive</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-[0.9]">
              Life <span className="text-yellow-500">Behind</span> <br /> 
              <span className="text-gray-300">The</span> Acting Career
            </h2>
          </div>
          
          <div className="flex bg-gray-50 p-1.5 rounded-full border border-gray-100">
            <button className="px-8 py-2.5 bg-white shadow-sm rounded-full text-gray-900 text-xs font-bold uppercase tracking-widest transition-all">
              Photos
            </button>
            <button className="px-8 py-2.5 text-gray-400 hover:text-gray-900 text-xs font-bold uppercase tracking-widest transition-all">
              Videos
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-auto md:h-[850px]">
          {items.map((item) => (
            <div 
              key={item.id} 
              className={`group relative overflow-hidden rounded-[2rem] bg-gray-100 shadow-sm hover:shadow-2xl hover:shadow-yellow-100 transition-all duration-500 ${item.size}`}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Soft Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content - Visible on Hover */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <p className="text-yellow-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-2">
                  {item.category}
                </p>
                <div className="flex justify-between items-end">
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  <button className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black hover:bg-white transition-all scale-75 group-hover:scale-100 duration-500">
                    <Maximize2 size={20} />
                  </button>
                </div>
              </div>

              {/* Play Button Icon for Video categories */}
              {item.category === "Studio" && (
                <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Play size={24} className="text-gray-900 fill-gray-900 ml-1" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View More - Modern Minimalist Style */}
        <div className="mt-16 flex justify-center">
          <button className="group flex items-center gap-4 bg-gray-900 text-white px-10 py-5 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300">
            <span className="text-sm font-bold uppercase tracking-[0.2em]">Explore Full Portfolio</span>
            <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-black/10 flex items-center justify-center transition-colors">
              <ChevronRight size={18} />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Gallery;