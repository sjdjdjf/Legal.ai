import { Contract } from '../types';

export const contractTemplates: Contract[] = [
  // Business & Corporate
  {
    id: 'nda',
    type: 'nda',
    title: 'Non-Disclosure Agreement',
    description: 'Protect confidential information and trade secrets between parties',
    fields: [
      { name: 'partyA', label: 'Disclosing Party Name', type: 'text', required: true, placeholder: 'Company or Individual Name' },
      { name: 'partyB', label: 'Receiving Party Name', type: 'text', required: true, placeholder: 'Company or Individual Name' },
      { name: 'effectiveDate', label: 'Effective Date', type: 'date', required: true },
      { name: 'purpose', label: 'Purpose of Disclosure', type: 'textarea', required: true, placeholder: 'Describe the business purpose...' },
      { name: 'duration', label: 'Duration (Years)', type: 'number', required: true, placeholder: '5' },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  },
  {
    id: 'joint-venture',
    type: 'joint-venture' as const,
    title: 'Joint Venture Agreement',
    description: 'Partnership between companies for specific business ventures',
    fields: [
      { name: 'company1', label: 'First Company Name', type: 'text', required: true, placeholder: 'First Company' },
      { name: 'company2', label: 'Second Company Name', type: 'text', required: true, placeholder: 'Second Company' },
      { name: 'ventureName', label: 'Joint Venture Name', type: 'text', required: true, placeholder: 'JV Company Name' },
      { name: 'purpose', label: 'Business Purpose', type: 'textarea', required: true, placeholder: 'Describe the joint venture purpose...' },
      { name: 'contributions', label: 'Capital Contributions', type: 'textarea', required: true, placeholder: 'Each party\'s contributions...' },
      { name: 'profitSharing', label: 'Profit Sharing Ratio', type: 'text', required: true, placeholder: '50/50' },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  },
  {
    id: 'reseller-agreement',
    type: 'reseller-agreement' as const,
    title: 'Reseller/Distribution Agreement',
    description: 'Agreement for reselling or distributing products/services',
    fields: [
      { name: 'supplier', label: 'Supplier/Manufacturer Name', type: 'text', required: true, placeholder: 'Supplier Company' },
      { name: 'reseller', label: 'Reseller/Distributor Name', type: 'text', required: true, placeholder: 'Reseller Company' },
      { name: 'products', label: 'Products/Services', type: 'textarea', required: true, placeholder: 'Describe products to be resold...' },
      { name: 'territory', label: 'Sales Territory', type: 'text', required: true, placeholder: 'Geographic area' },
      { name: 'commission', label: 'Commission/Margin', type: 'text', required: true, placeholder: '20% commission' },
      { name: 'minimumSales', label: 'Minimum Sales Target', type: 'text', required: true, placeholder: '$100,000 annually' },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  },
  {
    id: 'contractor-agreement',
    type: 'contractor-agreement' as const,
    title: 'Contractor Agreement',
    description: 'Independent contractor services agreement',
    fields: [
      { name: 'clientName', label: 'Client Name', type: 'text', required: true, placeholder: 'Client Company/Individual' },
      { name: 'contractorName', label: 'Contractor Name', type: 'text', required: true, placeholder: 'Contractor Name/Business' },
      { name: 'services', label: 'Services Description', type: 'textarea', required: true, placeholder: 'Detailed scope of services...' },
      { name: 'compensation', label: 'Compensation', type: 'text', required: true, placeholder: '$75/hour or $5,000 fixed' },
      { name: 'paymentTerms', label: 'Payment Terms', type: 'text', required: true, placeholder: 'Net 30 days' },
      { name: 'duration', label: 'Contract Duration', type: 'text', required: true, placeholder: '6 months' },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  },
  {
    id: 'agency-agreement',
    type: 'agency-agreement' as const,
    title: 'Agency Agreement',
    description: 'Agreement for agent to act on behalf of principal',
    fields: [
      { name: 'principal', label: 'Principal Name', type: 'text', required: true, placeholder: 'Principal Company' },
      { name: 'agent', label: 'Agent Name', type: 'text', required: true, placeholder: 'Agent Company/Individual' },
      { name: 'scope', label: 'Scope of Authority', type: 'textarea', required: true, placeholder: 'What the agent is authorized to do...' },
      { name: 'commission', label: 'Commission Structure', type: 'text', required: true, placeholder: '10% of sales' },
      { name: 'territory', label: 'Territory/Market', type: 'text', required: true, placeholder: 'Geographic or market area' },
      { name: 'duration', label: 'Agreement Duration', type: 'text', required: true, placeholder: '2 years' },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  },

  // Employment & HR
  {
    id: 'employment',
    type: 'employment',
    title: 'Employment Agreement',
    description: 'Professional employment contract with comprehensive terms',
    fields: [
      { name: 'companyName', label: 'Company Name', type: 'text', required: true, placeholder: 'Company Legal Name' },
      { name: 'employeeName', label: 'Employee Name', type: 'text', required: true, placeholder: 'Full Legal Name' },
      { name: 'position', label: 'Job Title/Position', type: 'text', required: true, placeholder: 'Software Engineer' },
      { name: 'salary', label: 'Annual Salary', type: 'text', required: true, placeholder: '$80,000' },
      { name: 'startDate', label: 'Start Date', type: 'date', required: true },
      { name: 'benefits', label: 'Benefits Package', type: 'textarea', required: false, placeholder: 'Health insurance, 401k, vacation days...' },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  },
  {
    id: 'offer-letter',
    type: 'offer-letter' as const,
    title: 'Offer Letter',
    description: 'Formal job offer letter for new employees',
    fields: [
      { name: 'companyName', label: 'Company Name', type: 'text', required: true, placeholder: 'Company Name' },
      { name: 'candidateName', label: 'Candidate Name', type: 'text', required: true, placeholder: 'Candidate Full Name' },
      { name: 'position', label: 'Position Title', type: 'text', required: true, placeholder: 'Marketing Manager' },
      { name: 'salary', label: 'Annual Salary', type: 'text', required: true, placeholder: '$65,000' },
      { name: 'startDate', label: 'Proposed Start Date', type: 'date', required: true },
      { name: 'benefits', label: 'Benefits Summary', type: 'textarea', required: false, placeholder: 'Health, dental, 401k...' },
      { name: 'reportingTo', label: 'Reports To', type: 'text', required: true, placeholder: 'Manager Name/Title' }
    ]
  },
  {
    id: 'termination-letter',
    type: 'termination-letter' as const,
    title: 'Termination Letter',
    description: 'Formal employee termination notice',
    fields: [
      { name: 'companyName', label: 'Company Name', type: 'text', required: true, placeholder: 'Company Name' },
      { name: 'employeeName', label: 'Employee Name', type: 'text', required: true, placeholder: 'Employee Full Name' },
      { name: 'position', label: 'Employee Position', type: 'text', required: true, placeholder: 'Current Job Title' },
      { name: 'terminationDate', label: 'Termination Date', type: 'date', required: true },
      { name: 'reason', label: 'Reason for Termination', type: 'textarea', required: true, placeholder: 'Performance issues, restructuring, etc...' },
      { name: 'finalPayDate', label: 'Final Pay Date', type: 'date', required: true },
      { name: 'benefits', label: 'Benefits Information', type: 'textarea', required: false, placeholder: 'COBRA, final benefits...' }
    ]
  },

  // Property & Real Estate
  {
    id: 'rental',
    type: 'rental',
    title: 'Rental Agreement',
    description: 'Residential or commercial property rental lease agreement',
    fields: [
      { name: 'landlordName', label: 'Landlord Name', type: 'text', required: true, placeholder: 'Property Owner Name' },
      { name: 'tenantName', label: 'Tenant Name', type: 'text', required: true, placeholder: 'Renter Name' },
      { name: 'propertyAddress', label: 'Property Address', type: 'textarea', required: true, placeholder: 'Full property address...' },
      { name: 'monthlyRent', label: 'Monthly Rent', type: 'text', required: true, placeholder: '$2,500' },
      { name: 'securityDeposit', label: 'Security Deposit', type: 'text', required: true, placeholder: '$2,500' },
      { name: 'leaseStart', label: 'Lease Start Date', type: 'date', required: true },
      { name: 'leaseDuration', label: 'Lease Duration (Months)', type: 'number', required: true, placeholder: '12' },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  },
  {
    id: 'commercial-lease',
    type: 'commercial-lease' as const,
    title: 'Commercial Lease Agreement',
    description: 'Commercial property lease for business use',
    fields: [
      { name: 'landlordName', label: 'Landlord/Property Owner', type: 'text', required: true, placeholder: 'Property Owner Name' },
      { name: 'tenantName', label: 'Tenant/Business Name', type: 'text', required: true, placeholder: 'Business Name' },
      { name: 'propertyAddress', label: 'Commercial Property Address', type: 'textarea', required: true, placeholder: 'Full commercial property address...' },
      { name: 'monthlyRent', label: 'Monthly Rent', type: 'text', required: true, placeholder: '$8,500' },
      { name: 'securityDeposit', label: 'Security Deposit', type: 'text', required: true, placeholder: '$17,000' },
      { name: 'leaseStart', label: 'Lease Start Date', type: 'date', required: true },
      { name: 'leaseDuration', label: 'Lease Duration (Years)', type: 'number', required: true, placeholder: '5' },
      { name: 'businessUse', label: 'Permitted Business Use', type: 'textarea', required: true, placeholder: 'Describe permitted business activities...' },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  },
  {
    id: 'real-estate-purchase',
    type: 'real-estate-purchase' as const,
    title: 'Real Estate Purchase Agreement',
    description: 'Agreement for buying/selling real estate property',
    fields: [
      { name: 'buyerName', label: 'Buyer Name', type: 'text', required: true, placeholder: 'Buyer Full Name' },
      { name: 'sellerName', label: 'Seller Name', type: 'text', required: true, placeholder: 'Seller Full Name' },
      { name: 'propertyAddress', label: 'Property Address', type: 'textarea', required: true, placeholder: 'Full property address and description...' },
      { name: 'purchasePrice', label: 'Purchase Price', type: 'text', required: true, placeholder: '$450,000' },
      { name: 'earnestMoney', label: 'Earnest Money Deposit', type: 'text', required: true, placeholder: '$10,000' },
      { name: 'closingDate', label: 'Closing Date', type: 'date', required: true },
      { name: 'contingencies', label: 'Contingencies', type: 'textarea', required: false, placeholder: 'Financing, inspection, appraisal...' },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  },

  // Intellectual Property & Tech
  {
    id: 'software-license',
    type: 'software-license' as const,
    title: 'Software License Agreement',
    description: 'License agreement for software usage rights',
    fields: [
      { name: 'licensor', label: 'Licensor (Software Owner)', type: 'text', required: true, placeholder: 'Software Company Name' },
      { name: 'licensee', label: 'Licensee (User)', type: 'text', required: true, placeholder: 'User Company/Individual' },
      { name: 'softwareName', label: 'Software Name', type: 'text', required: true, placeholder: 'Software Product Name' },
      { name: 'licenseType', label: 'License Type', type: 'text', required: true, placeholder: 'Single user, enterprise, etc.' },
      { name: 'licenseFee', label: 'License Fee', type: 'text', required: true, placeholder: '$500 annually' },
      { name: 'restrictions', label: 'Usage Restrictions', type: 'textarea', required: true, placeholder: 'Limitations on use, copying, distribution...' },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  },
  {
    id: 'saas-agreement',
    type: 'saas-agreement' as const,
    title: 'SaaS Agreement (Software-as-a-Service)',
    description: 'Service agreement for cloud-based software services',
    fields: [
      { name: 'provider', label: 'SaaS Provider', type: 'text', required: true, placeholder: 'SaaS Company Name' },
      { name: 'customer', label: 'Customer', type: 'text', required: true, placeholder: 'Customer Company Name' },
      { name: 'serviceName', label: 'Service Name', type: 'text', required: true, placeholder: 'SaaS Platform Name' },
      { name: 'subscriptionFee', label: 'Subscription Fee', type: 'text', required: true, placeholder: '$99/month' },
      { name: 'serviceLevel', label: 'Service Level (SLA)', type: 'text', required: true, placeholder: '99.9% uptime' },
      { name: 'dataRetention', label: 'Data Retention Policy', type: 'textarea', required: true, placeholder: 'How long data is retained...' },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  },

  // Finance & Investment
  {
    id: 'loan',
    type: 'loan',
    title: 'Loan Agreement',
    description: 'Personal or business loan agreement with repayment terms',
    fields: [
      { name: 'lenderName', label: 'Lender Name', type: 'text', required: true, placeholder: 'Lending Party Name' },
      { name: 'borrowerName', label: 'Borrower Name', type: 'text', required: true, placeholder: 'Borrowing Party Name' },
      { name: 'loanAmount', label: 'Loan Amount', type: 'text', required: true, placeholder: '$25,000' },
      { name: 'interestRate', label: 'Interest Rate (%)', type: 'text', required: true, placeholder: '5.5%' },
      { name: 'repaymentTerm', label: 'Repayment Period (Months)', type: 'number', required: true, placeholder: '60' },
      { name: 'purpose', label: 'Loan Purpose', type: 'textarea', required: true, placeholder: 'Business expansion, equipment purchase, etc...' },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  },
  {
    id: 'investment-agreement',
    type: 'investment-agreement' as const,
    title: 'Investment Agreement',
    description: 'Agreement for equity or debt investment in business',
    fields: [
      { name: 'investor', label: 'Investor Name', type: 'text', required: true, placeholder: 'Investor Name/Fund' },
      { name: 'company', label: 'Company Name', type: 'text', required: true, placeholder: 'Company Receiving Investment' },
      { name: 'investmentAmount', label: 'Investment Amount', type: 'text', required: true, placeholder: '$500,000' },
      { name: 'equityPercentage', label: 'Equity Percentage', type: 'text', required: true, placeholder: '15%' },
      { name: 'valuation', label: 'Company Valuation', type: 'text', required: true, placeholder: '$3,000,000' },
      { name: 'useOfFunds', label: 'Use of Investment Funds', type: 'textarea', required: true, placeholder: 'How the investment will be used...' },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  },
  {
    id: 'promissory-note',
    type: 'promissory-note' as const,
    title: 'Promissory Note',
    description: 'Written promise to pay a specific amount of money',
    fields: [
      { name: 'payee', label: 'Payee (Lender)', type: 'text', required: true, placeholder: 'Person/Entity to be paid' },
      { name: 'maker', label: 'Maker (Borrower)', type: 'text', required: true, placeholder: 'Person/Entity making payment' },
      { name: 'principalAmount', label: 'Principal Amount', type: 'text', required: true, placeholder: '$15,000' },
      { name: 'interestRate', label: 'Interest Rate (%)', type: 'text', required: true, placeholder: '6%' },
      { name: 'maturityDate', label: 'Maturity Date', type: 'date', required: true },
      { name: 'paymentSchedule', label: 'Payment Schedule', type: 'text', required: true, placeholder: 'Monthly, quarterly, lump sum' },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  },

  // Family & Personal
  {
    id: 'prenuptial-agreement',
    type: 'prenuptial-agreement' as const,
    title: 'Prenuptial Agreement',
    description: 'Pre-marriage agreement defining financial arrangements',
    fields: [
      { name: 'party1Name', label: 'First Party Name', type: 'text', required: true, placeholder: 'First Person\'s Full Name' },
      { name: 'party2Name', label: 'Second Party Name', type: 'text', required: true, placeholder: 'Second Person\'s Full Name' },
      { name: 'weddingDate', label: 'Planned Wedding Date', type: 'date', required: true },
      { name: 'separateProperty', label: 'Separate Property', type: 'textarea', required: true, placeholder: 'Assets each party will keep separate...' },
      { name: 'maritalProperty', label: 'Marital Property Rules', type: 'textarea', required: true, placeholder: 'How marital assets will be handled...' },
      { name: 'spousalSupport', label: 'Spousal Support Terms', type: 'textarea', required: false, placeholder: 'Alimony arrangements if any...' },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  },
  {
    id: 'medical-power-attorney',
    type: 'medical-power-attorney' as const,
    title: 'Medical Power of Attorney',
    description: 'Authorization for medical decision-making on behalf of another',
    fields: [
      { name: 'principal', label: 'Principal (Patient)', type: 'text', required: true, placeholder: 'Person granting authority' },
      { name: 'agent', label: 'Agent (Decision Maker)', type: 'text', required: true, placeholder: 'Person receiving authority' },
      { name: 'relationship', label: 'Relationship to Principal', type: 'text', required: true, placeholder: 'Spouse, child, friend, etc.' },
      { name: 'scope', label: 'Scope of Authority', type: 'textarea', required: true, placeholder: 'What medical decisions can be made...' },
      { name: 'limitations', label: 'Limitations', type: 'textarea', required: false, placeholder: 'Any restrictions on authority...' },
      { name: 'effectiveDate', label: 'Effective Date', type: 'date', required: true },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  },

  // Compliance & Data
  {
    id: 'privacy-policy',
    type: 'privacy-policy' as const,
    title: 'Privacy Policy',
    description: 'Legal document explaining how personal data is collected and used',
    fields: [
      { name: 'companyName', label: 'Company/Website Name', type: 'text', required: true, placeholder: 'Your Company Name' },
      { name: 'websiteUrl', label: 'Website URL', type: 'text', required: true, placeholder: 'https://yourwebsite.com' },
      { name: 'dataCollected', label: 'Types of Data Collected', type: 'textarea', required: true, placeholder: 'Email addresses, cookies, usage data...' },
      { name: 'dataUsage', label: 'How Data is Used', type: 'textarea', required: true, placeholder: 'Service provision, marketing, analytics...' },
      { name: 'thirdParties', label: 'Third-Party Services', type: 'textarea', required: false, placeholder: 'Google Analytics, payment processors...' },
      { name: 'contactEmail', label: 'Contact Email', type: 'email', required: true, placeholder: 'privacy@yourcompany.com' },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  },
  {
    id: 'gdpr-dpa',
    type: 'gdpr-dpa' as const,
    title: 'GDPR Data Processing Agreement',
    description: 'GDPR-compliant data processing agreement between controller and processor',
    fields: [
      { name: 'controller', label: 'Data Controller', type: 'text', required: true, placeholder: 'Company controlling data' },
      { name: 'processor', label: 'Data Processor', type: 'text', required: true, placeholder: 'Company processing data' },
      { name: 'dataTypes', label: 'Types of Personal Data', type: 'textarea', required: true, placeholder: 'Names, emails, addresses...' },
      { name: 'processingPurpose', label: 'Purpose of Processing', type: 'textarea', required: true, placeholder: 'Customer service, marketing...' },
      { name: 'dataSubjects', label: 'Categories of Data Subjects', type: 'text', required: true, placeholder: 'Customers, employees, etc.' },
      { name: 'retentionPeriod', label: 'Data Retention Period', type: 'text', required: true, placeholder: '3 years' },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'EU/EEA' }
    ]
  },

  // Additional Core Templates
  {
    id: 'franchise-agreement',
    type: 'franchise-agreement' as const,
    title: 'Franchise Agreement',
    description: 'Gives a franchisee the right to operate under the franchisor\'s brand, with fees and obligations',
    fields: [
      { name: 'franchisor', label: 'Franchisor Name', type: 'text', required: true, placeholder: 'Franchisor Company Name' },
      { name: 'franchisee', label: 'Franchisee Name', type: 'text', required: true, placeholder: 'Franchisee Name/Company' },
      { name: 'brandName', label: 'Brand/Franchise Name', type: 'text', required: true, placeholder: 'Brand being franchised' },
      { name: 'territory', label: 'Franchise Territory', type: 'text', required: true, placeholder: 'Geographic area' },
      { name: 'franchiseFee', label: 'Initial Franchise Fee', type: 'text', required: true, placeholder: '$50,000' },
      { name: 'royaltyRate', label: 'Ongoing Royalty Rate', type: 'text', required: true, placeholder: '5% of gross revenue' },
      { name: 'termLength', label: 'Franchise Term (Years)', type: 'number', required: true, placeholder: '10' },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  },
  {
    id: 'shareholder-agreement',
    type: 'shareholder-agreement' as const,
    title: 'Shareholder Agreement',
    description: 'Governs relations between shareholders, voting rights, share transfers, etc. (good for startups & SMEs)',
    fields: [
      { name: 'companyName', label: 'Company Name', type: 'text', required: true, placeholder: 'Company Legal Name' },
      { name: 'shareholders', label: 'Shareholders', type: 'textarea', required: true, placeholder: 'List all shareholders and their ownership percentages...' },
      { name: 'shareClasses', label: 'Share Classes', type: 'textarea', required: true, placeholder: 'Common shares, preferred shares, etc...' },
      { name: 'votingRights', label: 'Voting Rights', type: 'textarea', required: true, placeholder: 'How voting decisions are made...' },
      { name: 'transferRestrictions', label: 'Share Transfer Restrictions', type: 'textarea', required: true, placeholder: 'Right of first refusal, approval requirements...' },
      { name: 'dividendPolicy', label: 'Dividend Policy', type: 'textarea', required: false, placeholder: 'How dividends will be distributed...' },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  },
  {
    id: 'noncompete',
    type: 'noncompete' as const,
    title: 'Non-Compete Agreement',
    description: 'Prevents an employee or contractor from competing for a set time/geography after leaving',
    fields: [
      { name: 'employer', label: 'Employer/Company Name', type: 'text', required: true, placeholder: 'Company Name' },
      { name: 'employee', label: 'Employee/Contractor Name', type: 'text', required: true, placeholder: 'Employee Full Name' },
      { name: 'position', label: 'Position/Role', type: 'text', required: true, placeholder: 'Job title or role' },
      { name: 'restrictionPeriod', label: 'Restriction Period', type: 'text', required: true, placeholder: '12 months' },
      { name: 'geographicScope', label: 'Geographic Scope', type: 'text', required: true, placeholder: '50-mile radius, state, etc.' },
      { name: 'restrictedActivities', label: 'Restricted Activities', type: 'textarea', required: true, placeholder: 'Specific business activities that are restricted...' },
      { name: 'compensation', label: 'Compensation (if any)', type: 'text', required: false, placeholder: 'Payment during restriction period' },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  },
  {
    id: 'consulting',
    type: 'consulting' as const,
    title: 'Consulting/Advisory Agreement',
    description: 'Covers project scope, deliverables, and fees for independent consultants',
    fields: [
      { name: 'client', label: 'Client Name', type: 'text', required: true, placeholder: 'Client Company/Individual' },
      { name: 'consultant', label: 'Consultant Name', type: 'text', required: true, placeholder: 'Consultant Name/Company' },
      { name: 'projectScope', label: 'Project Scope', type: 'textarea', required: true, placeholder: 'Detailed description of consulting services...' },
      { name: 'deliverables', label: 'Deliverables', type: 'textarea', required: true, placeholder: 'Specific deliverables and milestones...' },
      { name: 'consultingFee', label: 'Consulting Fee', type: 'text', required: true, placeholder: '$150/hour or $10,000 project fee' },
      { name: 'paymentTerms', label: 'Payment Terms', type: 'text', required: true, placeholder: 'Net 30 days, milestone-based, etc.' },
      { name: 'projectDuration', label: 'Project Duration', type: 'text', required: true, placeholder: '3 months' },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  },
  {
    id: 'mou',
    type: 'mou' as const,
    title: 'Memorandum of Understanding (MOU)',
    description: 'A non-binding outline of terms before signing a full contract',
    fields: [
      { name: 'party1', label: 'First Party Name', type: 'text', required: true, placeholder: 'First Organization/Individual' },
      { name: 'party2', label: 'Second Party Name', type: 'text', required: true, placeholder: 'Second Organization/Individual' },
      { name: 'purpose', label: 'Purpose of MOU', type: 'textarea', required: true, placeholder: 'Describe the intended collaboration or agreement...' },
      { name: 'objectives', label: 'Key Objectives', type: 'textarea', required: true, placeholder: 'Main goals and objectives...' },
      { name: 'responsibilities', label: 'Responsibilities', type: 'textarea', required: true, placeholder: 'Each party\'s responsibilities...' },
      { name: 'timeline', label: 'Timeline', type: 'text', required: true, placeholder: '6 months, ongoing, etc.' },
      { name: 'nextSteps', label: 'Next Steps', type: 'textarea', required: false, placeholder: 'What happens after signing the MOU...' },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  },
  {
    id: 'event-venue-rental',
    type: 'event-venue-rental' as const,
    title: 'Event/Venue Rental Agreement',
    description: 'Sets rules, payment, liability, and cancellation for renting an event space or hall',
    fields: [
      { name: 'venueOwner', label: 'Venue Owner/Manager', type: 'text', required: true, placeholder: 'Venue Company Name' },
      { name: 'renter', label: 'Event Organizer/Renter', type: 'text', required: true, placeholder: 'Renter Name/Company' },
      { name: 'venueName', label: 'Venue Name/Location', type: 'text', required: true, placeholder: 'Venue name and address' },
      { name: 'eventDate', label: 'Event Date', type: 'date', required: true },
      { name: 'eventTime', label: 'Event Time', type: 'text', required: true, placeholder: '6:00 PM - 11:00 PM' },
      { name: 'rentalFee', label: 'Rental Fee', type: 'text', required: true, placeholder: '$2,500' },
      { name: 'securityDeposit', label: 'Security Deposit', type: 'text', required: true, placeholder: '$500' },
      { name: 'eventType', label: 'Event Type', type: 'text', required: true, placeholder: 'Wedding, corporate event, etc.' },
      { name: 'guestCount', label: 'Expected Guest Count', type: 'number', required: true, placeholder: '150' },
      { name: 'cancellationPolicy', label: 'Cancellation Policy', type: 'textarea', required: true, placeholder: 'Cancellation terms and refund policy...' },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  },
  {
    id: 'affiliate-marketing',
    type: 'affiliate-marketing' as const,
    title: 'Affiliate Marketing Agreement',
    description: 'Outlines commission, tracking, and brand guidelines for affiliates',
    fields: [
      { name: 'merchant', label: 'Merchant/Company Name', type: 'text', required: true, placeholder: 'Company offering affiliate program' },
      { name: 'affiliate', label: 'Affiliate Name', type: 'text', required: true, placeholder: 'Affiliate marketer name/company' },
      { name: 'products', label: 'Products/Services', type: 'textarea', required: true, placeholder: 'Products or services to be promoted...' },
      { name: 'commissionRate', label: 'Commission Rate', type: 'text', required: true, placeholder: '10% of sales, $50 per lead, etc.' },
      { name: 'paymentTerms', label: 'Payment Terms', type: 'text', required: true, placeholder: 'Monthly, minimum $100 threshold' },
      { name: 'trackingMethod', label: 'Tracking Method', type: 'text', required: true, placeholder: 'Unique affiliate links, codes, etc.' },
      { name: 'brandGuidelines', label: 'Brand Guidelines', type: 'textarea', required: true, placeholder: 'How the brand should be represented...' },
      { name: 'prohibitedActivities', label: 'Prohibited Activities', type: 'textarea', required: true, placeholder: 'Spam, false advertising, etc...' },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  },
  {
    id: 'manufacturing-supply',
    type: 'manufacturing-supply' as const,
    title: 'Manufacturing/Supply Agreement',
    description: 'Governs production, quality standards, delivery schedules, and IP rights with a manufacturer',
    fields: [
      { name: 'buyer', label: 'Buyer/Client Name', type: 'text', required: true, placeholder: 'Company ordering products' },
      { name: 'manufacturer', label: 'Manufacturer/Supplier Name', type: 'text', required: true, placeholder: 'Manufacturing company' },
      { name: 'products', label: 'Products to be Manufactured', type: 'textarea', required: true, placeholder: 'Detailed product specifications...' },
      { name: 'qualityStandards', label: 'Quality Standards', type: 'textarea', required: true, placeholder: 'Quality requirements, testing procedures...' },
      { name: 'deliverySchedule', label: 'Delivery Schedule', type: 'textarea', required: true, placeholder: 'Production timeline and delivery dates...' },
      { name: 'pricing', label: 'Pricing Structure', type: 'text', required: true, placeholder: '$10 per unit, volume discounts...' },
      { name: 'minimumOrder', label: 'Minimum Order Quantity', type: 'text', required: true, placeholder: '1,000 units' },
      { name: 'ipRights', label: 'Intellectual Property Rights', type: 'textarea', required: true, placeholder: 'Who owns designs, patents, etc...' },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  },
  {
    id: 'settlement-release',
    type: 'settlement-release' as const,
    title: 'Settlement & Release Agreement',
    description: 'Resolves disputes by mutual settlement; releases claims between parties',
    fields: [
      { name: 'party1', label: 'First Party Name', type: 'text', required: true, placeholder: 'First party to the dispute' },
      { name: 'party2', label: 'Second Party Name', type: 'text', required: true, placeholder: 'Second party to the dispute' },
      { name: 'disputeDescription', label: 'Dispute Description', type: 'textarea', required: true, placeholder: 'Brief description of the dispute being settled...' },
      { name: 'settlementAmount', label: 'Settlement Amount', type: 'text', required: true, placeholder: '$25,000' },
      { name: 'paymentTerms', label: 'Payment Terms', type: 'text', required: true, placeholder: 'Lump sum, installments, etc.' },
      { name: 'releasedClaims', label: 'Claims Being Released', type: 'textarea', required: true, placeholder: 'All claims related to the dispute...' },
      { name: 'confidentiality', label: 'Confidentiality Terms', type: 'textarea', required: false, placeholder: 'Non-disclosure of settlement terms...' },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  },
  {
    id: 'influencer-sponsorship',
    type: 'influencer-sponsorship' as const,
    title: 'Influencer/Sponsorship Agreement',
    description: 'Defines deliverables, content rights, and payment for social media campaigns',
    fields: [
      { name: 'brand', label: 'Brand/Company Name', type: 'text', required: true, placeholder: 'Sponsoring company' },
      { name: 'influencer', label: 'Influencer Name', type: 'text', required: true, placeholder: 'Influencer/Creator name' },
      { name: 'platforms', label: 'Social Media Platforms', type: 'text', required: true, placeholder: 'Instagram, TikTok, YouTube, etc.' },
      { name: 'campaignDescription', label: 'Campaign Description', type: 'textarea', required: true, placeholder: 'Campaign goals and messaging...' },
      { name: 'deliverables', label: 'Content Deliverables', type: 'textarea', required: true, placeholder: '3 Instagram posts, 1 story, 1 reel...' },
      { name: 'compensation', label: 'Compensation', type: 'text', required: true, placeholder: '$5,000 + free products' },
      { name: 'campaignDuration', label: 'Campaign Duration', type: 'text', required: true, placeholder: '30 days' },
      { name: 'contentRights', label: 'Content Usage Rights', type: 'textarea', required: true, placeholder: 'How the brand can use the content...' },
      { name: 'disclosureRequirements', label: 'Disclosure Requirements', type: 'textarea', required: true, placeholder: '#ad, #sponsored, FTC compliance...' },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  },
  {
    id: 'freelancer',
    type: 'freelancer',
    title: 'Freelancer Agreement',
    description: 'Comprehensive agreement for freelance work and services',
    fields: [
      { name: 'clientName', label: 'Client Name', type: 'text', required: true, placeholder: 'Client Company/Individual' },
      { name: 'freelancerName', label: 'Freelancer Name', type: 'text', required: true, placeholder: 'Your Name/Business' },
      { name: 'projectDescription', label: 'Project Description', type: 'textarea', required: true, placeholder: 'Detailed scope of work...' },
      { name: 'paymentAmount', label: 'Payment Amount', type: 'text', required: true, placeholder: '$5,000' },
      { name: 'paymentSchedule', label: 'Payment Schedule', type: 'text', required: true, placeholder: '50% upfront, 50% on completion' },
      { name: 'deadline', label: 'Project Deadline', type: 'date', required: true },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  },
  {
    id: 'partnership',
    type: 'partnership',
    title: 'Partnership Agreement',
    description: 'Business partnership agreement with profit sharing and responsibilities',
    fields: [
      { name: 'partner1', label: 'Partner 1 Name', type: 'text', required: true, placeholder: 'First Partner Name' },
      { name: 'partner2', label: 'Partner 2 Name', type: 'text', required: true, placeholder: 'Second Partner Name' },
      { name: 'businessName', label: 'Business Name', type: 'text', required: true, placeholder: 'Partnership Business Name' },
      { name: 'businessPurpose', label: 'Business Purpose', type: 'textarea', required: true, placeholder: 'Describe the business activities...' },
      { name: 'profitSplit', label: 'Profit Sharing', type: 'text', required: true, placeholder: '50/50' },
      { name: 'initialInvestment', label: 'Initial Capital', type: 'text', required: true, placeholder: '$50,000 each' },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  },
  {
    id: 'terms-conditions',
    type: 'terms-conditions' as const,
    title: 'Terms & Conditions',
    description: 'Legal agreement governing the use of website, app, or service',
    fields: [
      { name: 'companyName', label: 'Company/Service Name', type: 'text', required: true, placeholder: 'Your Company Name' },
      { name: 'serviceDescription', label: 'Service Description', type: 'textarea', required: true, placeholder: 'Describe your website/app/service...' },
      { name: 'userObligations', label: 'User Obligations', type: 'textarea', required: true, placeholder: 'What users must/cannot do...' },
      { name: 'paymentTerms', label: 'Payment Terms (if applicable)', type: 'textarea', required: false, placeholder: 'Subscription fees, refund policy...' },
      { name: 'liabilityLimits', label: 'Liability Limitations', type: 'textarea', required: true, placeholder: 'Limitations on company liability...' },
      { name: 'contactEmail', label: 'Contact Email', type: 'email', required: true, placeholder: 'legal@yourcompany.com' },
      { name: 'jurisdiction', label: 'Governing Law', type: 'text', required: true, placeholder: 'State/Country' }
    ]
  }
];

export const contractCategories = [
  {
    name: 'Business & Corporate',
    description: 'Joint ventures, distribution, agency, and corporate agreements',
    contracts: [
      'nda',
      'joint-venture',
      'reseller-agreement',
      'contractor-agreement',
      'agency-agreement',
      'partnership',
      'franchise-agreement',
      'shareholder-agreement',
      'noncompete',
      'consulting',
      'mou',
      'manufacturing-supply'
    ]
  },
  {
    name: 'Employment & HR',
    description: 'Employment contracts, offer letters, and HR documents',
    contracts: [
      'employment',
      'offer-letter',
      'termination-letter',
      'freelancer'
    ]
  },
  {
    name: 'Property & Real Estate',
    description: 'Rental agreements, leases, and real estate transactions',
    contracts: [
      'rental',
      'commercial-lease',
      'real-estate-purchase',
      'event-venue-rental'
    ]
  },
  {
    name: 'Intellectual Property & Tech',
    description: 'Software licenses, SaaS agreements, and IP protection',
    contracts: [
      'software-license',
      'saas-agreement',
      'affiliate-marketing',
      'influencer-sponsorship'
    ]
  },
  {
    name: 'Finance & Investment',
    description: 'Loans, investments, and financial agreements',
    contracts: [
      'loan',
      'investment-agreement',
      'promissory-note',
      'settlement-release'
    ]
  },
  {
    name: 'Family & Personal',
    description: 'Personal and family legal documents',
    contracts: [
      'prenuptial-agreement',
      'medical-power-attorney'
    ]
  },
  {
    name: 'Compliance & Data',
    description: 'Privacy policies, data protection, and compliance documents',
    contracts: [
      'privacy-policy',
      'gdpr-dpa',
      'terms-conditions'
    ]
  }
];