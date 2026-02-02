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
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="inline-flex items-center gap-2 bg-[#5B5BD3]/20 text-[#5B5BD3] px-4 py-2 rounded-full text-sm">
          <Info className="w-4 h-4" />
          <span className="font-medium">Your Tech Partner</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transform Your Ideas Into Digital Reality
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From web development to video editing, we provide comprehensive technical solutions to elevate your business.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex items-center gap-4 mb-16">
              <a href="https://calendly.com/vsgroup2510/30min" target="_blank" rel="noopener noreferrer" className="bg-[#5B5BD3] text-white px-8 py-4 rounded-full hover:shadow-xl transition font-medium flex items-center gap-2 text-lg">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#services" className="text-gray-700 hover:text-gray-900 transition font-medium text-lg">
                View Services
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-1">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-1">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Section */}
          <div className="relative">
            {/* Hero Image */}
            <img
              src={heroImage}
              alt="Digital Solutions"
              className="w-full rounded-3xl shadow-2xl"
            />

            {/* Floating Cards */}
           

            <div className="absolute bottom-8 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-[#5B5BD3] rounded-full flex items-center justify-center">
                <Users className="w-7 h-7 text-white" />
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
