import React from "react";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import { StaticImage } from "gatsby-plugin-image";

type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    // <div className="relative h-full">
    //   <StaticImage
    //     src="../../images/wallpaper.jpg"
    //     alt="wallpaper"
    //     quality={100}
    //     className="fixed w-full -z-10 h-[100vh] object-cover"
    //   />
      <div>
        <NavBar />
        {children}
        <Footer />
      {/* </div> */}
     </div>
  );
};

export default Layout;
