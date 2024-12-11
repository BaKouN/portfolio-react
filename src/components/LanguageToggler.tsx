import React from "react";
import { useTranslation } from "react-i18next";

const LanguageToggler = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div>
        <button
        className="btn btn-outline"
        onClick={toggleLanguage}
        aria-label="Toggle Language"
        >
        {i18n.language === "en" ? (
            <span className="fi fi-fr"></span>
        ) : (
            <span className="fi fi-gb"></span>
        )}
        </button>
    </div>
  );
};

export default LanguageToggler;