import Link from "next/link";


export default function Work() {
    return (
        <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm rounded-3xl border-2 border-primary/30 shadow-2xl px-8 py-6 mb-6 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-300">
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                How We Work
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are here to communicate with you. The foundation of management is communication. Without good communication, the fundamental management tasks of planning, organizing, staffing, directing, and controlling cannot be successfully completed.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: " We are leading in web based Live chat services",
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
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-lg font-semibold text-text">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-text mb-4">
                If You Need Help, Get A Consultation
              </h3>
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
}