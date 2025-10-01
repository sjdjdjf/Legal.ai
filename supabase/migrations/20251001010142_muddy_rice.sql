/*
  # Legal Education Platform Database Schema

  1. New Tables
    - `courses` - Course information and structure
    - `modules` - Course modules within each course
    - `lessons` - Individual lessons within modules
    - `quizzes` - Quiz questions for each module
    - `user_progress` - Track user progress through courses
    - `user_quiz_attempts` - Store quiz attempt results
    - `user_certificates` - Generated certificates for completed courses

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to access their own data
*/

-- Courses table
CREATE TABLE IF NOT EXISTS courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  level text NOT NULL CHECK (level IN ('fundamentals', 'beginner', 'intermediate', 'advanced')),
  order_index integer NOT NULL,
  is_free boolean DEFAULT false,
  prerequisite_course_id uuid REFERENCES courses(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Modules table
CREATE TABLE IF NOT EXISTS modules (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text NOT NULL,
  order_index integer NOT NULL,
  content jsonb NOT NULL, -- Store structured lesson content
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Lessons table
CREATE TABLE IF NOT EXISTS lessons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id uuid REFERENCES modules(id) ON DELETE CASCADE,
  title text NOT NULL,
  content text NOT NULL,
  order_index integer NOT NULL,
  estimated_duration integer DEFAULT 10, -- minutes
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Quiz questions table
CREATE TABLE IF NOT EXISTS quiz_questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id uuid REFERENCES modules(id) ON DELETE CASCADE,
  question text NOT NULL,
  options jsonb NOT NULL, -- Array of answer options
  correct_answer integer NOT NULL, -- Index of correct option
  explanation text,
  difficulty text DEFAULT 'medium' CHECK (difficulty IN ('easy', 'medium', 'hard')),
  created_at timestamptz DEFAULT now()
);

-- User progress tracking
CREATE TABLE IF NOT EXISTS user_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE,
  module_id uuid REFERENCES modules(id) ON DELETE CASCADE,
  lesson_id uuid REFERENCES lessons(id) ON DELETE CASCADE,
  completed boolean DEFAULT false,
  completed_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id, lesson_id)
);

-- Quiz attempts
CREATE TABLE IF NOT EXISTS user_quiz_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  module_id uuid REFERENCES modules(id) ON DELETE CASCADE,
  score integer NOT NULL,
  total_questions integer NOT NULL,
  passed boolean NOT NULL,
  answers jsonb NOT NULL, -- Store user answers
  attempted_at timestamptz DEFAULT now()
);

-- Final exam attempts
CREATE TABLE IF NOT EXISTS user_exam_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE,
  score integer NOT NULL,
  total_questions integer NOT NULL,
  passed boolean NOT NULL,
  answers jsonb NOT NULL,
  attempted_at timestamptz DEFAULT now()
);

-- Certificates
CREATE TABLE IF NOT EXISTS user_certificates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE,
  certificate_url text,
  issued_at timestamptz DEFAULT now(),
  UNIQUE(user_id, course_id)
);

-- Enable RLS
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_quiz_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_exam_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_certificates ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Anyone can read courses" ON courses FOR SELECT USING (true);
CREATE POLICY "Anyone can read modules" ON modules FOR SELECT USING (true);
CREATE POLICY "Anyone can read lessons" ON lessons FOR SELECT USING (true);
CREATE POLICY "Anyone can read quiz questions" ON quiz_questions FOR SELECT USING (true);

CREATE POLICY "Users can read own progress" ON user_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own progress" ON user_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own progress" ON user_progress FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can read own quiz attempts" ON user_quiz_attempts FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own quiz attempts" ON user_quiz_attempts FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read own exam attempts" ON user_exam_attempts FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own exam attempts" ON user_exam_attempts FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read own certificates" ON user_certificates FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own certificates" ON user_certificates FOR INSERT WITH CHECK (auth.uid() = user_id);