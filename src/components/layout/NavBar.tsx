import React, { useContext } from "react";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";

import { Home } from "lucide-react";

import { Menu } from "./Menu";
import { Hamburger } from "../ui/Hamburger";
import { Button } from "../ui/Button";

import LangSwitcher from "../LangSwitcher";
import { MenuContext, menuStateEnum } from "../../utils/context";

export const NavBar = () => {
  const { t } = useTranslation();

  const { menuState, setMenuState } = useContext(MenuContext);
  const openMenu = () => {
    setMenuState(menuStateEnum.isOpen);
  };
  const closeMenu = () => {
    setMenuState(menuStateEnum.isClose);
  };
  if (typeof document !== "undefined") {
    menuState !== "openMenu" &&
      (document.body.style.overflow = "") &&
      (document.body.style.right = "0");
    menuState === "openMenu" &&
      (document.body.style.overflow = "hidden") &&
      (document.body.style.right = "14px");
  }

  return (
    <nav id="Nav" className={` z-10 w-full max-w-[100vw] bg-grass4 py-4`}>
      <div className="flex items-center justify-center h-6">
        <div className="lg:flex flex-1 justify-evenly hidden items-center">
          <Link to="/houses-huts" title="Accommodation" draggable={false}>
            <Button className="uppercase">{t("houses")}</Button>
          </Link>
          <Link to="/tavern" title="Tavern" draggable={false}>
            <Button className="uppercase">{t("tavern")}</Button>
          </Link>
          <Link to="/neighborhood" title="Our Neighborhood" draggable={false}>
            <Button className="uppercase">{t("our-neighborhood")}</Button>
          </Link>
        </div>
        <div className="">
          <Link
            to="/"
            title="Home"
            draggable={false}
            className="lg:flex w-10 h-10 justify-center"
            {...(menuState === "openMenu" ? { onClick: closeMenu } : {})}
          >
            <Home className="transition-all duration-300 w-8 h-10 hover:w-10  hover:fill-grass8 hover:stroke-grass6" />
          </Link>
        </div>
        <div className="hidden lg:flex justify-evenly flex-1">
          <Link to="/gallery" title="Gallery" draggable={false}>
            <Button className="uppercase">{t("gallery")}</Button>
          </Link>
          <Link to="/prices" title="Prices & Availibility" draggable={false}>
            <Button className="uppercase">{t("prices")}</Button>
          </Link>
          <Link to="/contact" title="Contact us" draggable={false}>
            <Button className="uppercase">{t("contact")}</Button>
          </Link>
        </div>

        <Hamburger openMenu={openMenu} closeMenu={closeMenu} />
      </div>
      <Menu closeMenu={closeMenu} />
      <LangSwitcher />
    </nav>
  );
};
