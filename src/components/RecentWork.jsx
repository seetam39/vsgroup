import React from 'react';
import hunarImage from '../assets/Hunar.png';
import bridgeImage from '../assets/bridge.png';
import vandeBharatImage from '../assets/vandebharat.png';
import dcaImage from '../assets/dca.png';

export default function RecentWork() {
  const projects = [
    {
      id: 1,
      category: 'WEB DEVELOPMENT',
      title: 'Hunar',
      description: 'E-commerce platform for authentic Kashmiri traditional wear.',
      url: 'https://hunar.cc',
      image: hunarImage
    },
    {
      id: 2,
      category: 'WEB DEVELOPMENT',
      title: 'BridgeScale Media',
      description: 'Digital marketing and creative agency.',
      url: 'https://bridgescalemedia.com/',
      image: bridgeImage
    },
    {
      id: 3,
      category: 'WEB DEVELOPMENT',
      title: 'Vande Bharat 24',
      description: 'Hindi news portal for current events and stories.',
      url: 'https://vandebharat24.com/',
      image: vandeBharatImage
    },
    {
      id: 4,
      category: 'WEB DEVELOPMENT',
      title: 'DCA Daily Current Affairs',
      description: 'Hindi news portal covering national events.',
      url: 'https://dcadailycurrentaffairs.com/',
      image: dcaImage
    }
  ];

  // Duplicate projects for infinite scroll effect
  const allProjects = [...projects, ...projects, ...projects];

  return (
    <section id="portfolio" className="py-16 px-4 bg-white overflow-hidden">
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

        {/* Infinite Scroll Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll hover:pause">
              {allProjects.map((project, index) => (
                <div
                  key={`${project.id}-${index}`}
                  className="flex-shrink-0 w-72 md:w-80"
                >
                  <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    {/* Project Image */}
                    <div className="relative h-44 bg-white overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Project Info */}
                    <div className="p-5">
                      <div className="text-xs font-semibold text-[#5B5BD3] mb-2 tracking-wide uppercase">
                        {project.category}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
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

      {/* CSS for infinite scroll animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
          width: max-content;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
