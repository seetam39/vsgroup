import React, { useState } from 'react';
import { Calendar, Phone, Mail, User, MessageSquare, ChevronDown } from 'lucide-react';

export default function BookingSection() {
  const [selectedService, setSelectedService] = useState('');

  const services = [
    'Web Development',
    'Video Editing',
    'Graphic Design',
    'Mobile Apps',
    'Cloud Solutions',
    'Cyber Security',
    'Other'
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your Services
          </h2>
          <p className="text-xl text-gray-600">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h3>
            <p className="text-gray-600 mb-8">
              Have questions about our services? We're here to help. Contact us through the form or reach out directly.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#5B5BD3]/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#5B5BD3]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Phone</div>
                  <div className="text-gray-600">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#5B5BD3]/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#5B5BD3]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">hello@techflow.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Business Hours</div>
                  <div className="text-gray-600">Mon - Fri: 9AM - 6PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#5B5BD3] transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#5B5BD3] transition-colors"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Select Service
                </label>
                <div className="relative">
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#5B5BD3] transition-colors appearance-none bg-white"
                  >
                    <option value="">Choose a service...</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    placeholder="Tell us about your project..."
                    rows="4"
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#5B5BD3] transition-colors resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#5B5BD3] text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-shadow"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
