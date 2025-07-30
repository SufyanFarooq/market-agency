import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallCenter from '@/components/services/CallCenter';
import SoftwareDevelopment from '@/components/services/SoftwareDevelopment';
import SEO from '@/components/services/SEO';
import CustomerSupport from '@/components/services/CustomerSupport';
import VirtualAssistance from '@/components/services/VirtualAssistance';
import LiveChatSupport from '@/components/services/LiveChatSupport';
import Link from 'next/link';

export default function Services() {
  return (
    <main className="min-h-screen pt-28">
      <Header />
       {/* Hero Section */}
      <section 
        className="text-white py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url('/assets/pages/services.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '50vh'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-gradient-to-r from-white/30 to-white/20 backdrop-blur-sm rounded-2xl border-4 border-primary/40 shadow-2xl px-8 py-6 mb-6 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-300">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Our Services
            </h1>
          </div>
        </div>
      </section>
     

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm rounded-3xl border-2 border-primary/30 shadow-2xl px-8 py-6 mb-6 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-300">
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Services we provide:
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We provide human resource in Pakistan which can help them achieve the same business tasks but in far less cost and hassle free resource management in the Area of Business development, Telemarketing, SEO, Web development, IT Enabled services and Web based Live Chat Services.
              </p>
              <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                We are targeting USA, CANADA, UK, and Australian Clients, our focus is to find companies that are already providing the Ecommerce based Services to their client Websites in USA, Canada, UK and Australia.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <CallCenter />
            <SoftwareDevelopment />
            <SEO />
            <CustomerSupport />
            <VirtualAssistance />
            <LiveChatSupport />
          </div>

          {/* How We Work Section */}
          <div className="bg-secondary rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-text mb-6 text-center">
              How We Work
            </h3>
            <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              We are here to communicate with you. The foundation of management is communication. Without good communication, the fundamental management tasks of planning, organizing, staffing, directing, and controlling cannot be successfully completed. We are here to communicate with you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  title: "We Are Leading in Call Center Service",
                  icon: "🏆"
                },
                {
                  title: "Solutions For Small & Large Business",
                  icon: "💼"
                },
                {
                  title: "Guidance From Our Expert Staff",
                  icon: "👨‍💼"
                },
                {
                  title: "Learn From Customer Feedback",
                  icon: "📝"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <h4 className="font-semibold text-text">{step.title}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-gray-600">Calls Per Day</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Trusted Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Professional Staff</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-primary text-white rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                If You Need Help, Get A Consultation
              </h3>
              <p className="text-lg mb-6">
                Our help and support services are available for you at any hour of the day to answer your questions and queries regarding occurring issues.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
              >
                Start Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 