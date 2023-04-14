import React, { createContext, useState } from "react";

interface MenuContextType {
  menuState: menuStateEnum;
  setMenuState: React.Dispatch<React.SetStateAction<menuStateEnum>>;
}
export enum menuStateEnum {
  isClose = "closeMenu",
  isOpen = "openMenu",
  isDefault = "default",
}

export const MenuContext = createContext<MenuContextType>({
  menuState: menuStateEnum.isDefault,
  setMenuState: () => {},
});

type ContextProps = {
  children: JSX.Element;
};

export const MenuProvider = ({ children }: ContextProps) => {
  const [menuState, setMenuState] = useState<menuStateEnum>(menuStateEnum.isDefault);

  return (
    <MenuContext.Provider
      value={{ menuState, setMenuState }}
    >
      {children}
    </MenuContext.Provider>
  );
};
