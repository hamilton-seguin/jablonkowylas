import React, { useContext, useEffect } from "react";
import { Link } from "gatsby";
import { MenuContext, menuStateEnum } from "../../utils/context";
import { Button } from "../ui/Button";

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
        className={`${menuState} top-[56px] bg-grass4 h-[100vh] min-w-[50%]`}
      >
        <nav className="flex flex-col px-4 pt-4 justify-evenly align-start h-[70vh] font-bold min-h-max text-sm sm:text-[19px] uppercase">
          <Link to="/houses-huts" title="Houses & Shacks" onClick={closeMenu} className="text-center">
            <Button className="md:py-4 w-full">Houses & Huts</Button>
          </Link>
          <Link to="/restaurant" title="Restaurant" onClick={closeMenu} className="text-center">
            <Button className="md:py-4 w-full">Restaurant</Button>
          </Link>
          <Link to="/neighborhood" title="Our Neighborhood" onClick={closeMenu} className="text-center">
            <Button className="md:py-4 w-full">Our Neighborhood</Button>
          </Link>
          <Link to="/gallery" title="Gallery" onClick={closeMenu} className="text-center">
            <Button className="md:py-4 w-full">Gallery</Button>
          </Link>
          <div className="border-t-[2px] border-font w-full"></div>
          <Link to="/prices" title="Prices & Availability" onClick={closeMenu} className="text-center">
            <Button className="md:py-4 w-full">Prices & Reservations</Button>
          </Link>
          <Link to="/contact" title="Contact us" onClick={closeMenu} className="text-center">
            <Button className="md:py-4 w-full">Contact us</Button>
          </Link>
          <div className="border-t-[2px] border-font w-full"></div>
          <div className="text-center">
            <p className="pb-4 md:py-4">Contact:</p>
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
