import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import React from "react";
import { Button } from "../ui/Button";

const date = new Date().getFullYear();
export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contactUs" className="mt-16">
      <div className="flex flex-col text-center bg-grass4 pb-8 pt-5">
        <div className="mb-4">
          <p className="uppercase">JABŁONKOWY LAS</p>
          <p>Stanica Wodna PTTK</p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2  gap-y-4 md:gap-x-24 mx-4">
          <div className="col-start-1 row-start-1">
            <p>ul. Turystyczna 5</p>
            <p className=" py-1.5">14-133 Stare Jabłonki</p>
          </div>
          <div className="col-start-1 row-start-2 ">
            <Button>
              <Link to="/rules">{t("rules")}</Link>
            </Button>
          </div>
          <div className="col-start-2 row-start-1 ">
            <p>+48 601 563 030</p>
            <p style={{overflowWrap: "anywhere"}}>
              <Button>
                <a href="mailto://jablonkowylas@gmail.com" className="">
                  jablonkowylas@gmail.com
                </a>
              </Button>
            </p>
          </div>
          <div className="col-start-2 row-start-2 ">
            <Button>
              <Link to="/privacy">{t("privacy")}</Link>
            </Button>
          </div>
        </div>
        <div className="">
          <p className="mt-1.5 text-xs">{`© ${
            date === 2023 ? date : `2023 - ${date}`
          } DESIGN HAMILTON SEGUIN`}</p>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-5 text-xs mt-4 w-full uppercase"></div>
      </div>
    </footer>
  );
};
