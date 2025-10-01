import { Course, Module, Lesson, QuizQuestion } from '../types/education';

export const courseData: Course[] = [
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
    id: 'business-intermediate',
    title: 'Business & Corporate Law - Intermediate',
    description: 'Advanced corporate structures, mergers, acquisitions, and securities law.',
    category: 'business',
    level: 'intermediate',
    order_index: 2,
    is_free: false,
    prerequisite_course_id: 'business-beginner',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'employment-beginner',
    title: 'Employment & HR Law - Beginner',
    description: 'Workplace rights, employment contracts, and basic labor law principles.',
    category: 'employment',
    level: 'beginner',
    order_index: 3,
    is_free: false,
    prerequisite_course_id: 'fundamentals',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  // Add more courses...
];

export const moduleData: Module[] = [
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
  },
  {
    id: 'fundamentals-mod-3',
    course_id: 'fundamentals',
    title: 'Legal Documents and Contracts',
    description: 'Basic contract principles and legal document structure.',
    order_index: 3,
    content: {},
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'fundamentals-mod-4',
    course_id: 'fundamentals',
    title: 'Rights and Responsibilities',
    description: 'Understanding legal rights, duties, and obligations.',
    order_index: 4,
    content: {},
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export const lessonData: Lesson[] = [
  // Module 1: Introduction to Legal Systems
  {
    id: 'lesson-1-1',
    module_id: 'fundamentals-mod-1',
    title: 'What is Law?',
    content: `
# What is Law?

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

### 4. Facilitating Commerce
Legal frameworks enable economic activity:
- Contract enforcement
- Property transfer mechanisms
- Business regulation and standards

## Sources of Law

### Primary Sources
1. **Constitutions**: Fundamental governing documents
2. **Statutes**: Laws enacted by legislatures
3. **Case Law**: Court decisions and precedents
4. **Regulations**: Rules created by administrative agencies

### Secondary Sources
1. **Legal Commentaries**: Scholarly analysis
2. **Legal Encyclopedias**: Comprehensive references
3. **Law Review Articles**: Academic discussions

## Real-World Example

Consider a simple transaction: buying a coffee. This seemingly simple act involves multiple areas of law:

- **Contract Law**: Agreement between buyer and seller
- **Consumer Protection**: Quality and safety standards
- **Tax Law**: Sales tax collection
- **Employment Law**: Worker rights and wages
- **Health Regulations**: Food safety requirements
- **Property Law**: Business premises and equipment

This demonstrates how law permeates every aspect of daily life, providing structure and protection for all participants in society.

## Key Takeaways

1. Law is essential for organized society
2. Legal systems balance individual rights with collective needs
3. Laws evolve to meet changing social and economic conditions
4. Understanding basic legal principles helps in personal and professional life
    `,
    order_index: 1,
    estimated_duration: 15,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'lesson-1-2',
    module_id: 'fundamentals-mod-1',
    title: 'Legal Systems Around the World',
    content: `
# Legal Systems Around the World

Different countries have developed distinct legal systems based on their history, culture, and governance structures. Understanding these systems is crucial for anyone operating in a global context.

## Major Legal System Families

### 1. Common Law System

**Origin**: Developed in England during the medieval period

**Key Characteristics**:
- **Judge-made law**: Legal principles developed through court decisions
- **Precedent (Stare Decisis)**: Past court decisions bind future cases
- **Adversarial system**: Parties present their cases before a neutral judge/jury
- **Jury trials**: Citizens participate in legal decision-making

**Countries**: United States, United Kingdom, Canada, Australia, India, Hong Kong

**Example**: In the US, the right to privacy isn't explicitly in the Constitution but was established through Supreme Court cases like *Griswold v. Connecticut* (1965).

### 2. Civil Law System

**Origin**: Based on Roman law, codified in continental Europe

**Key Characteristics**:
- **Written codes**: Comprehensive legal codes cover most legal situations
- **Limited precedent**: Court decisions don't create binding law
- **Inquisitorial system**: Judges actively investigate facts
- **Scholarly influence**: Legal academics play important roles

**Countries**: France, Germany, Japan, Brazil, most of continental Europe

**Example**: The French Civil Code (Code Napoléon) of 1804 influenced legal systems worldwide and is still in use today.

### 3. Religious Law Systems

**Islamic Law (Sharia)**:
- Based on Quran and Hadith (Prophet's teachings)
- Covers personal, commercial, and criminal matters
- Applied in countries like Saudi Arabia, Iran (with variations)

**Jewish Law (Halakha)**:
- Used in religious courts for personal status matters
- Influences Israeli law in family matters

**Canon Law**:
- Catholic Church's legal system
- Governs church administration and religious matters

### 4. Mixed Legal Systems

Many countries combine elements from different traditions:

**Examples**:
- **South Africa**: Roman-Dutch law + English common law
- **Louisiana (US)**: Civil law + Common law
- **Quebec (Canada)**: Civil law for private matters + Common law for public matters
- **Scotland**: Civil law + Common law elements

## Practical Implications

### For International Business
Understanding legal systems affects:
- **Contract drafting**: Different interpretation approaches
- **Dispute resolution**: Court procedures vary significantly
- **Regulatory compliance**: Different regulatory frameworks
- **Intellectual property**: Varying protection mechanisms

### For Individuals
When traveling or living abroad:
- **Legal rights**: May differ significantly from home country
- **Court procedures**: Different processes for legal disputes
- **Legal documents**: Different requirements and formats
- **Professional licensing**: Different qualification requirements

## Case Study: Contract Disputes

**Common Law Approach** (US/UK):
- Courts look at previous similar cases
- Emphasis on what parties actually agreed to
- Flexible interpretation based on circumstances
- Jury may determine facts

**Civil Law Approach** (Germany/France):
- Courts primarily consult legal codes
- More structured, systematic analysis
- Less flexibility in interpretation
- Professional judges determine facts and law

## Convergence and Harmonization

Modern trends include:
- **International treaties**: Creating uniform rules (e.g., UN Convention on Contracts)
- **Model laws**: UNCITRAL Model Law on International Arbitration
- **Regional harmonization**: EU law harmonizing member state laws
- **Commercial law convergence**: International business practices creating similar rules

## Key Takeaways

1. Legal systems reflect historical and cultural development
2. Understanding different systems is crucial for international activities
3. No system is inherently superior - each has advantages and disadvantages
4. Globalization is creating more interaction between different legal systems
5. Professional legal advice is essential when dealing with unfamiliar legal systems
    `,
    order_index: 2,
    estimated_duration: 20,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  // Add more lessons...
];

export const quizQuestions: QuizQuestion[] = [
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
    question: 'Which of the following is NOT a primary source of law?',
    options: [
      'Constitutions',
      'Statutes enacted by legislatures',
      'Legal commentaries by scholars',
      'Court decisions and precedents'
    ],
    correct_answer: 2,
    explanation: 'Legal commentaries are secondary sources of law. Primary sources include constitutions, statutes, case law, and regulations.',
    difficulty: 'medium'
  },
  {
    id: 'quiz-1-3',
    module_id: 'fundamentals-mod-1',
    question: 'In a common law system, what principle requires courts to follow previous decisions?',
    options: [
      'Res judicata',
      'Stare decisis',
      'Habeas corpus',
      'Due process'
    ],
    correct_answer: 1,
    explanation: 'Stare decisis (Latin for "to stand by things decided") is the principle that courts should follow precedents set by previous decisions.',
    difficulty: 'medium'
  },
  {
    id: 'quiz-1-4',
    module_id: 'fundamentals-mod-1',
    question: 'Which legal system is primarily based on comprehensive written codes rather than court decisions?',
    options: [
      'Common law system',
      'Civil law system',
      'Religious law system',
      'Customary law system'
    ],
    correct_answer: 1,
    explanation: 'Civil law systems are based on comprehensive written codes, while common law systems rely more heavily on court decisions and precedents.',
    difficulty: 'easy'
  },
  {
    id: 'quiz-1-5',
    module_id: 'fundamentals-mod-1',
    question: 'A multinational company operating in both the US (common law) and Germany (civil law) would need to consider which of the following when drafting contracts?',
    options: [
      'Only US law applies to international contracts',
      'Only German law applies in Europe',
      'Different legal systems may interpret contracts differently',
      'International law overrides all domestic laws'
    ],
    correct_answer: 2,
    explanation: 'Different legal systems have different approaches to contract interpretation, so companies must consider these differences when operating internationally.',
    difficulty: 'hard'
  }
];