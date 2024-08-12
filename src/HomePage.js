import React from "react";
import "./homepage.css"; // For custom CSS
import "./itja.png";
import "./about.png";
import "./portfolio.png";
import "./weatherapp.png";
import "./timbu1.png";
import "./timbu2.png";
const Section = ({ imageSrc }) => {
  return (
    <div className="section">
      <div className="image-container">
        <img src={imageSrc} alt="projects" className="scale-image" />
      </div>
    </div>
  );
};
const Home = () => {
  return (
    <div className="homepage">
      <div className="typing-container ">
        <div className="typing-animation">
          <h4 className="line">Awolope Feranmi Esther</h4>
          <h1 className="line">Frontend web Developer</h1>
          <h5 className="line">Based in Nigeria</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          {" "}
          <Section imageSrc="./timbu2.png" />
        </div>

        <div className="col-sm-6">
          {" "}
          <Section imageSrc="./about.png" />
        </div>
        <Section imageSrc="./timbu1.png" />
        <div className="col-sm-6">
          <Section imageSrc="/itja.png" />
        </div>

        <div className="col-sm-6">
          {" "}
          <Section imageSrc="./portfolio.png" />
        </div>

        <Section imageSrc="/weatherapp.png" />
      </div>
    </div>
  );
};

export default Home;
