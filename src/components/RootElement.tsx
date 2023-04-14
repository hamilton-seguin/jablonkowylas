import React from "react";

import { MenuProvider } from "../utils/context";

type ContextProps = {
  children: JSX.Element;
};

const RootElement = ({ children }: ContextProps) => {
  return <MenuProvider>{children}</MenuProvider>;
};

export default RootElement;
