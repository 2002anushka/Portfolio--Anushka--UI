export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  category: 'SAAS & BILLING' | 'PROPERTY INTELLIGENCE' | 'HOSPITALITY & POS' | 'IOT & TELEMETRY' | 'FIELD COLLECTION & FINTECH';
  summary: string;
  architectureHighlights: string[];
  keyOutcomes: string[];
  metrics: { label: string; value: string }[];
  techStack: string[];
  status: 'PRODUCTION' | 'RELEASED';
  liveUrl?: string;
  accessNote?: string;
  requiresAuth?: boolean;
  mobileApp?: MobileAppDetails;
}

export interface MobileScreenItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tag?: string;
  description?: string;
}

export interface MobileAppDetails {
  appName: string;
  framework: string;
  platformSummary: string;
  screens: MobileScreenItem[];
}

export interface SkillCategory {
  id: string;
  category: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  platformsDelivered: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  certificationNumber?: string;
  score?: string;
  verificationUrl?: string;
  imagePath: string;
  badgeType: 'azure' | 'aws' | 'oracle' | 'cisco' | 'award';
  description: string;
  skills: string[];
  featured?: boolean;
}

export interface AwardItem {
  id: string;
  title: string;
  event: string;
  organization: string;
  placement: string;
  year: string;
  description: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  result: string;
  coursework: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    location: string;
    email: string;
    phone: string;
    bio: string;
    heroHeadline: string;
    heroStatement: string;
    experienceYears: string;
    platformsDeliveredCount: number;
    latencyReduction: string;
    githubUrl: string;
    linkedinUrl: string;
    statusBadge: string;
  };
  projects: ProjectItem[];
  skills: SkillCategory[];
  experience: ExperienceItem[];
  certifications: CertificationItem[];
  awards: AwardItem[];
  education: EducationItem[];
}
