import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scale, Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const isCEO = user?.id === 'ceo-admin';

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Scale className="h-8 w-8 text-navy-500 group-hover:text-gold-500 transition-colors" />
            <span className="font-serif font-bold text-xl text-navy-500">Legal.ai</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-navy-500 transition-colors font-medium">
              Home
            </Link>
            <Link to="/courses" className="text-gray-600 hover:text-navy-500 transition-colors font-medium">
              Courses
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-navy-500 transition-colors font-medium">
              Pricing
            </Link>

            {/* User Menu */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-navy-500 transition-colors"
                >
                  <User className="h-5 w-5" />
                  <span className="font-medium">
                    {isCEO ? '🔑 CEO' : user.email}
                  </span>
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 z-50">
                    <div className="py-1">
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setIsUserMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center space-x-2"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-navy-500 hover:text-navy-600 font-medium transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="bg-navy-500 text-white px-4 py-2 rounded-lg hover:bg-navy-600 transition-colors font-medium"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-navy-500 hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-600 hover:text-navy-500 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/courses"
                className="block px-3 py-2 text-gray-600 hover:text-navy-500 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Courses
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-gray-600 hover:text-navy-500 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              
              {user ? (
                <div className="border-t border-gray-100 pt-2 mt-2">
                  <Link
                    to="/dashboard"
                    className="block px-3 py-2 text-gray-600 hover:text-navy-500 hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-gray-600 hover:text-navy-500 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="border-t border-gray-100 pt-2 mt-2">
                  <Link
                    to="/login"
                    className="block px-3 py-2 text-navy-500 hover:text-navy-600 hover:bg-gray-50 rounded-md transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="block px-3 py-2 bg-navy-500 text-white rounded-md hover:bg-navy-600 transition-colors font-medium mt-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}