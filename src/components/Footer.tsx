import React from 'react';
import { Scale, Mail, Globe, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="h-8 w-8 text-gold-500" />
              <span className="font-serif font-bold text-xl">Legal.ai</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your global legal assistant platform. Generate professional contracts in 30 seconds with Harvard-level AI expertise.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Powered by</span>
              <span className="font-semibold text-gold-400">Hayshan</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/chat" className="hover:text-gold-400 transition-colors">Legal Chat</a></li>
              <li><a href="/pricing" className="hover:text-gold-400 transition-colors">Contract Generator</a></li>
              <li><a href="/pricing" className="hover:text-gold-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">API Access</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/about" className="hover:text-gold-400 transition-colors">About Us</a></li>
              <li><a href="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-gold-400 transition-colors">Terms of Service</a></li>
              <li><a href="/support" className="hover:text-gold-400 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-400 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Shield className="h-4 w-4" />
                <span>Bank-level Security</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Globe className="h-4 w-4" />
                <span>Global Coverage</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="h-4 w-4" />
                <a href="mailto:hayshanwow@gmail.com" className="hover:text-gold-400 transition-colors">
                  24/7 Support
                </a>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Legal.ai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}