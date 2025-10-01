export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: 'fundamentals' | 'beginner' | 'intermediate' | 'advanced';
  order_index: number;
  is_free: boolean;
  prerequisite_course_id?: string;
  created_at: string;
  updated_at: string;
  modules?: Module[];
  progress?: number;
  is_unlocked?: boolean;
}

export interface Module {
  id: string;
  course_id: string;
  title: string;
  description: string;
  order_index: number;
  content: any;
  created_at: string;
  updated_at: string;
  lessons?: Lesson[];
  quiz_passed?: boolean;
}

export interface Lesson {
  id: string;
  module_id: string;
  title: string;
  content: string;
  order_index: number;
  estimated_duration: number;
  created_at: string;
  updated_at: string;
  completed?: boolean;
}

export interface QuizQuestion {
  id: string;
  module_id: string;
  question: string;
  options: string[];
  correct_answer: number;
  explanation?: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface UserProgress {
  id: string;
  user_id: string;
  course_id: string;
  module_id: string;
  lesson_id: string;
  completed: boolean;
  completed_at?: string;
}

export interface QuizAttempt {
  id: string;
  user_id: string;
  module_id: string;
  score: number;
  total_questions: number;
  passed: boolean;
  answers: any[];
  attempted_at: string;
}

export interface ExamAttempt {
  id: string;
  user_id: string;
  course_id: string;
  score: number;
  total_questions: number;
  passed: boolean;
  answers: any[];
  attempted_at: string;
}

export interface Certificate {
  id: string;
  user_id: string;
  course_id: string;
  certificate_url?: string;
  issued_at: string;
  course?: Course;
}