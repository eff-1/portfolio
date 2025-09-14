// Project data for portfolio section
export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "Full-stack admin dashboard for e-commerce management",
    longDescription: "Comprehensive admin dashboard built with React and Node.js featuring inventory management, order tracking, customer analytics, and real-time notifications.",
    image: "/assets/projects/ecommerce-dash.jpg",
    category: "fullstack",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    liveLink: "https://demo-ecommerce-dash.com",
    githubLink: "https://github.com/haftech/ecommerce-dashboard",
    featured: true
  },
  {
    id: 2,
    title: "Real Estate Platform",
    description: "Modern property listing and management system",
    longDescription: "Complete real estate platform with property listings, virtual tours, agent profiles, and advanced search functionality built with Next.js.",
    image: "/assets/projects/real-estate.jpg",
    category: "frontend",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    liveLink: "https://demo-realestate.com",
    githubLink: "https://github.com/haftech/real-estate",
    featured: true
  },
  {
    id: 3,
    title: "CRM System",
    description: "Customer relationship management solution",
    longDescription: "Comprehensive CRM system for managing customer relationships, sales pipeline, and team collaboration with advanced reporting features.",
    image: "/assets/projects/crm-system.jpg",
    category: "fullstack",
    technologies: ["React", "PHP", "MySQL", "Bootstrap"],
    liveLink: "https://demo-crm.com",
    githubLink: "https://github.com/haftech/crm-system",
    featured: false
  },
  {
    id: 4,
    title: "Task Management App",
    description: "Collaborative project management platform",
    longDescription: "Feature-rich task management application with team collaboration, time tracking, project templates, and productivity analytics.",
    image: "/assets/projects/task-manager.jpg",
    category: "frontend",
    technologies: ["React", "Redux", "Firebase", "Material-UI"],
    liveLink: "https://demo-taskmanager.com",
    githubLink: "https://github.com/haftech/task-manager",
    featured: false
  },
  {
    id: 5,
    title: "Restaurant POS",
    description: "Point-of-sale system for restaurants",
    longDescription: "Complete restaurant management system with order processing, inventory tracking, staff management, and detailed analytics dashboard.",
    image: "/assets/projects/restaurant-pos.jpg",
    category: "backend",
    technologies: ["Node.js", "Express", "PostgreSQL", "Vue.js"],
    liveLink: "https://demo-restaurant-pos.com",
    githubLink: "https://github.com/haftech/restaurant-pos",
    featured: true
  },
  {
    id: 6,
    title: "Learning Management System",
    description: "Online education platform",
    longDescription: "Comprehensive LMS with course creation, student enrollment, progress tracking, assignments, quizzes, and certificate generation.",
    image: "/assets/projects/lms-platform.jpg",
    category: "fullstack",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    liveLink: "https://demo-lms.com",
    githubLink: "https://github.com/haftech/lms-platform",
    featured: false
  },
  {
    id: 7,
    title: "Weather Analytics Dashboard",
    description: "Real-time weather data visualization",
    longDescription: "Interactive weather dashboard with real-time data, forecasting, historical analysis, and customizable alerts for multiple locations.",
    image: "/assets/projects/weather-dashboard.jpg",
    category: "frontend",
    technologies: ["React", "D3.js", "Weather API", "Charts.js"],
    liveLink: "https://demo-weather.com",
    githubLink: "https://github.com/haftech/weather-dashboard",
    featured: false
  },
  {
    id: 8,
    title: "Social Media Manager",
    description: "Multi-platform social media management",
    longDescription: "Comprehensive social media management tool for scheduling posts, analytics tracking, engagement monitoring across multiple platforms.",
    image: "/assets/projects/social-manager.jpg",
    category: "backend",
    technologies: ["Node.js", "Python", "Redis", "React"],
    liveLink: "https://demo-socialmgr.com",
    githubLink: "https://github.com/haftech/social-manager",
    featured: false
  },
  {
    id: 9,
    title: "Crypto Trading Bot",
    description: "Automated cryptocurrency trading system",
    longDescription: "Advanced trading bot with multiple strategies, risk management, portfolio tracking, and real-time market analysis for cryptocurrency trading.",
    image: "/assets/projects/crypto-bot.jpg",
    category: "backend",
    technologies: ["Python", "FastAPI", "WebSocket", "TradingView"],
    liveLink: "https://demo-cryptobot.com",
    githubLink: "https://github.com/haftech/crypto-bot",
    featured: true
  }
];

// Filter categories for portfolio
export const categories = [
  { id: 'all', name: 'All Projects', count: projectsData.length },
  { id: 'frontend', name: 'Frontend', count: projectsData.filter(p => p.category === 'frontend').length },
  { id: 'backend', name: 'Backend', count: projectsData.filter(p => p.category === 'backend').length },
  { id: 'fullstack', name: 'Full Stack', count: projectsData.filter(p => p.category === 'fullstack').length }
];

// Get projects by category
export const getProjectsByCategory = (category) => {
  if (category === 'all') return projectsData;
  return projectsData.filter(project => project.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured);
};