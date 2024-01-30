import React from "react";
import { Link } from "react-router-dom";

import ListenToMe from "../../assets/IMG/PROJECTS/ListenToMe.png";

import es from "../../translations/es.json";
import fr from "../../translations/fr.json";
import en from "../../translations/en.json";

const Projects = ({ language }) => {
  const texts = {
    es,
    fr,
    en,
  }[language];

  return (
    <section id="proyectos" className="proyectos">
      <div className="proyectos-container">
        <h3 className="title-proyectos">{texts["title-proyectos"]}</h3>
        <hr className="patita-light"></hr>
        <div className="proyectos-boxes">
          <div className="proyecto">
          <Link to="https://listen-to-me.fr/" target="_blank">
              <div className="proyectos-img">
                <img
                  src={ListenToMe}
                  alt="LISTEN TO ME"
                  title="LISTEN TO ME"
                  className="ListenToMe-img"
                />
              </div>

              <div className="proyectos-info">
                <div className="proyectos-titulo">
                  <h4>Listen To Me</h4>
                  
                </div>
                <p className="proyectos-txt">{texts["ListenToMe-txt"]}</p>
              </div>
            </Link>
          </div>

          {/* <div className="proyecto">2</div>
                    <div className="proyecto">3</div>
                    <div className="proyecto">4</div>
                    <div className="proyecto">5</div>
                    <div className="proyecto">6</div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
