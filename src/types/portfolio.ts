export interface PersonalInfo {
  name: string;
  title: string;
  headline: string;
  summary: string;
  location: string;
  phone: string;
  email: string;
  links: {
    github: string;
    linkedin: string;
    hackerrank: string;
  };
  militaryService: {
    status: string;
    year: string;
    description: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Full-Stack' | 'Backend & Security' | 'REST API & Database';
  description: string;
  technologies: string[];
  features: string[];
  links: {
    github?: string;
    backendGithub?: string;
    frontendGithub?: string;
  };
}

export interface SkillCategory {
  id: string;
  category: string;
  isPrimary?: boolean;
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  url: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
}

export interface StrengthGroup {
  category: string;
  points: string[];
}

export interface CareerMilestone {
  period: string;
  stage: string;
  domain: string;
  description: string;
  highlight?: boolean;
}
