import React from "react";

const date = new Date().getFullYear();
export const Footer = () => {
  return (
    <footer
      id="contactUs"
      className="mt-16"
    >
      <div className="flex flex-col text-center bg-grass4 pb-8 pt-5">
        <div className="uppercase">
          <p>JABLONKOWY LAS</p>
          <p>Ryn, Poland</p>
          <p>+3465 785 552</p>
          <p className="text-xs mt-4">{`© ${
            date === 2023 ? date : `2023 - ${date}`
          } DESIGN HAMILTON SEGUIN`}</p>
        </div>
      </div>
    </footer>
  );
};
