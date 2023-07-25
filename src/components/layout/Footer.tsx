import React from "react";

const date = new Date().getFullYear();
export const Footer = () => {
  return (
    <footer
      id="contactUs"
      className="mt-16"
    >
      <div className="flex flex-col text-center bg-grass4 pb-8 pt-5">
          <p className="uppercase">JABŁONKOWY LAS</p>
          <p>Stanica Wodna PTTK</p>
          <p>ul. Turystyczna 5</p>
          <p>14-133 Stare Jabłonki</p>
          <p>+48 601 563 030</p>
          <p className="text-xs mt-4">{`© ${
            date === 2023 ? date : `2023 - ${date}`
          } DESIGN HAMILTON SEGUIN`}</p>
      </div>
    </footer>
  );
};