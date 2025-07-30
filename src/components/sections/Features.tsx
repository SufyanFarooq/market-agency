import Link from "next/link";

const Features = () => {
  const features = [
    {
      title: "Professional staff",
      description:
        "Our ideal staff has great verbal, technical, and call communication skills. Employees who perform their jobs well are familiar with their duties thoroughly",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      ),
      link: "/about-us",
    },
    {
      title: "Multilingual support",
      description:
        "Businesses must take into account serving a global network of customers and partners. Communication with partners, vendors",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
            clipRule="evenodd"
          />
        </svg>
      ),
      link: "/services",
    },
    {
      title: "Client satisfaction",
      description:
        "Businesses that are expanding are more likely to prioritize user experience than those whose sales are constant or dropping.",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      ),
      link: "/contact",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary via-white to-secondary relative overflow-hidden">
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
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              As part of our commitment to keeping things convenient for our
              clients, we are regarded as one of the top quality and customer
              companies in the industry.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-primary/20 relative overflow-hidden"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon Container */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className="text-white text-2xl">{feature.icon}</div>
                </div>
                
                <h3 className="text-2xl font-bold text-text mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-base">
                  {feature.description}
                </p>
                
                <Link
                  href={feature.link}
                  className="inline-flex items-center text-primary hover:text-accent transition-all duration-300 font-semibold group/link"
                >
                  <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                    Read More
                  </span>
                  <svg
                    className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of satisfied clients who trust us with their business needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
