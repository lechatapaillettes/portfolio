import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import NotFound from "./pages/NotFoundPage/NotFoundPage";

import LandingPage from "./pages/LandingPage/LandingPage";

import ThankYou from "./pages/ThankYou/ThankYou";

import Footer from "./components/Footer";

function App() {
  const [language, setLanguage] = useState('es'); 

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar language={language} changeLanguage={changeLanguage} />
        <Routes>

          {/* 404 */}

          <Route path="*" element={<NotFound />} />

          {/* Landing page */}

          <Route exact path="/" element={<LandingPage language={language} />} />

          {/* Thank You page*/}

          <Route
            exact
            path="/thankyou"
            element={<ThankYou />}
          />

        </Routes>

        <Footer language={language} />
      </div>
    </>
  );
}

export default App;
