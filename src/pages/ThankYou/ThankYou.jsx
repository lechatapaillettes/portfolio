import React from "react";
import { NavLink } from "react-router-dom";

import Oli from "../../assets/IMG/Oli.png";

import es from "../../translations/es.json";
import fr from "../../translations/fr.json";
import en from "../../translations/en.json";

const ThankYou = ({ language }) => {
  const texts = {
    es,
    fr,
    en,
  }[language];

  return (
    <div className="thank-you">
      <div className="thank-you-container">
        <div className="thank-you-content">
          <div className="thank-tou-txt">
            <h2 className="thank-you-title">{texts["thank-you"]}</h2>
            <hr className="patita-primary"></hr>
            <p className="thank-you-txt">{texts["response"]}</p>
          </div>
          <img
            src={Oli}
            alt="Siamese cat"
            title="THANK YOU"
            className="thank-you-img"
          />
        </div>

        <div className="back">
          <NavLink to="/" className="not-found-link">
            {texts["back-to-main"]}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
