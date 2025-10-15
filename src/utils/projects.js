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