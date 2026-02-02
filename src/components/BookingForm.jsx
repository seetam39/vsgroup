import React, { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: ''
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
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Book Your Service
          </h2>
          <p className="text-xl text-gray-600">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-[#5B5BD3]/10 rounded-3xl p-8 md:p-12">
          {/* Row 1: Full Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5B5BD3] focus:border-transparent bg-white"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5B5BD3] focus:border-transparent bg-white"
              />
            </div>
          </div>

          {/* Row 2: Phone & Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5B5BD3] focus:border-transparent bg-white"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5B5BD3] focus:border-transparent bg-white"
              />
            </div>
          </div>

          {/* Row 3: Service Selection */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Select Service <span className="text-red-500">*</span>
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5B5BD3] focus:border-transparent bg-white appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
                backgroundSize: '1.5em 1.5em',
                paddingRight: '2.5rem'
              }}
            >
              <option value="">Choose a service...</option>
              <option value="web-development">Web Development</option>
              <option value="video-editing">Video Editing</option>
              <option value="graphic-design">Graphic Design</option>
              <option value="seo-marketing">SEO & Marketing</option>
              <option value="mobile-app">Mobile App Development</option>
            </select>
          </div>

          {/* Row 4: Budget Selection */}
          <div className="mb-8">
            <label className="block text-gray-700 font-semibold mb-2">
              Project Budget
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5B5BD3] focus:border-transparent bg-white appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
                backgroundSize: '1.5em 1.5em',
                paddingRight: '2.5rem'
              }}
            >
              <option value="">Select budget range...</option>
              <option value="under-5k">Under $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="over-50k">Over $50,000</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#5B5BD3] text-white px-12 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
