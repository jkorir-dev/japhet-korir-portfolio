
const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub", "Responsive Design", "Command Line / Bash"];


const projects = [
  {
    title: "Fire Island Travel Blog",
    description: "A beautifully designed, semantic single-page website demonstrating advanced CSS styling variables, grid alignment grids, and fully responsive layouts.",
    tech: "HTML5, CSS3, CSS Variables"
  },
  {
    title: "JavaScript Fundamentals Suite",
    description: "An isolated modular processing script handling logic calculations including tax, casing transformations, and value optimization.",
    tech: "JavaScript, Node.js, Jest Testing Framework"
  },
  {
    title: "JavaScript Fundamentals Suite",
    description: "A functional programming utility suite built to execute mathematical operations, tax computations, and casing conversions against validation tests.",
    tech: "JavaScript, Node.js, Jest Test Framework"
  },

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
