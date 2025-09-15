// Skills data organized by categories
export const skillsData = {
  frontend: {
    title: "Frontend Development",
    description: "Building modern, responsive user interfaces",
    color: "#4361ee",
    skills: [
      { name: "React.js", level: 95, icon: "⚛️" },
      { name: "Next.js", level: 90, icon: "▲" },
      { name: "TypeScript", level: 85, icon: "TS" },
      { name: "Tailwind CSS", level: 92, icon: "💨" },
      { name: "HTML5/CSS3", level: 98, icon: "🌐" },
      { name: "JavaScript ES6+", level: 94, icon: "JS" },
      { name: "Vue.js", level: 80, icon: "V" },
      { name: "Material UI", level: 88, icon: "M" }
    ]
  },
  backend: {
    title: "Backend Development",
    description: "Server-side logic and database management",
    color: "#3f37c9",
    skills: [
      { name: "Node.js", level: 90, icon: "🟢" },
      { name: "Express.js", level: 88, icon: "E" },
      { name: "PHP", level: 85, icon: "🐘" },
      { name: "PostgreSQL", level: 82, icon: "🐘" },
      { name: "MongoDB", level: 78, icon: "🍃" },
      { name: "MySQL", level: 85, icon: "🗃️" },
      { name: "GraphQL", level: 75, icon: "◉" },
      { name: "Redis", level: 70, icon: "📦" }
    ]
  },
  devops: {
    title: "DevOps & Tools",
    description: "Development operations and deployment",
    color: "#f72585",
    skills: [
      { name: "Git/GitHub", level: 95, icon: "📚" },
      { name: "Docker", level: 75, icon: "🐳" },
      { name: "AWS", level: 70, icon: "☁️" },
      { name: "Vercel", level: 90, icon: "▲" },
      { name: "Netlify", level: 88, icon: "🌐" },
      { name: "CI/CD", level: 72, icon: "🔄" },
      { name: "Linux", level: 78, icon: "🐧" },
      { name: "Nginx", level: 68, icon: "🌍" }
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
  { name: "React/Next.js", level: 95 },
  { name: "Node.js/Express", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "PostgreSQL", level: 82 },
  { name: "AWS/Docker", level: 72 }
];