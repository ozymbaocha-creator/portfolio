import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-intro">Hello, I'm</p>

        <h1>Gospel Mbaocha</h1>

        <h2>Frontend Developer</h2>

        <p className="hero-description">
          I build responsive, modern and user-friendly websites
          using HTML, CSS, JavaScript and React.
        </p>

        <div className="hero-buttons">
            <a href="#projects" className="primary-button">
                View My Work
            </a>

            <a href="#contact" className="secondary-button">
                Contact Me
            </a>

            <a
                href="/Gospel-Mbaocha-CV.pdf"
                download
                className="cv-button"
            >
                Download CV
            </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-circle">
          <span>&lt;/&gt;</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;