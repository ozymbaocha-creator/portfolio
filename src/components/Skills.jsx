import { useState } from "react";
import "./Skills.css";

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    {
      name: "HTML",
      description:
        "HTML is used to create the structure and content of websites. I use it to build clean and well-organized web pages.",
    },
    {
      name: "CSS",
      description:
        "CSS is used to style websites. I use it to create attractive layouts, responsive designs, animations and user-friendly interfaces.",
    },
    {
      name: "JavaScript",
      description:
        "JavaScript adds logic and interactivity to websites. I use it to create dynamic features and interactive user experiences.",
    },
    {
      name: "React",
      description:
        "React is a JavaScript library for building user interfaces. I use React to create reusable components and interactive web applications.",
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <p className="section-intro">What I work with</p>

        <h2>My Skills</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div
              className="skill-card"
              key={skill.name}
              onClick={() => setSelectedSkill(skill)}
            >
              <h3>{skill.name}</h3>
              <p>Learn more</p>
            </div>
          ))}
        </div>
      </div>

      {selectedSkill && (
        <div className="skill-overlay" onClick={() => setSelectedSkill(null)}>
          <div
            className="skill-popup"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={() => setSelectedSkill(null)}
            >
              ×
            </button>

            <h3>{selectedSkill.name}</h3>

            <p>{selectedSkill.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Skills;