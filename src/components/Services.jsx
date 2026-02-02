import React from 'react';
import { Code, Video, Palette, TrendingUp, List, Pen, MessageCircle, Headphones, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      bgColor: 'bg-gray-50',
      iconColor: 'bg-[#5B5BD3]',
      linkColor: 'text-[#5B5BD3]'
    },
    {
      id: 2,
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing services for marketing and content creation',
      bgColor: 'bg-gray-50',
      iconColor: 'bg-[#5B5BD3]',
      linkColor: 'text-[#5B5BD3]'
    },
    {
      id: 3,
      icon: Palette,
      title: 'Logo Design',
      description: 'Unique and memorable logos that represent your brand identity',
      bgColor: 'bg-gray-50',
      iconColor: 'bg-[#5B5BD3]',
      linkColor: 'text-[#5B5BD3]'
    },
    {
      id: 4,
      icon: TrendingUp,
      title: 'Data Analytics',
      description: 'Transform data into actionable insights for better decision making',
      bgColor: 'bg-gray-50',
      iconColor: 'bg-[#5B5BD3]',
      linkColor: 'text-[#5B5BD3]'
    },
    {
      id: 5,
      icon: List,
      title: 'Project Management',
      description: 'Expert project management to ensure timely and successful delivery',
      bgColor: 'bg-gray-50',
      iconColor: 'bg-[#5B5BD3]',
      linkColor: 'text-[#5B5BD3]'
    },
    {
      id: 6,
      icon: Pen,
      title: 'Graphic Design',
      description: 'Stunning graphics and visual content that captivate your audience',
      bgColor: 'bg-gray-50',
      iconColor: 'bg-[#5B5BD3]',
      linkColor: 'text-[#5B5BD3]'
    },
    {
      id: 7,
      icon: MessageCircle,
      title: 'Chatbot Development',
      description: 'AI-powered chatbots for automated customer engagement',
      bgColor: 'bg-gray-50',
      iconColor: 'bg-[#5B5BD3]',
      linkColor: 'text-[#5B5BD3]'
    },
    {
      id: 8,
      icon: Headphones,
      title: 'Instant Support',
      description: '24/7 technical support and maintenance for your peace of mind',
      bgColor: 'bg-gray-50',
      iconColor: 'bg-[#5B5BD3]',
      linkColor: 'text-[#5B5BD3]'
    }
  ];

  return (
    <div className="py-12 sm:py-16 px-4 bg-white" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-[#5B5BD3] font-semibold text-xs sm:text-sm uppercase tracking-wide mb-2 sm:mb-3">
            OUR SERVICES
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
            Comprehensive Tech Solutions
          </h1>
          <p className="text-base sm:text-xl text-gray-600">
            We offer a full suite of services to meet all your digital needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`${service.bgColor} rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Icon */}
                <div className={`${service.iconColor} w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4`}>
                  <IconComponent className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-3 sm:mb-4">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <a
                  href="#"
                  className={`${service.linkColor} font-semibold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all duration-300`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Help Button */}
      <button className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 bg-[#5B5BD3] text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full shadow-lg hover:bg-[#5B5BD3]/80 transition-all duration-300 flex items-center gap-2 hover:shadow-xl z-50">
        <span className="text-base sm:text-lg">❓</span>
        <span className="font-semibold text-sm sm:text-base">Help</span>
      </button>
    </div>
  );
}
