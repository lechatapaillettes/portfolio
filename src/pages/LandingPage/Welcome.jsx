import React from "react";
import YO from "../../assets/IMG/YO.jpg";
import es from '../../translations/es.json';
import fr from '../../translations/fr.json';
import en from '../../translations/en.json';

const Welcome = ({ language }) => {

  const texts = {
    es,
    fr,
    en,
  }[language];

  return (
    <section id="principal" className="principal">
      <img src={YO} title="Lucía Petit" alt="Lucía Petit" className="img-me" />
      <div className="intro-container">
        <h1 className="intro-name">Lucía Petit</h1>
        <hr className="patita-primary"></hr>
        <h2 className="intro-h2">{texts['intro-h2']}</h2>
        <p className="intro-txt">
        {texts['intro-txt']}
        </p>
      </div>
    </section>
  );
};

export default Welcome;
