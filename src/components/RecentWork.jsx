import React, { useState, useEffect } from 'react';
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
      categoryColor: 'text-[#5B5BD3]',
      icon: null
    },
    {
      id: 2,
      category: 'WEB DEVELOPMENT',
      title: 'BridgeScale Media',
      description: 'Digital marketing and creative agency helping brands grow through strategic and creative work.',
      url: 'https://bridgescalemedia.com/',
      image: bridgeImage,
      categoryColor: 'text-[#5B5BD3]',
      icon: null
    },
    {
      id: 3,
      category: 'WEB DEVELOPMENT',
      title: 'Vande Bharat 24',
      description: 'Hindi news portal publishing current events, local stories, viral news, videos, and articles.',
      url: 'https://vandebharat24.com/',
      image: vandeBharatImage,
      categoryColor: 'text-[#5B5BD3]',
      icon: null
    },
    {
      id: 4,
      category: 'WEB DEVELOPMENT',
      title: 'DCA Daily Current Affairs',
      description: 'Hindi current affairs and news portal covering national and international events.',
      url: 'https://dcadailycurrentaffairs.com/',
      image: dcaImage,
      categoryColor: 'text-[#5B5BD3]',
      icon: null
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  // Auto-slide every 1 second (very fast)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="portfolio" className="py-16 px-4 bg-white">
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

        {/* Simple Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-linear gap-6"
              style={{ 
                transform: `translateX(-${currentSlide * (100 / 3 + 2)}%)`
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
                >
                  <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    {/* Project Image */}
                    <div className="relative h-48 bg-white overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Project Info */}
                    <div className="p-5">
                      <div className={`text-xs font-semibold ${project.categoryColor} mb-2 tracking-wide uppercase`}>
                        {project.category}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      {project.url && (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-[#5B5BD3] font-semibold text-sm hover:underline mt-3 inline-block">
                          Visit Website →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
