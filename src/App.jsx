import React from 'react';
import { ArrowRight, Zap, Info, CheckCircle, Users } from 'lucide-react';
import Navbar from './components/Navbar';
import RecentWork from './components/RecentWork';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import CTASection from './components/CTASection';
import BookingForm from './components/BookingForm';
import heroImage from './assets/image.png';
import logo from './assets/logo.png';

function App() {
  return (
    
    <div className="min-h-screen bg-gradient-to-br from-[#5B5BD3]/10 via-white to-blue-50">
      {/* Navigation */}
      <Navbar />

      {/* Badge */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-6 sm:mt-8">
        <div className="inline-flex items-center gap-2 bg-[#5B5BD3]/20 text-[#5B5BD3] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
          <Info className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="font-medium">Your Tech Partner</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Transform Your Ideas Into Digital Reality
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              From web development to video editing, we provide comprehensive technical solutions to elevate your business.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-16">
              <a href="https://calendly.com/vsgroup2510/30min" target="_blank" rel="noopener noreferrer" className="bg-[#5B5BD3] text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full hover:shadow-xl transition font-medium flex items-center gap-2 text-sm sm:text-base">
                Get Started
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#services" className="text-gray-700 hover:text-gray-900 transition font-medium text-sm sm:text-base">
                View Services
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-gray-600 text-xs sm:text-sm">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">98%</div>
                <div className="text-gray-600 text-xs sm:text-sm">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">24/7</div>
                <div className="text-gray-600 text-xs sm:text-sm">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Section */}
          <div className="relative order-first lg:order-last">
            {/* Hero Image */}
            <img
              src={heroImage}
              alt="Digital Solutions"
              className="w-full rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl"
            />

            {/* Floating Cards - Hidden on mobile */}
            <div className="absolute bottom-4 sm:bottom-8 -left-2 sm:-left-4 bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3 hidden sm:flex">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#5B5BD3] rounded-full flex items-center justify-center">
                <Users className="w-5 sm:w-7 h-5 sm:h-7 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <Services />

      {/* How It Works Section */}
      <HowItWorks />

      
      {/* Booking Section */}
      <BookingForm />

      {/* Our Work Section */}
      <RecentWork />


      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
