'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Inbound Calls",
      description: "Professional call handling with qualified representatives for sales and customer satisfaction.",
      image: "/assets/hero/inbound-calls.jpg"
    },
    {
      title: "BPO Experts",
      description: "Competent call center services for customer experience and business development.",
      image: "/assets/hero/bpo-expert.jpg"
    },
    {
      title: "Telemarketing",
      description: "Best practices for efficient telemarketing and achieving results.",
      image: "/assets/hero/telemarketing.jpg"
    },
    {
      title: "Soft Skills Development",
      description: "Developing communication skills for better customer interactions and sales success.",
      image: "/assets/hero/soft-skill.jpg"
    },
    {
      title: "Feedback Collection",
      description: "Dedicated teams to address customer issues and prevent recurring problems.",
      image: "/assets/hero/feedback.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Slider */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            
            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <div className="flex justify-center">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl border-4 border-primary/40 shadow-xl ring-2 ring-accent/30 px-6 py-4 mb-6 max-w-lg w-full flex flex-col items-center">
                    <h1 className="text-2xl md:text-4xl font-bold mb-2 text-white drop-shadow-lg animate-fade-in">
                      {slide.title}
                    </h1>
                    <p className="text-sm md:text-base text-white leading-relaxed text-center">
                      {slide.description}
                    </p>
                  </div>
                </div>
                <Link
                  href="/services"
                  className="inline-block bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
                >
                  READ MORE
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero; 