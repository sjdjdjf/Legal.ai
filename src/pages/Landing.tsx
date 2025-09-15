import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Globe, CheckCircle, Star, Clock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Generate professional contracts in under 30 seconds with our Harvard-trained AI'
  },
  {
    icon: Shield,
    title: 'Bank-Level Security',
    description: 'Your sensitive legal data is protected with enterprise-grade encryption'
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Contracts valid in 150+ jurisdictions with local law compliance'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Access professional legal assistance anytime, anywhere in the world'
  }
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Startup Founder',
    company: 'TechFlow Inc.',
    content: 'Legal.ai saved us $15,000 in legal fees during our first year. The contract quality rivals top-tier law firms.',
    rating: 5
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Freelance Consultant',
    company: 'Independent',
    content: 'As a freelancer, Legal.ai has been invaluable. Professional contracts that actually protect my business.',
    rating: 5
  },
  {
    name: 'Emily Watson',
    role: 'Real Estate Investor',
    company: 'Watson Properties',
    content: 'The rental agreements are comprehensive and legally sound. My lawyer was impressed with the quality.',
    rating: 5
  }
];

export default function Landing() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-500 to-navy-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Contracts in <span className="text-gold-400">30 Seconds</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Trusted Worldwide. Harvard-level AI generates professional legal documents instantly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/chat"
                className="w-full sm:w-auto bg-white text-navy-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Start Free Chat
              </Link>
              <Link
                to="/pricing"
                className="w-full sm:w-auto bg-gold-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-600 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Upgrade to Generate Contracts</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-gold-400 mb-2">30s</div>
                <div className="text-gray-200">Contract Generation</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-gold-400 mb-2">150+</div>
                <div className="text-gray-200">Jurisdictions Covered</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-gold-400 mb-2">$50</div>
                <div className="text-gray-200">Yearly Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-navy-500 mb-4">
              Why Legal.ai?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fast. Reliable. Harvard-level AI. Affordable pricing that makes professional legal documents accessible globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <feature.icon className="h-12 w-12 text-gold-500 mb-4" />
                <h3 className="font-semibold text-xl text-navy-500 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Types Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-navy-500 mb-4">
              Professional Contract Templates
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Six essential business contracts, professionally drafted and legally sound
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Business & Corporate', description: 'Joint ventures, distribution, agency agreements' },
              { title: 'Employment & HR', description: 'Employment contracts, offer letters, termination' },
              { title: 'Property & Real Estate', description: 'Rental, commercial lease, purchase agreements' },
              { title: 'Intellectual Property', description: 'Software licenses, SaaS, IP protection' },
              { title: 'Finance & Investment', description: 'Loans, investments, promissory notes' },
              { title: 'Family & Personal', description: 'Prenuptial, medical power of attorney' },
              { title: 'Compliance & Data', description: 'Privacy policies, GDPR, data protection' },
              { title: 'Construction & Services', description: 'Construction, maintenance, service agreements' },
              { title: 'Trade & Logistics', description: 'Shipping, freight, supply chain contracts' }
            ].map((contract, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-gold-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-navy-500 mb-2">{contract.title}</h3>
                    <p className="text-gray-600">{contract.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/pricing"
              className="inline-flex items-center space-x-2 bg-navy-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-navy-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <span>Access 35+ Templates</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-navy-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">
              Trusted by Professionals Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how Legal.ai is transforming legal document creation for businesses and individuals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-200 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-300 text-sm">{testimonial.role}</div>
                  <div className="text-gold-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gold-500 to-gold-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-6">
            Ready to Generate Professional Contracts?
          </h2>
          <p className="text-xl mb-8 text-gold-100">
            Join thousands of professionals who trust Legal.ai for their legal document needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/chat"
              className="w-full sm:w-auto bg-white text-gold-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Start Free Legal Chat
            </Link>
            <Link
              to="/pricing"
              className="w-full sm:w-auto bg-navy-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-navy-600 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Get Premium Access</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}