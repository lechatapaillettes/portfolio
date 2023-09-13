import React from "react";
import argentina from "../assets/IMG/IDIOMA/argcopy.png";
import france from "../assets/IMG/IDIOMA/frcopy.png";
import unitedStates from "../assets/IMG/IDIOMA/uscopy.png";
import es from "../translations/es.json";
import fr from "../translations/fr.json";
import en from "../translations/en.json";

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
  };

  return (
    <nav className="nav">
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
          <a href="#principal" className="nav-link" onClick={(e) => handleNavLinkClick(e, "principal")}>
            {texts["about-me"]}
          </a>
        </li>
        <li className="nav-item">
          <a href="#proyectos" className="nav-link" onClick={(e) => handleNavLinkClick(e, "proyectos")}>
            {texts["projects"]}
          </a>
        </li>
        <li className="nav-item">
          <a href="#skills" className="nav-link" onClick={(e) => handleNavLinkClick(e, "skills")}>
            {texts["skills"]}
          </a>
        </li>
        <li className="nav-item">
          <a href="#contacto" className="nav-link" onClick={(e) => handleNavLinkClick(e, "contacto")}>
            {texts["contact"]}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
