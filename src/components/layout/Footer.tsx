import React from "react";

const date = new Date().getFullYear();
export const Footer = () => {
  return (
    <footer
      id="contactUs"
      className="mt-16"
    >
      <div className="flex flex-col text-center bg-grass9 pb-10 pt-5">
        <div className="uppercase">
          <p>JABLONKOWYLAS</p>
          <p>Ryn, Poland</p>
          <p>+3465 785 552</p>
          <p>{`© ${
            date === 2023 ? date : `2023 - ${date}`
          } DESIGN HAMILTON SEGUIN`}</p>
        </div>
      </div>
    </footer>
  );
};
