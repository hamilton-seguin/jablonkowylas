import React, { useContext } from "react";
import { Link } from "gatsby";
import { HomeIcon } from "@radix-ui/react-icons";

import { Menu } from "./Menu";
import { Hamburger } from "../ui/Hamburger";
import { Button } from "../ui/Button";

import { MenuContext, menuStateEnum } from "../../utils/context";

export const NavBar = () => {
  const { setMenuState } = useContext(MenuContext);
  const openMenu = () => {
    setMenuState(menuStateEnum.isOpen);
  };
  const closeMenu = () => {
    setMenuState(menuStateEnum.isClose);
  };

  return (
    <nav id="Nav" className="z-10 w-full max-w-[100vw] bg-grass4 py-4">
      <div className="flex items-center justify-center h-6">
        <div className="lg:flex flex-1 justify-evenly hidden items-center">
          <Button>
            <Link to="/houses-huts" title="Houses & Shacks" className="uppercase">
              Houses & Hut
            </Link>
          </Button>
          <Button>
            <Link to="/#" title="Prices & Availability" className="uppercase">
              Prices & Availability
            </Link>
          </Button>
          <Link to="/" title="Home" className="hidden lg:flex w-10 h-10 justify-center">
            <HomeIcon className="transition-all duration-300 w-8 h-10 hover:w-10  hover:text-grass11"/>
          </Link>
          <Button>
            <Link to="/#" title="Our Neighborhood" className="uppercase">
              Our Neighborhood
            </Link>
          </Button>
          <Button>
            <Link to="/#" title="Contact us" className="uppercase">
              Contact us
            </Link>
          </Button>
        </div>
        <Link to="/" title="Home" className="flex lg:hidden w-12 h-12 justify-center items-center" onClick={closeMenu}>
          <HomeIcon className="w-10 h-10 hover:w-14 hover:h-14 hover:text-grass11 transition-all duration-300" />
        </Link>
        <Hamburger openMenu={openMenu} closeMenu={closeMenu} />
      </div>
      <Menu closeMenu={closeMenu} />
    </nav>
  );
};
