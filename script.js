
const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub", "Responsive Design"];

const projects = [
  {
    title: "Fire Island Travel Blog",
    description: "A multi-section responsive travel website presenting structured text layouts, semantic blocks, and local resource image management.",
    tech: "HTML5, CSS3, CSS Variables"
  },
  {
    title: "JavaScript Fundamentals Suite",
    description: "An isolated modular processing script handling logic calculations including tax, casing transformations, and value optimization.",
    tech: "JavaScript, Node.js, Jest Testing Framework"
  }
];

const skillsList = document.getElementById("skills-list");
skills.forEach(skill => {
  const listItem = document.createElement("li");
  listItem.textContent = skill;
  skillsList.appendChild(listItem);
});

const projectsContainer = document.getElementById("projects-container");
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
