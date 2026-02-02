import React from 'react';
import { Code, Smartphone, Video, ClipboardList, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Node.js, and more.',
      features: ['Responsive Design', 'E-commerce Solutions', 'CMS Development', 'API Integration']
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      features: ['iOS Development', 'Android Development', 'App Testing', 'App Store Launch']
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing services for marketing, social media, and corporate presentations.',
      features: ['Motion Graphics', 'Color Grading', 'Sound Design', 'Visual Effects']
    },
    {
      icon: ClipboardList,
      title: 'Project Management',
      description: 'Efficient project management services to ensure timely delivery and successful completion of your projects.',
      features: ['Task Planning', 'Team Coordination', 'Progress Tracking', 'Deadline Management']
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#5B5BD3]/20 text-[#5B5BD3] px-4 py-2 rounded-full text-sm mb-6">
            <span className="font-medium">What We Offer</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive digital solutions for your business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                  <IconComponent className="w-7 h-7 text-gray-700" />
                </div>
                
                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-600">
                      <span className="w-2 h-2 bg-[#5B5BD3] rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More */}
                <a href="#" className="inline-flex items-center gap-1 text-[#5B5BD3] font-semibold hover:text-[#5B5BD3]/80">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-[#5B5BD3] rounded-3xl p-10 text-white">
            <h3 className="text-3xl font-bold mb-3">
              Ready to Start Your Project?
            </h3>
            <p className="text-[#5B5BD3]/30 text-lg mb-6">
              Contact us for a free consultation
            </p>
            <a href="https://calendly.com/vsgroup2510/30min" target="_blank" rel="noopener noreferrer" className="bg-white text-[#5B5BD3] px-8 py-3 rounded-full font-semibold">
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
