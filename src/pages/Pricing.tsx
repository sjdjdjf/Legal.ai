import React, { useState } from 'react';
import { Check, Star, CreditCard, Shield, Zap } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Pricing() {
  const { user } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);

  // CEO gets everything for free
  const isCEO = user?.id === 'ceo-admin';

  const handleUpgrade = async () => {
    setIsProcessing(true);
    
    // Simulate Stripe payment process
    setTimeout(() => {
      alert('Payment processing would happen here via Stripe. In the demo, you are now premium!');
      
      // In real implementation, update user status after successful payment
      const updatedUser = {
        ...user!,
        isPremium: true,
        premiumExpiryDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
      };
      localStorage.setItem('legal-ai-user', JSON.stringify(updatedUser));
      window.location.reload();
    }, 2000);
  };

  const features = [
    '25+ Professional Contract Templates',
    'Harvard-trained AI Generation',
    'PDF Export with Signature Lines',
    'Unlimited Contract Generation',
    '150+ Jurisdictions Supported',
    'Bank-level Security & Encryption',
    'Priority Email Support',
    'Commercial Use Rights'
  ];

  const contractTypes = [
    'Business & Corporate (6 templates)',
    'Employment & HR (4 templates)', 
    'Property & Real Estate (3 templates)',
    'Intellectual Property & Tech (2 templates)',
    'Finance & Investment (3 templates)',
    'Family & Personal (2 templates)',
    'Compliance & Data (3 templates)',
    'Plus many more specialized contracts'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-500 to-navy-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif font-bold text-4xl md:text-5xl mb-6">
            Professional Legal Documents
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            One simple payment. Unlimited access. Harvard-level contract generation for an entire year.
          </p>
          
          {isCEO ? (
            <div className="bg-gradient-to-r from-gold-500 to-gold-600 border border-gold-400 rounded-lg p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2 text-white mb-2">
                <Check className="h-6 w-6" />
                <span className="font-semibold text-lg">🔑 CEO Access Active</span>
              </div>
              <p className="text-gold-100 text-center">
                Full platform access with unlimited contract generation and all premium features.
              </p>
            </div>
          ) : user?.isPremium ? (
            <div className="bg-green-100 border border-green-300 rounded-lg p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2 text-green-800 mb-2">
                <Check className="h-6 w-6" />
                <span className="font-semibold text-lg">Premium Active</span>
              </div>
              <p className="text-green-700">
                You have full access to all contract generation features.
              </p>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-gold-400">$50</div>
                <div className="text-gray-200">USD / Year</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-gold-400">RM50</div>
                <div className="text-gray-200">MYR / Year</div>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Free Tier */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="font-serif font-bold text-2xl text-navy-500 mb-2">Free Legal Chat</h2>
                <p className="text-gray-600">Perfect for quick legal questions</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-navy-500">$0</span>
                  <span className="text-gray-500 ml-2">Forever</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Unlimited Legal Chat Access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>FAQ Knowledge Base</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>General Legal Guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>24/7 AI Assistant</span>
                </div>
              </div>

              <button className="w-full bg-gray-100 text-gray-500 py-3 rounded-lg font-medium cursor-not-allowed">
                Already Active
              </button>
            </div>
          </div>

          {/* Premium Tier */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-gold-400 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-gold-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                <Star className="h-4 w-4" />
                <span>Most Popular</span>
              </div>
            </div>

            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="font-serif font-bold text-2xl text-navy-500 mb-2">Premium Generator</h2>
                <p className="text-gray-600">Professional contract creation</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-navy-500">$50</span>
                  <span className="text-gray-500 ml-2">/ Year</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">One-time yearly payment</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="text-sm font-semibold text-gold-600 uppercase tracking-wide mb-3">
                  Everything in Free, plus:
                </div>
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-gold-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {user?.isPremium ? (
                <button className="w-full bg-green-100 text-green-700 py-3 rounded-lg font-medium cursor-not-allowed flex items-center justify-center space-x-2">
                  <Check className="h-5 w-5" />
                  <span>{isCEO ? 'CEO Access Active' : 'Active Premium'}</span>
                </button>
              ) : user ? (
                <button
                  onClick={handleUpgrade}
                  disabled={isProcessing}
                  className="w-full bg-gold-500 text-white py-3 rounded-lg font-medium hover:bg-gold-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <CreditCard className="h-5 w-5" />
                      <span>Upgrade to Premium</span>
                    </>
                  )}
                </button>
              ) : (
                <a
                  href="/register"
                  className="w-full bg-gold-500 text-white py-3 rounded-lg font-medium hover:bg-gold-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Contract Types */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="font-serif font-bold text-2xl text-navy-500 text-center mb-8">
            60+ Professional Contract Templates Across 12 Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contractTypes.map((contract, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <Check className="h-5 w-5 text-gold-500 flex-shrink-0" />
                <span className="font-medium text-gray-800">{contract}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-navy-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-navy-500" />
            </div>
            <h4 className="font-semibold text-lg text-navy-500 mb-2">Harvard-Trained AI</h4>
            <p className="text-gray-600">Professional-grade contracts generated with top-tier legal expertise</p>
          </div>
          <div className="text-center">
            <div className="bg-navy-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-navy-500" />
            </div>
            <h4 className="font-semibold text-lg text-navy-500 mb-2">Bank-Level Security</h4>
            <p className="text-gray-600">Your sensitive legal data is protected with enterprise encryption</p>
          </div>
          <div className="text-center">
            <div className="bg-navy-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-navy-500" />
            </div>
            <h4 className="font-semibold text-lg text-navy-500 mb-2">Legally Binding</h4>
            <p className="text-gray-600">All contracts are professionally formatted and court-ready</p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h3 className="font-serif font-bold text-2xl text-navy-500 text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow">
              <h4 className="font-semibold text-lg text-navy-500 mb-2">Are the contracts legally binding?</h4>
              <p className="text-gray-600">Yes, all contracts generated by Legal.ai are professionally drafted and legally binding when properly executed. However, we recommend review by a qualified attorney for complex situations.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h4 className="font-semibold text-lg text-navy-500 mb-2">What happens after one year?</h4>
              <p className="text-gray-600">Your premium access expires after one year. We'll send email reminders before expiration, and you can renew for another year to maintain access to contract generation.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h4 className="font-semibold text-lg text-navy-500 mb-2">Can I use these contracts internationally?</h4>
              <p className="text-gray-600">Our contracts support 150+ jurisdictions and include governing law clauses. For international use, review by local counsel may be advisable depending on your specific requirements.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h4 className="font-semibold text-lg text-navy-500 mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-600">We accept all major credit cards through Stripe's secure payment processing. Your payment information is never stored on our servers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}