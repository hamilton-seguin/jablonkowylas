import React, { useContext, useEffect } from "react";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";

import { MenuContext, menuStateEnum } from "../../utils/context";
import { Button } from "../ui/Button";

type MenuProps = {
  closeMenu: () => void;
};

export const Menu = ({ closeMenu }: MenuProps) => {
  const { menuState, setMenuState } = useContext(MenuContext);

  const { t } = useTranslation();

  useEffect(() => {
    const menu = document?.getElementById("menu");
    if (menuState === "closeMenu") {
      menu?.addEventListener("animationend", () => {
        if (menu?.classList.contains("closeMenu")) {
          setMenuState(menuStateEnum.isDefault);
        }
        return () => menu?.removeEventListener("animationend", () => {});
      });
    }
  }, [menuState]);

  return (
    <>
      <aside
        id="menu"
        className={`${menuState} top-[56px] bg-grass4 h-[100vh] min-w-[50%]`}
      >
        <nav className="flex flex-col px-4 pt-4 justify-evenly align-start h-[70vh] font-bold min-h-max text-sm sm:text-[19px] uppercase">
          <Link
            to="/houses-huts"
            title="Houses & Shacks"
            onClick={closeMenu}
            className="text-center"
          >
            <Button className="md:py-4 w-full">{t("houses")}</Button>
          </Link>
          <Link
            to="/tavern"
            title="Tavern"
            onClick={closeMenu}
            className="text-center"
          >
            <Button className="md:py-4 w-full">{t("tavern")}</Button>
          </Link>
          <Link
            to="/neighborhood"
            title="Our Neighborhood"
            onClick={closeMenu}
            className="text-center"
          >
            <Button className="md:py-4 w-full">{t("our-neighborhood")}</Button>
          </Link>
          <Link
            to="/gallery"
            title="Gallery"
            onClick={closeMenu}
            className="text-center"
          >
            <Button className="md:py-4 w-full">{t("gallery")}</Button>
          </Link>
          <div className="border-t-[2px] border-font w-full"></div>
          <Link
            to="/prices"
            title="Prices & Availability"
            onClick={closeMenu}
            className="text-center"
          >
            <Button className="md:py-4 w-full">{t("prices")}</Button>
          </Link>
          <Link
            to="/contact"
            title="Contact us"
            onClick={closeMenu}
            className="text-center"
          >
            <Button className="md:py-4 w-full">{t("contact")}</Button>
          </Link>
          <div className="border-t-[2px] border-font w-full"></div>
          <div className="text-center">
            <p className="pb-4 md:py-4">{t("contact2")}</p>
            <p className="font-light lowercase break-words">
              info@jablonkowylas.pl
            </p>
            <p className="font-light lowercase pt-4">+48 601 563 030</p>
          </div>
        </nav>
      </aside>
    </>
  );
};
