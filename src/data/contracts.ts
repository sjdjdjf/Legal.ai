import { Contract } from '../types';

export const contractTemplates: Contract[] = [
  // Business & Corporate
  {
    id: 'nda',
    type: 'nda',
    title: 'Non-Disclosure Agreement',
    description: 'Protect confidential information shared between parties',
    fields: [
      { name: 'disclosingParty', label: 'Disclosing Party Name', type: 'text', required: true, placeholder: 'Company or individual sharing information' },
      { name: 'receivingParty', label: 'Receiving Party Name', type: 'text', required: true, placeholder: 'Company or individual receiving information' },
      { name: 'effectiveDate', label: 'Effective Date', type: 'date', required: true },
      { name: 'duration', label: 'Duration (years)', type: 'number', required: true, placeholder: '2' },
      { name: 'jurisdiction', label: 'Governing Jurisdiction', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  },
  {
    id: 'joint-venture',
    type: 'joint-venture',
    title: 'Joint Venture Agreement',
    description: 'Partnership agreement for collaborative business ventures',
    fields: [
      { name: 'party1', label: 'First Party Name', type: 'text', required: true },
      { name: 'party2', label: 'Second Party Name', type: 'text', required: true },
      { name: 'ventureDescription', label: 'Venture Description', type: 'textarea', required: true, placeholder: 'Describe the joint venture purpose and scope' },
      { name: 'profitSharing', label: 'Profit Sharing Ratio', type: 'text', required: true, placeholder: '50/50 or other arrangement' },
      { name: 'startDate', label: 'Start Date', type: 'date', required: true },
      { name: 'duration', label: 'Duration (months)', type: 'number', required: true }
    ]
  },
  {
    id: 'distribution-agreement',
    type: 'distribution-agreement',
    title: 'Distribution Agreement',
    description: 'Agreement for product distribution and sales representation',
    fields: [
      { name: 'supplier', label: 'Supplier/Manufacturer', type: 'text', required: true },
      { name: 'distributor', label: 'Distributor Name', type: 'text', required: true },
      { name: 'products', label: 'Products/Services', type: 'textarea', required: true, placeholder: 'List products to be distributed' },
      { name: 'territory', label: 'Distribution Territory', type: 'text', required: true, placeholder: 'Geographic area' },
      { name: 'commission', label: 'Commission Rate (%)', type: 'number', required: true },
      { name: 'exclusivity', label: 'Exclusive Distribution?', type: 'text', required: true, placeholder: 'Yes/No' }
    ]
  },
  {
    id: 'agency-agreement',
    type: 'agency-agreement',
    title: 'Agency Agreement',
    description: 'Representation agreement for business agency relationships',
    fields: [
      { name: 'principal', label: 'Principal (Company)', type: 'text', required: true },
      { name: 'agent', label: 'Agent Name', type: 'text', required: true },
      { name: 'services', label: 'Agency Services', type: 'textarea', required: true, placeholder: 'Describe services agent will provide' },
      { name: 'compensation', label: 'Compensation Structure', type: 'text', required: true, placeholder: 'Commission, salary, or fee structure' },
      { name: 'authority', label: 'Agent Authority Level', type: 'text', required: true, placeholder: 'Limited, general, or specific authority' }
    ]
  },
  {
    id: 'sla',
    type: 'sla',
    title: 'Service Level Agreement',
    description: 'Define service standards and performance metrics',
    fields: [
      { name: 'serviceProvider', label: 'Service Provider', type: 'text', required: true },
      { name: 'client', label: 'Client Name', type: 'text', required: true },
      { name: 'services', label: 'Services Covered', type: 'textarea', required: true, placeholder: 'List all services covered by this SLA' },
      { name: 'uptime', label: 'Uptime Guarantee (%)', type: 'number', required: true, placeholder: '99.9' },
      { name: 'responseTime', label: 'Response Time (hours)', type: 'number', required: true, placeholder: '4' },
      { name: 'penalties', label: 'Penalty Structure', type: 'textarea', required: true, placeholder: 'Describe penalties for SLA breaches' }
    ]
  },
  {
    id: 'business-purchase',
    type: 'business-purchase',
    title: 'Business Purchase Agreement',
    description: 'Complete agreement for acquiring an existing business',
    fields: [
      { name: 'buyer', label: 'Buyer Name', type: 'text', required: true },
      { name: 'seller', label: 'Seller Name', type: 'text', required: true },
      { name: 'businessName', label: 'Business Being Sold', type: 'text', required: true },
      { name: 'purchasePrice', label: 'Purchase Price', type: 'text', required: true, placeholder: '$000,000' },
      { name: 'assets', label: 'Assets Included', type: 'textarea', required: true, placeholder: 'List all assets included in sale' },
      { name: 'closingDate', label: 'Closing Date', type: 'date', required: true }
    ]
  },

  // Employment & HR
  {
    id: 'employment',
    type: 'employment',
    title: 'Employment Agreement',
    description: 'Comprehensive employment contract for new hires',
    fields: [
      { name: 'employerName', label: 'Employer Name', type: 'text', required: true },
      { name: 'employeeName', label: 'Employee Name', type: 'text', required: true },
      { name: 'position', label: 'Job Title/Position', type: 'text', required: true },
      { name: 'salary', label: 'Annual Salary', type: 'text', required: true, placeholder: '$00,000' },
      { name: 'startDate', label: 'Start Date', type: 'date', required: true },
      { name: 'benefits', label: 'Benefits Package', type: 'textarea', required: true, placeholder: 'Health insurance, vacation days, etc.' }
    ]
  },
  {
    id: 'offer-letter',
    type: 'offer-letter',
    title: 'Job Offer Letter',
    description: 'Formal job offer with terms and conditions',
    fields: [
      { name: 'companyName', label: 'Company Name', type: 'text', required: true },
      { name: 'candidateName', label: 'Candidate Name', type: 'text', required: true },
      { name: 'position', label: 'Position Offered', type: 'text', required: true },
      { name: 'salary', label: 'Starting Salary', type: 'text', required: true },
      { name: 'startDate', label: 'Proposed Start Date', type: 'date', required: true },
      { name: 'reportingTo', label: 'Reports To', type: 'text', required: true }
    ]
  },
  {
    id: 'termination-letter',
    type: 'termination-letter',
    title: 'Employment Termination Letter',
    description: 'Formal notice of employment termination',
    fields: [
      { name: 'companyName', label: 'Company Name', type: 'text', required: true },
      { name: 'employeeName', label: 'Employee Name', type: 'text', required: true },
      { name: 'terminationDate', label: 'Termination Date', type: 'date', required: true },
      { name: 'reason', label: 'Reason for Termination', type: 'textarea', required: true },
      { name: 'severance', label: 'Severance Package', type: 'text', required: false, placeholder: 'If applicable' },
      { name: 'finalPayDate', label: 'Final Pay Date', type: 'date', required: true }
    ]
  },
  {
    id: 'contractor-agreement',
    type: 'contractor-agreement',
    title: 'Independent Contractor Agreement',
    description: 'Agreement for independent contractor services',
    fields: [
      { name: 'company', label: 'Company Name', type: 'text', required: true },
      { name: 'contractor', label: 'Contractor Name', type: 'text', required: true },
      { name: 'services', label: 'Services to be Provided', type: 'textarea', required: true },
      { name: 'rate', label: 'Payment Rate', type: 'text', required: true, placeholder: '$00/hour or $0000/project' },
      { name: 'duration', label: 'Contract Duration', type: 'text', required: true },
      { name: 'deliverables', label: 'Key Deliverables', type: 'textarea', required: true }
    ]
  },

  // Property & Real Estate
  {
    id: 'rental',
    type: 'rental',
    title: 'Rental Agreement',
    description: 'Residential or commercial property rental contract',
    fields: [
      { name: 'landlordName', label: 'Landlord Name', type: 'text', required: true },
      { name: 'tenantName', label: 'Tenant Name', type: 'text', required: true },
      { name: 'propertyAddress', label: 'Property Address', type: 'textarea', required: true },
      { name: 'monthlyRent', label: 'Monthly Rent', type: 'text', required: true, placeholder: '$0,000' },
      { name: 'leaseStart', label: 'Lease Start Date', type: 'date', required: true },
      { name: 'leaseDuration', label: 'Lease Duration (months)', type: 'number', required: true },
      { name: 'securityDeposit', label: 'Security Deposit', type: 'text', required: true }
    ]
  },
  {
    id: 'commercial-lease',
    type: 'commercial-lease',
    title: 'Commercial Lease Agreement',
    description: 'Professional lease agreement for commercial properties',
    fields: [
      { name: 'lessor', label: 'Lessor (Property Owner)', type: 'text', required: true },
      { name: 'lessee', label: 'Lessee (Business Tenant)', type: 'text', required: true },
      { name: 'propertyDescription', label: 'Property Description', type: 'textarea', required: true },
      { name: 'monthlyRent', label: 'Monthly Base Rent', type: 'text', required: true },
      { name: 'leaseTermYears', label: 'Lease Term (years)', type: 'number', required: true },
      { name: 'usePermitted', label: 'Permitted Use', type: 'text', required: true, placeholder: 'Office, retail, etc.' }
    ]
  },
  {
    id: 'real-estate-purchase',
    type: 'real-estate-purchase',
    title: 'Real Estate Purchase Agreement',
    description: 'Agreement for buying/selling real estate property',
    fields: [
      { name: 'buyer', label: 'Buyer Name', type: 'text', required: true },
      { name: 'seller', label: 'Seller Name', type: 'text', required: true },
      { name: 'propertyAddress', label: 'Property Address', type: 'textarea', required: true },
      { name: 'purchasePrice', label: 'Purchase Price', type: 'text', required: true },
      { name: 'earnestMoney', label: 'Earnest Money Deposit', type: 'text', required: true },
      { name: 'closingDate', label: 'Closing Date', type: 'date', required: true }
    ]
  },

  // Intellectual Property & Technology
  {
    id: 'software-license',
    type: 'software-license',
    title: 'Software License Agreement',
    description: 'License terms for software usage and distribution',
    fields: [
      { name: 'licensor', label: 'Licensor (Software Owner)', type: 'text', required: true },
      { name: 'licensee', label: 'Licensee (User)', type: 'text', required: true },
      { name: 'softwareName', label: 'Software Name', type: 'text', required: true },
      { name: 'licenseType', label: 'License Type', type: 'text', required: true, placeholder: 'Single user, enterprise, etc.' },
      { name: 'licenseFee', label: 'License Fee', type: 'text', required: true },
      { name: 'restrictions', label: 'Usage Restrictions', type: 'textarea', required: true }
    ]
  },
  {
    id: 'saas-agreement',
    type: 'saas-agreement',
    title: 'SaaS Service Agreement',
    description: 'Software as a Service subscription and usage terms',
    fields: [
      { name: 'provider', label: 'SaaS Provider', type: 'text', required: true },
      { name: 'customer', label: 'Customer Name', type: 'text', required: true },
      { name: 'serviceName', label: 'Service/Platform Name', type: 'text', required: true },
      { name: 'subscriptionFee', label: 'Monthly/Annual Fee', type: 'text', required: true },
      { name: 'userLimits', label: 'User/Usage Limits', type: 'text', required: true },
      { name: 'dataRetention', label: 'Data Retention Policy', type: 'textarea', required: true }
    ]
  },
  {
    id: 'cloud-services',
    type: 'cloud-services',
    title: 'Cloud Services Agreement',
    description: 'Cloud hosting and infrastructure service agreement',
    fields: [
      { name: 'cloudProvider', label: 'Cloud Service Provider', type: 'text', required: true },
      { name: 'client', label: 'Client Company', type: 'text', required: true },
      { name: 'services', label: 'Cloud Services', type: 'textarea', required: true, placeholder: 'Hosting, storage, computing, etc.' },
      { name: 'pricing', label: 'Pricing Model', type: 'text', required: true, placeholder: 'Pay-as-you-go, fixed monthly, etc.' },
      { name: 'sla', label: 'Service Level Agreement', type: 'text', required: true, placeholder: 'Uptime guarantee' },
      { name: 'dataLocation', label: 'Data Center Location', type: 'text', required: true }
    ]
  },
  {
    id: 'mobile-app-development',
    type: 'mobile-app-development',
    title: 'Mobile App Development Agreement',
    description: 'Contract for mobile application development services',
    fields: [
      { name: 'developer', label: 'Developer/Agency', type: 'text', required: true },
      { name: 'client', label: 'Client Name', type: 'text', required: true },
      { name: 'appDescription', label: 'App Description', type: 'textarea', required: true },
      { name: 'platforms', label: 'Target Platforms', type: 'text', required: true, placeholder: 'iOS, Android, Web' },
      { name: 'timeline', label: 'Development Timeline', type: 'text', required: true },
      { name: 'totalCost', label: 'Total Project Cost', type: 'text', required: true }
    ]
  },

  // Finance & Investment
  {
    id: 'loan',
    type: 'loan',
    title: 'Loan Agreement',
    description: 'Personal or business loan contract with repayment terms',
    fields: [
      { name: 'lenderName', label: 'Lender Name', type: 'text', required: true },
      { name: 'borrowerName', label: 'Borrower Name', type: 'text', required: true },
      { name: 'loanAmount', label: 'Loan Amount', type: 'text', required: true, placeholder: '$00,000' },
      { name: 'interestRate', label: 'Interest Rate (%)', type: 'number', required: true },
      { name: 'repaymentTerm', label: 'Repayment Term (months)', type: 'number', required: true },
      { name: 'collateral', label: 'Collateral (if any)', type: 'text', required: false }
    ]
  },
  {
    id: 'investment-agreement',
    type: 'investment-agreement',
    title: 'Investment Agreement',
    description: 'Equity or debt investment terms and conditions',
    fields: [
      { name: 'investor', label: 'Investor Name', type: 'text', required: true },
      { name: 'company', label: 'Company Name', type: 'text', required: true },
      { name: 'investmentAmount', label: 'Investment Amount', type: 'text', required: true },
      { name: 'equityPercentage', label: 'Equity Percentage', type: 'number', required: true },
      { name: 'valuation', label: 'Company Valuation', type: 'text', required: true },
      { name: 'boardRights', label: 'Board Rights', type: 'text', required: true, placeholder: 'Board seat, observer rights, etc.' }
    ]
  },
  {
    id: 'promissory-note',
    type: 'promissory-note',
    title: 'Promissory Note',
    description: 'Legal promise to pay a specific amount by a certain date',
    fields: [
      { name: 'borrower', label: 'Borrower Name', type: 'text', required: true },
      { name: 'lender', label: 'Lender Name', type: 'text', required: true },
      { name: 'principalAmount', label: 'Principal Amount', type: 'text', required: true },
      { name: 'interestRate', label: 'Interest Rate (%)', type: 'number', required: true },
      { name: 'maturityDate', label: 'Maturity Date', type: 'date', required: true },
      { name: 'paymentSchedule', label: 'Payment Schedule', type: 'text', required: true, placeholder: 'Monthly, quarterly, lump sum' }
    ]
  },

  // Family & Personal
  {
    id: 'prenuptial-agreement',
    type: 'prenuptial-agreement',
    title: 'Prenuptial Agreement',
    description: 'Pre-marriage financial and property agreement',
    fields: [
      { name: 'party1Name', label: 'First Party Name', type: 'text', required: true },
      { name: 'party2Name', label: 'Second Party Name', type: 'text', required: true },
      { name: 'weddingDate', label: 'Planned Wedding Date', type: 'date', required: true },
      { name: 'party1Assets', label: 'Party 1 Pre-Marriage Assets', type: 'textarea', required: true },
      { name: 'party2Assets', label: 'Party 2 Pre-Marriage Assets', type: 'textarea', required: true },
      { name: 'propertyDivision', label: 'Property Division Terms', type: 'textarea', required: true }
    ]
  },
  {
    id: 'medical-power-attorney',
    type: 'medical-power-attorney',
    title: 'Medical Power of Attorney',
    description: 'Authorize someone to make medical decisions on your behalf',
    fields: [
      { name: 'principal', label: 'Principal (Patient) Name', type: 'text', required: true },
      { name: 'agent', label: 'Agent (Decision Maker) Name', type: 'text', required: true },
      { name: 'relationship', label: 'Relationship to Principal', type: 'text', required: true },
      { name: 'effectiveDate', label: 'Effective Date', type: 'date', required: true },
      { name: 'limitations', label: 'Limitations on Authority', type: 'textarea', required: false },
      { name: 'alternateAgent', label: 'Alternate Agent', type: 'text', required: false }
    ]
  },

  // Compliance & Data Protection
  {
    id: 'privacy-policy',
    type: 'privacy-policy',
    title: 'Privacy Policy',
    description: 'Website/app privacy policy for data protection compliance',
    fields: [
      { name: 'companyName', label: 'Company/Website Name', type: 'text', required: true },
      { name: 'websiteUrl', label: 'Website URL', type: 'text', required: true },
      { name: 'contactEmail', label: 'Contact Email', type: 'email', required: true },
      { name: 'dataCollected', label: 'Types of Data Collected', type: 'textarea', required: true },
      { name: 'dataUse', label: 'How Data is Used', type: 'textarea', required: true },
      { name: 'jurisdiction', label: 'Governing Jurisdiction', type: 'text', required: true }
    ]
  },
  {
    id: 'terms-conditions',
    type: 'terms-conditions',
    title: 'Terms and Conditions',
    description: 'Website/service terms of use and legal conditions',
    fields: [
      { name: 'serviceName', label: 'Service/Website Name', type: 'text', required: true },
      { name: 'companyName', label: 'Company Name', type: 'text', required: true },
      { name: 'serviceDescription', label: 'Service Description', type: 'textarea', required: true },
      { name: 'userObligations', label: 'User Obligations', type: 'textarea', required: true },
      { name: 'prohibitedUses', label: 'Prohibited Uses', type: 'textarea', required: true },
      { name: 'governingLaw', label: 'Governing Law', type: 'text', required: true }
    ]
  },
  {
    id: 'gdpr-dpa',
    type: 'gdpr-dpa',
    title: 'GDPR Data Processing Agreement',
    description: 'GDPR-compliant data processing agreement for EU compliance',
    fields: [
      { name: 'dataController', label: 'Data Controller', type: 'text', required: true },
      { name: 'dataProcessor', label: 'Data Processor', type: 'text', required: true },
      { name: 'processingPurpose', label: 'Purpose of Processing', type: 'textarea', required: true },
      { name: 'dataCategories', label: 'Categories of Personal Data', type: 'textarea', required: true },
      { name: 'dataSubjects', label: 'Categories of Data Subjects', type: 'text', required: true },
      { name: 'retentionPeriod', label: 'Data Retention Period', type: 'text', required: true }
    ]
  },

  // Services & Professional
  {
    id: 'consulting',
    type: 'consulting',
    title: 'Consulting Agreement',
    description: 'Professional consulting services contract',
    fields: [
      { name: 'consultant', label: 'Consultant Name', type: 'text', required: true },
      { name: 'client', label: 'Client Name', type: 'text', required: true },
      { name: 'services', label: 'Consulting Services', type: 'textarea', required: true },
      { name: 'hourlyRate', label: 'Hourly Rate', type: 'text', required: true },
      { name: 'projectDuration', label: 'Project Duration', type: 'text', required: true },
      { name: 'deliverables', label: 'Expected Deliverables', type: 'textarea', required: true }
    ]
  },
  {
    id: 'website-development',
    type: 'website-development',
    title: 'Website Development Agreement',
    description: 'Web development project contract with deliverables',
    fields: [
      { name: 'developer', label: 'Developer/Agency Name', type: 'text', required: true },
      { name: 'client', label: 'Client Name', type: 'text', required: true },
      { name: 'projectScope', label: 'Project Scope', type: 'textarea', required: true },
      { name: 'timeline', label: 'Project Timeline', type: 'text', required: true },
      { name: 'totalCost', label: 'Total Project Cost', type: 'text', required: true },
      { name: 'paymentSchedule', label: 'Payment Schedule', type: 'text', required: true }
    ]
  },
  {
    id: 'photography-services',
    type: 'photography-services',
    title: 'Photography Services Agreement',
    description: 'Professional photography services contract',
    fields: [
      { name: 'photographer', label: 'Photographer Name', type: 'text', required: true },
      { name: 'client', label: 'Client Name', type: 'text', required: true },
      { name: 'eventType', label: 'Event/Session Type', type: 'text', required: true },
      { name: 'eventDate', label: 'Event Date', type: 'date', required: true },
      { name: 'duration', label: 'Session Duration', type: 'text', required: true },
      { name: 'deliverables', label: 'Photo Deliverables', type: 'textarea', required: true }
    ]
  },
  {
    id: 'catering-services',
    type: 'catering-services',
    title: 'Catering Services Agreement',
    description: 'Event catering and food service contract',
    fields: [
      { name: 'caterer', label: 'Catering Company', type: 'text', required: true },
      { name: 'client', label: 'Client Name', type: 'text', required: true },
      { name: 'eventDate', label: 'Event Date', type: 'date', required: true },
      { name: 'guestCount', label: 'Number of Guests', type: 'number', required: true },
      { name: 'menuDetails', label: 'Menu Details', type: 'textarea', required: true },
      { name: 'totalCost', label: 'Total Catering Cost', type: 'text', required: true }
    ]
  },
  {
    id: 'equipment-rental',
    type: 'equipment-rental',
    title: 'Equipment Rental Agreement',
    description: 'Rental contract for machinery, tools, or equipment',
    fields: [
      { name: 'rentalCompany', label: 'Rental Company', type: 'text', required: true },
      { name: 'renter', label: 'Renter Name', type: 'text', required: true },
      { name: 'equipment', label: 'Equipment Description', type: 'textarea', required: true },
      { name: 'rentalPeriod', label: 'Rental Period', type: 'text', required: true },
      { name: 'dailyRate', label: 'Daily Rental Rate', type: 'text', required: true },
      { name: 'securityDeposit', label: 'Security Deposit', type: 'text', required: true }
    ]
  },
  {
    id: 'maintenance-services',
    type: 'maintenance-services',
    title: 'Maintenance Services Agreement',
    description: 'Ongoing maintenance and repair services contract',
    fields: [
      { name: 'serviceProvider', label: 'Service Provider', type: 'text', required: true },
      { name: 'client', label: 'Client Name', type: 'text', required: true },
      { name: 'maintenanceScope', label: 'Maintenance Scope', type: 'textarea', required: true },
      { name: 'serviceFrequency', label: 'Service Frequency', type: 'text', required: true },
      { name: 'monthlyFee', label: 'Monthly Service Fee', type: 'text', required: true },
      { name: 'emergencyResponse', label: 'Emergency Response Time', type: 'text', required: true }
    ]
  },
  {
    id: 'social-media-management',
    type: 'social-media-management',
    title: 'Social Media Management Agreement',
    description: 'Social media marketing and management services',
    fields: [
      { name: 'agency', label: 'Marketing Agency', type: 'text', required: true },
      { name: 'client', label: 'Client Business', type: 'text', required: true },
      { name: 'platforms', label: 'Social Media Platforms', type: 'text', required: true },
      { name: 'services', label: 'Services Included', type: 'textarea', required: true },
      { name: 'monthlyFee', label: 'Monthly Management Fee', type: 'text', required: true },
      { name: 'contentApproval', label: 'Content Approval Process', type: 'text', required: true }
    ]
  },
  {
    id: 'personal-training',
    type: 'personal-training',
    title: 'Personal Training Agreement',
    description: 'Fitness training services and liability agreement',
    fields: [
      { name: 'trainer', label: 'Personal Trainer Name', type: 'text', required: true },
      { name: 'client', label: 'Client Name', type: 'text', required: true },
      { name: 'trainingGoals', label: 'Training Goals', type: 'textarea', required: true },
      { name: 'sessionFrequency', label: 'Sessions per Week', type: 'number', required: true },
      { name: 'sessionRate', label: 'Rate per Session', type: 'text', required: true },
      { name: 'healthConditions', label: 'Health Conditions/Limitations', type: 'textarea', required: false }
    ]
  },
  {
    id: 'tutoring-services',
    type: 'tutoring-services',
    title: 'Tutoring Services Agreement',
    description: 'Academic tutoring and educational services contract',
    fields: [
      { name: 'tutor', label: 'Tutor Name', type: 'text', required: true },
      { name: 'student', label: 'Student Name', type: 'text', required: true },
      { name: 'subjects', label: 'Subjects to be Tutored', type: 'text', required: true },
      { name: 'sessionLength', label: 'Session Length (hours)', type: 'number', required: true },
      { name: 'hourlyRate', label: 'Hourly Rate', type: 'text', required: true },
      { name: 'learningGoals', label: 'Learning Goals', type: 'textarea', required: true }
    ]
  },

  // Healthcare & Medical
  {
    id: 'medical-services',
    type: 'medical-services',
    title: 'Medical Services Agreement',
    description: 'Healthcare provider services and patient care agreement',
    fields: [
      { name: 'provider', label: 'Healthcare Provider', type: 'text', required: true },
      { name: 'patient', label: 'Patient Name', type: 'text', required: true },
      { name: 'services', label: 'Medical Services', type: 'textarea', required: true },
      { name: 'fees', label: 'Service Fees', type: 'text', required: true },
      { name: 'insurance', label: 'Insurance Information', type: 'text', required: false },
      { name: 'emergencyContact', label: 'Emergency Contact', type: 'text', required: true }
    ]
  },
  {
    id: 'telemedicine',
    type: 'telemedicine',
    title: 'Telemedicine Services Agreement',
    description: 'Remote healthcare consultation and treatment agreement',
    fields: [
      { name: 'provider', label: 'Telemedicine Provider', type: 'text', required: true },
      { name: 'patient', label: 'Patient Name', type: 'text', required: true },
      { name: 'platform', label: 'Telemedicine Platform', type: 'text', required: true },
      { name: 'consultationFee', label: 'Consultation Fee', type: 'text', required: true },
      { name: 'limitations', label: 'Service Limitations', type: 'textarea', required: true },
      { name: 'emergencyProcedure', label: 'Emergency Procedure', type: 'textarea', required: true }
    ]
  },

  // Education & Training
  {
    id: 'education-services',
    type: 'education-services',
    title: 'Educational Services Agreement',
    description: 'Educational institution or training program agreement',
    fields: [
      { name: 'institution', label: 'Educational Institution', type: 'text', required: true },
      { name: 'student', label: 'Student Name', type: 'text', required: true },
      { name: 'program', label: 'Program/Course Name', type: 'text', required: true },
      { name: 'duration', label: 'Program Duration', type: 'text', required: true },
      { name: 'tuition', label: 'Tuition Fee', type: 'text', required: true },
      { name: 'requirements', label: 'Graduation Requirements', type: 'textarea', required: true }
    ]
  },
  {
    id: 'student-enrollment',
    type: 'student-enrollment',
    title: 'Student Enrollment Agreement',
    description: 'Student enrollment and academic program agreement',
    fields: [
      { name: 'school', label: 'School/Institution Name', type: 'text', required: true },
      { name: 'studentName', label: 'Student Name', type: 'text', required: true },
      { name: 'guardianName', label: 'Parent/Guardian Name', type: 'text', required: true },
      { name: 'academicYear', label: 'Academic Year', type: 'text', required: true },
      { name: 'tuitionFees', label: 'Tuition and Fees', type: 'text', required: true },
      { name: 'policies', label: 'School Policies Acknowledgment', type: 'textarea', required: true }
    ]
  },

  // Transportation & Logistics
  {
    id: 'transportation-services',
    type: 'transportation-services',
    title: 'Transportation Services Agreement',
    description: 'Freight, delivery, or passenger transportation contract',
    fields: [
      { name: 'carrier', label: 'Transportation Company', type: 'text', required: true },
      { name: 'shipper', label: 'Shipper/Client Name', type: 'text', required: true },
      { name: 'serviceType', label: 'Transportation Service Type', type: 'text', required: true },
      { name: 'routes', label: 'Routes/Destinations', type: 'textarea', required: true },
      { name: 'rates', label: 'Transportation Rates', type: 'text', required: true },
      { name: 'liability', label: 'Liability Coverage', type: 'text', required: true }
    ]
  },
  {
    id: 'logistics-warehousing',
    type: 'logistics-warehousing',
    title: 'Logistics & Warehousing Agreement',
    description: 'Warehouse storage and logistics services contract',
    fields: [
      { name: 'logisticsProvider', label: 'Logistics Provider', type: 'text', required: true },
      { name: 'client', label: 'Client Company', type: 'text', required: true },
      { name: 'services', label: 'Logistics Services', type: 'textarea', required: true },
      { name: 'storageSpace', label: 'Storage Space Required', type: 'text', required: true },
      { name: 'monthlyFee', label: 'Monthly Storage Fee', type: 'text', required: true },
      { name: 'handlingFees', label: 'Handling and Processing Fees', type: 'text', required: true }
    ]
  },

  // Entertainment & Media
  {
    id: 'talent-management',
    type: 'talent-management',
    title: 'Talent Management Agreement',
    description: 'Artist, performer, or talent representation contract',
    fields: [
      { name: 'manager', label: 'Talent Manager/Agency', type: 'text', required: true },
      { name: 'talent', label: 'Talent/Artist Name', type: 'text', required: true },
      { name: 'services', label: 'Management Services', type: 'textarea', required: true },
      { name: 'commission', label: 'Commission Percentage', type: 'number', required: true },
      { name: 'exclusivity', label: 'Exclusive Representation?', type: 'text', required: true },
      { name: 'termDuration', label: 'Contract Duration', type: 'text', required: true }
    ]
  },
  {
    id: 'music-production',
    type: 'music-production',
    title: 'Music Production Agreement',
    description: 'Music recording, production, and rights agreement',
    fields: [
      { name: 'producer', label: 'Music Producer', type: 'text', required: true },
      { name: 'artist', label: 'Recording Artist', type: 'text', required: true },
      { name: 'projectDescription', label: 'Project Description', type: 'textarea', required: true },
      { name: 'productionFee', label: 'Production Fee', type: 'text', required: true },
      { name: 'royalties', label: 'Royalty Split', type: 'text', required: true },
      { name: 'deliverables', label: 'Final Deliverables', type: 'textarea', required: true }
    ]
  },

  // Construction & Engineering
  {
    id: 'construction-contract',
    type: 'construction-contract',
    title: 'Construction Contract Agreement',
    description: 'Building construction and contractor services agreement',
    fields: [
      { name: 'contractor', label: 'General Contractor', type: 'text', required: true },
      { name: 'owner', label: 'Property Owner', type: 'text', required: true },
      { name: 'projectDescription', label: 'Construction Project Description', type: 'textarea', required: true },
      { name: 'contractPrice', label: 'Total Contract Price', type: 'text', required: true },
      { name: 'startDate', label: 'Construction Start Date', type: 'date', required: true },
      { name: 'completionDate', label: 'Estimated Completion Date', type: 'date', required: true }
    ]
  },
  {
    id: 'engineering-services',
    type: 'engineering-services',
    title: 'Engineering Services Agreement',
    description: 'Professional engineering consultation and design services',
    fields: [
      { name: 'engineer', label: 'Engineering Firm', type: 'text', required: true },
      { name: 'client', label: 'Client Name', type: 'text', required: true },
      { name: 'projectScope', label: 'Engineering Project Scope', type: 'textarea', required: true },
      { name: 'engineeringFee', label: 'Engineering Fee', type: 'text', required: true },
      { name: 'timeline', label: 'Project Timeline', type: 'text', required: true },
      { name: 'deliverables', label: 'Engineering Deliverables', type: 'textarea', required: true }
    ]
  },

  // Food & Hospitality
  {
    id: 'restaurant-management',
    type: 'restaurant-management',
    title: 'Restaurant Management Agreement',
    description: 'Restaurant operations and management services contract',
    fields: [
      { name: 'managementCompany', label: 'Management Company', type: 'text', required: true },
      { name: 'restaurantOwner', label: 'Restaurant Owner', type: 'text', required: true },
      { name: 'restaurantName', label: 'Restaurant Name', type: 'text', required: true },
      { name: 'managementFee', label: 'Management Fee Structure', type: 'text', required: true },
      { name: 'responsibilities', label: 'Management Responsibilities', type: 'textarea', required: true },
      { name: 'performanceMetrics', label: 'Performance Metrics', type: 'textarea', required: true }
    ]
  },
  {
    id: 'hotel-services',
    type: 'hotel-services',
    title: 'Hotel Services Agreement',
    description: 'Hotel accommodation and hospitality services contract',
    fields: [
      { name: 'hotel', label: 'Hotel Name', type: 'text', required: true },
      { name: 'client', label: 'Client/Guest Name', type: 'text', required: true },
      { name: 'serviceType', label: 'Service Type', type: 'text', required: true, placeholder: 'Group booking, event hosting, etc.' },
      { name: 'checkIn', label: 'Check-in Date', type: 'date', required: true },
      { name: 'checkOut', label: 'Check-out Date', type: 'date', required: true },
      { name: 'totalCost', label: 'Total Service Cost', type: 'text', required: true }
    ]
  },

  // Financial Services
  {
    id: 'financial-advisory',
    type: 'financial-advisory',
    title: 'Financial Advisory Agreement',
    description: 'Financial planning and investment advisory services',
    fields: [
      { name: 'advisor', label: 'Financial Advisor', type: 'text', required: true },
      { name: 'client', label: 'Client Name', type: 'text', required: true },
      { name: 'services', label: 'Advisory Services', type: 'textarea', required: true },
      { name: 'feeStructure', label: 'Fee Structure', type: 'text', required: true },
      { name: 'investmentGoals', label: 'Investment Goals', type: 'textarea', required: true },
      { name: 'riskTolerance', label: 'Risk Tolerance', type: 'text', required: true }
    ]
  },
  {
    id: 'insurance-services',
    type: 'insurance-services',
    title: 'Insurance Services Agreement',
    description: 'Insurance coverage and policy services agreement',
    fields: [
      { name: 'insurer', label: 'Insurance Company', type: 'text', required: true },
      { name: 'policyholder', label: 'Policyholder Name', type: 'text', required: true },
      { name: 'coverageType', label: 'Insurance Coverage Type', type: 'text', required: true },
      { name: 'premium', label: 'Annual Premium', type: 'text', required: true },
      { name: 'coverageAmount', label: 'Coverage Amount', type: 'text', required: true },
      { name: 'deductible', label: 'Deductible Amount', type: 'text', required: true }
    ]
  }
];

export const contractCategories = [
  {
    name: 'Business & Corporate',
    description: 'Professional business agreements, partnerships, and corporate contracts',
    contracts: ['nda', 'joint-venture', 'distribution-agreement', 'agency-agreement', 'sla', 'business-purchase']
  },
  {
    name: 'Employment & HR',
    description: 'Employment contracts, hiring agreements, and HR documentation',
    contracts: ['employment', 'offer-letter', 'termination-letter', 'contractor-agreement']
  },
  {
    name: 'Property & Real Estate',
    description: 'Real estate transactions, leases, and property agreements',
    contracts: ['rental', 'commercial-lease', 'real-estate-purchase']
  },
  {
    name: 'Intellectual Property & Technology',
    description: 'Software licenses, technology agreements, and IP protection',
    contracts: ['software-license', 'saas-agreement', 'cloud-services', 'mobile-app-development']
  },
  {
    name: 'Finance & Investment',
    description: 'Financial agreements, loans, and investment contracts',
    contracts: ['loan', 'investment-agreement', 'promissory-note']
  },
  {
    name: 'Family & Personal',
    description: 'Personal legal documents and family agreements',
    contracts: ['prenuptial-agreement', 'medical-power-attorney']
  },
  {
    name: 'Compliance & Data Protection',
    description: 'Privacy policies, terms of service, and regulatory compliance',
    contracts: ['privacy-policy', 'terms-conditions', 'gdpr-dpa']
  },
  {
    name: 'Services & Professional',
    description: 'Professional service agreements and specialized contracts',
    contracts: ['consulting', 'website-development', 'photography-services', 'catering-services', 'equipment-rental', 'maintenance-services', 'social-media-management', 'personal-training', 'tutoring-services']
  },
  {
    name: 'Healthcare & Medical',
    description: 'Medical services, healthcare agreements, and patient care contracts',
    contracts: ['medical-services', 'telemedicine']
  },
  {
    name: 'Education & Training',
    description: 'Educational institutions, training programs, and academic agreements',
    contracts: ['education-services', 'student-enrollment']
  },
  {
    name: 'Transportation & Logistics',
    description: 'Transportation services, logistics, and supply chain agreements',
    contracts: ['transportation-services', 'logistics-warehousing']
  },
  {
    name: 'Entertainment & Media',
    description: 'Entertainment industry contracts, talent management, and media agreements',
    contracts: ['talent-management', 'music-production']
  },
  {
    name: 'Construction & Engineering',
    description: 'Construction projects, engineering services, and building contracts',
    contracts: ['construction-contract', 'engineering-services']
  },
  {
    name: 'Food & Hospitality',
    description: 'Restaurant management, hotel services, and hospitality agreements',
    contracts: ['restaurant-management', 'hotel-services']
  },
  {
    name: 'Financial Services',
    description: 'Financial advisory, insurance, and professional financial services',
    contracts: ['financial-advisory', 'insurance-services']
  }
];