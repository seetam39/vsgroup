import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import hunarImage from '../assets/Hunar.png';
import bridgeImage from '../assets/bridge.png';
import vandeBharatImage from '../assets/vandebharat.png';
import dcaImage from '../assets/dca.png';

export default function RecentWork() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      category: 'WEB DEVELOPMENT',
      title: 'Hunar',
      description: 'E-commerce platform for authentic Kashmiri traditional wear, serving customers across UAE and India.',
      url: 'https://hunar.cc',
      image: hunarImage,
      categoryColor: 'text-purple-500',
      icon: null
    },
    {
      id: 2,
      category: 'WEB DEVELOPMENT',
      title: 'BridgeScale Media',
      description: 'Digital marketing and creative agency helping brands grow through strategic and creative work.',
      url: 'https://bridgescalemedia.com/',
      image: bridgeImage,
      categoryColor: 'text-green-500',
      icon: null
    },
    {
      id: 3,
      category: 'WEB DEVELOPMENT',
      title: 'Vande Bharat 24',
      description: 'Hindi news portal publishing current events, local stories, viral news, videos, and articles.',
      url: 'https://vandebharat24.com/',
      image: vandeBharatImage,
      categoryColor: 'text-orange-500',
      icon: null
    },
    {
      id: 4,
      category: 'WEB DEVELOPMENT',
      title: 'DCA Daily Current Affairs',
      description: 'Hindi current affairs and news portal covering national and international events.',
      url: 'https://dcadailycurrentaffairs.com/',
      image: dcaImage,
      categoryColor: 'text-red-500',
      icon: null
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % projects.length;
      visible.push({ ...projects[index], displayIndex: i });
    }
    return visible;
  };

  return (
    <section id="portfolio" className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Our Recent Work
          </h1>
          <p className="text-xl text-gray-600">
            See what we've created for our clients
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Projects Slider */}
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out gap-6">
              {getVisibleProjects().map((project) => {
                return (
                  <div
                    key={project.id}
                    className={`flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] transition-all duration-300 ${
                      project.displayIndex === 1 ? 'scale-105 z-10' : 'scale-95 opacity-80'
                    }`}
                  >
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                      {/* Project Image */}
                     <div className="relative h-60 bg-white overflow-hidden group">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
  />
</div>


                      {/* Project Info */}
                      <div className="p-6">
                        <div className={`text-sm font-semibold ${project.categoryColor} mb-2 tracking-wide`}>
                          {project.category}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {project.description}
                        </p>
                        {project.url && (
                          <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-[#5B5BD3] font-semibold hover:underline">
                            Visit Website →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300 z-20"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-300 z-20"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
