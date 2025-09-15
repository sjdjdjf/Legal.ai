import React from 'react';
import { Shield, Lock, Eye, Database, Globe, Mail } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Shield className="h-10 w-10 text-navy-500" />
            <h1 className="font-serif font-bold text-3xl text-navy-500">Privacy Policy</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="text-gray-600 mt-2">
            Your privacy is important to us. This policy explains how Legal.ai collects, uses, and protects your information.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          {/* Information We Collect */}
          <section>
            <h2 className="font-serif font-bold text-xl text-navy-500 mb-4 flex items-center">
              <Database className="h-6 w-6 mr-2" />
              Information We Collect
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-2">Account Information</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Email address (for account creation and communication)</li>
                  <li>Password (encrypted and never stored in plain text)</li>
                  <li>Account preferences and settings</li>
                  <li>Subscription status and payment information (processed by Stripe)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Usage Information</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Legal questions asked in our chat system</li>
                  <li>Contract templates accessed and generated</li>
                  <li>Pages visited and features used</li>
                  <li>Device information and browser type</li>
                  <li>IP address and general location (country/region)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Contract Data</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Information entered into contract forms</li>
                  <li>Generated contract content (temporarily stored for download)</li>
                  <li>Contract templates used and customization preferences</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="font-serif font-bold text-xl text-navy-500 mb-4 flex items-center">
              <Eye className="h-6 w-6 mr-2" />
              How We Use Your Information
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Provide Services:</strong> Generate contracts, answer legal questions, and deliver platform functionality</li>
                <li><strong>Account Management:</strong> Create and maintain your account, process payments, and manage subscriptions</li>
                <li><strong>Communication:</strong> Send important updates, security alerts, and customer support responses</li>
                <li><strong>Improvement:</strong> Analyze usage patterns to improve our AI models and platform features</li>
                <li><strong>Security:</strong> Detect fraud, prevent abuse, and protect platform integrity</li>
                <li><strong>Legal Compliance:</strong> Meet regulatory requirements and respond to legal requests</li>
              </ul>
            </div>
          </section>

          {/* Data Protection */}
          <section>
            <h2 className="font-serif font-bold text-xl text-navy-500 mb-4 flex items-center">
              <Lock className="h-6 w-6 mr-2" />
              How We Protect Your Data
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-2">Security Measures</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Bank-level encryption for all data transmission (TLS 1.3)</li>
                  <li>Advanced encryption for data storage (AES-256)</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Multi-factor authentication for admin access</li>
                  <li>Secure cloud infrastructure with leading providers</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Data Minimization</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>We collect only the minimum data necessary to provide services</li>
                  <li>Contract data is automatically deleted after 30 days unless saved by user</li>
                  <li>Chat conversations are not permanently stored</li>
                  <li>Personal information is anonymized for analytics</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="font-serif font-bold text-xl text-navy-500 mb-4 flex items-center">
              <Globe className="h-6 w-6 mr-2" />
              Data Sharing and Third Parties
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="font-semibold">We do NOT sell, rent, or trade your personal information.</p>
              <p>We may share limited data with:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Payment Processors:</strong> Stripe processes payments securely (we never see your full payment details)</li>
                <li><strong>Cloud Providers:</strong> AWS/Google Cloud for secure hosting and data storage</li>
                <li><strong>Analytics Services:</strong> Anonymized usage data for platform improvement</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect rights and safety</li>
                <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale (with user notification)</li>
              </ul>
            </div>
          </section>

          {/* Your Rights (GDPR) */}
          <section>
            <h2 className="font-serif font-bold text-xl text-navy-500 mb-4">Your Privacy Rights</h2>
            <div className="space-y-4 text-gray-700">
              <p>Under GDPR and other privacy laws, you have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete information</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data ("right to be forgotten")</li>
                <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
                <li><strong>Restriction:</strong> Limit how we process your data</li>
                <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Withdraw Consent:</strong> Revoke consent for data processing at any time</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at{' '}
                <a href="mailto:hayshanwow@gmail.com" className="text-navy-500 hover:underline">
                  hayshanwow@gmail.com
                </a>
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="font-serif font-bold text-xl text-navy-500 mb-4">Cookies and Tracking</h2>
            <div className="space-y-4 text-gray-700">
              <p>We use cookies and similar technologies to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Keep you logged in to your account</li>
                <li>Remember your preferences and settings</li>
                <li>Analyze website performance and usage</li>
                <li>Provide personalized content and features</li>
              </ul>
              <p className="mt-4">
                You can control cookies through your browser settings. Disabling cookies may limit platform functionality.
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="font-serif font-bold text-xl text-navy-500 mb-4">Data Retention</h2>
            <div className="space-y-4 text-gray-700">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Account Data:</strong> Retained while your account is active, deleted within 30 days of account closure</li>
                <li><strong>Contract Data:</strong> Automatically deleted after 30 days unless explicitly saved by user</li>
                <li><strong>Chat History:</strong> Not permanently stored; cleared after session ends</li>
                <li><strong>Payment Records:</strong> Retained for 7 years for tax and legal compliance</li>
                <li><strong>Analytics Data:</strong> Anonymized data retained for up to 2 years for service improvement</li>
              </ul>
            </div>
          </section>

          {/* International Transfers */}
          <section>
            <h2 className="font-serif font-bold text-xl text-navy-500 mb-4">International Data Transfers</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Legal.ai operates globally. Your data may be transferred to and processed in countries other than your own, 
                including the United States and European Union. We ensure adequate protection through:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Standard Contractual Clauses (SCCs) for EU data transfers</li>
                <li>Adequacy decisions by relevant data protection authorities</li>
                <li>Robust security measures regardless of location</li>
              </ul>
            </div>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="font-serif font-bold text-xl text-navy-500 mb-4">Children's Privacy</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Legal.ai is not intended for users under 18 years of age. We do not knowingly collect personal information 
                from children under 18. If we discover we have collected information from a child under 18, we will delete 
                it immediately.
              </p>
            </div>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="font-serif font-bold text-xl text-navy-500 mb-4">Changes to This Policy</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We may update this Privacy Policy periodically. We will notify you of significant changes by:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Email notification to registered users</li>
                <li>Prominent notice on our website</li>
                <li>In-app notifications for material changes</li>
              </ul>
              <p className="mt-4">
                Continued use of Legal.ai after changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="font-serif font-bold text-xl text-navy-500 mb-4 flex items-center">
              <Mail className="h-6 w-6 mr-2" />
              Contact Us
            </h2>
            <div className="space-y-2 text-gray-700">
              <p>If you have questions about this Privacy Policy or your data, contact us:</p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:hayshanwow@gmail.com" className="text-navy-500 hover:underline">
                  hayshanwow@gmail.com
                </a>
              </p>
              <p><strong>Response Time:</strong> We respond to privacy inquiries within 72 hours</p>
              <p><strong>Data Protection Officer:</strong> Available for EU residents upon request</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}