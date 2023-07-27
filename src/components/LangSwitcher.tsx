import { Link, useI18next } from "gatsby-plugin-react-i18next";
import React from "react";
import { Button } from "./ui/Button";

const LangSwitcher = () => {
  const { languages, originalPath, i18n } = useI18next();


  return (
    <header
      id="langSwitcher"
      className="absolute right-0 md:right-[3%] top-14 md:top-20 bg-grass4 md:rounded-md z-20"
    >
      <div className="flex">
        {languages.map((lng) => (
          <Button key={lng}>
            <Link
              to={originalPath}
              language={lng}
              className={`inline-flex items-center justify-center w-5 h-5 md:h-6 md:w-6 ${
                i18n.resolvedLanguage === lng ? "underline" : "none"
              } `}
            >
              <div className="p-4 uppercase text-sm">{lng}</div>
            </Link>
          </Button>
        ))}
      </div>
    </header>
  );
};

export default LangSwitcher;
