import { Course, Module, Lesson, QuizQuestion, UserProgress, QuizAttempt, ExamAttempt, Certificate } from '../types/education';

// Helper functions for localStorage management
const loadData = <T>(key: string): T[] => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error(`Error loading ${key} from localStorage:`, error);
    return [];
  }
};

const saveData = <T>(key: string, data: T[]): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving ${key} to localStorage:`, error);
  }
};

// Storage keys
const STORAGE_KEYS = {
  COURSES: 'legal-ai-courses',
  MODULES: 'legal-ai-modules',
  LESSONS: 'legal-ai-lessons',
  QUIZ_QUESTIONS: 'legal-ai-quiz-questions',
  USER_PROGRESS: 'legal-ai-user-progress',
  QUIZ_ATTEMPTS: 'legal-ai-quiz-attempts',
  EXAM_ATTEMPTS: 'legal-ai-exam-attempts',
  CERTIFICATES: 'legal-ai-certificates'
};

export class EducationService {
  // Initialize with sample data if localStorage is empty
  static initializeData(): void {
    const courses = loadData<Course>(STORAGE_KEYS.COURSES);
    if (courses.length === 0) {
      this.seedInitialData();
    }
  }

  // Seed initial course data
  private static seedInitialData(): void {
    const sampleCourses: Course[] = [
      {
        id: 'fundamentals',
        title: 'Legal Fundamentals',
        description: 'Essential legal concepts every person should understand. Required before accessing specialized courses.',
        category: 'fundamentals',
        level: 'fundamentals',
        order_index: 0,
        is_free: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        id: 'business-beginner',
        title: 'Business & Corporate Law - Beginner',
        description: 'Introduction to business structures, contracts, and corporate governance basics.',
        category: 'business',
        level: 'beginner',
        order_index: 1,
        is_free: false,
        prerequisite_course_id: 'fundamentals',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        id: 'employment-beginner',
        title: 'Employment & HR Law - Beginner',
        description: 'Workplace rights, employment contracts, and basic labor law principles.',
        category: 'employment',
        level: 'beginner',
        order_index: 2,
        is_free: false,
        prerequisite_course_id: 'fundamentals',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }
    ];

    const sampleModules: Module[] = [
      {
        id: 'fundamentals-mod-1',
        course_id: 'fundamentals',
        title: 'Introduction to Legal Systems',
        description: 'Understanding how legal systems work and basic legal principles.',
        order_index: 1,
        content: {},
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        id: 'fundamentals-mod-2',
        course_id: 'fundamentals',
        title: 'Types of Law',
        description: 'Civil vs Criminal law, Common law vs Civil law systems.',
        order_index: 2,
        content: {},
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }
    ];

    const sampleLessons: Lesson[] = [
      {
        id: 'lesson-1-1',
        module_id: 'fundamentals-mod-1',
        title: 'What is Law?',
        content: `# What is Law?

Law is a system of rules and guidelines that are enforced through social institutions to govern behavior. Laws serve several critical functions in society:

## Definition and Purpose

**Law** can be defined as a set of rules and principles that:
- Regulate human conduct in society
- Are enforced by governmental authority
- Provide consequences for violations
- Establish standards for acceptable behavior

## Primary Functions of Law

### 1. Maintaining Order
Laws establish a framework for peaceful coexistence by:
- Defining acceptable and unacceptable behavior
- Providing mechanisms for resolving disputes
- Creating predictable consequences for actions

### 2. Protecting Rights and Freedoms
Legal systems protect individual and collective rights:
- **Civil Rights**: Freedom of speech, religion, assembly
- **Property Rights**: Ownership and use of assets
- **Personal Rights**: Privacy, safety, dignity

### 3. Promoting Justice
Laws aim to ensure fair treatment:
- Equal treatment under the law
- Due process protections
- Access to legal remedies

## Real-World Example

Consider a simple transaction: buying a coffee. This seemingly simple act involves multiple areas of law:
- **Contract Law**: Agreement between buyer and seller
- **Consumer Protection**: Quality and safety standards
- **Tax Law**: Sales tax collection
- **Employment Law**: Worker rights and wages
- **Health Regulations**: Food safety requirements

This demonstrates how law permeates every aspect of daily life.`,
        order_index: 1,
        estimated_duration: 15,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }
    ];

    const sampleQuizQuestions: QuizQuestion[] = [
      {
        id: 'quiz-1-1',
        module_id: 'fundamentals-mod-1',
        question: 'What is the primary purpose of law in society?',
        options: [
          'To punish wrongdoers',
          'To regulate human conduct and maintain order',
          'To generate revenue for the government',
          'To provide employment for lawyers'
        ],
        correct_answer: 1,
        explanation: 'While law does involve punishment and other functions, its primary purpose is to regulate human conduct and maintain order in society.',
        difficulty: 'easy'
      },
      {
        id: 'quiz-1-2',
        module_id: 'fundamentals-mod-1',
        question: 'Which of the following is NOT a primary function of law?',
        options: [
          'Maintaining order',
          'Protecting rights and freedoms',
          'Generating profit for businesses',
          'Promoting justice'
        ],
        correct_answer: 2,
        explanation: 'Generating profit for businesses is not a primary function of law. The main functions are maintaining order, protecting rights, and promoting justice.',
        difficulty: 'medium'
      }
    ];

    // Save initial data
    saveData(STORAGE_KEYS.COURSES, sampleCourses);
    saveData(STORAGE_KEYS.MODULES, sampleModules);
    saveData(STORAGE_KEYS.LESSONS, sampleLessons);
    saveData(STORAGE_KEYS.QUIZ_QUESTIONS, sampleQuizQuestions);
  }

  // Course Management
  static getCourses(): Course[] {
    return loadData<Course>(STORAGE_KEYS.COURSES).sort((a, b) => a.order_index - b.order_index);
  }

  static addCourse(course: Course): void {
    const courses = loadData<Course>(STORAGE_KEYS.COURSES);
    const existingIndex = courses.findIndex(c => c.id === course.id);
    
    if (existingIndex >= 0) {
      courses[existingIndex] = { ...course, updated_at: new Date().toISOString() };
    } else {
      courses.push({ ...course, created_at: new Date().toISOString(), updated_at: new Date().toISOString() });
    }
    
    saveData(STORAGE_KEYS.COURSES, courses);
  }

  static getCourseWithModules(courseId: string): Course | null {
    const courses = loadData<Course>(STORAGE_KEYS.COURSES);
    const modules = loadData<Module>(STORAGE_KEYS.MODULES);
    const lessons = loadData<Lesson>(STORAGE_KEYS.LESSONS);
    
    const course = courses.find(c => c.id === courseId);
    if (!course) return null;

    const courseModules = modules
      .filter(m => m.course_id === courseId)
      .sort((a, b) => a.order_index - b.order_index)
      .map(module => ({
        ...module,
        lessons: lessons
          .filter(l => l.module_id === module.id)
          .sort((a, b) => a.order_index - b.order_index)
      }));

    return {
      ...course,
      modules: courseModules
    };
  }

  // Module Management
  static getModules(courseId: string): Module[] {
    return loadData<Module>(STORAGE_KEYS.MODULES)
      .filter(m => m.course_id === courseId)
      .sort((a, b) => a.order_index - b.order_index);
  }

  static addModule(module: Module): void {
    const modules = loadData<Module>(STORAGE_KEYS.MODULES);
    const existingIndex = modules.findIndex(m => m.id === module.id);
    
    if (existingIndex >= 0) {
      modules[existingIndex] = { ...module, updated_at: new Date().toISOString() };
    } else {
      modules.push({ ...module, created_at: new Date().toISOString(), updated_at: new Date().toISOString() });
    }
    
    saveData(STORAGE_KEYS.MODULES, modules);
  }

  // Lesson Management
  static getLessons(moduleId: string): Lesson[] {
    return loadData<Lesson>(STORAGE_KEYS.LESSONS)
      .filter(l => l.module_id === moduleId)
      .sort((a, b) => a.order_index - b.order_index);
  }

  static addLesson(lesson: Lesson): void {
    const lessons = loadData<Lesson>(STORAGE_KEYS.LESSONS);
    const existingIndex = lessons.findIndex(l => l.id === lesson.id);
    
    if (existingIndex >= 0) {
      lessons[existingIndex] = { ...lesson, updated_at: new Date().toISOString() };
    } else {
      lessons.push({ ...lesson, created_at: new Date().toISOString(), updated_at: new Date().toISOString() });
    }
    
    saveData(STORAGE_KEYS.LESSONS, lessons);
  }

  // Quiz Management
  static getQuizQuestions(moduleId: string): QuizQuestion[] {
    return loadData<QuizQuestion>(STORAGE_KEYS.QUIZ_QUESTIONS)
      .filter(q => q.module_id === moduleId);
  }

  static addQuizQuestion(question: QuizQuestion): void {
    const questions = loadData<QuizQuestion>(STORAGE_KEYS.QUIZ_QUESTIONS);
    const existingIndex = questions.findIndex(q => q.id === question.id);
    
    if (existingIndex >= 0) {
      questions[existingIndex] = question;
    } else {
      questions.push(question);
    }
    
    saveData(STORAGE_KEYS.QUIZ_QUESTIONS, questions);
  }

  // Progress Management
  static saveProgress(progress: UserProgress): void {
    const allProgress = loadData<UserProgress>(STORAGE_KEYS.USER_PROGRESS);
    const existingIndex = allProgress.findIndex(
      p => p.user_id === progress.user_id && p.lesson_id === progress.lesson_id
    );
    
    const progressWithTimestamp = {
      ...progress,
      completed_at: progress.completed ? new Date().toISOString() : progress.completed_at,
      updated_at: new Date().toISOString()
    };
    
    if (existingIndex >= 0) {
      allProgress[existingIndex] = progressWithTimestamp;
    } else {
      allProgress.push(progressWithTimestamp);
    }
    
    saveData(STORAGE_KEYS.USER_PROGRESS, allProgress);
  }

  static getProgress(userId: string, courseId?: string): UserProgress[] {
    const allProgress = loadData<UserProgress>(STORAGE_KEYS.USER_PROGRESS);
    return allProgress.filter(p => {
      if (courseId) {
        return p.user_id === userId && p.course_id === courseId;
      }
      return p.user_id === userId;
    });
  }

  static getCourseProgress(userId: string, courseId: string): number {
    const modules = this.getModules(courseId);
    const allLessons = modules.flatMap(module => this.getLessons(module.id));
    const userProgress = this.getProgress(userId, courseId);
    
    if (allLessons.length === 0) return 0;
    
    const completedLessons = userProgress.filter(p => p.completed).length;
    return (completedLessons / allLessons.length) * 100;
  }

  static markLessonComplete(userId: string, lessonId: string, moduleId: string, courseId: string): void {
    const progress: UserProgress = {
      id: `${userId}-${lessonId}`,
      user_id: userId,
      course_id: courseId,
      module_id: moduleId,
      lesson_id: lessonId,
      completed: true,
      completed_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    
    this.saveProgress(progress);
  }

  // Quiz Attempts
  static saveQuizAttempt(attempt: QuizAttempt): void {
    const attempts = loadData<QuizAttempt>(STORAGE_KEYS.QUIZ_ATTEMPTS);
    const attemptWithId = {
      ...attempt,
      id: attempt.id || `quiz-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      attempted_at: new Date().toISOString()
    };
    
    attempts.push(attemptWithId);
    saveData(STORAGE_KEYS.QUIZ_ATTEMPTS, attempts);
  }

  static getQuizAttempts(userId: string, moduleId?: string): QuizAttempt[] {
    const attempts = loadData<QuizAttempt>(STORAGE_KEYS.QUIZ_ATTEMPTS);
    return attempts.filter(a => {
      if (moduleId) {
        return a.user_id === userId && a.module_id === moduleId;
      }
      return a.user_id === userId;
    });
  }

  static hasPassedQuiz(userId: string, moduleId: string): boolean {
    const attempts = this.getQuizAttempts(userId, moduleId);
    return attempts.some(attempt => attempt.passed);
  }

  // Exam Attempts
  static saveExamAttempt(attempt: ExamAttempt): Certificate | null {
    const attempts = loadData<ExamAttempt>(STORAGE_KEYS.EXAM_ATTEMPTS);
    const attemptWithId = {
      ...attempt,
      id: attempt.id || `exam-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      attempted_at: new Date().toISOString()
    };
    
    attempts.push(attemptWithId);
    saveData(STORAGE_KEYS.EXAM_ATTEMPTS, attempts);

    // If passed, generate certificate
    if (attempt.passed) {
      return this.generateCertificate(attempt.user_id, attempt.course_id);
    }
    
    return null;
  }

  static getExamAttempts(userId: string, courseId?: string): ExamAttempt[] {
    const attempts = loadData<ExamAttempt>(STORAGE_KEYS.EXAM_ATTEMPTS);
    return attempts.filter(a => {
      if (courseId) {
        return a.user_id === userId && a.course_id === courseId;
      }
      return a.user_id === userId;
    });
  }

  static hasPassedExam(userId: string, courseId: string): boolean {
    const attempts = this.getExamAttempts(userId, courseId);
    return attempts.some(attempt => attempt.passed);
  }

  // Certificate Management
  static generateCertificate(userId: string, courseId: string): Certificate {
    const courses = loadData<Course>(STORAGE_KEYS.COURSES);
    const certificates = loadData<Certificate>(STORAGE_KEYS.CERTIFICATES);
    
    // Check if certificate already exists
    const existingCertificate = certificates.find(
      c => c.user_id === userId && c.course_id === courseId
    );
    
    if (existingCertificate) {
      return existingCertificate;
    }
    
    const course = courses.find(c => c.id === courseId);
    const certificate: Certificate = {
      id: `cert-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      user_id: userId,
      course_id: courseId,
      certificate_url: `/certificates/${courseId}-${userId}.pdf`,
      issued_at: new Date().toISOString(),
      course: course
    };
    
    certificates.push(certificate);
    saveData(STORAGE_KEYS.CERTIFICATES, certificates);
    
    return certificate;
  }

  static getCertificates(userId: string): Certificate[] {
    const certificates = loadData<Certificate>(STORAGE_KEYS.CERTIFICATES);
    const courses = loadData<Course>(STORAGE_KEYS.COURSES);
    
    return certificates
      .filter(c => c.user_id === userId)
      .map(cert => ({
        ...cert,
        course: courses.find(course => course.id === cert.course_id)
      }))
      .sort((a, b) => new Date(b.issued_at).getTime() - new Date(a.issued_at).getTime());
  }

  // Course Unlocking Logic
  static getUnlockedCourses(userId: string): string[] {
    const courses = this.getCourses();
    const certificates = this.getCertificates(userId);
    const completedCourseIds = certificates.map(cert => cert.course_id);
    
    const unlockedCourses = ['fundamentals']; // Always unlocked
    
    // Check which courses should be unlocked based on prerequisites
    for (const course of courses) {
      if (course.prerequisite_course_id && completedCourseIds.includes(course.prerequisite_course_id)) {
        unlockedCourses.push(course.id);
      }
    }
    
    return unlockedCourses;
  }

  // Utility Methods
  static clearAllData(): void {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  }

  static exportData(): string {
    const data: Record<string, any> = {};
    Object.entries(STORAGE_KEYS).forEach(([key, storageKey]) => {
      data[key] = loadData(storageKey);
    });
    return JSON.stringify(data, null, 2);
  }

  static importData(jsonData: string): void {
    try {
      const data = JSON.parse(jsonData);
      Object.entries(STORAGE_KEYS).forEach(([key, storageKey]) => {
        if (data[key]) {
          saveData(storageKey, data[key]);
        }
      });
    } catch (error) {
      console.error('Error importing data:', error);
      throw new Error('Invalid data format');
    }
  }
}

// Initialize data when the service is first loaded
EducationService.initializeData();