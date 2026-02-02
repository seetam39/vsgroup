import React from 'react';
import { Code, Video, Palette, TrendingUp, List, Pen, MessageCircle, Headphones, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      bgColor: 'bg-blue-50',
      iconColor: 'bg-indigo-600',
      linkColor: 'text-indigo-600'
    },
    {
      id: 2,
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing services for marketing and content creation',
      bgColor: 'bg-pink-50',
      iconColor: 'bg-pink-600',
      linkColor: 'text-pink-600'
    },
    {
      id: 3,
      icon: Palette,
      title: 'Logo Design',
      description: 'Unique and memorable logos that represent your brand identity',
      bgColor: 'bg-purple-50',
      iconColor: 'bg-purple-600',
      linkColor: 'text-purple-600'
    },
    {
      id: 4,
      icon: TrendingUp,
      title: 'Data Analytics',
      description: 'Transform data into actionable insights for better decision making',
      bgColor: 'bg-teal-50',
      iconColor: 'bg-teal-600',
      linkColor: 'text-teal-600'
    },
    {
      id: 5,
      icon: List,
      title: 'Project Management',
      description: 'Expert project management to ensure timely and successful delivery',
      bgColor: 'bg-orange-50',
      iconColor: 'bg-orange-600',
      linkColor: 'text-orange-600'
    },
    {
      id: 6,
      icon: Pen,
      title: 'Graphic Design',
      description: 'Stunning graphics and visual content that captivate your audience',
      bgColor: 'bg-emerald-50',
      iconColor: 'bg-emerald-600',
      linkColor: 'text-emerald-600'
    },
    {
      id: 7,
      icon: MessageCircle,
      title: 'Chatbot Development',
      description: 'AI-powered chatbots for automated customer engagement',
      bgColor: 'bg-rose-50',
      iconColor: 'bg-rose-600',
      linkColor: 'text-rose-600'
    },
    {
      id: 8,
      icon: Headphones,
      title: 'Instant Support',
      description: '24/7 technical support and maintenance for your peace of mind',
      bgColor: 'bg-amber-50',
      iconColor: 'bg-amber-600',
      linkColor: 'text-amber-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wide mb-3">
            OUR SERVICES
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Comprehensive Tech Solutions
          </h1>
          <p className="text-xl text-gray-600">
            We offer a full suite of services to meet all your digital needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`${service.bgColor} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Icon */}
                <div className={`${service.iconColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
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
      <button className="fixed bottom-8 right-8 bg-indigo-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 flex items-center gap-2 hover:shadow-xl">
        <span className="text-lg">❓</span>
        <span className="font-semibold">Help</span>
      </button>
    </div>
  );
}
