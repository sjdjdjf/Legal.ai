import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, TrendingUp, Clock, CircleCheck as CheckCircle, Lock, Play, Download } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { EducationService } from '../lib/educationService';
import { CertificateGenerator } from '../lib/certificateGenerator';
import { Course, Certificate } from '../types/education';

export default function Dashboard() {
  const { user } = useAuth();
  const [courses, setCourses] = useState<Course[]>([]);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [unlockedCourses, setUnlockedCourses] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadDashboardData();
    }
  }, [user]);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      const [coursesData, certificatesData, unlockedData] = await Promise.all([
        EducationService.getCourses(),
        EducationService.getUserCertificates(user!.id),
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
      setCertificates(certificatesData);
      setUnlockedCourses(unlockedData);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadCertificate = async (certificate: Certificate) => {
    try {
      const pdfUrl = await CertificateGenerator.generatePDF(certificate, user?.email || 'Student');
      CertificateGenerator.downloadCertificate(certificate, user?.email || 'Student', pdfUrl);
    } catch (error) {
      console.error('Error generating certificate:', error);
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress === 0) return 'bg-gray-200';
    if (progress < 50) return 'bg-red-400';
    if (progress < 80) return 'bg-yellow-400';
    return 'bg-green-400';
  };

  const completedCourses = courses.filter(course => course.progress === 100).length;
  const inProgressCourses = courses.filter(course => course.progress > 0 && course.progress < 100).length;
  const totalProgress = courses.length > 0 ? courses.reduce((sum, course) => sum + course.progress, 0) / courses.length : 0;

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
        <div className="mb-8">
          <h1 className="font-serif font-bold text-3xl text-navy-500 mb-2">
            Learning Dashboard
          </h1>
          <p className="text-gray-600">
            Track your progress through Legal.ai's comprehensive legal education program
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3">
              <BookOpen className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-sm text-gray-600">Total Courses</p>
                <p className="font-bold text-2xl text-gray-900">{courses.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="font-bold text-2xl text-green-600">{completedCourses}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3">
              <Clock className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-sm text-gray-600">In Progress</p>
                <p className="font-bold text-2xl text-yellow-600">{inProgressCourses}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3">
              <Award className="h-8 w-8 text-gold-500" />
              <div>
                <p className="text-sm text-gray-600">Certificates</p>
                <p className="font-bold text-2xl text-gold-600">{certificates.length}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Progress */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif font-bold text-xl text-navy-500">Course Progress</h2>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium text-green-600">
                    {totalProgress.toFixed(1)}% Overall
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {courses.map((course) => (
                  <div key={course.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        {course.is_unlocked ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <Lock className="h-5 w-5 text-gray-400" />
                        )}
                        <div>
                          <h3 className="font-semibold text-gray-900">{course.title}</h3>
                          <p className="text-sm text-gray-600">{course.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">
                          {course.progress.toFixed(0)}%
                        </div>
                        <div className="text-xs text-gray-500">
                          {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(course.progress)}`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{course.category}</span>
                        {course.is_free && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                            Free
                          </span>
                        )}
                      </div>
                      
                      {course.is_unlocked ? (
                        <Link
                          to={`/courses/${course.id}`}
                          className="flex items-center space-x-2 bg-navy-500 text-white px-4 py-2 rounded-lg hover:bg-navy-600 transition-colors text-sm"
                        >
                          <Play className="h-4 w-4" />
                          <span>{course.progress > 0 ? 'Continue' : 'Start'}</span>
                        </Link>
                      ) : (
                        <div className="flex items-center space-x-2 bg-gray-100 text-gray-500 px-4 py-2 rounded-lg text-sm">
                          <Lock className="h-4 w-4" />
                          <span>Locked</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certificates */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="font-serif font-bold text-xl text-navy-500 mb-6">Your Certificates</h2>
              
              {certificates.length === 0 ? (
                <div className="text-center py-8">
                  <Award className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 mb-2">No certificates yet</p>
                  <p className="text-sm text-gray-400">
                    Complete courses to earn certificates
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {certificates.map((certificate) => (
                    <div key={certificate.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <Award className="h-6 w-6 text-gold-500 mt-1" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 text-sm">
                            {certificate.course?.title}
                          </h3>
                          <p className="text-xs text-gray-600 mb-2">
                            Issued {new Date(certificate.issued_at).toLocaleDateString()}
                          </p>
                          <button
                            onClick={() => handleDownloadCertificate(certificate)}
                            className="flex items-center space-x-1 text-navy-500 hover:text-navy-600 text-sm"
                          >
                            <Download className="h-4 w-4" />
                            <span>Download PDF</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/courses"
                  className="flex items-center space-x-3 p-3 bg-navy-50 rounded-lg hover:bg-navy-100 transition-colors"
                >
                  <BookOpen className="h-5 w-5 text-navy-600" />
                  <span className="text-navy-700 font-medium">Browse All Courses</span>
                </Link>
                
                <Link
                  to="/certificates"
                  className="flex items-center space-x-3 p-3 bg-gold-50 rounded-lg hover:bg-gold-100 transition-colors"
                >
                  <Award className="h-5 w-5 text-gold-600" />
                  <span className="text-gold-700 font-medium">View Certificates</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}