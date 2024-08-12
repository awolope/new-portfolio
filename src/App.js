import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./HomePage";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import ProjectsPage from "./Projects";
import "./App.css"; // For custom CSS

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
