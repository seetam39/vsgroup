import React from 'react';
import { Calendar, Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <div className="py-16 bg-[#5050c8]">
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Your Project?
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Let's bring your ideas to life with our expert team. Book a free consultation today!
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary Button */}
          <a href="https://calendly.com/vsgroup2510/30min" target="_blank" rel="noopener noreferrer" className="bg-white text-[#5B5BD3] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition shadow-lg flex items-center gap-3">
            <span>Book Free Consultation</span>
            <Calendar className="w-5 h-5" />
          </a>
          
          {/* Secondary Button */}
          <button className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#5B5BD3] transition shadow-lg flex items-center gap-3">
            <span>Contact Us</span>
            <Phone className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
