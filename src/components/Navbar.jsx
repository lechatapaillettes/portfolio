import React, { useState } from "react";
import { Link } from "react-router-dom";

import argentina from "../assets/IMG/IDIOMA/argcopy.png";
import france from "../assets/IMG/IDIOMA/frcopy.png";
import unitedStates from "../assets/IMG/IDIOMA/uscopy.png";

import es from "../translations/es.json";
import fr from "../translations/fr.json";
import en from "../translations/en.json";

import { AiOutlineMenu } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";

const Navbar = ({ language, changeLanguage }) => {
  const texts = {
    es,
    fr,
    en,
  }[language];

  const handleNavLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        behavior: "smooth",
        top: targetElement.offsetTop,
      });
    }

    setIsMenuOpen(false);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav">
      {/* Navbar Desktop */}

      <div className="nav-desktop">
        <div className="nav-language">
          <img
            src={argentina}
            title="Español"
            alt="Español"
            className="flag"
            onClick={() => changeLanguage("es")}
            style={{ cursor: "pointer" }}
          />
          <img
            src={france}
            title="Français"
            alt="Français"
            className="flag"
            onClick={() => changeLanguage("fr")}
            style={{ cursor: "pointer" }}
          />
          <img
            src={unitedStates}
            title="English"
            alt="English"
            className="flag"
            onClick={() => changeLanguage("en")}
            style={{ cursor: "pointer" }}
          />
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <Link
              className="nav-link"
              onClick={(e) => handleNavLinkClick(e, "principal")}
            >
              {texts["about-me"]}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              onClick={(e) => handleNavLinkClick(e, "proyectos")}
            >
              {texts["projects"]}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              onClick={(e) => handleNavLinkClick(e, "skills")}
            >
              {texts["skills"]}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              onClick={(e) => handleNavLinkClick(e, "contacto")}
            >
              {texts["contact"]}
            </Link>
          </li>
        </ul>
      </div>

      {/* Navbar Mobile */}

      <div className="nav-mobile">
        <div className="burger-menu">
          <AiOutlineMenu className="burger-icon" onClick={toggleMenu} />
        </div>

        {isMenuOpen && (
          <Fade cascade damping={0.1}>
            <ul className="burger-open">
              <div className="nav-language">
                <img
                  src={argentina}
                  title="Español"
                  alt="Español"
                  className="flag"
                  onClick={() => changeLanguage("es")}
                  style={{ cursor: "pointer" }}
                />
                <img
                  src={france}
                  title="Français"
                  alt="Français"
                  className="flag"
                  onClick={() => changeLanguage("fr")}
                  style={{ cursor: "pointer" }}
                />
                <img
                  src={unitedStates}
                  title="English"
                  alt="English"
                  className="flag"
                  onClick={() => changeLanguage("en")}
                  style={{ cursor: "pointer" }}
                />
              </div>

              <li className="burger-item">
                <Link
                  className="burger-link"
                  onClick={(e) => handleNavLinkClick(e, "principal", closeMenu)}
                >
                  {texts["about-me"]}
                </Link>
              </li>

              <li className="burger-item">
                <Link
                  className="burger-link"
                  onClick={(e) => handleNavLinkClick(e, "proyectos", closeMenu)}
                >
                  {texts["projects"]}
                </Link>
              </li>

              <li className="burger-item">
                <Link
                  className="burger-link"
                  onClick={(e) => handleNavLinkClick(e, "skills", closeMenu)}
                >
                  {texts["skills"]}
                </Link>
              </li>

              <li className="burger-item">
                <Link
                  className="burger-link"
                  onClick={(e) => handleNavLinkClick(e, "contacto", closeMenu)}
                >
                  {texts["contact"]}
                </Link>
              </li>

              <li className="burger-redes">
                <Link to="https://github.com/lechatapaillettes" target="_blank">
                  <i className="fa-brands fa-github icon-git"></i>
                </Link>

                <Link to="https://www.linkedin.com/in/lupetit/" target="_blank">
                  <i className="fa-brands fa-linkedin icon-linkedin"></i>
                </Link>
              </li>
            </ul>
          </Fade>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
