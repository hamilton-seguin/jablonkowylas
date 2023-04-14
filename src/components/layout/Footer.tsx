import { Link } from "gatsby";
import React from "react";

const date = new Date().getFullYear();
export const Footer = () => {
  return (
    <footer
      id="contactUs"
      className="mt-16"
    >
      <div className="flex flex-col text-center bg-secondary pb-10 pt-5">
        <div className="">
          <p>JABLONKOWYLAS</p>
          <p>Ryn, Poland</p>
          <p>+3465 785 552</p>
          <p>{`© ${
            date === 2023 ? date : `2023 - ${date}`
          } DESIGN HAMILTON SEGUIN`}</p>
        </div>
      </div>
      {/* <div className="px-4 text-sm col-start-1 text-gray-400 mt-10 lg:relative lg:hidden">
          <p>{`© ${date === 2023 ? date : `2023 - ${date}`} JABLONKOWYLAS DESIGN BY HAMILTON`}</p>
        </div> */}
    </footer>
  );
};
