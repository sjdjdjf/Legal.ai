import { supabase } from './supabase';
import { Course, Module, Lesson, QuizQuestion, UserProgress, QuizAttempt, Certificate } from '../types/education';

export class EducationService {
  // Course Management
  static async getCourses(): Promise<Course[]> {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .order('order_index');
    
    if (error) throw error;
    return data || [];
  }

  static async getCourseWithModules(courseId: string): Promise<Course | null> {
    const { data, error } = await supabase
      .from('courses')
      .select(`
        *,
        modules (
          *,
          lessons (*)
        )
      `)
      .eq('id', courseId)
      .single();
    
    if (error) throw error;
    return data;
  }

  // Progress Tracking
  static async getUserProgress(userId: string): Promise<UserProgress[]> {
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId);
    
    if (error) throw error;
    return data || [];
  }

  static async markLessonComplete(userId: string, lessonId: string, moduleId: string, courseId: string): Promise<void> {
    const { error } = await supabase
      .from('user_progress')
      .upsert({
        user_id: userId,
        lesson_id: lessonId,
        module_id: moduleId,
        course_id: courseId,
        completed: true,
        completed_at: new Date().toISOString()
      });
    
    if (error) throw error;
  }

  static async getCourseProgress(userId: string, courseId: string): Promise<number> {
    // Get total lessons in course
    const { data: lessons, error: lessonsError } = await supabase
      .from('lessons')
      .select('id')
      .eq('module_id', supabase.from('modules').select('id').eq('course_id', courseId));
    
    if (lessonsError) throw lessonsError;
    
    // Get completed lessons
    const { data: completed, error: completedError } = await supabase
      .from('user_progress')
      .select('id')
      .eq('user_id', userId)
      .eq('course_id', courseId)
      .eq('completed', true);
    
    if (completedError) throw completedError;
    
    const totalLessons = lessons?.length || 0;
    const completedLessons = completed?.length || 0;
    
    return totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
  }

  // Quiz Management
  static async getQuizQuestions(moduleId: string): Promise<QuizQuestion[]> {
    const { data, error } = await supabase
      .from('quiz_questions')
      .select('*')
      .eq('module_id', moduleId);
    
    if (error) throw error;
    return data || [];
  }

  static async submitQuizAttempt(
    userId: string,
    moduleId: string,
    answers: number[],
    score: number,
    totalQuestions: number
  ): Promise<QuizAttempt> {
    const passed = score >= Math.ceil(totalQuestions * 0.7); // 70% pass rate
    
    const { data, error } = await supabase
      .from('user_quiz_attempts')
      .insert({
        user_id: userId,
        module_id: moduleId,
        score,
        total_questions: totalQuestions,
        passed,
        answers
      })
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }

  static async hasPassedQuiz(userId: string, moduleId: string): Promise<boolean> {
    const { data, error } = await supabase
      .from('user_quiz_attempts')
      .select('passed')
      .eq('user_id', userId)
      .eq('module_id', moduleId)
      .eq('passed', true)
      .limit(1);
    
    if (error) throw error;
    return (data?.length || 0) > 0;
  }

  // Certificate Management
  static async generateCertificate(userId: string, courseId: string): Promise<Certificate> {
    // Check if user has completed all requirements
    const canGenerate = await this.canGenerateCertificate(userId, courseId);
    if (!canGenerate) {
      throw new Error('Course requirements not met');
    }

    const { data, error } = await supabase
      .from('user_certificates')
      .insert({
        user_id: userId,
        course_id: courseId,
        issued_at: new Date().toISOString()
      })
      .select(`
        *,
        courses (*)
      `)
      .single();
    
    if (error) throw error;
    return data;
  }

  static async getUserCertificates(userId: string): Promise<Certificate[]> {
    const { data, error } = await supabase
      .from('user_certificates')
      .select(`
        *,
        courses (*)
      `)
      .eq('user_id', userId)
      .order('issued_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  }

  private static async canGenerateCertificate(userId: string, courseId: string): Promise<boolean> {
    // Check if all modules in course have been completed with passing quiz scores
    const { data: modules, error } = await supabase
      .from('modules')
      .select('id')
      .eq('course_id', courseId);
    
    if (error || !modules) return false;
    
    for (const module of modules) {
      const passed = await this.hasPassedQuiz(userId, module.id);
      if (!passed) return false;
    }
    
    return true;
  }

  // Course Unlocking Logic
  static async getUnlockedCourses(userId: string): Promise<string[]> {
    const unlockedCourses = ['fundamentals']; // Always unlocked
    
    // Get user's certificates
    const certificates = await this.getUserCertificates(userId);
    const completedCourseIds = certificates.map(cert => cert.course_id);
    
    // Get all courses
    const courses = await this.getCourses();
    
    // Check which courses should be unlocked based on prerequisites
    for (const course of courses) {
      if (course.prerequisite_course_id && completedCourseIds.includes(course.prerequisite_course_id)) {
        unlockedCourses.push(course.id);
      }
    }
    
    return unlockedCourses;
  }
}