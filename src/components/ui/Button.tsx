import React, { ReactNode } from "react";

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{}
// type ButtonProp = React.FC<ButtonProps>;

interface ButtonProps {
  children: ReactNode;
  className?: string;
  handleClick?: () => void;
}

export const Button = ({ children, className, handleClick }: ButtonProps) => {
  return (
    <button
      className={`bg-grass4 px-4 py-1.5 hover:bg-grass6 active:bg-grass7 inline-flex items-center justify-center rounded-md transition-all duration-300 focus:outline-none text-center ${className}`}
      {...handleClick }
    >
      {children}
    </button>
  );
};
