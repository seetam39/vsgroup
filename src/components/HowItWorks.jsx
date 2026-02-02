import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      number: '1',
      title: 'Book a Service',
      description: 'Choose the service you need and fill out our simple booking form'
    },
    {
      id: 2,
      number: '2',
      title: 'Consultation Call',
      description: "We'll discuss your requirements and provide a tailored solution"
    },
    {
      id: 3,
      number: '3',
      title: 'Project Execution',
      description: 'Our expert team gets to work on your project with regular updates'
    },
    {
      id: 4,
      number: '4',
      title: 'Delivery & Support',
      description: 'Receive your completed project with ongoing support'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Simple and streamlined process to get started
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center"
            >
              {/* Number Circle */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-[#5B5BD3] flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-bold text-white">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
