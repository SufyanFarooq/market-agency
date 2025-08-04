import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutUs() {
  const leadership = [
    {
      name: " Nauman Khan",
      position: "CEO",
      image: "/images/mubashir-ali.jpg",
      description: "Leading our organization with strategic vision and operational excellence."
    },
    {
      name: "Muhammad Faisal",
      position: "Managing Director/partner",
      image: "/images/hassan-khan.jpg",
      description: "Overseeing day-to-day operations and ensuring smooth service delivery."
    }
  ];

  return (
    <main className="min-h-screen pt-28">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="text-white py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url('/assets/about/about-page.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '50vh'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-gradient-to-r from-white/30 to-white/20 backdrop-blur-sm rounded-2xl border-4 border-primary/40 shadow-2xl px-8 py-6 mb-6 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-300">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
              About Us
            </h1>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                The Services we provide to our clients
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Fully managed 24/7 Live Chat Support agents</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">SEO (Search Engine optimization)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Data Entry</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Fully managed 24/7 Call Center Services</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Well-Managed Virtual support Assistants</span>
                </div>
                {/* <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Web Development</span>
                </div> */}
              </div>
              <Link
                href="/services"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors duration-200"
              >
                More About Us
              </Link>
            </div>
            <div className="relative">
              <div 
                className="bg-secondary/20 rounded-lg p-8 relative overflow-hidden"
                style={{
                  backgroundImage: `url('/assets/about/client-about.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  minHeight: '500px'
                }}
              >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-white/30 rounded-lg"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-2 border-primary/20 max-w-sm w-full mx-4">
                    <h3 className="text-2xl font-bold text-primary mb-6 text-center">Our Performance</h3>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700 font-semibold">Communication</span>
                          <span className="text-sm font-medium text-primary font-bold">90%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-1000 ease-out" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700 font-semibold">Chat Support</span>
                          <span className="text-sm font-medium text-primary font-bold">87%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-1000 ease-out" style={{ width: '87%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission and Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-secondary rounded-lg p-8">
              <h3 className="text-2xl font-bold text-text mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Unanimous Communication PK (partnership) is designed to offer IT-enabled services and outsourcing, primarily to e-commerce businesses that generate significant returns on investment from web-based customers. To develop a customer care center 
                workplace and system that enables our management team and agents to enthusiastically represent the values of our clients.
              </p>
            </div>
            <div className="bg-secondary rounded-lg p-8">
              <h3 className="text-2xl font-bold text-text mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Live recordings, real-time reporting, and on-demand help to create the accountability that makes us unique. In order to meet your specific program objectives, we build specialized office environments and structures.
              </p>
            </div>
          </div>

          {/* Awards and Recognition */}
          {/* <div className="bg-primary text-white rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6">Awards and Recognition</h3>
            <p className="text-lg leading-relaxed">
              We&apos;ve so far been able to forge a successful long-term partnership with a US-based client through the provision of IT-enabled services, live chat services, web development, CSS, and business development (telemarketing services). More recently, we began to offer them &quot;Virtual Sales/Marketing managers&quot; for their partners under the license of Unanimous Communication Pk (partnership), which has began to advance significantly and we see great potential in terms of foreign recruitment and Outsourcing business from USA.
            </p>
          </div> */}

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Trusted Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-gray-600">Calls Per Day</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-gray-600">Years Of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Professional Staff</div>
            </div>
          </div>

          {/* Leadership */}
          <div>
            <div className="text-center mb-12">
              <div className="bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm rounded-3xl border-2 border-primary/30 shadow-2xl px-8 py-6 mb-6 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-300">
                <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Meet Our Professional Staff
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Great leaders have a significant impact on their organization&apos;s overall performance in addition to the team members they lead. Great leaders focus on their employees to make them better, more productive, and are much more committed. Good employees are consistent, with the organization.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leadership.map((member, index) => (
                <div key={index} className="bg-secondary rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl text-gray-600">👤</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">
                    {member.position}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 