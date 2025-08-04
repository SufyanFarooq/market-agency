import Link from "next/link";

export default function About() {
    return (
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                About Us
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Unanimous Communication PK (partnership) was created to offer IT-enabled services and outsourcing, primarily to e-commerce businesses that generate strong returns on investment from web-based customers.
              </p>
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
                href="/about-us"
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
                
                {/* Content positioned over the image */}
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
        </div>
      </section>
    );
}