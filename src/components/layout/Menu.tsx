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
          <Button className="md:py-4">
            <Link to="/houses-huts" title="Houses & Shacks" onClick={closeMenu}>
              Houses & Shacks
            </Link>
          </Button>
          <Button className="md:py-4">
            <Link to="/#" title="Prices & Availability" onClick={closeMenu}>
              Prices & Availability
            </Link>
          </Button>
          <Button className="md:py-4">
            <Link to="/#" title="Our Neighborhood" onClick={closeMenu}>
              Our Neighborhood
            </Link>
          </Button>
          <Button className="md:py-4">
            <Link to="/#" title="Contact us" onClick={closeMenu}>
              Contact us
            </Link>
          </Button>
          <div className="border-t-[2px] border-font w-full"></div>
          <Button className="md:py-4">
            <a href="#">Instagram</a>
          </Button>
          <Button className="md:py-4">
            <a href="#">LinkedIn</a>
          </Button>
          <div className="border-t-[2px] border-font w-full"></div>
          <div className="text-center">
            <p className="pb-4">Contact:</p>
            <p className="font-light lowercase break-words">
              {" "}
              contact@jablonkowylas.pl
            </p>
            <p className="font-light lowercase pt-4">+3465 785 552</p>
          </div>
        </nav>
      </aside>
    </>
  );
};


