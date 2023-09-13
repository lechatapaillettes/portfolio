import React from "react";
import es from "../translations/es.json";
import fr from "../translations/fr.json";
import en from "../translations/en.json";

const Footer = ({ language }) => {
  const texts = {
    es,
    fr,
    en,
  }[language];

  return (
    <footer>
      <div className="redes">
        <h4 className="title-redes">{texts["title-redes"]}</h4>
        <a href="https://github.com/lechatapaillettes" target="_blank">
          <i className="fa-brands fa-github icon-git"></i>
        </a>
        {/* <a href="https://twitter.com/chatapaillettes" target="_blank">
          <i className="fa-brands fa-twitter icon-twitter"></i>
        </a>
        <a href="https://www.instagram.com/lechatapaillettes/" target="_blank">
          <i className="fa-brands fa-instagram icon-insta"></i>
        </a> */}
        <a href="https://www.linkedin.com/in/lupetit/" target="_blank">
          <i className="fa-brands fa-linkedin icon-linkedin"></i>
        </a>
      </div>

      <div className="copyright">
        <p>{texts["copyright"]}</p>
      </div>
    </footer>
  );
};

export default Footer;
