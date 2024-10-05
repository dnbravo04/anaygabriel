import mailLogo from "../img/email.png";
import whatsappLogo from "../img/whatsapp.png";
import React from "react";
function BogFooter() {
  return (
    <footer className="bg-blackolive text-whitesmoke font-handlee py-5">
      <div className="flex items-center justify-center">
        <img src={mailLogo} className="w-5 flex" />
        <a
          href="mailto:matrimonioanaygabriel@gmail.com"
          className="px-3 text-xl"
        >
          matrimonioanaygabriel@gmail.com
        </a>
      </div>
      <br />
      <div className="grid grid-cols-2 grid-rows-1 gap-5 items-center justify-center">
        <a
          href="https://wa.me/573164335199"
          className="flex mx-auto"
          target="_blank"
        >
          <img src={whatsappLogo} className="w-7 h-7 mr-2" />
          <div className="text-xl">
            <p>3164335199</p>
            <p>El novio</p>
          </div>
        </a>

        <a
          href="https://wa.me/573016247581"
          className="flex mx-auto"
          target="_blank"
        >
          <img src={whatsappLogo} className="w-7 h-7 mr-2" />
          <div className="text-xl">
            <p>3016247581</p>
            <p>La novia</p>
          </div>
        </a>
      </div>
    </footer>
  );
}

export default BogFooter;
