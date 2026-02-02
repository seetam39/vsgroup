import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Send } from 'lucide-react';

export default function BookingSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@techserve.com'
    },
    {
      icon: MapPin,
      label: 'Office',
      value: '123 Tech Street, San Francisco, CA 94102'
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  const services = [
    'Web Development',
    'Video Editing',
    'Logo Design',
    'Data Analytics',
    'Project Management',
    'Graphic Design',
    'Chatbot Development',
    'Instant Support'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <p className="text-[#5B5BD3] font-semibold text-sm uppercase tracking-wide mb-3">
              GET IN TOUCH
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Book Your Services
            </h1>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 mb-12">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-[#5B5BD3] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">{item.label}</p>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Media Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-[#5B5BD3] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5B5BD3] focus:border-transparent"
                />
              </div>

              {/* Service Interested In */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Service Interested In
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5B5BD3] focus:border-transparent appearance-none cursor-pointer bg-white"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1.5em 1.5em',
                    paddingRight: '2.5rem'
                  }}
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service.toLowerCase().replace(/\s+/g, '-')}>{service}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5B5BD3] focus:border-transparent resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#5B5BD3] text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Help Button */}
      <button className="fixed bottom-8 right-8 bg-[#5B5BD3] text-white px-5 py-3 rounded-full shadow-lg hover:bg-[#5B5BD3]/80 transition-all duration-300 flex items-center gap-2 hover:shadow-xl">
        <span className="text-lg">❓</span>
        <span className="font-semibold">Help</span>
      </button>
    </div>
  );
}
