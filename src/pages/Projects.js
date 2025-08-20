import "../styles/Projects.css";
import fpgaImage from "../assets/FPGA.png";


function Projects() {
  const projectList = [
    {
      name: "Restaurant Management Platform",
      tools: ["React", "Spring Boot", "PostgreSQL"],
      image: "/assets/restaurant.png",
      description: "A full-stack platform for online ordering and staff management.",
      github: "https://github.com/lukegarci/restaurant-template",
    },
    {
      name: "FPGA Alarm Clock",
      tools: ["SystemVerilog", "ModelSim"],
      image: fpgaImage,
      description: "Alarm clock that displays hours, minutes, seconds and allows users to set time.",
      github: "https://github.com/lukegarci/FPGA-Alarm-Clock",
    },
    {
      name: "One-Time-Pad Encryption",
      tools: ["Node.js", "Express", "MongoDB"],
      image: "/images/betting.png",
      description: "Web app for tracking NBA, NFL, and MLB bets.",
      github: "https://github.com/yourusername/sports-betting-tracker",
    },

  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">Project Portfolio</h1>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div
            className="project-card"
            key={index}
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="project-overlay">
              <p>{project.description}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <button className="project-button">View on GitHub</button>
              </a>
            </div>
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.tools.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
