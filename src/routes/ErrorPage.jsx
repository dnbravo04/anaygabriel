import { Link, useRouteError } from "react-router-dom";
import errorPhoto from "../img/image2.jpeg";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
<div className="flex justify-center items-center min-h-screen bg-whitesmoke font-sans py-12">
      <div className="w-full max-w-md px-4">
        <img
          src={errorPhoto}
          alt="Wedding Error"
          className="w-full h-auto shadow-md mb-4"
        />
        <h1 className="text-4xl font-bold font-handlee text-center text-oldrose">
          Error Inesperado
        </h1>
        <p className="text-center mt-4">
          Parece ser que la pagina que buscas no existe. ¡No te preocupes! Vuelve a la pagina principal con el botón de abajo.
        </p>
        <div className="flex justify-center mt-8 border border-oldrose">
          <Link to="/anaygabriel/" className="px-4 py-2 text-2xl font-handlee text-oldrose  ">
            Pagina principal
          </Link>
        </div>
      </div>
    </div>
  );
}