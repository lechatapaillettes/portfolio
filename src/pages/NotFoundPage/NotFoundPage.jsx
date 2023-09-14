import React from "react";
import { Link } from "react-router-dom";

import notFound from "../../assets/IMG/notFound.png";

import es from "../../translations/es.json";
import fr from "../../translations/fr.json";
import en from "../../translations/en.json";

const NotFoundPage = ({ language }) => {
  const texts = {
    es,
    fr,
    en,
  }[language];

  return (
    <div className="not-found">
      <div className="not-found-container">
        <div className="not-found-content">
          <img
            src={notFound}
            alt="404 NOT FOUND"
            title="404 NOT FOUND"
            className="not-found-img"
          />
          <div className="not-found-txt">
            <h2 className="not-found-title">404</h2>
            <p>{texts["not-found-txt"]}</p>
          </div>
        </div>
        <div className="rickroll">
          <Link
            to="https://youtu.be/dQw4w9WgXcQ?si=DTi71-bQKJewuFMz/"
            target="_blank"
            className="not-found-link"
          >
            <p>{texts["not-found-link"]}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
