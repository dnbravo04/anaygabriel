import mailLogo from "../img/email.png";
import whatsappLogo from "../img/whatsapp.png";
import React from "react";

function Footer() {
  return (
    <footer className="bg-blackolive text-whitesmoke font-handlee py-5">
      <div className="flex items-center justify-center">
        <img src={mailLogo} className="w-5 flex" />
        <p className="px-3 text-xl">matrimonioanaygabriel@gmail.com</p>
      </div>
<br />
      <div className="grid grid-cols-2 grid-rows-1 gap-5 items-center justify-center">
        <div className="flex mx-auto">
          <img src={whatsappLogo} className="w-7 h-7 mr-2" />
          <div className="text-xl">
            <p>3164335199</p>
            <p>El novio</p>
          </div>
        </div>

        <div className="flex mx-auto">
          <img src={whatsappLogo} className="w-7 h-7 mr-2" />
          <div className="text-xl">
            <p>3016247581</p>
            <p>La novia</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
