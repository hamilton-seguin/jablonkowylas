import React, { useContext, useEffect } from "react";
import { Link } from "gatsby";
import { MenuContext, menuStateEnum } from "../../utils/context";

type MenuProps = {
  closeMenu: () => void;
};

export const Menu = ({ closeMenu }: MenuProps) => {
  const { menuState, setMenuState } = useContext(MenuContext);

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
        className={`${menuState} top-10 md:top-[60px] bg-background h-[100vh]`}
      >
        <nav className="flex flex-col px-4 pt-4 justify-evenly align-start h-[70vh] font-bold min-h-max text-sm sm:text-[19px] uppercase">
          <Link to="/#" title="Houses & Shacks">
            Houses & Shacks
          </Link>
          <Link to="/#" title="Prices & Availability">
            Prices & Availability
          </Link>
          <Link to="/#" title="Our Neighborhood">
            Our Neighborhood
          </Link>
          <Link to="/#" title="Contact us">
            Contact us
          </Link>
          <div className="border-t-[2px] border-font w-full"></div>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <div className="border-t-[2px] border-font w-full"></div>
          <div>
            <p className="pb-4">Contact:</p>
            <p className="font-light lowercase">contact@jablonkowylas.pl</p>
            <p className="font-light lowercase">+3465 785 552</p>
          </div>
        </nav>
      </aside>
    </>
  );
};
