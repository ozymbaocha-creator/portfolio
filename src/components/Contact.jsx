import "./Contact.css";

function Contact() {
  const handleContact = () => {
    window.location.href =
      "mailto:ozymbaocha@gmail.com?subject=Project%20Inquiry&body=Hello%20Gospel,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.";
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <p className="section-intro">Get in touch</p>

        <h2>Contact Me</h2>

        <p>
          Have a project in mind or want to work together?
          Feel free to reach out.
        </p>

        <div className="contact-details">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:ozymbaocha@gmail.com">
              ozymbaocha@gmail.com
            </a>
          </p>

          <p>
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/2347026352726"
              target="_blank"
              rel="noopener noreferrer"
            >
              07026352726
            </a>
          </p>

          <p>
            <strong>Location:</strong> Abuja, Nigeria
          </p>
            <div className="social-links">
                <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>

                <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
            </div>
        </div>

        <button onClick={handleContact}>
          Send Me a Message
        </button>
      </div>
    </section>
  );
}

export default Contact;