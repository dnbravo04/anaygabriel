import React, { useEffect, useRef } from "react";

export const BigScreenComponent = () => {
  const componentRef = useRef(null);

  useEffect(() => {
    componentRef.current.style.height = '100vh'; // Set height to full viewport
  }, []);

  return (
    <div className="relative w-full bg-big-screen bg-center bg-cover bg-no-repeat" ref={componentRef}>
      <div className="absolute inset-0 flex flex-col justify-center items-start px-10 lg:items-start">
        <div className="flex flex-col items-center justify-center border border-auburn bg-oldrose bg-opacity-50 p-10">
          <h1 className="text-whitesmoke font-italianno text-left text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Ana y Gabriel
          </h1>
          <h2 className="text-whitesmoke font-handlee pt-5 flex items-center justify-center mx-auto text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
            Enero 2025
          </h2>
          <p className="text-whitesmoke sm:mt-4 md:mt-5 lg:mt-20 font-handlee pt-5 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-center">
            Para ver la invitación y <br />
            confirmar tu asistencia utiliza tu teléfono
          </p>
        </div>
      </div>
    </div>
  );
};