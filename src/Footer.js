import React from "react";
import "./Footer.css"; // Make sure to create and import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section col-sm-3">
            <h4>Contact Me</h4>
            <p>
              Email:{" "}
              <a href="mailto:feranmi0804@gmail.com">feranmi0804@gmail.com</a>
            </p>
            <p>
              Phone: <a href="tel:+2349123756020">+234-9123-756-020</a>
            </p>
          </div>
          <div className="footer-section col-sm-4">
            <h4>Follow Me</h4>
            <div className="social-links">
              <a
                href="https://linkedin.com/in/feranmi-awolope-43b1662a6"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/awolope"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/@Hhernnie"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>
          <div className="footer-section col-sm-4">
            <h4>About</h4>
            <p>
              A passionate frontend web developer who loves creating beautiful
              and functional web applications. Check out my portfolio to see my
              work.
            </p>
          </div>
        </div>
        <div className="footer-bottom text-center">
          <p>
            &copy; {new Date().getFullYear()} Awolope Feranmi Esther. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
