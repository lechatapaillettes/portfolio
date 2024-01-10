import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import argentina from "../assets/IMG/IDIOMA/argcopy.png";
import france from "../assets/IMG/IDIOMA/frcopy.png";
import unitedStates from "../assets/IMG/IDIOMA/uscopy.png";

import es from "../translations/es.json";
import fr from "../translations/fr.json";
import en from "../translations/en.json";

import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";
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
  const [isXMark, setIsXMark] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsXMark(!isXMark);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsXMark(false);
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
            <NavLink
              className="nav-link"
              to="/#principal"
              onClick={(e) => handleNavLinkClick(e, "principal")}
            >
              {texts["about-me"]}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/#proyectos"
              onClick={(e) => handleNavLinkClick(e, "proyectos")}
            >
              {texts["projects"]}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/#skills"
              onClick={(e) => handleNavLinkClick(e, "skills")}
            >
              {texts["skills"]}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/#contacto"
              onClick={(e) => handleNavLinkClick(e, "contacto")}
            >
              {texts["contact"]}
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Navbar Mobile */}

      <div className="nav-mobile">
        <div className="burger-menu">
          <div className={`burger-icon-container ${isMenuOpen ? "open" : ""}`}>
            <HiOutlineXMark
              className={`burger-icon burger-icon-close ${
                isMenuOpen ? "" : "burger-icon-hidden"
              }`}
              onClick={toggleMenu}
            />
            <AiOutlineMenu
              className={`burger-icon burger-icon-open ${
                isMenuOpen ? "burger-icon-hidden" : ""
              }`}
              onClick={toggleMenu}
            />
          </div>
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
                  onClick={() => {
                    changeLanguage("es");
                    closeMenu();
                  }}
                />
                <img
                  src={france}
                  title="Français"
                  alt="Français"
                  className="flag"
                  onClick={() => {
                    changeLanguage("fr");
                    closeMenu();
                  }}
                />
                <img
                  src={unitedStates}
                  title="English"
                  alt="English"
                  className="flag"
                  onClick={() => {
                    changeLanguage("en");
                    closeMenu();
                  }}
                />
              </div>

              <li className="burger-item">
                <NavLink
                  className="burger-link"
                  to="/#principal"
                  onClick={(e) => handleNavLinkClick(e, "principal", closeMenu)}
                >
                  {texts["about-me"]}
                </NavLink>
              </li>
              <li className="burger-item">
                <NavLink
                  className="burger-link"
                  to="/#proyectos"
                  onClick={(e) => handleNavLinkClick(e, "proyectos", closeMenu)}
                >
                  {texts["projects"]}
                </NavLink>
              </li>
              <li className="burger-item">
                <NavLink
                  className="burger-link"
                  to="/#skills"
                  onClick={(e) => handleNavLinkClick(e, "skills", closeMenu)}
                >
                  {texts["skills"]}
                </NavLink>
              </li>
              <li className="burger-item">
                <NavLink
                  className="burger-link"
                  to="/#contacto"
                  onClick={(e) => handleNavLinkClick(e, "contacto", closeMenu)}
                >
                  {texts["contact"]}
                </NavLink>
              </li>

              <li className="burger-redes">
                <NavLink
                  to="https://github.com/lechatapaillettes"
                  target="_blank"
                >
                  <i className="fa-brands fa-github icon-git"></i>
                </NavLink>

                <NavLink
                  to="https://www.linkedin.com/in/lupetit/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin icon-linkedin"></i>
                </NavLink>
              </li>
            </ul>
          </Fade>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
