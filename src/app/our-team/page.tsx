import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function OurTeam() {
  const teamMembers = [
    {
      name: "Mubashir Ali",
      position: "Managing Director",
      image: "/images/mubashir-ali.jpg",
      description: "Leading our organization with strategic vision and operational excellence."
    },
    {
      name: "M. Hassan Khan",
      position: "Senior Manager Operations",
      image: "/images/hassan-khan.jpg",
      description: "Overseeing day-to-day operations and ensuring smooth service delivery."
    },
    {
      name: "Mubeena Tariq",
      position: "Human Resources Manager",
      image: "/images/mubeena-tariq.jpg",
      description: "Managing our talented workforce and fostering a positive work environment."
    }
  ];

  const departments = [
    {
      name: "Call Center Team",
      description: "Our dedicated customer service representatives who handle inbound and outbound calls with professionalism and care.",
      icon: "📞",
      count: "25+"
    },
    {
      name: "Technical Support",
      description: "Expert technicians providing technical assistance and troubleshooting for our clients.",
      icon: "🛠️",
      count: "15+"
    },
    {
      name: "Web Development",
      description: "Skilled developers creating innovative web solutions and digital experiences.",
      icon: "💻",
      count: "10+"
    },
    {
      name: "SEO & Marketing",
      description: "Digital marketing experts optimizing online presence and driving growth.",
      icon: "📈",
      count: "8+"
    }
  ];

  return (
    <main className="min-h-screen pt-28">
      <Header />
        {/* Hero Section */}
      <section 
        className="text-white py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url('/assets/pages/our-team.jpg')`,
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
            Our Team
            </h1>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm rounded-3xl border-2 border-primary/30 shadow-2xl px-8 py-6 mb-6 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-300">
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Meet Our Leadership
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Great leaders have a significant impact on their organization&apos;s overall performance in addition to the team members they lead. Great leaders focus on their employees to make them better, more productive, and are much more committed.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-secondary rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-40 h-40 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-6xl text-gray-600">👤</span>
                </div>
                <h3 className="text-2xl font-bold text-text mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-4">
                  {member.position}
                </p>
                <p className="text-gray-600">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm rounded-3xl border-2 border-primary/30 shadow-2xl px-8 py-6 mb-6 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-300">
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Departments
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Each department plays a crucial role in delivering exceptional services to our clients. Our team structure ensures efficiency and expertise in every area.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{dept.icon}</div>
                <h3 className="text-xl font-bold text-text mb-2">
                  {dept.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {dept.description}
                </p>
                <div className="text-2xl font-bold text-primary">
                  {dept.count}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm rounded-3xl border-2 border-primary/30 shadow-2xl px-8 py-6 mb-6 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-300">
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Company Culture
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe in creating an environment where our team members feel valued, supported, and motivated to excel in their roles.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-text mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We foster a collaborative environment where team members work together to achieve common goals and deliver exceptional results.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-text mb-3">Innovation</h3>
              <p className="text-gray-600">
                We encourage creative thinking and innovative solutions to meet the evolving needs of our clients and industry.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-text mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, maintaining high standards of quality and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Team
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We are always looking for talented individuals who are passionate about delivering exceptional service and contributing to our success.
          </p>
          <a
            href="/careers"
            className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
          >
            View Open Positions
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
} 