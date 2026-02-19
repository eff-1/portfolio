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
    githubLink: "https://github.com/eff-1/chatox",
    featured: true
  },
  {
    id: 3,
    title: "Terraaqua Environmental",
    description: "Corporate website for environmental consultancy and industrial services",
    longDescription: `Terraaqua.com.ng is a comprehensive corporate website for Terra Aqua Environmental Consultancy Limited, showcasing their business divisions and environmental services across Nigeria.

**Business Divisions:**
- Environmental Consultancy Services
- Terra Alloy (Metal Recycling Plant)
- Tyre Pyrolysis Plant
- Terra Shop (Commercial retail segment for industrial products)

**Core Services:**
- Environmental impact assessments and studies
- Environmental engineering solutions
- Industrial and commercial cleaning services
- Professional pest control management
- Safety, Health & Environmental Management (SHE)
- Manpower training and executive development programs

**Technical Implementation:**
- Built with WordPress CMS for flexible content management
- Responsive design using modern Flexbox layout
- Custom theme development with SCSS preprocessing
- Interactive modal system for enhanced user engagement
- Optimized SVG inline icons for fast loading
- PHP backend with MySQL database
- Mobile-first approach for all device sizes
- SEO optimization for search visibility

**Site Structure:**
The website organizes content around the company's business divisions, providing detailed information about each service line, completed projects, and available products. Terra Shop serves as the integrated e-commerce segment, offering industrial and commercial products including cleaning materials, safety equipment, and environmental supplies.

**Business Impact:**
The platform successfully establishes Terra Aqua's digital presence, enabling clients to explore services, request consultations, and purchase products online, while showcasing the company's expertise in environmental management and industrial solutions.`,
    images: [
      "/assets/projects/terraaqua.jpeg"
    ],
    category: "fullstack",
    technologies: ["WordPress", "PHP", "MySQL", "SCSS", "JavaScript", "jQuery", "HTML5", "CSS3"],
    liveLink: "https://terraaqua.com.ng/",
    githubLink: "#",
    featured: false
  },
  {
    id: 4,
    title: "Jimmarof Marketplace",
    description: "Multi-vendor e-commerce platform for automotive and general products",
    longDescription: `Jimmarof is a comprehensive online e-commerce marketplace offering a wide range of products across multiple categories. Positioned as Nigeria's "ultimate online auto hub," the platform extends beyond automotive to serve as a full-featured marketplace supporting diverse product categories and multiple vendors.

**Product Categories:**
- Automotive parts and accessories
- Electronics and gadgets
- Fashion and apparel
- Home goods and furniture
- Pet supplies and accessories
- Beauty and personal care products
- Sports and outdoor equipment
- Tools and hardware

**Platform Features:**
- Multi-vendor system enabling third-party sellers to register and manage stores
- Advanced product search and filtering across all categories
- Detailed product pages with specifications, images, and pricing
- Shopping cart with saved items and wishlist functionality
- Comprehensive user account management for buyers and sellers
- Order tracking and purchase history
- Seller dashboard for inventory and sales management
- Review and rating system for products and sellers
- Secure checkout process with multiple payment options

**Technical Stack:**
- Custom PHP-based backend architecture
- MySQL database for scalable product and user data management
- Bootstrap framework for responsive, mobile-friendly design
- Payment integration with Nigerian gateways (Paystack, Flutterwave)
- RESTful API structure for vendor operations
- Secure authentication and authorization system
- Session management for cart persistence
- Image optimization for fast loading

**Business Impact:**
The platform successfully bridges the gap between automotive specialty retail and general marketplace commerce, providing a unified shopping experience for Nigerian consumers while empowering local vendors and small businesses to reach a wider audience online. The multi-vendor model creates a thriving ecosystem for both buyers and sellers.`,
    images: [
      "/assets/projects/jimarouf.jpeg"
    ],
    category: "fullstack",
    technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "Paystack", "HTML5", "CSS3", "REST API"],
    liveLink: "https://jimmarof.com/",
    githubLink: "#",
    featured: false
  },
  {
    id: 5,
    title: "Raws Apparel",
    description: "Full-stack fashion platform with Firebase and Pinterest API integration",
    longDescription: `Raws Apparel is a modern full-stack web application built for a tailoring brand to showcase designs, organize collections, and streamline customer inquiries. The platform moves beyond social-media-only selling to create a structured, searchable, and professional digital presence.

**Key Features:**
- Unified search combining Firebase database with Pinterest API integration
- Admin dashboard for uploading, editing, and featuring designs
- Dynamic style categories: gowns, suits, agbada, casual wear
- "Get This Style" button generating prefilled WhatsApp messages
- Cloudinary CDN for optimized image storage and delivery
- Premium "Ebony Gold" design system
- Fully responsive UI across all devices

**Technical Architecture:**
- Frontend: Vue 3 + Tailwind CSS (built with Vite)
- Backend: Node.js + Express (deployed on Render)
- Database: Firebase Firestore for real-time data
- Image Hosting: Cloudinary for optimized delivery
- API Integration: Pinterest API for design inspiration
- Hosting: Netlify for frontend deployment

**Business Impact:**
The platform intelligently merges admin-uploaded designs with external inspiration from Pinterest, creating a unified gallery experience. Each design includes WhatsApp integration that reduces friction between discovery and customer engagement, directly supporting real business workflow.

**What This Demonstrates:**
- Full-stack architecture design
- Multiple API integration and data merging
- Cloud deployment and environment configuration
- Clean UI system design with custom theming
- Real-world business problem solving
- Modern framework implementation (Vue 3)

Raws Apparel highlights the ability to build scalable, production-ready systems using modern frameworks and free-tier cloud infrastructure while solving actual business challenges.`,
    images: [
      "/assets/projects/rawsapparel.jpeg"
    ],
    category: "fullstack",
    technologies: ["Vue.js", "Node.js", "Firebase", "Tailwind CSS", "Express", "Cloudinary", "Pinterest API"],
    liveLink: "https://rawsapparel.vercel.app/",
    githubLink: "https://github.com/eff-1/rawsapparel",
    featured: true,
    ongoing: true
  },
  {
    id: 6,
    title: "Blessing Poultries NG",
    description: "Poultry farm website with e-commerce and WhatsApp ordering",
    longDescription: `Blessing Poultries NG is a modern full-stack website and e-commerce platform for a poultry farm, combining a professional farm profile with a seamless online ordering experience. Customers can browse products and order directly via WhatsApp.

**Core Features:**
- Responsive UI: Clean, mobile-friendly design using React and Tailwind CSS
- Product Catalog: Live birds, eggs, processed chicken, and poultry feed
- WhatsApp Ordering: Instant order placement via WhatsApp integration
- Cart & Checkout: Add products, review orders, and confirm via WhatsApp
- Payment Integration: Secure payment options and instant messaging
- User Management: Registration and login with JWT authentication
- Admin Dashboard: Inventory management, product updates, order tracking
- Scalable Backend: Node.js and Express with MongoDB

**Product Categories:**
- Live birds (broilers, layers, cockerels)
- Fresh eggs (crates and trays)
- Processed chicken (whole, parts, frozen)
- Poultry feed and supplements
- Farm equipment and supplies

**Technical Implementation:**
- Frontend: React with Tailwind CSS for modern, responsive design
- Backend: Node.js + Express REST API
- Database: MongoDB for flexible data storage
- Authentication: JWT-based secure user sessions
- Payment: Integration with Nigerian payment gateways
- Messaging: WhatsApp Business API integration
- Hosting: Cloud deployment for reliability

**Business Value:**
This platform effectively digitizes Blessing Poultries NG, making farm operations and customer sales seamless. It combines a professional farm showcase with an intuitive e-commerce workflow, using WhatsApp as a core channel to drive orders and customer engagement. The system reduces manual order processing while expanding the farm's reach beyond local customers.`,
    images: [
      "/assets/projects/bls-poulrty.jpeg"
    ],
    category: "fullstack",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "JWT", "WhatsApp API"],
    liveLink: "https://blessing-poultry.vercel.app/",
    githubLink: "https://github.com/eff-1/Blessing-Poultry",
    featured: false
  },
  {
    id: 7,
    title: "BUILDRIFT",
    description: "Verifiable builder reputation platform for Web3 events",
    longDescription: `BUILDRIFT transforms Web3 events into verifiable builder impact. The platform enables organizers to define actions for participants, verify their contributions, and generate reputation scores. Builders receive public profiles showcasing verified contributions and event history, providing a reliable way to demonstrate skills and activity in the Web3 ecosystem.

**Core Features:**
- Wallet-based authentication using SIWE (Sign-In with Ethereum)
- Event creation and action management system
- Verified builder workflows with on-chain validation
- Real-time impact scoring and reputation tracking
- Public builder profiles with contribution history
- Clean, professional, minimal UI design
- IPFS integration for decentralized metadata storage

**Technical Architecture:**
- Frontend: Next.js (App Router) with React and TypeScript
- Styling: Tailwind CSS with custom theming
- Backend & Database: Supabase (PostgreSQL) with serverless API routes
- Authentication: SIWE for secure wallet-based login
- Storage: IPFS public gateway for metadata
- Hosting: Vercel for optimized deployment
- Development: ESLint, Git, environment variables, reusable components

**Purpose & Impact:**
BUILDRIFT demonstrates full-stack MVP development from scratch, connecting backend, frontend, and decentralized storage for a live Web3 product. The project showcases problem scoping, developer judgment, and execution on real blockchain workflows, providing tangible, deployable infrastructure that bridges traditional web development with Web3 technologies.

**What This Demonstrates:**
- Full-stack Web3 application architecture
- Blockchain integration and wallet authentication
- Decentralized storage implementation
- Modern Next.js App Router patterns
- TypeScript for type-safe development
- Production-ready deployment practices`,
    images: [
      "/assets/projects/buildrifht.jpeg"
    ],
    category: "fullstack",
    technologies: ["Next.js", "React", "TypeScript", "Supabase", "IPFS", "Tailwind CSS", "SIWE", "Vercel"],
    liveLink: "https://buildrift.vercel.app/",
    githubLink: "https://github.com/eff-1/buildrift",
    featured: true,
    ongoing: true
  },
  {
    id: 8,
    title: "Stephotech Student Portal",
    description: "Comprehensive learning management system for technology academy",
    longDescription: `Stephotech Student Portal is a comprehensive web application built for a technology-focused academy, designed to streamline student learning, course management, and administrative workflows. The platform offers a fully responsive, modern interface for students, instructors, and administrators.

**Core Features:**
- Student Dashboard: Track courses, view progress, check grades, and access assignments
- Course Management: Instructors upload lessons, videos, assignments, and resources
- Interactive Learning: Multimedia resources, downloadable materials, and integrated assessments
- Real-time Notifications: Assignment deadlines, announcements, and course updates
- Role-Based Access: Secure JWT authentication for students, instructors, and admins
- Admin Dashboard: Monitor student activity, manage courses, and track progress metrics
- Responsive Design: Seamless experience across desktop, tablet, and mobile devices

**Technical Implementation:**
- Frontend: React with Tailwind CSS for modern, responsive UI
- Backend: Node.js + Express REST API architecture
- Database: MongoDB for scalable, high-performance data storage
- Authentication: JWT-based secure user sessions with role management
- File Management: Support for multimedia content and document uploads
- Real-time Updates: WebSocket integration for live notifications
- API Design: RESTful endpoints for all platform operations
- Hosting: Cloud deployment for reliability and performance

**User Roles & Capabilities:**
- Students: Course enrollment, content access, assignment submission, progress tracking
- Instructors: Content creation, student management, grading, analytics
- Administrators: System oversight, user management, reporting, configuration

**Business Value:**
This portal transforms how Stephotech manages its educational ecosystem, providing a modern, tech-driven platform that enhances learning, improves communication, and automates administrative tasks. It exemplifies the application of modern web technologies to create a seamless, scalable, and engaging learning experience that benefits all stakeholders.`,
    images: [
      "/assets/projects/studentportal.jpeg"
    ],
    category: "fullstack",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "JWT", "WebSockets"],
    liveLink: "https://www.stephotec.com/students/",
    githubLink: "#",
    featured: false
  },
  {
    id: 9,
    title: "Pixel Academy",
    description: "Interactive student portal and programs platform for digital skills",
    longDescription: `Pixel Academy is an interactive full-stack platform designed to showcase educational programs, manage student inquiries, and empower young learners to explore digital skills. The platform combines a modern frontend with a scalable backend to deliver a smooth, responsive, and user-friendly experience.

**Featured Programs:**
- Game Development: Unity, Unreal Engine, game design fundamentals
- Digital Art & Design: Adobe Creative Suite, illustration, animation
- Web Development: HTML, CSS, JavaScript, React, full-stack development
- Robotics & AI: Arduino, Python, machine learning basics
- Cybersecurity: Ethical hacking, network security, digital safety
- Data Science: Python, data analysis, visualization, statistics

**Core Features:**
- Program Exploration: Detailed pages with duration, age groups, and descriptions
- Filter & Sort: Programs by category, popularity, or age suitability
- Contact & Inquiry Form: Full-stack form submission with email notifications
- Why Choose Us Section: Highlights innovative curriculum and expert mentors
- Featured Mentors: Showcase of experienced instructors and industry professionals
- Responsive Design: Mobile-first approach with smooth transitions and animations
- Interactive Components: Sliders, modal pop-ups, dynamic navigation

**Technical Implementation:**
- Frontend: React with Tailwind CSS for responsive, modern design
- Backend: Node.js + Express API for form handling and dynamic data
- Database: MongoDB for storing inquiries and program details
- Email Service: NodeMailer for automated inquiry notifications
- Deployment: Vercel (frontend) and Render (backend) for full-stack hosting
- Components: Reusable React components for maintainable code
- SEO: Optimized structure for search visibility and accessibility

**Future-Ready Features:**
- User authentication for student login and course tracking
- Progress monitoring and achievement tracking
- Payment system integration for program enrollment
- Student dashboard with personalized learning paths
- Certificate generation upon course completion

**Why This Stands Out:**
Pixel Academy demonstrates the ability to build an engaging educational platform that combines marketing, inquiry management, and program showcase in a single, cohesive application. The clean architecture and modern tech stack make it easily scalable for future enhancements like full LMS capabilities.`,
    images: [
      "/assets/projects/pixel-academy.jpg"
    ],
    category: "fullstack",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "NodeMailer", "Vercel"],
    liveLink: "https://pixel-git-main-faruqs-projects-aeaad191.vercel.app/",
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
