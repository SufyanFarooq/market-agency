'use client';

import { useState, useEffect } from 'react';

const Stats = () => {
  const [counts, setCounts] = useState({
    clients: 0,
    calls: 0,
    experience: 0,
    staff: 0
  });

  const stats = [
    {
      number: counts.clients,
      suffix: "+",
      label: "Trusted Clients",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      )
    },
    {
      number: counts.calls,
      suffix: "+",
      label: "Chats Per Day",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      )
    },
    {
      number: counts.experience,
      suffix: "+",
      label: "Years of Experience",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      number: counts.staff,
      suffix: "+",
      label: "Professional Staff",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  useEffect(() => {
    const targetCounts = {
      clients: 100,
      calls: 500,
      experience: 5,
      staff: 50
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      const progress = currentStep / steps;
      
      setCounts({
        clients: Math.floor(targetCounts.clients * progress),
        calls: Math.floor(targetCounts.calls * progress),
        experience: Math.floor(targetCounts.experience * progress),
        staff: Math.floor(targetCounts.staff * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targetCounts);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Success in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We create opportunity, security, and wealth for another generation to create a more progressive future by offering resources and opportunities that are fulfilling and empower our people.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-accent mb-4 group-hover:text-white transition-colors duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-lg text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">
              We are always hiring
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Join our brilliant and passionate team. You&apos;ll feel like a member of the family.
            </p>
            <a
              href="/careers"
              className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200 transform hover:scale-105"
            >
              See Jobs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats; 