export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  category: 'web-software' | 'it-training' | 'ms-office' | 'creative-video';
  icon: string;
  description: string;
  features: string[];
  highlights: string[];
  accentColor: string;
  bgGrad: string;
  deliverables?: string[];
  subCategories?: {
    name: string;
    icon: string;
    items: string[];
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  serviceCategory: string;
  avatar: string;
  rating: number;
  quote: string;
  outcome: string;
  verified: boolean;
  date: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  timeline: string;
  budget: string;
  message: string;
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
  referenceId: string;
  inquiry: {
    id: string;
    name: string;
    email: string;
    phone: string;
    service: string;
    timeline: string;
    budget: string;
    message: string;
    submittedAt: string;
    status: string;
    recipient: string;
  };
  whatsappUrl: string;
}
