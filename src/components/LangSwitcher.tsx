import { Link, useI18next } from "gatsby-plugin-react-i18next";
import React, { useEffect } from "react";
import { Button } from "./ui/Button";
import { saveScrollPosition, scrollPosition, scrollToSavedPosition } from '../utils/scrollToPosition';

const LangSwitcher = () => {
  const { languages, originalPath, i18n } = useI18next();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.addEventListener("scroll", scrollPosition);
    scrollToSavedPosition();
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", saveScrollPosition);
    };
  }, []);

  return (
    <header id="langSwitcher" className="absolute right-0 md:right-[3%] top-14 md:top-20 bg-grass4 md:rounded-md z-20">
      <ul className="flex">
        {languages.map((lng) => (
          <Button key={lng}>
            <Link
              to={originalPath}
              language={lng}
              onClick={saveScrollPosition}              className={`inline-flex items-center justify-center w-4 h-4 sm:h-6 sm:w-6 ${
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
