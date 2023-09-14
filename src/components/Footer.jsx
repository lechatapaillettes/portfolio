import React from "react";
import { Link } from "react-router-dom";

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
          <Link to="https://github.com/lechatapaillettes" target="_blank">
          <i className="fa-brands fa-github icon-git"></i>
        </Link>

        {/* <Link to="https://twitter.com/chatapaillettes" target="_blank">
          <i className="fa-brands fa-twitter icon-twitter"></i>
        </Link>

        <Link to="https://www.instagram.com/lechatapaillettes/" target="_blank">
          <i className="fa-brands fa-instagram icon-insta"></i>
        </Link> */}

        <Link to="https://www.linkedin.com/in/lupetit/" target="_blank">
          <i className="fa-brands fa-linkedin icon-linkedin"></i>
        </Link>
      </div>

      <div className="copyright">
        <p>{texts["copyright"]}</p>
      </div>
    </footer>
  );
};

export default Footer;
