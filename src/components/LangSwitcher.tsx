import { Link, useI18next } from "gatsby-plugin-react-i18next";
import React from "react";
import { Button } from "./ui/Button";

const LangSwitcher = () => {
  const { languages, originalPath, i18n } = useI18next();
  const removeSavedScrollPosition = () => {
    localStorage.removeItem('savedScrollPosition')
  }
  
  return (
    <header id="langSwitcher" className="absolute right-0 sm:right-[3%] top-14 sm:top-20 bg-grass4 md:rounded-md z-20">
      <ul className="flex">
        {languages.map((lng) => (
          <Button key={lng}>
            <Link
              to={originalPath}
              language={lng}
              onClick={removeSavedScrollPosition}              className={`inline-flex items-center justify-center w-4 h-4 md:h-6 md:w-6 ${
                i18n.resolvedLanguage === lng ? "underline" : "none"} `}
            >
              <li className="p-4 uppercase text-sm">
                {lng}
              </li>
            </Link>
          </Button>
        ))}
      </ul>
    </header>
  );
};

export default LangSwitcher;
