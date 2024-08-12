import React from "react";
import "./about.css"; // Import the CSS file for styling
import "./profilepic.jpg";
import "./profilepic1.jpg";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
        <div className="about-introduction">
          <div className="row">
            <div className="col-sm-6">
              <img src="./profilepic.jpg" alt="Enny" className="about-image" />
            </div>
            <div className="col-sm-6 mt-5">
              <p>
                Hello! I'm Enny, a 22-year-old frontend web developer who
                graduated from the University of Abuja's Physics department. As
                I wait for my NYSC, I have immersed myself in the world of web
                development. My journey into tech began in 2023 during my final
                year at university. Coding quickly became a passion of mine, and
                I found solace and grounding in it.
              </p>
            </div>
            <div className="col-sm-12 mt-5">
              <p>
                My love for music and fashion inspires my approach to design and
                development. I am proficient in JavaScript, ReactJS, NodeJS,
                Vite, and Bootstrap. Currently, I am expanding my skill set with
                Next.js, Tailwind CSS, and Redux for React. My goal is to create
                responsive and user-friendly websites that not only meet but
                exceed user expectations.
                <br />
                My experience in building websites has taught me the importance
                of both aesthetics and functionality. I take pride in crafting
                designs that are visually appealing while ensuring that the user
                experience is seamless and intuitive. I am committed to
                continuous learning and growth in this ever-evolving field.
              </p>
            </div>
          </div>
        </div>
        <div className="about-skills">
          <div className="row about-skills">
            <div className="col-sm-6">
              <h2>Frontend Technologies</h2>
              <ul>
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS (Currently Learning)</li>
                <li>Vite</li>
                <li>Responsive Design</li>
                <li>RESTful APIs</li>
                <li>Redux (Currently Learning)</li>
                <li>Next.js (Currently Learning)</li>
              </ul>
            </div>
            <div className="col-sm-6">
              <h2>Skills and Knowledge</h2>
              <ul>
                <li>Node.js</li>
                <li>Visual Studio Code</li>
                <li>Git Version Control</li>
                <li>GitHub</li>
                <li>Figma</li>
                <li>Chrome DevTools</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="about-cv mt-5">
          <h2>Download My CV</h2>
          <a href="/path/to/your/CV.pdf" download className="cv-download">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
