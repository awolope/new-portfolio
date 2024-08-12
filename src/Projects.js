import React from "react";
import "./project.css";
import "./about.png";
import "./portfolio.png";
import "./itja.png";
import "./weatherapp.png";
import "./timbu2.png";
import "./timbu1.png";
import "./task-managment.png";

const completedProjects = [
  {
    title: "TimbuCloud: Fashion E-Commerce Platform",
    description:
      "During my HNG internship, I developed TimbuCloud, a fashion e-commerce platform using React and Bootstrap. This project showcases a modern, responsive design, focusing on delivering a seamless shopping experience. The application features dynamic user interfaces built with React and a sleek, responsive layout crafted with Bootstrap. To address the lack of backend infrastructure, I implemented a front-end solution that uses local storage to collect and manage user feedback effectively. Despite working within a tight deadline, I managed to deliver a functional and visually appealing platform. TimbuCloud highlights my skills in front-end development and my ability to adapt to constraints while maintaining high-quality results.",
    imgSrc: "./timbu2.png",
    links: [
      {
        href: "awolope-feranmi-timbucloud.netlify.app/",
        text: "Live Demo",
      },
      { href: "https://github.com/awolope/fashion-ecommerce", text: "GitHub" },
    ],
  },
  {
    title: "Weather App",
    description:
      "For my project, I developed a weather app using HTML, CSS, and JavaScript. This application provides real-time weather updates, allowing users to check current conditions and forecasts for various locations. Built with a clean, user-friendly interface, the app uses JavaScript to fetch weather data from an API and dynamically display it. The design, crafted with HTML and CSS, ensures a responsive and visually appealing user experience. This project showcases my skills in front-end development and my ability to integrate APIs to deliver functional and engaging web applications.",
    imgSrc: "./weatherapp.png",
    links: [
      {
        href: "https://hernnieweatherapp.netlify.app/",
        text: "Live Demo",
      },
      {
        href: "https://github.com/awolope/awolope-shecodes-weather-app",
        text: "GitHub",
      },
    ],
  },
  {
    title: "About Me Page for HNG Internship",
    description:
      "For my HNG internship, I created an engaging About Me page that highlights my personal and professional background. Designed with HTML, CSS, and Bootstrap, this project showcases my skills in crafting visually appealing and user-friendly web pages. The page includes sections for personal details, skills, and a downloadable CV, all presented in a clean and structured layout. This project demonstrates my ability to design and implement responsive and interactive web content effectively.",
    imgSrc: "./about.png",
    links: [
      {
        href: "https://transcendent-frangipane-1d69fb.netlify.app/",
        text: "Live Demo",
      },
      {
        href: "https://github.com/awolope/HNG-internship-stage-one",
        text: "GitHub",
      },
    ],
  },
  {
    title: "Portfolio Website",
    description:
      "I created my first portfolio website using HTML, CSS, JavaScript, and Bootstrap. This project highlights my skills and showcases my work in a professional and visually appealing format.The website features a clean and responsive design, leveraging Bootstrap for layout and styling. It includes sections for my projects, skills, and contact information, all built with custom CSS and interactive JavaScript elements to enhance user experience. This portfolio serves as a testament to my ability to build engaging and functional web pages from scratch, demonstrating my proficiency in front-end development technologies.",
    imgSrc: "./portfolio.png",
    links: [
      {
        href: "https://awolopeferanmiestherportfolio.netlify.app/",
        text: "Live Demo",
      },
      { href: "https://github.com/awolope/portfolio", text: "GitHub" },
    ],
  },
];

const ongoingProjects = [
  {
    title: "ITJA Tech School Portal (Ongoing)",
    description:
      "I'm currently developing the ITJA Tech School Portal, a comprehensive platform for tech education. This project leverages React for the dynamic user interface, Bootstrap for responsive design, and Node.js for handling the frontend. The focus is on creating a user-friendly and interactive portal that provides students with a seamless experience. This ongoing project showcases my ability to build modern, front-end solutions with a focus on usability and design.",
    imgSrc: "./itja.png",
    links: [
      { href: "https://itja-portal.netlify.app/", text: "Live Demo" },
      { href: "https://github.com/awolope/itja-website", text: "GitHub" },
    ],
  },
  {
    title: "TaskPro(ongoing)",
    description:
      "TaskPro is a task management app currently under development, designed to streamline personal and professional task organization. Using React, Bootstrap, and Node.js for the frontend, this application features a user-friendly interface for task tracking and management. Key functionalities include user authentication, task creation, and status updates. The project reflects my focus on building responsive and interactive user interfaces to enhance productivity and task management.",
    imgSrc: "./task-managment.png",
    links: [
      { href: "https://herrnie-taskpro.netlify.app/", text: "Live Demo" },
      { href: "https://github.com/awolope/react-taskpro", text: "GitHub" },
    ],
  },
];

const ProjectsPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5 h1">My Projects</h1>

      <section>
        <h2 className="mb-1">Completed Projects</h2>
        {completedProjects.map((project, index) => (
          <div className="row project-item mb-4" key={index}>
            <div className="col-sm-6">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="project-image img-fluid"
              />
            </div>
            <div className="col-sm-6 mt-5">
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  {project.links.map((link, idx) => (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={idx}
                      className="btn linkb me-2"
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="mb-4">Ongoing Projects</h2>
        {ongoingProjects.map((project, index) => (
          <div className="row project-item mb-4" key={index}>
            <div className="col-sm-6">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="project-image img-fluid"
              />
            </div>
            <div className="col-sm-6 mt-5">
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  {project.links.map((link, idx) => (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={idx}
                      className="btn linkb me-2"
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProjectsPage;
