import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFoundPage/NotFoundPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import ThankYou from "./pages/ThankYou/ThankYou";
import Footer from "./components/Footer";

import es from "./translations/es.json";
import fr from "./translations/fr.json";
import en from "./translations/en.json";

function App() {
  const [language, setLanguage] = useState("es");

  const texts = {
    es,
    fr,
    en,
  }[language];

  useEffect(() => {
    document.title = texts["page-title"];
  }, [language]);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar language={language} changeLanguage={changeLanguage} />
        <Routes>
          {/* Landing page */}

          <Route exact path="/" element={<LandingPage language={language} />} />

          {/* Thank You page*/}

          <Route exact path="/thankyou" element={<ThankYou language={language} />} />

          {/* 404 */}

          <Route path="*" element={<NotFound language={language} />} />
        </Routes>

        <Footer language={language} />
      </div>
    </>
  );
}

export default App;
