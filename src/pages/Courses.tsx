import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Lock, CircleCheck as CheckCircle, Clock, Users, TrendingUp, Award, Play } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { EducationService } from '../lib/education';
import { Course } from '../types/education';

export default function Courses() {
  const { user } = useAuth();
  const [courses, setCourses] = useState<Course[]>([]);
  const [unlockedCourses, setUnlockedCourses] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Courses', icon: BookOpen },
    { id: 'fundamentals', name: 'Fundamentals', icon: BookOpen },
    { id: 'business', name: 'Business & Corporate', icon: TrendingUp },
    { id: 'employment', name: 'Employment & HR', icon: Users },
    { id: 'property', name: 'Property & Real Estate', icon: BookOpen },
    { id: 'finance', name: 'Finance & Investment', icon: TrendingUp },
    { id: 'family', name: 'Family & Personal', icon: Users },
    { id: 'compliance', name: 'Compliance & Data', icon: CheckCircle },
    { id: 'ip', name: 'Intellectual Property', icon: Award },
    { id: 'dispute', name: 'Dispute Resolution', icon: BookOpen }
  ];

  useEffect(() => {
    if (user) {
      loadCourses();
    }
  }, [user]);

  const loadCourses = async () => {
    try {
      setLoading(true);
      const [coursesData, unlockedData] = await Promise.all([
        EducationService.getCourses(),
        EducationService.getUnlockedCourses(user!.id)
      ]);

      // Calculate progress for each course
      const coursesWithProgress = await Promise.all(
        coursesData.map(async (course) => {
          const progress = await EducationService.getCourseProgress(user!.id, course.id);
          return {
            ...course,
            progress,
            is_unlocked: unlockedData.includes(course.id)
          };
        })
      );

      setCourses(coursesWithProgress);
      setUnlockedCourses(unlockedData);
    } catch (error) {
      console.error('Error loading courses:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCourses = courses.filter(course => 
    selectedCategory === 'all' || course.category === selectedCategory
  );

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'fundamentals': return 'bg-blue-100 text-blue-800';
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress === 0) return 'bg-gray-200';
    if (progress < 50) return 'bg-red-400';
    if (progress < 80) return 'bg-yellow-400';
    return 'bg-green-400';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif font-bold text-4xl text-navy-500 mb-4">
            Legal Education Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master legal concepts through structured, progressive learning paths designed by legal experts
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-navy-500 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                course.is_unlocked ? 'hover:-translate-y-1' : 'opacity-75'
              }`}
            >
              {/* Course Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {course.is_unlocked ? (
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    ) : (
                      <Lock className="h-6 w-6 text-gray-400" />
                    )}
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                      {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                    </span>
                  </div>
                  {course.is_free && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      Free
                    </span>
                  )}
                </div>

                <h3 className="font-serif font-bold text-xl text-navy-500 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {course.description}
                </p>

                {/* Progress Bar */}
                {course.is_unlocked && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm font-medium text-gray-900">
                        {course.progress?.toFixed(0) || 0}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(course.progress || 0)}`}
                        style={{ width: `${course.progress || 0}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Course Footer */}
              <div className="px-6 pb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>4-6 weeks</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-4 w-4" />
                      <span>12-15 modules</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  {course.is_unlocked ? (
                    <Link
                      to={`/courses/${course.id}`}
                      className="w-full flex items-center justify-center space-x-2 bg-navy-500 text-white px-4 py-3 rounded-lg hover:bg-navy-600 transition-colors font-medium"
                    >
                      <Play className="h-4 w-4" />
                      <span>{course.progress && course.progress > 0 ? 'Continue Learning' : 'Start Course'}</span>
                    </Link>
                  ) : (
                    <div className="w-full flex items-center justify-center space-x-2 bg-gray-100 text-gray-500 px-4 py-3 rounded-lg font-medium">
                      <Lock className="h-4 w-4" />
                      <span>Complete Prerequisites</span>
                    </div>
                  )}
                </div>

                {/* Prerequisites */}
                {course.prerequisite_course_id && (
                  <div className="mt-3 text-xs text-gray-500">
                    <span>Requires completion of prerequisite course</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Path Info */}
        <div className="mt-16 bg-gradient-to-r from-navy-500 to-navy-600 rounded-xl p-8 text-white">
          <div className="text-center">
            <h2 className="font-serif font-bold text-2xl mb-4">Structured Learning Path</h2>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Our courses are designed to build upon each other, creating a comprehensive legal education experience. 
              Start with Fundamentals and unlock advanced courses as you progress.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Learn</h3>
                <p className="text-gray-200 text-sm">
                  Study comprehensive modules with real-world examples
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Practice</h3>
                <p className="text-gray-200 text-sm">
                  Test your knowledge with interactive quizzes
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Certify</h3>
                <p className="text-gray-200 text-sm">
                  Earn certificates to showcase your expertise
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}