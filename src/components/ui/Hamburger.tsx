import React, { useContext, useEffect } from "react";

import { MenuContext } from "../../utils/context";

type HamburgerProps = {
  openMenu: () => void;
  closeMenu: () => void;
};

export const Hamburger = ({ openMenu, closeMenu }: HamburgerProps) => {
  const { menuState } = useContext(MenuContext);

  const handleChange = () => {
    const hamburger = document.getElementById("hamburger") as HTMLInputElement;
    hamburger && hamburger.checked ? openMenu() : closeMenu();
  };

  useEffect(() => {
    const menu = document?.getElementById("menu");
    const hamburger = document.getElementById("hamburger") as HTMLInputElement;
    if (menuState === "closeMenu") {
      menu?.addEventListener("animationstart", () => {
        if (menu?.classList.contains("closeMenu")) {
          hamburger.checked = false;
        }
        return () => menu?.removeEventListener("animationstart", () => {});
      });
    }
  }, [menuState]);

  return (
    <label
      htmlFor="hamburger"
      className="hamburger-menu flex flex-col max-w-max cursor-pointer lg:hidden hover:before:bg-grass11 hover:after:bg-grass11 "
    >
      <input
        id="hamburger"
        type="checkbox"
        onChange={handleChange}
        aria-label="toggle menu"
        className="hover:bg-grass11"
      />
    </label>
  );
};
