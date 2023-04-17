import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{}
type ButtonProp = React.FC<ButtonProps>;

export const Button: ButtonProp = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-grass4 px-4 py-1.5 hover:bg-grass6 active:bg-grass7 inline-flex items-center justify-center rounded-md transition-all duration-300 focus:outline-none text-center ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};