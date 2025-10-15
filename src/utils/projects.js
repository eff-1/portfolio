// Project data for portfolio section
export const projectsData = [
  {
    id: 1,
    title: "Edunexs LearnSphere",
    description: "Smart CBT Exam Practice Platform for standardized test preparation",
    longDescription: `Edunexs LearnSphere is an interactive Computer-Based Testing (CBT) practice and analytics platform designed to help students prepare effectively for major standardized exams like JAMB, WAEC, NECO, WASSCE, SAT, and ACT. 

It offers real-time analytics, adaptive question sets, expert tutor integration, and a personalized dashboard to monitor learning progress and performance over time.

Built with React, Node.js, and Express, and backed by MongoDB, the system emphasizes scalability, responsive design, and real-time updates. Users can monitor their study streaks, view weak and strong subjects, and engage in both practice sessions and timed mock exams.

The project addresses the problem of unstructured exam preparation and limited access to realistic test simulations. By combining performance analytics, adaptive insights, and clean UI/UX, Edunexs LearnSphere offers an efficient, user-focused solution that enhances exam readiness and learning consistency.`,
    images: [
      "/assets/projects/edunexs-leransphere.png",
      "/assets/projects/edunexs-leransphere2.jpg"
    ],
    category: "fullstack",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Vercel"],
    liveLink: "https://edunexs-client.vercel.app/",
    githubLink: "https://github.com/haftech/edunexs-learnsphere",
    featured: true
  },
  {
    id: 2,
    title: "Chatify",
    description: "Real-Time Chat Application with advanced messaging features",
    longDescription: `Chatify is a production-ready, full-stack real-time chat application that demonstrates modern web development best practices, real-time communication technologies, and professional UI/UX design principles.

**Core Features:**
- Real-Time Messaging System with instant delivery via WebSocket connections
- General chat (public) and private one-on-one conversations
- Message types: text, images, files, voice recordings
- Reply, edit, delete, and react to messages
- Delivery status: sending → sent → delivered → seen
- Live typing indicators and online/offline user status

**Media Handling:**
- Voice recording with playback controls and waveform visualization
- Image preview and inline display
- File attachments with download functionality
- 10MB file size limit with validation

**Technical Highlights:**
- Real-Time Performance: Sub-second message delivery
- Scalability: Handles multiple concurrent users
- Security: JWT authentication, input validation, XSS protection
- Responsive Design: Mobile-first approach (320px to 4K screens)
- WhatsApp-Inspired UX with glassmorphism effects`,
    images: [
      "/assets/projects/chatiify.jpg"
    ],
    category: "fullstack",
    technologies: ["React", "Node.js", "Socket.io", "Supabase", "Express", "PostgreSQL"],
    liveLink: "https://chatiify-mauve.vercel.app/",
    githubLink: "https://github.com/haftech/chatify",
    featured: true
  },
  {
    id: 3,
    title: "Real Estate Platform",
    description: "Modern property listing and management system",
    longDescription: "Complete real estate platform with property listings, virtual tours, agent profiles, and advanced search functionality built with Next.js.",
    images: [
      "/assets/projects/hero-back.jpg"
    ],
    category: "frontend",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    liveLink: "#",
    githubLink: "#",
    featured: false
  },
  {
    id: 4,
    title: "CRM System",
    description: "Customer relationship management solution",
    longDescription: "Comprehensive CRM system for managing customer relationships, sales pipeline, and team collaboration with advanced reporting features.",
    images: [
      "/assets/projects/hero-back.jpg"
    ],
    category: "fullstack",
    technologies: ["React", "PHP", "MySQL", "Bootstrap"],
    liveLink: "#",
    githubLink: "#",
    featured: false
  },
  {
    id: 5,
    title: "Task Management App",
    description: "Collaborative project management platform",
    longDescription: "Feature-rich task management application with team collaboration, time tracking, project templates, and productivity analytics.",
    images: [
      "/assets/projects/hero-back.jpg"
    ],
    category: "frontend",
    technologies: ["React", "Redux", "Firebase", "Material-UI"],
    liveLink: "#",
    githubLink: "#",
    featured: false
  },
  {
    id: 6,
    title: "Restaurant POS",
    description: "Point-of-sale system for restaurants",
    longDescription: "Complete restaurant management system with order processing, inventory tracking, staff management, and detailed analytics dashboard.",
    images: [
      "/assets/projects/hero-back.jpg"
    ],
    category: "backend",
    technologies: ["Node.js", "Express", "PostgreSQL", "Vue.js"],
    liveLink: "#",
    githubLink: "#",
    featured: false
  },
  {
    id: 7,
    title: "E-Commerce Store",
    description: "Modern online shopping platform with payment integration",
    longDescription: `A comprehensive e-commerce solution built with modern web technologies, featuring a sleek user interface and robust backend functionality.

**Key Features:**
- Product catalog with advanced filtering and search
- Shopping cart and wishlist functionality
- Secure payment processing with Stripe integration
- User authentication and profile management
- Order tracking and history
- Admin dashboard for inventory management
- Responsive design for all devices
- SEO optimized product pages

**Technical Implementation:**
- Built with React and Next.js for optimal performance
- Node.js backend with Express framework
- MongoDB database for scalable data storage
- JWT authentication for secure user sessions
- Cloudinary integration for image management
- Email notifications for order updates

This project demonstrates full-stack development skills, payment gateway integration, and modern e-commerce best practices.`,
    images: [
      "/assets/projects/hero-back.jpg"
    ],
    category: "fullstack",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
    featured: false
  },
  {
    id: 8,
    title: "Weather Dashboard",
    description: "Interactive weather application with forecasting",
    longDescription: `A beautiful and intuitive weather dashboard that provides real-time weather information and forecasts for locations worldwide.

**Core Features:**
- Current weather conditions with detailed metrics
- 7-day weather forecast with hourly breakdowns
- Interactive weather maps with radar and satellite imagery
- Location-based weather alerts and notifications
- Weather history and trends analysis
- Customizable dashboard with favorite locations
- Dark/light theme support
- Offline functionality with cached data

**Technical Highlights:**
- Built with React and TypeScript for type safety
- Integration with OpenWeatherMap API
- Geolocation services for automatic location detection
- Progressive Web App (PWA) capabilities
- Chart.js for weather data visualization
- Local storage for user preferences
- Responsive design with CSS Grid and Flexbox

Perfect example of API integration, data visualization, and modern frontend development practices.`,
    images: [
      "/assets/projects/hero-back.jpg"
    ],
    category: "frontend",
    technologies: ["React", "TypeScript", "Chart.js", "PWA", "CSS Grid", "OpenWeather API"],
    liveLink: "#",
    githubLink: "#",
    featured: false
  },
  {
    id: 9,
    title: "Social Media Analytics",
    description: "Comprehensive social media monitoring and analytics platform",
    longDescription: `An advanced analytics platform that helps businesses track, analyze, and optimize their social media presence across multiple platforms.

**Platform Features:**
- Multi-platform social media monitoring (Twitter, Instagram, Facebook, LinkedIn)
- Real-time engagement tracking and sentiment analysis
- Competitor analysis and benchmarking tools
- Automated reporting with customizable dashboards
- Content performance analytics and optimization suggestions
- Influencer identification and outreach management
- Social listening for brand mentions and trends
- ROI tracking for social media campaigns

**Technical Architecture:**
- Microservices architecture with Docker containers
- React frontend with Redux for state management
- Node.js backend with Express and GraphQL
- PostgreSQL database with Redis caching
- Machine learning models for sentiment analysis
- Real-time data processing with WebSockets
- Automated data collection with scheduled jobs
- RESTful APIs for third-party integrations

This project showcases advanced full-stack development, data analytics, machine learning integration, and scalable system architecture.`,
    images: [
      "/assets/projects/hero-back.jpg"
    ],
    category: "fullstack",
    technologies: ["React", "Node.js", "GraphQL", "PostgreSQL", "Redis", "Docker", "Machine Learning"],
    liveLink: "#",
    githubLink: "#",
    featured: false
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