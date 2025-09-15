import React from 'react';
import { Scale, Shield, Zap, Globe, Users, Award, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Scale className="h-12 w-12 text-navy-500" />
            <h1 className="font-serif font-bold text-4xl text-navy-500">About Legal.ai</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Democratizing legal expertise through Harvard-level AI technology, making professional legal documents accessible to everyone, everywhere.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="font-serif font-bold text-2xl text-navy-500 mb-6">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Legal.ai was founded on the belief that professional legal assistance should be accessible, affordable, and available to everyone. We're transforming the legal industry by combining cutting-edge artificial intelligence with Harvard-level legal expertise to deliver instant, professional-grade legal documents and guidance.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our platform serves individuals, startups, small businesses, and enterprises worldwide, providing them with the legal tools they need to protect their interests, formalize agreements, and navigate complex legal requirements with confidence.
          </p>
        </div>

        {/* What We Do */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="font-serif font-bold text-2xl text-navy-500 mb-6">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg text-navy-500 mb-4 flex items-center">
                <Zap className="h-5 w-5 mr-2" />
                Instant Legal Chat
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Get immediate answers to legal questions across employment law, business contracts, property rights, intellectual property, and general legal matters through our AI-powered chat system.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-navy-500 mb-4 flex items-center">
                <Scale className="h-5 w-5 mr-2" />
                Professional Contract Generation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Generate legally binding contracts in under 30 seconds using our Harvard-trained AI. Choose from 35+ professional templates across 7 legal categories, all customized to your specific needs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-navy-500 mb-4 flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                Global Legal Coverage
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our contracts are valid in 150+ jurisdictions worldwide, with built-in compliance for local laws and regulations. Whether you're in New York or Malaysia, our documents meet professional standards.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-navy-500 mb-4 flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Enterprise Security
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Your sensitive legal data is protected with bank-level encryption and enterprise-grade security measures. We never store your personal information or contract details beyond what's necessary for generation.
              </p>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="font-serif font-bold text-2xl text-navy-500 mb-6">Why Choose Legal.ai</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">Harvard-Level Quality</h4>
                <p className="text-gray-700">Our AI is trained on legal expertise from top-tier law schools and firms, ensuring professional-grade document quality.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">Massive Cost Savings</h4>
                <p className="text-gray-700">Save thousands in legal fees. Our $50/year premium plan costs less than one hour with a traditional lawyer.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">Lightning Fast</h4>
                <p className="text-gray-700">Generate professional contracts in under 30 seconds. No more waiting weeks for legal document preparation.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">Always Available</h4>
                <p className="text-gray-700">24/7 access to legal assistance. Get help when you need it, regardless of time zones or business hours.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">User-Friendly</h4>
                <p className="text-gray-700">No legal expertise required. Our intuitive interface guides you through document creation step-by-step.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust & Security */}
        <div className="bg-gradient-to-r from-navy-500 to-navy-600 rounded-xl p-8 text-white mb-12">
          <h2 className="font-serif font-bold text-2xl mb-6">Trust & Security</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-gold-400" />
              <h3 className="font-semibold text-lg mb-2">Bank-Level Encryption</h3>
              <p className="text-gray-200">Your data is protected with the same security standards used by major financial institutions.</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-4 text-gold-400" />
              <h3 className="font-semibold text-lg mb-2">GDPR Compliant</h3>
              <p className="text-gray-200">Full compliance with international data protection regulations and privacy laws.</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-gold-400" />
              <h3 className="font-semibold text-lg mb-2">Trusted Worldwide</h3>
              <p className="text-gray-200">Serving thousands of users across 150+ countries with professional legal solutions.</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="font-serif font-bold text-2xl text-navy-500 mb-4">Get Started Today</h2>
          <p className="text-gray-700 text-lg mb-6">
            Join thousands of professionals who trust Legal.ai for their legal document needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/chat"
              className="bg-navy-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-600 transition-colors"
            >
              Start Free Legal Chat
            </a>
            <a
              href="/pricing"
              className="bg-gold-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-colors"
            >
              View Premium Plans
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}