import React from 'react';
import { Mail, MessageCircle, Clock, HelpCircle, Book, Phone } from 'lucide-react';

export default function Support() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <HelpCircle className="h-10 w-10 text-navy-500" />
            <h1 className="font-serif font-bold text-3xl text-navy-500">Support Center</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Get help with Legal.ai - we're here to assist you with any questions or issues.
          </p>
        </div>

        {/* Quick Contact */}
        <div className="bg-gradient-to-r from-navy-500 to-navy-600 rounded-xl p-8 text-white mb-12">
          <div className="text-center">
            <Mail className="h-12 w-12 mx-auto mb-4 text-gold-400" />
            <h2 className="font-serif font-bold text-2xl mb-4">Need Direct Help?</h2>
            <p className="text-gray-200 mb-6 text-lg">
              Email our support team directly for personalized assistance with your Legal.ai account, 
              contract generation, or any technical issues.
            </p>
            <a
              href="mailto:hayshanwow@gmail.com"
              className="inline-flex items-center space-x-2 bg-gold-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-600 transition-colors transform hover:scale-105"
            >
              <Mail className="h-5 w-5" />
              <span>Email Support: hayshanwow@gmail.com</span>
            </a>
            <p className="text-gold-200 text-sm mt-4">
              ⚡ We typically respond within 24 hours
            </p>
          </div>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center">
              <MessageCircle className="h-12 w-12 mx-auto mb-4 text-blue-500" />
              <h3 className="font-serif font-bold text-xl text-navy-500 mb-4">Legal Chat Support</h3>
              <p className="text-gray-600 mb-6">
                Use our free legal chat feature to get instant answers to common legal questions. 
                Available 24/7 with AI-powered responses.
              </p>
              <a
                href="/chat"
                className="inline-flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Start Legal Chat</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center">
              <Book className="h-12 w-12 mx-auto mb-4 text-green-500" />
              <h3 className="font-serif font-bold text-xl text-navy-500 mb-4">Knowledge Base</h3>
              <p className="text-gray-600 mb-6">
                Browse our comprehensive FAQ section with 100+ legal questions and answers 
                across employment, business, property, and IP law.
              </p>
              <a
                href="/chat"
                className="inline-flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
              >
                <Book className="h-4 w-4" />
                <span>Browse FAQs</span>
              </a>
            </div>
          </div>
        </div>

        {/* Support Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="font-serif font-bold text-2xl text-navy-500 mb-6 text-center">How We Can Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg text-navy-500 mb-4">Account & Billing Support</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Account setup and login issues</li>
                <li>• Premium subscription management</li>
                <li>• Payment and billing questions</li>
                <li>• Account cancellation assistance</li>
                <li>• Password reset and security</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-navy-500 mb-4">Technical Support</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Contract generation troubleshooting</li>
                <li>• PDF download and formatting issues</li>
                <li>• Platform navigation assistance</li>
                <li>• Browser compatibility problems</li>
                <li>• Mobile app support</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-navy-500 mb-4">Legal Document Help</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Choosing the right contract template</li>
                <li>• Understanding contract terms</li>
                <li>• Document customization guidance</li>
                <li>• Legal terminology explanations</li>
                <li>• Best practices for contract use</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-navy-500 mb-4">General Inquiries</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Platform features and capabilities</li>
                <li>• Legal.ai service overview</li>
                <li>• Partnership and business inquiries</li>
                <li>• Feedback and suggestions</li>
                <li>• Media and press requests</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Response Times */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="font-serif font-bold text-2xl text-navy-500 mb-6 text-center flex items-center justify-center">
            <Clock className="h-6 w-6 mr-2" />
            Response Times
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2"> 24 hours</div>
              <div className="text-sm text-green-700">General Support</div>
              <div className="text-xs text-gray-600 mt-1">Account, billing, technical issues</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2"> 4 hours</div>
              <div className="text-sm text-blue-700">Premium Support</div>
              <div className="text-xs text-gray-600 mt-1">For premium subscribers</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600 mb-2">1 hour</div>
              <div className="text-sm text-red-700">Critical Issues</div>
              <div className="text-xs text-gray-600 mt-1">Platform outages, security issues</div>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="font-serif font-bold text-2xl text-navy-500 mb-6 text-center">Contact Methods</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <Mail className="h-8 w-8 text-navy-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-navy-500">Email Support</h3>
                <p className="text-gray-600">
                  <a href="mailto:hayshanwow@gmail.com" className="text-navy-500 hover:underline">
                    hayshanwow@gmail.com
                  </a>
                </p>
                <p className="text-sm text-gray-500">Best for detailed questions and account issues</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <MessageCircle className="h-8 w-8 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-navy-500">Live Chat</h3>
                <p className="text-gray-600">Available through our Legal Chat feature</p>
                <p className="text-sm text-gray-500">Instant AI-powered responses to legal questions</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <HelpCircle className="h-8 w-8 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-navy-500">Self-Service</h3>
                <p className="text-gray-600">FAQ section and knowledge base</p>
                <p className="text-sm text-gray-500">Find answers to common questions instantly</p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 bg-red-50 border border-red-200 rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <Phone className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg text-red-800 mb-2">Emergency Support</h3>
              <p className="text-red-700 mb-2">
                For critical security issues, platform outages, or urgent technical problems that prevent access to your account:
              </p>
              <p className="text-red-700">
                Email{' '}
                <a href="mailto:hayshanwow@gmail.com" className="font-semibold underline">
                  hayshanwow@gmail.com
                </a>{' '}
                with "URGENT" in the subject line.
              </p>
              <p className="text-sm text-red-600 mt-2">
                Emergency support is available 24/7 for critical issues affecting platform security or availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}