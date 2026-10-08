import type {
  PersonalInfo,
  ExperienceItem,
  ProjectItem,
  SkillCategory,
  EducationItem,
  CertificationItem,
  LanguageItem,
  StrengthGroup,
  CareerMilestone,
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Ibrahim Atef Eltahlawy',
  title: 'Java Backend Developer',
  headline:
    'Building robust, scalable backend systems with Java, Spring Boot, Microservices, and SQL Databases.',
  summary:
    'Java Backend Developer with 2+ years of professional experience building backend applications using Java, Spring Boot, RESTful APIs, Spring Data JPA, Hibernate, and MySQL. Experienced in microservices, business-rule implementation, SQL reporting, pagination, and data management. ITI Software Engineering Fundamentals graduate with hands-on backend development experience.',
  location: 'Giza, Egypt',
  phone: '+20 111 698 6979',
  email: 'ibrahimatefelttahlawy@gmail.com',
  links: {
    github: 'https://github.com/IbrahimAtef22',
    linkedin: 'https://www.linkedin.com/in/ibrahimatef22/?isSelfProfile=true',
    hackerrank: 'https://www.hackerrank.com/profile/IbrahimAtef22',
  },
  militaryService: {
    status: 'Completed as an Officer',
    year: '2017',
    description:
      'Served as an officer during military service, developing leadership, responsibility, teamwork, and organizational skills.',
  },
};

export const experiences: ExperienceItem[] = [
  {
    id: 'solarus',
    role: 'Java Backend Developer',
    company: 'Solarus Smart Solutions',
    period: 'Jan 2025 – Jan 2026',
    responsibilities: [
      'Developed RESTful APIs using Java, Spring Boot, Spring Data JPA, and Hibernate within a microservices architecture for the Manex corporate platform.',
      'Implemented corporate billing balance allocation by product category, including validation, balance management, and exception handling.',
      'Developed merchant blacklist/whitelist policy management with business-rule validation and soft-delete handling.',
      'Built vehicle alert statistics and reporting queries using native SQL and dynamic filters to generate fuel-consumption and alert metrics.',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'Hibernate',
      'Microservices',
      'Native SQL',
      'RESTful APIs',
      'Business Rules',
    ],
  },
  {
    id: 'one-solution',
    role: 'Java Software Developer',
    company: 'One Solution',
    period: 'Jan 2024 – Jan 2025',
    responsibilities: [
      'Developed CRUD operations for electric vehicle charging stations and their chargers using Java and Spring Boot.',
      'Implemented statistics and reporting for charging stations and chargers using SQL queries.',
      'Implemented pagination and sorting for charging data using SQL queries and backend APIs.',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'SQL',
      'REST APIs',
      'Pagination & Sorting',
      'Reporting',
    ],
  },
  {
    id: 'job-hacker',
    role: 'Java Backend Developer Intern',
    company: 'Job Hacker Community',
    period: 'Mar 2023 – Sep 2023',
    responsibilities: [
      'Completed hands-on Java backend training covering OOP, MySQL, JDBC, Java Collections, Java 8, Servlets, JSP, Spring, and Spring Boot.',
      'Completed practical backend development tasks and applied mentor feedback to improve code quality and development practices.',
    ],
    technologies: [
      'Java 8',
      'Spring Boot',
      'Spring',
      'MySQL',
      'JDBC',
      'Java Collections',
      'Servlets',
      'JSP',
      'OOP',
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    category: 'Backend & Frameworks',
    isPrimary: true,
    skills: [
      'Spring Boot',
      'Spring MVC',
      'Spring Data JPA',
      'Spring Security',
      'Hibernate',
      'JPA',
      'Servlets',
      'JSP',
    ],
  },
  {
    id: 'programming',
    category: 'Programming Languages',
    isPrimary: true,
    skills: ['Java', 'SQL', 'C'],
  },
  {
    id: 'architecture',
    category: 'Architecture & Engineering Concepts',
    skills: [
      'RESTful APIs',
      'Microservices',
      'OOP',
      'SOLID Principles',
      'Design Patterns',
      'Clean Code',
      'Data Structures & Algorithms',
    ],
  },
  {
    id: 'database',
    category: 'Database & Data Management',
    skills: ['MySQL', 'SQL', 'Database Design'],
  },
  {
    id: 'testing-tools',
    category: 'Testing & API Tools',
    skills: ['JUnit', 'Postman', 'Swagger'],
  },
  {
    id: 'devops-vcs',
    category: 'Build & Version Control',
    skills: ['Maven', 'Git', 'GitHub'],
  },
  {
    id: 'web-frontend',
    category: 'Web & Frontend',
    skills: ['HTML', 'CSS', 'XML', 'Angular'],
  },
  {
    id: 'other',
    category: 'Methodologies & Practices',
    skills: ['Agile', 'Debugging'],
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'employee-management',
    title: 'Employee Management System',
    category: 'Full-Stack',
    description:
      'Built a full-stack employee management system with a Spring Boot backend and Angular frontend for managing employees and departments.',
    technologies: [
      'Java 17',
      'Spring Boot',
      'Angular',
      'MySQL',
      'MapStruct',
      'Lombok',
    ],
    features: [
      'Implemented CRUD REST APIs for employees and departments',
      'Integrated the Angular frontend with backend services',
      'DTO object mapping using MapStruct and boilerplate reduction with Lombok',
      'Relational data management and persistence using MySQL',
    ],
    links: {
      backendGithub: 'https://github.com/IbrahimAtef22/Secured-Employee-Management-Backend',
      frontendGithub: 'https://github.com/IbrahimAtef22/Secured-Employee-Management-Frontend',
    },
  },
  {
    id: 'user-service-api',
    title: 'User Service REST API',
    category: 'Backend & Security',
    description:
      'Developed a REST API for user management with CRUD operations and secured access.',
    technologies: ['Java', 'Spring Boot', 'Spring Security'],
    features: [
      'Developed REST API for comprehensive user management',
      'Full CRUD operations for user profiles and data',
      'Secured backend endpoints using Spring Security',
      'Robust API response handling and authentication flow',
    ],
    links: {
      github: 'https://github.com/IbrahimAtef22/UserService_E-Commerce-App',
    },
  },
  {
    id: 'todo-app',
    title: 'Todo App — Spring Boot',
    category: 'REST API & Database',
    description:
      'Developed a RESTful CRUD API for managing todo items using Spring Boot and MySQL.',
    technologies: ['Java', 'Spring Boot', 'MySQL'],
    features: [
      'RESTful CRUD API architecture for task lifecycle management',
      'Data persistence and schema management with MySQL',
      'Clean controller, service, and repository layer separation',
    ],
    links: {
      github: 'https://github.com/IbrahimAtef22/TodoApp-SpringBoot',
    },
  },
];

export const education: EducationItem[] = [
  {
    id: 'iti',
    degree: 'Software Engineering Fundamentals Track',
    institution: 'Information Technology Institute (ITI)',
    period: 'Apr 2021 – Aug 2021',
    details: [
      'Programming fundamentals',
      'Object-Oriented Programming (OOP)',
      'Data Structures and Algorithms',
      'Databases',
      'Web Technologies',
      'Operating Systems',
      'Networking',
      'Software Engineering',
      'Communication, Presentation, and Teamwork skills',
    ],
  },
  {
    id: 'diploma',
    degree: 'Postgraduate Diploma in Analytical Biochemistry',
    institution: 'Tanta University',
    period: '2018 – 2019',
    details: [
      'Advanced study in laboratory analytical methods, biochemical pathways, and rigorous data analysis.',
    ],
  },
  {
    id: 'bachelor',
    degree: 'Bachelor of Science in Chemistry',
    institution: 'Tanta University',
    period: '2010 – 2014',
    details: [
      'Rigorous scientific education emphasizing quantitative problem-solving, structured methodology, and analytical discipline.',
    ],
  },
];

export const certifications: CertificationItem[] = [
  {
    id: 'duke-java',
    title: 'Java Programming: Solving Problems with Software',
    issuer: 'Duke University',
    url: 'https://www.coursera.org/account/accomplishments/verify/6RACBYHCHM32',
  },
  {
    id: 'harvard-cs50x',
    title: 'CS50x: Introduction to Computer Science',
    issuer: 'Harvard University',
    url: 'https://certificates.cs50.io/9e04a3ad-8399-47ee-b7cd-0a9f4a49d123.png?size=letter',
  },
  {
    id: 'iti-se',
    title: 'Software Engineering Fundamentals',
    issuer: 'Information Technology Institute (ITI)',
    url: 'https://drive.google.com/file/d/1N5JH9zKPlwZn3aDhgQhLlVungrhADMKn/view?usp=sharing',
  },
  {
    id: 'linkedin-python',
    title: 'Learning Python',
    issuer: 'LinkedIn',
    url: 'https://www.linkedin.com/learning/certificates/033957a1d8d7675f9f7e7de6d329dd8459d7fc37b85ad28d65f3f502a9864b6d?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BPbXK0zZ4Syao6a8tujCN5g%3D%3D',
  },
  {
    id: 'linkedin-sql',
    title: 'Learning SQL Programming',
    issuer: 'LinkedIn',
    url: 'https://www.linkedin.com/learning/certificates/5455443dd79427ac107ae3ca432e0852f1ca1a2ad7c85efc91524cf709bf678a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BPbXK0zZ4Syao6a8tujCN5g%3D%3D',
  },
  {
    id: 'linkedin-db',
    title: 'Programming Foundations: Databases',
    issuer: 'LinkedIn',
    url: 'https://www.linkedin.com/learning/certificates/c829ca88b9a30e3ce7568f4d1bc0ffad24662bb5e91d36e8a765d2aea3aeed89?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BPbXK0zZ4Syao6a8tujCN5g%3D%3D',
  },
  {
    id: 'nti-web',
    title: 'Web Development using PHP, MySQL and Laravel',
    issuer: 'National Telecommunication Institute (NTI)',
    url: 'https://drive.google.com/file/d/1NgsVDgQBA_OhRipcj8HSD3iS2M50L65u/view',
  },
  {
    id: '365-excel',
    title: 'Introduction to Excel',
    issuer: '365 Data Science',
    url: 'https://learn.365datascience.com/certificates/CC-C3241C9E88/',
  },
  {
    id: '365-data-science',
    title: 'Introduction to Data and Data Science',
    issuer: '365 Data Science',
    url: 'https://learn.365datascience.com/certificates/CC-A8E94D5C58/',
  },
  {
    id: 'datacamp-ds',
    title: 'Understanding Data Science',
    issuer: 'DataCamp',
    url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/444785a9a045afbe1cf698558c4591f8edac9362',
  },
];

export const languages: LanguageItem[] = [
  {
    language: 'Arabic',
    proficiency: 'Native',
  },
  {
    language: 'English',
    proficiency: 'B1 (Intermediate)',
  },
];

export const strengths: StrengthGroup[] = [
  {
    category: 'Leadership, Teamwork & Organization',
    points: [
      'Served as an officer during military service (2017), developing strong leadership, high accountability, teamwork, and organizational discipline.',
      'Served as Team Leader for the final graduation project at ITI, coordinating team activities and driving project delivery.',
      'Collaborated effectively with cross-functional team members to discuss business requirements and technical solutions.',
    ],
  },
  {
    category: 'Self-Learning, Adaptability & Problem-Solving',
    points: [
      'Successfully transitioned from Chemistry to Software Engineering, demonstrating adaptability, persistence, and commitment to continuous learning.',
      'Developed strong problem-solving and self-learning skills through professional backend development and technical projects.',
      'Rapidly masters modern backend ecosystems, design patterns, and engineering frameworks through hands-on implementation.',
    ],
  },
  {
    category: 'Communication & Presentation',
    points: [
      'Delivered multiple technical and non-technical presentations during the ITI program, cultivating strong technical communication skills.',
      'Proactively engages with peers, mentors, and business stakeholders to translate domain rules into clean, maintainable backend code.',
    ],
  },
];

export const careerMilestones: CareerMilestone[] = [
  {
    period: '2010 – 2014',
    stage: 'Academic Foundation',
    domain: 'B.Sc. in Chemistry — Tanta University',
    description:
      'Cultivated analytical thinking, precision, quantitative research methodology, and methodical hypothesis testing.',
  },
  {
    period: '2017',
    stage: 'Military Service',
    domain: 'Military Service as an Officer',
    description:
      'Forged decisive leadership, crisis management, disciplined execution, organizational structure, and operational responsibility.',
  },
  {
    period: '2018 – 2019',
    stage: 'Advanced Postgrad',
    domain: 'Diploma in Analytical Biochemistry — Tanta University',
    description:
      'Deepened analytical rigor and scientific problem-solving through specialized biochemistry coursework and laboratory systems.',
  },
  {
    period: '2021',
    stage: 'The Engineering Transition',
    domain: 'Software Engineering Fundamentals — ITI',
    description:
      'Completed intensive government-sponsored engineering track covering algorithms, OOP, databases, networks, and systems. Led final capstone team.',
    highlight: true,
  },
  {
    period: '2023',
    stage: 'Backend Immersion',
    domain: 'Java Backend Intern — Job Hacker Community',
    description:
      'Hands-on immersion in enterprise Java, JDBC, Servlets, Spring Boot, and database architectures under industry mentorship.',
  },
  {
    period: '2024 – 2025',
    stage: 'Professional Production',
    domain: 'Java Software Developer — One Solution',
    description:
      'Engineered electric vehicle charging station CRUD micro-services, SQL reporting, pagination, and sorting APIs.',
    highlight: true,
  },
  {
    period: '2025 – 2026',
    stage: 'Enterprise Microservices',
    domain: 'Java Backend Developer — Solarus Smart Solutions',
    description:
      'Architected REST APIs for Manex corporate platform, implemented billing balance allocation, blacklist/whitelist policies, and native SQL alert analytics.',
    highlight: true,
  },
];

export const recruiterSnapshotData = {
  yearsExperience: '2+ Years',
  primaryRole: 'Java Backend Developer',
  coreStack: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'MySQL', 'REST APIs', 'Microservices'],
  locationStatus: 'Giza, Egypt (Available for Remote International & Relocation / Freelance)',
  educationSummary: 'ITI Software Engineering Graduate & B.Sc. in Chemistry',
  englishLevel: 'B1 (Intermediate) | Arabic: Native',
  openTo: [
    'Java Backend Developer Roles',
    'Java / Spring Boot Developer Opportunities',
    'Software Engineer Roles',
    'Remote International Opportunities',
    'Freelance / Backend Development Contracts',
  ],
};
