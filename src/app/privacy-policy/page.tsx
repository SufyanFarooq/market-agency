import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-28">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="text-white py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url('/assets/pages/privacy-policy.jpg')`,
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
              Privacy Policy
            </h1>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm rounded-3xl border-2 border-primary/30 shadow-2xl px-8 py-6 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">1. Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Name, email address, and contact information</li>
                  <li>Business information and requirements</li>
                  <li>Communication preferences</li>
                  <li>Service usage data and analytics</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Provide and improve our services</li>
                  <li>Communicate with you about our services</li>
                  <li>Send you updates and marketing materials (with your consent)</li>
                  <li>Analyze usage patterns and optimize our website</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">3. Information Sharing</h2>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements</li>
                  <li>To protect our rights and safety</li>
                  <li>With trusted service providers who assist us in operating our business</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">4. Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Encryption of sensitive data</li>
                  <li>Regular security assessments</li>
                  <li>Access controls and authentication</li>
                  <li>Secure data transmission protocols</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">5. Your Rights</h2>
                <p className="text-gray-700 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Lodge a complaint with relevant authorities</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">6. Cookies and Tracking</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Remember your preferences</li>
                  <li>Analyze website traffic</li>
                  <li>Improve website functionality</li>
                  <li>Provide personalized content</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">7. Third-Party Links</h2>
                <p className="text-gray-700">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">8. Changes to This Policy</h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">9. Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mt-4">
                  <p className="text-gray-700">
                    <strong>Email:</strong> privacy@vcpk.org<br />
                    <strong>Address:</strong> Lahore, Punjab, Pakistan<br />
                    <strong>Phone:</strong> +92 XXX XXX XXXX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 