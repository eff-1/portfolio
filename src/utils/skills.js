// Skills data organized by categories - Compact
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
      { name: "CSS3", level: 96, icon: "Paintbrush" }
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
      { name: "PHP", level: 83, icon: "Code" }
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
      { name: "Postman", level: 85, icon: "Send" }
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
  { name: "React / Next.js", level: 95 },
  { name: "Node.js / Express", level: 90 },
  { name: "TypeScript / JavaScript / Python", level: 85 },
  { name: "PostgreSQL / MongoDB / Firebase", level: 82 },
  { name: "AWS / Docker", level: 80 },
  { name: "UI/UX Implementation", level: 88 },
  { name: "Scalable Architecture Design", level: 83 }
];