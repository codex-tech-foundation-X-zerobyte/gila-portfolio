export interface Profile {
  name: string;
  title: string;
  shortDescription: string;
  personalStory: string;
  location: string;
  email: string;
  phone?: string;
  profileImage?: string;
  resumeUrl?: string;
  availability?: string;
}

export interface Skill {
  name: string;
  category: string;
  proficiency: number; // 0-100
  level: string;
  description: string;
}

export interface Technology {
  name: string;
  level: string;
  icon: string;
}

export interface Project {
  name: string;
  shortDescription: string;
  detailedDescription: string;
  type: string;
  technologies: string[];
  role: string;
  features: { title: string; description: string }[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  status: string;
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationEntry {
  institution: string;
  course: string;
  startYear: string;
  endYear: string;
  description?: string;
}

export interface Certification {
  title: string;
  organization: string;
  date: string;
  credentialUrl?: string;
  description?: string;
}

export interface Service {
  name: string;
  description: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  devto?: string;
  hashnode?: string;
  fiverr?: string;
  upwork?: string;
  freelancer?: string;
  other?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  photo?: string;
}
