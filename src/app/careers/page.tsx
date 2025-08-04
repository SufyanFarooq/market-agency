'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<string>('');
  const [showJobs, setShowJobs] = useState<boolean>(false); // New state to control job visibility
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: ''
  });

  const jobs = [
    {
      id: 'call-center-agent',
      title: 'Call Center Agent',
      department: 'Customer Service',
      type: 'Full-time',
      location: 'Lahore, Pakistan',
      description: 'We are looking for experienced call center agents to handle inbound and outbound calls with professionalism and care.',
      requirements: [
        'Excellent communication skills',
        'Previous call center experience preferred',
        'Ability to work in shifts',
        'Customer-focused attitude'
      ]
    },
    {
      id: 'web-developer',
      title: 'Web Developer',
      department: 'IT & Development',
      type: 'Full-time',
      location: 'Lahore, Pakistan',
      description: 'Join our development team to create innovative web solutions and digital experiences for our clients.',
      requirements: [
        'Proficiency in React, Next.js, and TypeScript',
        'Experience with modern web technologies',
        'Strong problem-solving skills',
        'Portfolio of previous work'
      ]
    },
    {
      id: 'seo-specialist',
      title: 'SEO Specialist',
      department: 'Digital Marketing',
      type: 'Full-time',
      location: 'Lahore, Pakistan',
      description: 'Help our clients improve their online presence through effective SEO strategies and optimization.',
      requirements: [
        'Experience with SEO tools and techniques',
        'Knowledge of Google Analytics and Search Console',
        'Understanding of on-page and off-page SEO',
        'Results-driven approach'
      ]
    },
    {
      id: 'virtual-assistant',
      title: 'Virtual Assistant',
      department: 'Administrative',
      type: 'Full-time',
      location: 'Remote',
      description: 'Provide administrative support to our clients through various communication channels.',
      requirements: [
        'Strong organizational skills',
        'Experience with office software',
        'Excellent written communication',
        'Ability to work independently'
      ]
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    alert('Thank you for your application! We will review it and get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      message: ''
    });
  };

  return (
    <main className="min-h-screen pt-28">
      <Header />
       {/* Hero Section */}
       <section 
        className="text-white py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url('/assets/pages/careers.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '50vh'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-gradient-to-r from-white/30 to-white/20 backdrop-blur-sm rounded-2xl border-4 border-primary/40 shadow-2xl px-8 py-6 mb-6 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-300">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Join Our Team
            </h1>
          </div>
        </div>
      </section>
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-white/30 to-white/20 backdrop-blur-sm rounded-3xl border-2 border-white/40 shadow-2xl px-8 py-6 mb-6 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-300">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
              Join Our Team
            </h1>
          </div>
        </div>
      </section> */}

      {/* Job Listings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm rounded-3xl border-2 border-primary/30 shadow-2xl px-8 py-6 mb-6 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-300">
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {showJobs ? 'Open Positions' : 'Career Opportunities'}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {showJobs 
                  ? 'We are always looking for talented individuals who are passionate about delivering exceptional service and contributing to our success.'
                  : 'Stay connected with us for future opportunities and updates.'
                }
              </p>
            </div>
            
            {/* Toggle Button */}
            {/* <div className="flex justify-center mb-8">
              <button
                onClick={() => setShowJobs(!showJobs)}
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors duration-200 shadow-lg"
              >
                {showJobs ? 'Hide Jobs' : 'Show Available Jobs'}
              </button>
            </div> */}
          </div>

          {/* Jobs Section */}
          {showJobs && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {jobs.map((job) => (
                <div key={job.id} className="bg-secondary rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-text">{job.title}</h3>
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {job.type}
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-600">
                      <span className="font-medium">Department:</span> {job.department}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Location:</span> {job.location}
                    </p>
                  </div>
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-text mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => setSelectedJob(job.id)}
                    className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-800 transition-colors duration-200"
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* No Vacancy Section */}
          {!showJobs && (
            <div className="text-center py-16">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl border-2 border-gray-200 shadow-xl px-8 py-12 max-w-2xl mx-auto">
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-3xl font-bold text-text mb-4">
                  No Vacancy Available Right Now
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We currently don&apos;t have any open positions, but we&apos;re always on the lookout for exceptional talent. 
                  Keep checking back or leave your details with us for future opportunities.
                </p>
                <div className="space-y-4">
                  <p className="text-gray-500">
                    📧 Send your resume to: <span className="text-primary font-medium">unanimouscommunications89@gmail.com</span>
                  </p>
                  <p className="text-gray-500">
                    🔔 Follow us for updates on new openings
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Application Form */}
      {selectedJob && (
        <section className="py-16 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-text mb-4">
                  Apply for {jobs.find(job => job.id === selectedJob)?.title}
                </h2>
                <p className="text-gray-600">
                  Please fill out the form below to submit your application. We will review your information and get back to you soon.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                      Position *
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter the position you're applying for"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select experience level</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us why you would be a great fit for this position..."
                  ></textarea>
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-800 transition-colors duration-200"
                  >
                    Submit Application
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedJob('')}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm rounded-3xl border-2 border-primary/30 shadow-2xl px-8 py-6 mb-6 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-300">
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Why Work With Us
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                As you join our team, which is brilliant and passionate, you&apos;ll feel like a member of the family. We care and help. We provide excellent client care and management.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-text mb-3">Career Growth</h3>
              <p className="text-gray-600">
                We provide opportunities for professional development and career advancement within our organization.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-text mb-3">Team Environment</h3>
              <p className="text-gray-600">
                Work in a collaborative and supportive environment where every team member is valued and respected.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-text mb-3">Competitive Benefits</h3>
              <p className="text-gray-600">
                Enjoy competitive salaries, health benefits, and other perks that make working with us rewarding.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 