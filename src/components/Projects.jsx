import { useState } from "react";
import "./Projects.css";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Personal Portfolio",
      description:
        "A responsive portfolio website built with React to showcase my skills, projects and experience as a frontend developer.",
      Status: "In Progress",
    },
    {
      title: "Diary App",
      description:
        "A personal diary application where users can create, view and manage their daily journal entries.",
      Status: "In Progress",
    },
    {
      title: "Restaurant Website",
      description:
        "A modern restaurant website with a menu, booking section and customer chat interface.",
      Status: "In Progress",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <p className="section-intro">What I've built</p>

        <h2>My Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              className="project-card"
              key={project.title}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">
                {project.title}
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>Learn more</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="project-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-popup"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="project-close-button"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            <h3>{selectedProject.title}</h3>

            <p>{selectedProject.description}</p>

            <small>{selectedProject.Status}</small>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;