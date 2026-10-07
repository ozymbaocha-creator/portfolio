import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-heading">
          <p className="section-intro">Get to know me</p>

          <h2>About Me</h2>
        </div>

        <div className="about-text">
          <p>
            I'm a frontend developer passionate about creating
            responsive, user-friendly and modern web experiences.
          </p>

          <p>
            I work with HTML, CSS, JavaScript and React, and I enjoy
            turning ideas and designs into functional websites.
          </p>

          <p>
            I'm continuously improving my development skills by
            building real-world projects and learning new technologies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;