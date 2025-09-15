import React from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  FileText, 
  MessageSquare, 
  Crown, 
  Calendar, 
  CheckCircle, 
  ArrowRight,
  Shield,
  Zap,
  Globe
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();
  
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please sign in to access your dashboard</h2>
          <Link
            to="/login"
            className="bg-navy-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-navy-600 transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  const isCEO = user.id === 'ceo-admin';
  const isPremium = user.isPremium || isCEO;

  const stats = [
    {
      title: 'Account Status',
      value: isCEO ? 'CEO Access' : isPremium ? 'Premium' : 'Free',
      icon: isCEO ? Crown : isPremium ? CheckCircle : User,
      color: isCEO ? 'text-gold-500' : isPremium ? 'text-green-500' : 'text-gray-500'
    },
    {
      title: 'Contracts Available',
      value: isPremium ? '25+ Templates' : '0 Templates',
      icon: FileText,
      color: isPremium ? 'text-navy-500' : 'text-gray-500'
    },
    {
      title: 'Legal Chat',
      value: 'Unlimited',
      icon: MessageSquare,
      color: 'text-blue-500'
    },
    {
      title: 'Access Expires',
      value: isCEO ? 'Never' : isPremium ? new Date(user.premiumExpiryDate!).toLocaleDateString() : 'N/A',
      icon: Calendar,
      color: isCEO ? 'text-gold-500' : isPremium ? 'text-green-500' : 'text-gray-500'
    }
  ];

  const contractTypes = [
    { name: 'Business & Corporate', description: '6 templates: NDAs, joint ventures, agency agreements', available: isPremium },
    { name: 'Employment & HR', description: '4 templates: Employment contracts, offer letters, termination', available: isPremium },
    { name: 'Property & Real Estate', description: '3 templates: Rental, commercial lease, purchase agreements', available: isPremium },
    { name: 'Intellectual Property', description: '2 templates: Software licenses, SaaS agreements', available: isPremium },
    { name: 'Finance & Investment', description: '3 templates: Loans, investments, promissory notes', available: isPremium },
    { name: 'Family & Personal', description: '2 templates: Prenuptial, medical power of attorney', available: isPremium },
    { name: 'Compliance & Data', description: '3 templates: Privacy policies, GDPR, data protection', available: isPremium }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif font-bold text-3xl text-navy-500 mb-2">
            Welcome back{isCEO ? ', CEO' : ''}!
          </h1>
          <p className="text-gray-600">
            {isCEO 
              ? 'You have full administrative access to all Legal.ai features.'
              : isPremium 
                ? 'You have premium access to all contract generation features.'
                : 'Upgrade to Premium to unlock contract generation capabilities.'
            }
          </p>
        </div>

        {/* CEO Access Banner */}
        {isCEO && (
          <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-xl p-6 mb-8 text-white">
            <div className="flex items-center space-x-3">
              <Crown className="h-8 w-8" />
              <div>
                <h2 className="font-bold text-xl">🔑 CEO Access Active</h2>
                <p className="text-gold-100">
                  Full platform access with unlimited contract generation and all premium features.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-3">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className={`font-bold text-lg ${stat.color}`}>{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="font-serif font-bold text-xl text-navy-500 mb-6">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  to="/chat"
                  className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                >
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-blue-900">Legal Chat</h3>
                    <p className="text-sm text-blue-600">Ask legal questions</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-blue-600 group-hover:translate-x-1 transition-transform ml-auto" />
                </Link>

                {isPremium ? (
                  <Link
                    to="/contracts"
                    className="flex items-center space-x-3 p-4 bg-navy-50 rounded-lg hover:bg-navy-100 transition-colors group"
                  >
                    <FileText className="h-6 w-6 text-navy-600" />
                    <div>
                      <h3 className="font-semibold text-navy-900">Generate Contract</h3>
                      <p className="text-sm text-navy-600">Create legal documents</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-navy-600 group-hover:translate-x-1 transition-transform ml-auto" />
                  </Link>
                ) : (
                  <Link
                    to="/pricing"
                    className="flex items-center space-x-3 p-4 bg-gold-50 rounded-lg hover:bg-gold-100 transition-colors group"
                  >
                    <Crown className="h-6 w-6 text-gold-600" />
                    <div>
                      <h3 className="font-semibold text-gold-900">Upgrade to Premium</h3>
                      <p className="text-sm text-gold-600">Unlock contract generation</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gold-600 group-hover:translate-x-1 transition-transform ml-auto" />
                  </Link>
                )}
              </div>
            </div>

            {/* Contract Templates */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="font-serif font-bold text-xl text-navy-500 mb-6">Contract Templates</h2>
              <div className="space-y-3">
                {contractTypes.map((contract, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-lg border ${
                      contract.available 
                        ? 'border-green-200 bg-green-50' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <FileText className={`h-5 w-5 ${contract.available ? 'text-green-600' : 'text-gray-400'}`} />
                      <div>
                        <h3 className={`font-medium ${contract.available ? 'text-green-900' : 'text-gray-500'}`}>
                          {contract.name}
                        </h3>
                        <p className={`text-sm ${contract.available ? 'text-green-600' : 'text-gray-400'}`}>
                          {contract.description}
                        </p>
                      </div>
                    </div>
                    {contract.available ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <div className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">
                        Premium
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Account Info */}
          <div className="space-y-6">
            {/* Account Details */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="font-serif font-bold text-xl text-navy-500 mb-4">Account Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600">Email</label>
                  <p className="font-medium text-gray-900">{user.email}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Account Type</label>
                  <p className={`font-medium ${isCEO ? 'text-gold-600' : isPremium ? 'text-green-600' : 'text-gray-600'}`}>
                    {isCEO ? '🔑 CEO Access' : isPremium ? 'Premium' : 'Free'}
                  </p>
                </div>
                {isPremium && !isCEO && (
                  <div>
                    <label className="text-sm text-gray-600">Premium Expires</label>
                    <p className="font-medium text-gray-900">
                      {new Date(user.premiumExpiryDate!).toLocaleDateString()}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="font-serif font-bold text-xl text-navy-500 mb-4">Your Features</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">Legal Chat Access</span>
                  <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className={`h-5 w-5 ${isPremium ? 'text-navy-500' : 'text-gray-400'}`} />
                  <span className={isPremium ? 'text-gray-700' : 'text-gray-400'}>Contract Generation</span>
                  {isPremium ? (
                    <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
                  ) : (
                    <div className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded ml-auto">
                      Premium
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className={`h-5 w-5 ${isPremium ? 'text-navy-500' : 'text-gray-400'}`} />
                  <span className={isPremium ? 'text-gray-700' : 'text-gray-400'}>PDF Export</span>
                  {isPremium ? (
                    <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
                  ) : (
                    <div className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded ml-auto">
                      Premium
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">Global Legal Coverage</span>
                  <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
                </div>
              </div>
            </div>

            {/* Upgrade CTA for Free Users */}
            {!isPremium && (
              <div className="bg-gradient-to-r from-navy-500 to-navy-600 rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Upgrade to Premium</h3>
                <p className="text-gray-200 mb-4 text-sm">
                  Unlock all contract templates and generate professional legal documents instantly.
                </p>
                <Link
                  to="/pricing"
                  className="inline-flex items-center space-x-2 bg-gold-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-gold-600 transition-colors"
                >
                  <span>View Pricing</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}