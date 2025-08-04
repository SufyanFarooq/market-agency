import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsConditions() {
  return (
    <main className="min-h-screen pt-28">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="text-white py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url('/assets/pages/terms-conditions.jpg')`,
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
              Terms & Conditions
            </h1>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Content */}
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
                <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700">
                  By accessing and using the services provided by Unanimous Communication PK (unanimous communications), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">2. Description of Service</h2>
                <p className="text-gray-700 mb-4">
                  unanimous communications provides the following services:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Live Chat Support</li>
                  <li>Customer Support</li>
                  <li>Virtual Assistance</li>
                  <li>SEO Services</li>
                  <li>Call Center Services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">3. User Responsibilities</h2>
                <p className="text-gray-700 mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account</li>
                  <li>Use our services for lawful purposes only</li>
                  <li>Not interfere with or disrupt our services</li>
                  <li>Respect intellectual property rights</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">4. Payment Terms</h2>
                <p className="text-gray-700 mb-4">
                  Payment terms and conditions:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>All fees are payable in advance unless otherwise agreed</li>
                  <li>Prices are subject to change with 30 days notice</li>
                  <li>Late payments may result in service suspension</li>
                  <li>Refunds are subject to our refund policy</li>
                  <li>All payments are non-transferable</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">5. Service Level Agreement</h2>
                <p className="text-gray-700 mb-4">
                  Our service commitments:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>24/7 availability for critical services</li>
                  <li>Response time within 2 hours for urgent matters</li>
                  <li>99.9% uptime for online services</li>
                  <li>Regular performance monitoring and reporting</li>
                  <li>Proactive issue resolution</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">6. Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                  Intellectual property rights:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>All content on this website is owned by unanimous communications</li>
                  <li>Custom software developed remains client property</li>
                  <li>Our methodologies and processes are proprietary</li>
                  <li>Client data and information remain confidential</li>
                  <li>No unauthorized use of our intellectual property</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">7. Confidentiality</h2>
                <p className="text-gray-700">
                  We are committed to maintaining the confidentiality of your business information. All client data, trade secrets, and proprietary information will be protected and not disclosed to third parties without your explicit consent, except as required by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-700">
                  unanimous communications shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, incurred by you or any third party, whether in an action in contract or tort, even if we have been advised of the possibility of such damages.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">9. Termination</h2>
                <p className="text-gray-700 mb-4">
                  Either party may terminate this agreement:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>With 30 days written notice</li>
                  <li>Immediately for material breach</li>
                  <li>Upon mutual agreement</li>
                  <li>For non-payment of fees</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">10. Dispute Resolution</h2>
                <p className="text-gray-700">
                  Any disputes arising from this agreement shall be resolved through good faith negotiations. If resolution cannot be reached, disputes shall be settled through binding arbitration in accordance with the laws of Pakistan.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">11. Governing Law</h2>
                <p className="text-gray-700">
                  This agreement shall be governed by and construed in accordance with the laws of Pakistan. Any legal proceedings shall be brought in the courts of Lahore, Pakistan.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">12. Changes to Terms</h2>
                <p className="text-gray-700">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">13. Contact Information</h2>
                <p className="text-gray-700">
                  For questions about these Terms & Conditions, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mt-4">
                  <p className="text-gray-700">
                    <strong>Email:</strong> legal@unanimous communications.org<br />
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