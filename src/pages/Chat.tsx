import React, { useState } from 'react';
import { Bot, Lock, Crown, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import faqData from '../data/faq.json';

interface FAQ {
  q: string;
  a: string;
}

interface FAQCategory {
  category: string;
  questions: FAQ[];
}

interface SelectedQuestion {
  categoryIndex: number;
  questionIndex: number;
  question: FAQ;
}

export default function Chat() {
  const { user } = useAuth();
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState<SelectedQuestion | null>(null);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  
  const categories: FAQCategory[] = faqData;
  const isCEO = user?.id === 'ceo-admin';
  const isPremium = user?.isPremium || isCEO;

  // Calculate access limits for free users
  const getAccessibleQuestions = (categoryQuestions: FAQ[]) => {
    if (isPremium) return categoryQuestions;
    
    // Free users get 20% of questions (minimum 2 per category)
    const accessCount = Math.max(2, Math.floor(categoryQuestions.length * 0.2));
    return categoryQuestions.slice(0, accessCount);
  };

  const handleQuestionClick = (categoryIndex: number, questionIndex: number, question: FAQ) => {
    const category = categories[categoryIndex];
    const accessibleQuestions = getAccessibleQuestions(category.questions);
    
    // Check if question is accessible for free users
    if (!isPremium && questionIndex >= accessibleQuestions.length) {
      setShowUpgradeModal(true);
      return;
    }

    setSelectedQuestion({ categoryIndex, questionIndex, question });
  };

  const totalQuestions = categories.reduce((sum, cat) => sum + cat.questions.length, 0);
  const accessibleTotal = isPremium ? totalQuestions : categories.reduce((sum, cat) => sum + getAccessibleQuestions(cat.questions).length, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Bot className="h-10 w-10 text-navy-500" />
            <h1 className="font-serif font-bold text-3xl md:text-4xl text-navy-500">
              Legal Knowledge Base
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-4">
            {isCEO 
              ? '🔑 CEO Access: Complete legal knowledge base with 100+ professional Q&As'
              : isPremium 
                ? 'Premium Access: Complete legal knowledge base with 100+ Q&As'
                : `Access ${accessibleTotal} of ${totalQuestions} legal Q&As`
            }
          </p>
          
          {!isPremium && (
            <div className="bg-gold-50 border border-gold-200 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-gold-800">
                <strong>Free Access:</strong> You can view {accessibleTotal} questions. 
                <Link to="/pricing" className="text-gold-600 hover:text-gold-700 font-medium ml-1">
                  Upgrade to Premium
                </Link> to unlock all {totalQuestions} legal Q&As.
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="font-serif font-bold text-xl text-navy-500 mb-6">Legal Categories</h2>
              <div className="space-y-2">
                {categories.map((category, index) => {
                  const accessibleCount = getAccessibleQuestions(category.questions).length;
                  const totalCount = category.questions.length;
                  
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveCategory(index);
                        setSelectedQuestion(null);
                      }}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                        activeCategory === index
                          ? 'bg-gold-500 text-white shadow-md'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="font-medium">{category.category}</div>
                      <div className={`text-sm ${activeCategory === index ? 'text-gold-100' : 'text-gray-500'}`}>
                        {isPremium ? `${totalCount} Q&As` : `${accessibleCount}/${totalCount} Q&As`}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Category Header */}
              <div className="bg-navy-500 text-white p-6">
                <h2 className="font-serif font-bold text-2xl mb-2">
                  {categories[activeCategory].category}
                </h2>
                <p className="text-gray-200">
                  {isPremium 
                    ? `${categories[activeCategory].questions.length} professional legal Q&As`
                    : `${getAccessibleQuestions(categories[activeCategory].questions).length} of ${categories[activeCategory].questions.length} Q&As available`
                  }
                </p>
              </div>

              {/* Content Area */}
              <div className="p-6">
                {selectedQuestion ? (
                  /* Answer Display */
                  <div className="space-y-6">
                    <button
                      onClick={() => setSelectedQuestion(null)}
                      className="text-navy-500 hover:text-navy-600 flex items-center space-x-2 transition-colors"
                    >
                      <ArrowRight className="h-4 w-4 rotate-180" />
                      <span>Back to questions</span>
                    </button>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-navy-500 rounded-full p-2 flex-shrink-0">
                          <Bot className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-navy-500 mb-3">
                            {selectedQuestion.question.q}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {selectedQuestion.question.a}
                          </p>
                        </div>
                      </div>
                    </div>

                    {!isPremium && (
                      <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-lg p-6 text-white">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-bold text-lg mb-2">Need a custom contract?</h4>
                            <p className="text-gold-100">
                              Upgrade to Premium to generate professional legal documents instantly.
                            </p>
                          </div>
                          <Link
                            to="/pricing"
                            className="bg-white text-gold-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex-shrink-0 ml-4"
                          >
                            Upgrade Now
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Questions List */
                  <div className="space-y-3">
                    {categories[activeCategory].questions.map((question, questionIndex) => {
                      const isAccessible = isPremium || questionIndex < getAccessibleQuestions(categories[activeCategory].questions).length;
                      
                      return (
                        <button
                          key={questionIndex}
                          onClick={() => handleQuestionClick(activeCategory, questionIndex, question)}
                          className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                            isAccessible
                              ? 'border-gray-200 hover:border-navy-300 hover:shadow-md bg-white'
                              : 'border-gray-100 bg-gray-50 cursor-pointer'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <h4 className={`font-medium ${isAccessible ? 'text-navy-500' : 'text-gray-400'}`}>
                                {question.q}
                              </h4>
                              {!isAccessible && (
                                <p className="text-sm text-gray-500 mt-1">
                                  Premium content - upgrade to unlock
                                </p>
                              )}
                            </div>
                            <div className="flex-shrink-0 ml-4">
                              {isAccessible ? (
                                <ArrowRight className="h-5 w-5 text-gray-400" />
                              ) : (
                                <Lock className="h-5 w-5 text-gray-400" />
                              )}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Upgrade Modal */}
        {showUpgradeModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-md w-full p-6">
              <div className="text-center">
                <div className="bg-gold-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Crown className="h-8 w-8 text-gold-600" />
                </div>
                <h3 className="font-serif font-bold text-xl text-navy-500 mb-4">
                  Unlock All Legal FAQs
                </h3>
                <p className="text-gray-600 mb-6">
                  Get access to all {totalQuestions}+ professional legal Q&As with Legal.ai Premium for just $50/year.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setShowUpgradeModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Maybe Later
                  </button>
                  <Link
                    to="/pricing"
                    className="flex-1 px-4 py-2 bg-gold-500 text-white rounded-lg hover:bg-gold-600 transition-colors text-center"
                    onClick={() => setShowUpgradeModal(false)}
                  >
                    Upgrade Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stats Footer */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-navy-500 mb-2">{totalQuestions}+</div>
              <div className="text-gray-600">Legal Q&As</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy-500 mb-2">5</div>
              <div className="text-gray-600">Legal Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy-500 mb-2">
                {isPremium ? <CheckCircle className="h-8 w-8 text-green-500 mx-auto" /> : '20%'}
              </div>
              <div className="text-gray-600">
                {isPremium ? 'Full Access' : 'Free Access'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}