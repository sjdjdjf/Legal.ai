import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  BookOpen, 
  CheckCircle, 
  Clock, 
  Play,
  Award,
  Lock
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { EducationService } from '../lib/education';
import { Course, Module, UserProgress } from '../types/education';

export default function CourseDetail() {
  const { courseId } = useParams<{ courseId: string }>();
  const { user } = useAuth();
  const [course, setCourse] = useState<Course | null>(null);
  const [userProgress, setUserProgress] = useState<UserProgress[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user && courseId) {
      loadCourseData();
    }
  }, [user, courseId]);

  const loadCourseData = async () => {
    try {
      setLoading(true);
      const [courseData, progressData] = await Promise.all([
        EducationService.getCourseWithModules(courseId!),
        EducationService.getUserProgress(user!.id)
      ]);

      setCourse(courseData);
      setUserProgress(progressData.filter(p => p.course_id === courseId));
    } catch (error) {
      console.error('Error loading course data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getModuleProgress = (moduleId: string) => {
    const moduleProgress = userProgress.filter(p => p.module_id === moduleId);
    const totalLessons = course?.modules?.find(m => m.id === moduleId)?.lessons?.length || 0;
    const completedLessons = moduleProgress.filter(p => p.completed).length;
    return totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
  };

  const isModuleUnlocked = (moduleIndex: number) => {
    if (moduleIndex === 0) return true; // First module always unlocked
    
    // Check if previous module is completed
    const previousModule = course?.modules?.[moduleIndex - 1];
    if (!previousModule) return false;
    
    const progress = getModuleProgress(previousModule.id);
    return progress === 100;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy-500"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Course not found</h2>
          <Link to="/courses" className="text-navy-500 hover:underline">
            Back to courses
          </Link>
        </div>
      </div>
    );
  }

  const overallProgress = course.modules ? 
    course.modules.reduce((sum, module) => sum + getModuleProgress(module.id), 0) / course.modules.length : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/courses"
            className="flex items-center space-x-2 text-navy-500 hover:text-navy-600 mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Courses</span>
          </Link>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="font-serif font-bold text-3xl text-navy-500 mb-2">
                  {course.title}
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {course.description}
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-navy-500">
                  {overallProgress.toFixed(0)}%
                </div>
                <div className="text-sm text-gray-500">Complete</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-green-400 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${overallProgress}%` }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <BookOpen className="h-6 w-6 text-navy-500" />
                <div>
                  <div className="font-semibold text-gray-900">
                    {course.modules?.length || 0} Modules
                  </div>
                  <div className="text-sm text-gray-600">Comprehensive curriculum</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-navy-500" />
                <div>
                  <div className="font-semibold text-gray-900">4-6 Weeks</div>
                  <div className="text-sm text-gray-600">Estimated completion</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-6 w-6 text-navy-500" />
                <div>
                  <div className="font-semibold text-gray-900">Certificate</div>
                  <div className="text-sm text-gray-600">Upon completion</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modules */}
        <div className="space-y-6">
          {course.modules?.map((module, index) => {
            const moduleProgress = getModuleProgress(module.id);
            const isUnlocked = isModuleUnlocked(index);
            const totalLessons = module.lessons?.length || 0;
            const completedLessons = userProgress.filter(
              p => p.module_id === module.id && p.completed
            ).length;

            return (
              <div
                key={module.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                  isUnlocked ? '' : 'opacity-60'
                }`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {isUnlocked ? (
                          moduleProgress === 100 ? (
                            <CheckCircle className="h-8 w-8 text-green-500" />
                          ) : (
                            <div className="w-8 h-8 rounded-full border-2 border-navy-500 flex items-center justify-center">
                              <span className="text-sm font-bold text-navy-500">
                                {index + 1}
                              </span>
                            </div>
                          )
                        ) : (
                          <Lock className="h-8 w-8 text-gray-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-xl text-navy-500 mb-2">
                          {module.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {module.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">
                        {moduleProgress.toFixed(0)}%
                      </div>
                      <div className="text-sm text-gray-500">
                        {completedLessons}/{totalLessons} lessons
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          moduleProgress === 0 ? 'bg-gray-200' :
                          moduleProgress < 50 ? 'bg-red-400' :
                          moduleProgress < 100 ? 'bg-yellow-400' : 'bg-green-400'
                        }`}
                        style={{ width: `${moduleProgress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Lessons Preview */}
                  {isUnlocked && module.lessons && (
                    <div className="space-y-2 mb-4">
                      {module.lessons.slice(0, 3).map((lesson, lessonIndex) => {
                        const isCompleted = userProgress.some(
                          p => p.lesson_id === lesson.id && p.completed
                        );
                        return (
                          <div
                            key={lesson.id}
                            className="flex items-center space-x-3 text-sm"
                          >
                            {isCompleted ? (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            ) : (
                              <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                            )}
                            <span className={isCompleted ? 'text-gray-500 line-through' : 'text-gray-700'}>
                              {lesson.title}
                            </span>
                            <span className="text-gray-400">
                              ({lesson.estimated_duration} min)
                            </span>
                          </div>
                        );
                      })}
                      {module.lessons.length > 3 && (
                        <div className="text-sm text-gray-500 ml-7">
                          +{module.lessons.length - 3} more lessons
                        </div>
                      )}
                    </div>
                  )}

                  {/* Action Button */}
                  <div className="flex justify-end">
                    {isUnlocked ? (
                      <Link
                        to={`/courses/${courseId}/modules/${module.id}`}
                        className="flex items-center space-x-2 bg-navy-500 text-white px-6 py-3 rounded-lg hover:bg-navy-600 transition-colors font-medium"
                      >
                        <Play className="h-4 w-4" />
                        <span>
                          {moduleProgress > 0 ? 'Continue Module' : 'Start Module'}
                        </span>
                      </Link>
                    ) : (
                      <div className="flex items-center space-x-2 bg-gray-100 text-gray-500 px-6 py-3 rounded-lg font-medium">
                        <Lock className="h-4 w-4" />
                        <span>Complete Previous Module</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Course Completion */}
        {overallProgress === 100 && (
          <div className="mt-8 bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-8 text-white text-center">
            <Award className="h-16 w-16 mx-auto mb-4" />
            <h2 className="font-serif font-bold text-2xl mb-4">
              Congratulations! Course Completed
            </h2>
            <p className="text-green-100 mb-6">
              You have successfully completed all modules in this course. 
              Your certificate is ready for download.
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Download Certificate
            </button>
          </div>
        )}
      </div>
    </div>
  );
}