import { FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaAws, FaDocker, FaSyncAlt } from 'react-icons/fa';

export type ProjectCategory = 'web' | 'backend' | 'devops' | 'mobile';

// Technical Skills
export const technicalSkills = [
  {
    name: "JavaScript",
    icon: "fab fa-js",
    proficiency: 95,
    level: "Expert"
  },
  {
    name: "React",
    icon: "fab fa-react",
    proficiency: 90,
    level: "Expert"
  },
  {
    name: "Node.js",
    icon: "fab fa-node-js",
    proficiency: 85,
    level: "Advanced"
  },
  {
    name: "Python",
    icon: "fab fa-python",
    proficiency: 75,
    level: "Advanced"
  },
  {
    name: "SQL/NoSQL",
    icon: "fas fa-database",
    proficiency: 80,
    level: "Advanced"
  },
  {
    name: "AWS",
    icon: "fab fa-aws",
    proficiency: 85,
    level: "Advanced"
  },
  {
    name: "Docker",
    icon: "fab fa-docker",
    proficiency: 80,
    level: "Advanced"
  },
  {
    name: "CI/CD",
    icon: "fas fa-sync-alt",
    proficiency: 85,
    level: "Advanced"
  }
];

// Areas of Expertise
export const expertiseAreas = [
  {
    title: "Full-Stack Development",
    icon: "fas fa-laptop-code",
    bgColor: "bg-primary",
    description: "End-to-end application development with modern frameworks, RESTful APIs, and responsive design principles."
  },
  {
    title: "Cloud Architecture",
    icon: "fas fa-cloud",
    bgColor: "bg-secondary",
    description: "Designing resilient, scalable cloud solutions using AWS, Azure, and GCP with infrastructure as code."
  },
  {
    title: "DevOps & CI/CD",
    icon: "fas fa-server",
    bgColor: "bg-accent",
    description: "Building automated pipelines for testing, deployment, and monitoring to ensure reliable delivery."
  },
  {
    title: "Responsive UI/UX",
    icon: "fas fa-mobile-alt",
    bgColor: "bg-primary",
    description: "Creating intuitive, accessible user interfaces that provide excellent experiences across all devices."
  },
  {
    title: "Microservices",
    icon: "fas fa-cogs",
    bgColor: "bg-secondary",
    description: "Building and scaling distributed systems using microservices architecture and container orchestration."
  },
  {
    title: "API Development",
    icon: "fas fa-code-branch",
    bgColor: "bg-accent",
    description: "Designing and implementing robust, well-documented APIs following REST or GraphQL principles."
  }
];

// Work Experience
export const experiences = [
  {
    title: "Senior Software Engineer",
    company: "TechCorp Inc.",
    period: "2020 - Present",
    description: "Led a team of 5 developers building a microservices architecture. Implemented CI/CD pipelines and reduced deployment time by 40%. Architected scalable solutions using AWS and Kubernetes.",
    skills: [
      { name: "React", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
      { name: "Node.js", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
      { name: "AWS", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300" },
      { name: "Kubernetes", color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300" }
    ],
    icon: "fa-briefcase"
  },
  {
    title: "Software Developer",
    company: "Innovative Solutions",
    period: "2018 - 2020",
    description: "Developed and maintained multiple full-stack web applications. Created responsive UIs and optimized database queries to improve performance. Collaborated with cross-functional teams for product launches.",
    skills: [
      { name: "JavaScript", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" },
      { name: "Angular", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
      { name: "MongoDB", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" },
      { name: "Express.js", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" }
    ],
    icon: "fa-code"
  },
  {
    title: "Junior Developer",
    company: "StartUp Ventures",
    period: "2017 - 2018",
    description: "Worked on front-end development for a SaaS platform. Built reusable UI components and implemented responsive designs. Assisted with API integrations and user authentication systems.",
    skills: [
      { name: "HTML/CSS", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" },
      { name: "jQuery", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
      { name: "PHP", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
      { name: "MySQL", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" }
    ],
    icon: "fa-laptop-code"
  }
];

// Projects
export const projects = [
  {
    title: "E-commerce Dashboard",
    description: "A comprehensive admin dashboard for e-commerce businesses with real-time analytics, inventory management, and order processing.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    category: "web" as ProjectCategory,
    categoryLabel: "Web Development",
    categoryColor: "bg-primary",
    technologies: ["React", "Redux", "Node.js", "MongoDB"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    title: "Financial API Service",
    description: "A secure microservices-based API for financial data processing with authentication, rate limiting, and data validation.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    category: "backend" as ProjectCategory,
    categoryLabel: "Backend",
    categoryColor: "bg-secondary",
    technologies: ["Node.js", "Express", "PostgreSQL", "Redis"],
    githubUrl: "#",
    demoUrl: "#",
    docsUrl: "#"
  },
  {
    title: "CI/CD Pipeline Automation",
    description: "A comprehensive CI/CD solution using GitHub Actions, Docker, and Kubernetes for automated testing and deployment.",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "devops" as ProjectCategory,
    categoryLabel: "DevOps",
    categoryColor: "bg-accent",
    technologies: ["GitHub Actions", "Docker", "Kubernetes", "Terraform"],
    githubUrl: "#",
    demoUrl: "#",
    docsUrl: "#"
  },
  {
    title: "Fitness Tracker App",
    description: "A cross-platform mobile application for tracking workouts, nutrition, and fitness progress with social features.",
    image: "https://images.unsplash.com/photo-1605170439002-90845e45c0f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "mobile" as ProjectCategory,
    categoryLabel: "Mobile",
    categoryColor: "bg-primary",
    technologies: ["React Native", "Firebase", "Redux", "GraphQL"],
    githubUrl: "#",
    demoUrl: "#",
    appStoreUrl: "#"
  },
  {
    title: "Content Management System",
    description: "A headless CMS with a customizable admin interface, content modeling, and API-first architecture.",
    image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "web" as ProjectCategory,
    categoryLabel: "Web Development",
    categoryColor: "bg-primary",
    technologies: ["React", "Node.js", "GraphQL", "MongoDB"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    title: "Authentication Microservice",
    description: "A secure authentication and authorization service with OAuth, JWT, and multi-factor authentication support.",
    image: "https://images.unsplash.com/photo-1576400883215-7083980b6193?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    category: "backend" as ProjectCategory,
    categoryLabel: "Backend",
    categoryColor: "bg-secondary",
    technologies: ["Node.js", "JWT", "OAuth2", "MongoDB"],
    githubUrl: "#",
    demoUrl: "#",
    docsUrl: "#"
  }
];
