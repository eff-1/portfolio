// Skills data organized by categories - Compact (8 each = 24 total)
export const skillsData = {
  frontend: {
    title: "Frontend",
    description: "Modern user interfaces",
    color: "#4361ee",
    skills: [
      { name: "React", level: 95, icon: "Code2" },
      { name: "Next.js", level: 90, icon: "Zap" },
      { name: "TypeScript", level: 85, icon: "FileCode" },
      { name: "Tailwind", level: 92, icon: "Palette" },
      { name: "JavaScript", level: 94, icon: "Braces" },
      { name: "CSS3", level: 96, icon: "Paintbrush" },
      { name: "HTML5", level: 98, icon: "Globe" },
      { name: "Vue.js", level: 80, icon: "Zap" }
    ]
  },
  backend: {
    title: "Backend",
    description: "Server & database systems",
    color: "#3f37c9",
    skills: [
      { name: "Node.js", level: 90, icon: "Server" },
      { name: "Express", level: 88, icon: "Globe" },
      { name: "PostgreSQL", level: 82, icon: "Database" },
      { name: "MongoDB", level: 78, icon: "HardDrive" },
      { name: "Python", level: 85, icon: "Terminal" },
      { name: "PHP", level: 83, icon: "Code" },
      { name: "MySQL", level: 85, icon: "Database" },
      { name: "GraphQL", level: 75, icon: "Code2" },
      { name: "WebSockets", level: 80, icon: "Zap" },
      { name: "JWT Auth", level: 88, icon: "Server" },
      { name: "Ethers.js", level: 70, icon: "Code" },
      { name: "IPFS Basics", level: 65, icon: "Cloud" },
      { name: "NFT Metadata", level: 68, icon: "FileCode" },
      { name: "Redis", level: 75, icon: "Database" },
      { name: "REST APIs", level: 92, icon: "Globe" },
      { name: "Microservices", level: 78, icon: "Server" }
    ]
  },
  tools: {
    title: "Tools",
    description: "Development & deployment",
    color: "#f72585",
    skills: [
      { name: "Git", level: 95, icon: "GitBranch" },
      { name: "Docker", level: 80, icon: "Package" },
      { name: "AWS", level: 80, icon: "Cloud" },
      { name: "Vercel", level: 90, icon: "Rocket" },
      { name: "Figma", level: 88, icon: "Figma" },
      { name: "Postman", level: 85, icon: "Send" },
      { name: "VS Code", level: 95, icon: "Code2" },
      { name: "Netlify", level: 88, icon: "Globe" }
    ]
  }
};

// Get all skills flattened
export const getAllSkills = () => {
  const allSkills = [];
  Object.keys(skillsData).forEach(category => {
    skillsData[category].skills.forEach(skill => {
      allSkills.push({
        ...skill,
        category,
        categoryColor: skillsData[category].color
      });
    });
  });
  return allSkills;
};

// Get skills by category
export const getSkillsByCategory = (category) => {
  return skillsData[category] || null;
};

// Get top skills (above 85%)
export const getTopSkills = () => {
  return getAllSkills().filter(skill => skill.level >= 85);
};

// Skills for about section (main highlights)
export const mainSkills = [
  { name: "React / Next.js", level: 98 },
  { name: "Node.js / Express", level: 95 },
  { name: "TypeScript / JavaScript / Python", level: 92 },
  { name: "PostgreSQL / MongoDB / Firebase", level: 90 },
  { name: "AWS / Docker", level: 88 },
  { name: "UI/UX Implementation", level: 94 },
  { name: "Scalable Architecture Design", level: 91 }
];