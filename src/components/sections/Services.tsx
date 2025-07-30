import Link from "next/link";
import Image from "next/image";
export default function Services() {
    const services = [
      {
        title: "Call Center",
        description: "We have efficient customer care agents to help with several tasks, including resolving issues, problem management, and business development.",
        icon: "📞",
        image: "/assets/services/call-center.jpg"
      },
      {
        title: "Software Development",
        description: "It is a method to develop a computer platform that offers capabilities to fulfill clients' personal or business goals utilizing programming.",
        icon: "💻",
        image: "/assets/services/software-development.jpg"
      },
      {
        title: "SEO",
        description: "Since search engine optimization or SEO is the most common way for people to find and access online material, having a solid SEO strategy is important.",
        icon: "🔍",
        image: "/assets/services/SEO.jpg"
      },
      {
        title: "Customer Support",
        description: "The customer support center consists of a dedicated team engaged in resolving issues making sure they don't happen again.",
        icon: "🎧",
        image: "/assets/services/customer-support.jpg"
      },
      {
        title: "Virtual Assistance",
        description: "Our Virtual assistants are always available to work and provide administrative support to our clients 24/7 via SMS, Call, and email.",
        icon: "👥",
        image: "/assets/services/virtual-assistance.jpg"
      },
      {
        title: "Live Chat Support",
        description: "Consumers have appreciated live chat as a quick and convenient way to communicate. They immediately chat with our clients in real-time.",
        icon: "💬",
        image: "/assets/services/live-chat-support.jpg"
      }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-white via-secondary to-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm rounded-2xl border-4 border-primary/40 shadow-2xl px-8 py-6 mb-6 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-300">
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Services
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We provide human resources in Pakistan with hassle-free resource management in the areas of Business Development, Telemarketing, SEO, outsourcing, Web Development, and IT-Enabled Services.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 border border-gray-200/50 overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v40c11.046 0 20-8.954 20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}></div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 p-8">
                  {/* Header Section */}
                  <div className="flex items-start justify-between mb-6">
                    {/* Icon with Glow Effect */}
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary via-purple-600 to-accent rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-primary/25 transition-all duration-500 group-hover:scale-110">
                        <div className="text-white text-3xl drop-shadow-lg">{service.icon}</div>
                      </div>
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    {/* Service Number */}
                    <div className="text-6xl font-bold text-gray-100 group-hover:text-primary/20 transition-colors duration-500">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Section */}
                  <div className="mt-8 flex items-center justify-between">
                    {/* CTA Button */}
                    <Link
                      href="/services"
                      className="inline-flex items-center bg-gradient-to-r from-primary to-accent text-white px-4 py-2 md:px-6 md:py-3 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 group/btn text-sm md:text-base"
                    >
                      <span className="group-hover/btn:translate-x-1 transition-transform duration-300">
                        Explore Service
                      </span>
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </Link>

                    {/* Image Preview */}
                    <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-3 h-3 bg-gradient-to-br from-accent/40 to-primary/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 animate-pulse"></div>
                
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/services"
              className="inline-flex items-center bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              View All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    )
}