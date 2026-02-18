export interface ExperienceItem {
  role: string;
  company: string;
  period?: string; // Optional if not provided
  description: string[];
  skills: string[];
  icon: 'car' | 'wrench' | 'box' | 'briefcase';
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string[];
}

export interface ContactInfo {
  location: string;
  phone: string[];
  email: string;
}