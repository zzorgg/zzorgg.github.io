export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  startDate: string;
  endDate?: string;
  status: 'In Progress' | 'Completed';
  githubUrl?: string;
  liveUrl?: string;
  icon: string;
  gradientFrom: string;
  gradientTo: string;
}

export const projects: Project[] = [
  {
    id: "smart-contact-manager",
    title: "Smart Contact Manager",
    description: "A secure, full-stack contact management web application. Features CRUD for contacts, authentication, and a responsive UI. Built with Spring Boot.",
    technologies: ["Java", "Spring Boot", "Thymeleaf", "MySQL"],
    startDate: "Jan 2025",
    status: "In Progress",
    githubUrl: "https://github.com/zzorgg/SmartContactManager",
    icon: "📱",
    gradientFrom: "from-blue-100 to-blue-200",
    gradientTo: "dark:from-blue-900 dark:to-blue-800"
  },
  {
    id: "mathjx",
    title: "mathJX",
    description: "Java library for core math algorithms: logarithms, prime sieves, fast exponentiation, and more. Designed for performance and clarity.",
    technologies: ["Java", "Mathematics", "Algorithms"],
    startDate: "March 2025",
    status: "In Progress",
    githubUrl: "https://github.com/zzorgg/mathjx",
    icon: "🧮",
    gradientFrom: "from-green-100 to-green-200",
    gradientTo: "dark:from-green-900 dark:to-green-800"
  }
];