
const skills = [
  "HTML", 
  "CSS", 
  "JavaScript", 
  "Git", 
  "GitHub", 
  "Responsive Design", 
  "Command Line / Bash"
];

const projects = [
  {
    title: "Fire Island Travel Blog",
    description: "A beautifully designed, semantic single-page website demonstrating advanced CSS styling variables, grid alignment layouts, and fully responsive modules.",
    tech: "HTML5, CSS3, CSS Variables"
  },
  {
    title: "HTML Travel Blog Lab",
    description: "A functional layout architecture testing suite designed around custom document parameters, text tracking layouts, and path link validation checks.",
    tech: "HTML5, Content Semantics"
  },
  {
    title: "JavaScript Fundamentals Suite",
    description: "A functional programming utility suite built to execute mathematical operations, tax computations, and casing conversions against validation tests.",
    tech: "JavaScript, Node.js, Jest Test Framework"
  }
];

const skillsList = document.getElementById("skills-list");
if (skillsList) {
  skills.forEach(skill => {
    const listItem = document.createElement("li");
    listItem.textContent = skill;
    skillsList.appendChild(listItem);
  });
}

const projectsContainer = document.getElementById("projects-container");
if (projectsContainer) {
  projects.forEach(project => {
    const projectCard = document.createElement("article");
    projectCard.className = "portfolio-item";

    projectCard.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p class="tech-stack"><strong>Technologies Used:</strong> ${project.tech}</p>
    `;

    projectsContainer.appendChild(projectCard);
  });
}
