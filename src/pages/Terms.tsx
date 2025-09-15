import React from 'react';
import { Scale, AlertTriangle, Shield, Gavel, FileText, Mail } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Scale className="h-10 w-10 text-navy-500" />
            <h1 className="font-serif font-bold text-3xl text-navy-500">Terms of Service</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="text-gray-600 mt-2">
            Please read these terms carefully before using Legal.ai services.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          {/* Acceptance */}
          <section>
            <h2 className="font-serif font-bold text-xl text-navy-500 mb-4">1. Acceptance of Terms</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                By accessing or using Legal.ai ("Service", "Platform", "we", "us"), you agree to be bound by these Terms of Service ("Terms"). 
                If you do not agree to these Terms, do not use our Service.
              </p>
              <p>
                These Terms constitute a legally binding agreement between you and Legal.ai. We may modify these Terms at any time, 
                and such modifications will be effective immediately upon posting. Your continued use of the Service constitutes acceptance of any changes.
              </p>
            </div>
          </section>

          {/* Service Description */}
          <section>
            <h2 className="font-serif font-bold text-xl text-navy-500 mb-4 flex items-center">
              <FileText className="h-6 w-6 mr-2" />
              2. Service Description
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>Legal.ai provides:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Legal Chat:</strong> AI-powered legal information and guidance</li>
                <li><strong>Contract Generation:</strong> Automated creation of legal documents using AI technology</li>
                <li><strong>Document Templates:</strong> Access to professional legal document templates</li>
                <li><strong>Legal Resources:</strong> Educational content and legal information</li>
              </ul>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-yellow-800">Important Notice</p>
                    <p className="text-yellow-700 text-sm">
                      Legal.ai provides legal information and document generation tools, but does not provide legal advice. 
                      Our Service is not a substitute for professional legal counsel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* User Accounts */}
          <section>
            <h2 className="font-serif font-bold text-xl text-navy-500 mb-4">3. User Accounts and Eligibility</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-2">Eligibility</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>You must be at least 18 years old to use our Service</li>
                  <li>You must provide accurate and complete information when creating an account</li>
                  <li>You are responsible for maintaining the security of your account credentials</li>
                  <li>One person or entity may not maintain multiple accounts</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Account Responsibilities</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>You are responsible for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                  <li>Keep your contact information current and accurate</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Subscription and Payment */}
          <section>
            <h2 className="font-serif font-bold text-xl text-navy-500 mb-4">4. Subscription and Payment Terms</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-2">Free Services</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Legal chat and basic legal information are provided free of charge</li>
                  <li>Free services are subject to usage limitations</li>
                  <li>We reserve the right to modify or discontinue free services</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Premium Services</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Premium features require a paid subscription ($50 USD per year)</li>
                  <li>Payments are processed securely through Stripe</li>
                  <li>Subscriptions automatically renew unless cancelled</li>
                  <li>No refunds for partial subscription periods</li>
                  <li>We may change pricing with 30 days' notice</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Cancellation</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>You may cancel your subscription at any time</li>
                  <li>Cancellation takes effect at the end of the current billing period</li>
                  <li>You retain access to premium features until subscription expires</li>
                  <li>We may suspend or terminate accounts for non-payment</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Acceptable Use */}
          <section>
            <h2 className="font-serif font-bold text-xl text-navy-500 mb-4">5. Acceptable Use Policy</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-2">Permitted Uses</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Generate legal documents for legitimate business or personal purposes</li>
                  <li>Access legal information for educational or informational purposes</li>
                  <li>Use our Service in compliance with applicable laws</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Prohibited Uses</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Use the Service for illegal activities or to create illegal documents</li>
                  <li>Attempt to reverse engineer, hack, or compromise our systems</li>
                  <li>Share account credentials or resell access to our Service</li>
                  <li>Generate documents for fraudulent or deceptive purposes</li>
                  <li>Violate intellectual property rights of others</li>
                  <li>Spam, harass, or abuse other users or our support team</li>
                  <li>Use automated tools to access our Service without permission</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="font-serif font-bold text-xl text-navy-500 mb-4">6. Intellectual Property Rights</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-2">Our Rights</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Legal.ai owns all rights to the platform, software, and AI technology</li>
                  <li>Our trademarks, logos, and branding are protected intellectual property</li>
                  <li>Document templates and legal content are proprietary to Legal.ai</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Your Rights</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>You own the documents you generate using our Service</li>
                  <li>You may use generated documents for any lawful purpose</li>
                  <li>You retain rights to any original content you input into our system</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">License Grant</h3>
                <p>
                  We grant you a limited, non-exclusive, non-transferable license to use our Service 
                  in accordance with these Terms. This license terminates when your account is closed or suspended.
                </p>
              </div>
            </div>
          </section>

          {/* Disclaimers */}
          <section>
            <h2 className="font-serif font-bold text-xl text-navy-500 mb-4 flex items-center">
              <AlertTriangle className="h-6 w-6 mr-2" />
              7. Disclaimers and Limitations
            </h2>
            <div className="space-y-4 text-gray-700">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2 text-red-800">Legal Disclaimer</h3>
                <ul className="list-disc list-inside space-y-1 ml-4 text-red-700">
                  <li>Legal.ai is NOT a law firm and does NOT provide legal advice</li>
                  <li>Our AI-generated documents are tools, not legal counsel</li>
                  <li>You should consult with a qualified attorney for legal advice</li>
                  <li>We make no guarantees about the legal validity of generated documents</li>
                  <li>Laws vary by jurisdiction - ensure compliance with local requirements</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Service Disclaimers</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Our Service is provided "as is" without warranties of any kind</li>
                  <li>We do not guarantee uninterrupted or error-free service</li>
                  <li>AI-generated content may contain errors or inaccuracies</li>
                  <li>We are not responsible for decisions made based on our Service</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="font-serif font-bold text-xl text-navy-500 mb-4">8. Limitation of Liability</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Legal.ai's total liability to you shall not exceed the amount you paid for our Service in the 12 months preceding the claim</li>
                <li>We are not liable for indirect, incidental, special, consequential, or punitive damages</li>
                <li>We are not responsible for losses resulting from your use of generated documents</li>
                <li>We are not liable for third-party actions or decisions based on our Service</li>
                <li>Some jurisdictions do not allow limitation of liability, so these limits may not apply to you</li>
              </ul>
            </div>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="font-serif font-bold text-xl text-navy-500 mb-4">9. Indemnification</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                You agree to indemnify and hold harmless Legal.ai, its officers, directors, employees, and agents from any claims, 
                damages, losses, or expenses (including attorney fees) arising from:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Your use of our Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of applicable laws or regulations</li>
                <li>Documents you generate using our Service</li>
                <li>Your infringement of third-party rights</li>
              </ul>
            </div>
          </section>

          {/* Termination */}
          <section>
            <h2 className="font-serif font-bold text-xl text-navy-500 mb-4">10. Termination</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-2">Termination by You</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>You may terminate your account at any time</li>
                  <li>Cancellation does not entitle you to a refund</li>
                  <li>You remain responsible for all charges incurred before termination</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Termination by Us</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>We may suspend or terminate your account for violation of these Terms</li>
                  <li>We may terminate accounts for non-payment</li>
                  <li>We may discontinue the Service with reasonable notice</li>
                  <li>Upon termination, your right to use the Service ceases immediately</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="font-serif font-bold text-xl text-navy-500 mb-4 flex items-center">
              <Gavel className="h-6 w-6 mr-2" />
              11. Governing Law and Disputes
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-2">Governing Law</h3>
                <p>
                  These Terms are governed by the laws of [Your Jurisdiction], without regard to conflict of law principles. 
                  Any disputes will be resolved in the courts of [Your Jurisdiction].
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Dispute Resolution</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>We encourage resolving disputes through direct communication first</li>
                  <li>For formal disputes, we prefer binding arbitration over litigation</li>
                  <li>Class action lawsuits are waived to the extent permitted by law</li>
                  <li>Any arbitration will be conducted under [Arbitration Rules]</li>
                </ul>
              </div>
            </div>
          </section>

          {/* General Provisions */}
          <section>
            <h2 className="font-serif font-bold text-xl text-navy-500 mb-4">12. General Provisions</h2>
            <div className="space-y-4 text-gray-700">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and Legal.ai</li>
                <li><strong>Severability:</strong> If any provision is found unenforceable, the remainder remains in effect</li>
                <li><strong>Waiver:</strong> Our failure to enforce any right does not waive that right</li>
                <li><strong>Assignment:</strong> You may not assign these Terms; we may assign them with notice</li>
                <li><strong>Force Majeure:</strong> We are not liable for delays due to circumstances beyond our control</li>
                <li><strong>Survival:</strong> Provisions that should survive termination will continue to apply</li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="font-serif font-bold text-xl text-navy-500 mb-4 flex items-center">
              <Mail className="h-6 w-6 mr-2" />
              13. Contact Information
            </h2>
            <div className="space-y-2 text-gray-700">
              <p>For questions about these Terms of Service, contact us:</p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:hayshanwow@gmail.com" className="text-navy-500 hover:underline">
                  hayshanwow@gmail.com
                </a>
              </p>
              <p><strong>Response Time:</strong> We respond to legal inquiries within 72 hours</p>
              <p><strong>Legal Department:</strong> Available for formal legal matters</p>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="bg-navy-50 border border-navy-200 rounded-lg p-6">
            <h2 className="font-serif font-bold text-xl text-navy-500 mb-4 flex items-center">
              <Shield className="h-6 w-6 mr-2" />
              Acknowledgment
            </h2>
            <p className="text-gray-700">
              By using Legal.ai, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. 
              You also acknowledge that these Terms may be updated periodically and that your continued use constitutes acceptance of any changes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}