import React, { useEffect, useRef } from "react";
import bgimage from "../img/image_20.webp";

export const BigScreenComponent = () => {
  const componentRef = useRef(null);

  useEffect(() => {
    const footerHeight = document.querySelector('footer').offsetHeight; // Replace 'footer' with the actual class or ID of your footer element
    componentRef.current.style.height = `calc(100vh - ${footerHeight}px)`;
  }, []);

  return (
    <div className="relative w-full" ref={componentRef}>
      <img
        src={bgimage}
        className="w-full h-full object-cover bg-center"
        alt="Background Image"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start px-10 lg:items-start">
        <div className="flex flex-col items-center justify-center border border-auburn bg-oldrose bg-opacity-50 p-10">
          <h1 className="text-whitesmoke font-italianno text-left text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            Ana y Gabriel
          </h1>
          <h2 className="text-whitesmoke font-bold font-handlee pt-5 flex items-center justify-center mx-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            10.01.2025
          </h2>
          <p className="text-whitesmoke sm:mt-4 md:mt-5 lg:mt-20 font-handlee pt-5 text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">
            Para ver la invitación y <br />
            confirmar tu asistencia utiliza tu teléfono
          </p>
        </div>
      </div>
    </div>
  );
};