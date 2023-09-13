import React from "react";
import Welcome from "./Welcome";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const LandingPage = ({ language }) => {
  return (
    <div>
          <Welcome language={language} />
          <Projects language={language} />
          <Skills />
          <Contact language={language} />
        </div>
      );
    };

export default LandingPage;
