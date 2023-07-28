import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import React from "react";
import { Button } from "../ui/Button";

const date = new Date().getFullYear();
export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contactUs" className="mt-16">
      <div className="flex flex-col text-center bg-grass4 pb-8 pt-5">
        <div>
          <p className="uppercase">JABŁONKOWY LAS</p>
          <p>Stanica Wodna PTTK</p>
          <p>ul. Turystyczna 5</p>
          <p>14-133 Stare Jabłonki</p>
          <p>+48 601 563 030</p>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-5 text-xs mt-4 w-full ">
          <p className="lg:col-start-2">
            <Button>
              <Link to="/rules">{t("rules")}</Link>
            </Button>
          </p>
          <p className="lg:col-start-3 py-1.5">{`© ${
            date === 2023 ? date : `2023 - ${date}`
          } DESIGN HAMILTON SEGUIN`}</p>
          <p className="lg:col-start-4">
            <Button>
              <Link to="/privacy">{t("privacy")}</Link>
            </Button>
          </p>
        </div>
      </div>
    </footer>
  );
};
