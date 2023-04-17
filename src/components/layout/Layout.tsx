import React from "react";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
