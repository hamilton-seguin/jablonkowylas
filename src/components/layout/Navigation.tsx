import React, { useContext } from "react";
import { Link } from "gatsby";

import { Menu } from "./Menu";

import { MenuContext, menuStateEnum } from "../../utils/context";
import { Hamburger } from "./Hamburger";

export const Navigation = () => {
  const { setMenuState } = useContext(MenuContext);
  const openMenu = () => {
    setMenuState(menuStateEnum.isOpen);
  };
  const closeMenu = () => {
    setMenuState(menuStateEnum.isClose);
  };

  return (
    <nav id="Nav" className="z-10 w-full max-w-[100vw] bg-grass4 py-4">
      <div className="flex items-center justify-center">
        <div className="lg:flex flex-1 justify-evenly hidden uppercase ">
          <Link to="/houses-huts" title="Houses & Shacks"
          className="hover:bg-grass6">Houses & Hut</Link>
          <Link to="/#" title="Prices & Availability"
          className="hover:bg-grass6">
          Prices & Availability
          </Link>
          <Link to="/#" title="Our Neighborhood"
          className="hover:bg-grass6">
          Our Neighborhood
          </Link>
          <Link to="/#" title="Contact us"
          className="hover:bg-grass6">Contact us</Link>
        </div>
        <Hamburger openMenu={openMenu} closeMenu={closeMenu}/>
      </div>
      <Menu closeMenu={closeMenu} />
    </nav>
  );
};
