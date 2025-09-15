export interface User {
  id: string;
  email: string;
  isPremium: boolean;
  premiumExpiryDate?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Contract {
  id: string;
  type: 'nda' | 'freelancer' | 'employment' | 'partnership' | 'rental' | 'loan' | 'sales' | 'shareholder' | 'noncompete' | 'mou' | 'privacy-policy' | 'terms-conditions' | 'consulting' | 'sla' | 'business-purchase' | 'joint-venture' | 'reseller-agreement' | 'contractor-agreement' | 'agency-agreement' | 'offer-letter' | 'termination-letter' | 'commercial-lease' | 'real-estate-purchase' | 'software-license' | 'saas-agreement' | 'investment-agreement' | 'promissory-note' | 'prenuptial-agreement' | 'medical-power-attorney' | 'gdpr-dpa' | 'franchise-agreement' | 'shareholder-agreement' | 'event-venue-rental' | 'affiliate-marketing' | 'manufacturing-supply' | 'settlement-release' | 'influencer-sponsorship';
  title: string;
  description: string;
  fields: ContractField[];
}

export interface ContractField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'date' | 'textarea' | 'number';
  required: boolean;
  placeholder?: string;
}

export interface ContractData {
  contractType: string;
  formData: Record<string, string>;
  generatedContent?: string;
}