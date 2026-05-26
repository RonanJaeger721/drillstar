export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string; // Lucide icon name string
  image: string; // Generated asset or fallback
  details: string[]; // Detailed list of bullet points
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  timeframe: string;
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'drilling' | 'solar' | 'survey' | 'testing';
  image: string;
  location: string;
  year: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  organization?: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  serviceType: string;
  clientType: 'homeowner' | 'farm' | 'school' | 'business' | 'other';
  message: string;
  urgency: 'flexible' | 'soon' | 'immediate';
  subscribeNews?: boolean;
}
