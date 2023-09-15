import React from "react";

import es from "../../translations/es.json";
import fr from "../../translations/fr.json";
import en from "../../translations/en.json";

const contact = ({ language }) => {
  const texts = {
    es,
    fr,
    en,
  }[language];

  return (
    <section id="contacto" className="contacto">
      <div className="contacto-container">
        <h3 className="title-contacto">{texts["title-contacto"]}</h3>
        <hr className="patita-light"></hr>
        <div className="form-box">
          <form
            autoComplete="on"
            action="https://formsubmit.co/b0583c1e3b4505b7136401b1ac53acec"
            method="POST"
          >
            <div>
              <input
                type="text"
                id="name"
                placeholder={texts["placeholder-name"]}
                name="nombre"
                required
                className="inputs"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                placeholder={texts["placeholder-email"]}
                name="email"
                required
                className="inputs"
              />
            </div>
            <div>
              <textarea
                id="text"
                placeholder={texts["placeholder-text"]}
                name="mensaje"
                cols="30"
                rows="10"
                required
                spellCheck="true"
                className="inputs"
              ></textarea>
            </div>
            <div>
              <button type="submit" className="submit-btn">
                {texts["submit"]}
              </button>
            </div>
            <input
              type="hidden"
              name="_next"
              value="https://lechatapaillettes.vercel.app/thankyou"
            />
            <input type="hidden" name="_captcha" value="false" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default contact;
