import React, { useContext } from "react";
import { Link } from "gatsby";

import { Menu } from "./Menu";

import { MenuContext, menuStateEnum } from "../../utils/context";
import { Hamburger } from "./Hamburger";

export const Navigation = () => {
  const { menuState, setMenuState } = useContext(MenuContext);

  const openMenu = () => {
    setMenuState(menuStateEnum.isOpen);
    
  };

  const closeMenu = () => {
    setMenuState(menuStateEnum.isClose);
  };


  return (
    <nav id="Nav" className="z-10 w-full max-w-[100vw]">
      <div className="flex items-center justify-center">
        <div className="lg:flex flex-1 justify-evenly hidden uppercase">
          <Link to="/#" title="Houses & Shacks">Houses & Shacks</Link>
          <Link to="/#" title="Prices & Availability">
          Prices & Availability
          </Link>
          <Link to="/#" title="Our Neighborhood">
          Our Neighborhood
          </Link>
          <Link to="/#" title="Contact us">Contact us</Link>
        </div>
        <Hamburger openMenu={openMenu} closeMenu={closeMenu}/>
      </div>
      <Menu closeMenu={closeMenu} />
    </nav>
  );
};
