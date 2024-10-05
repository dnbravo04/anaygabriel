import iconAttendance from "../img/icon-attendance.png";
import iconWomen from "../img/icon-women.png";
import iconMen from "../img/icon-men.png";
import iconCar from "../img/icon-car.png";
import iconPunctuality from "../img/icon-punctuality.png";
import iconGift from "../img/icon-gift.png";
import rose1 from "../img/colors/rose1.png";
import rose2 from "../img/colors/rose2.png";
import rose3 from "../img/colors/rose3.png";
import rose4 from "../img/colors/rose4.png";

function MainRecommendations() {
  return (
    <>
      <h2 className="flex items-center justify-center font-italianno text-6xl text-oldrose mt-2">
        Recomendaciones
      </h2>

      <div className="grid grid-cols-3 grid-rows-[repeat(9, 0.5fr)] gap-3 mb-5">
        <div className="col-span-2">
          <p className="pl-4 text-justify">
            Te pedimos
            <strong>&nbsp;confirmar tu asistencia antes del 30 de Noviembre&nbsp;</strong>
            mediante el botón al final de la página. Por políticas del lugar
            solo se permitirá la entrada a personas en lista.
          </p>
        </div>

        <div className="col-start-3 flex my-auto">
          <img src={iconAttendance} alt="Icono de asistencia" />
        </div>

        <div className="row-start-2">
          <img src={iconWomen} alt="Icono de mujeres" />
        </div>

        <div className="col-span-2 row-start-2 flex my-auto">
          <p className="pr-4 text-justify">
            Mujeres elegantes, pueden usar vestidos por debajo de las rodillas o
            largos.
          </p>
        </div>

        <div className="col-span-3 row-start-3 flex m-3">
          <strong className="text-justify m-auto">
            Los siguientes colores están prohibidos tanto para hombres como para
            mujeres:
          </strong>
        </div>

        <div className="col-span-3 row-start-4 flex m-auto">
          <div className="grid grid-cols-4 grid-rows-1 gap-4 mx-4">
            <img src={rose1} alt="Color prohibido 1" />
            <img src={rose2} alt="Color prohibido 2" />
            <img src={rose3} alt="Color prohibido 3" />
            <img src={rose4} alt="Color prohibido 4" />
          </div>
        </div>

        <div className="col-span-2 row-start-5 flex">
          <p className="pl-4 text-justify m-auto">
            Hombres, vestimenta formal o semi formal. Saco de traje opcional.
            Evitar los colores anteriormente mostrados.
          </p>
        </div>

        <div className="col-start-3 row-start-5 flex m-auto">
          <img src={iconMen} alt="Icono de hombres" />
        </div>

        <div className="row-start-6 flex m-auto">
          <img src={iconCar} alt="Icono de carro" />
        </div>

        <div className="col-span-2 row-start-6 flex">
          <p className="pr-4 text-justify m-auto">
            Evita traer tu vehiculo (carro o moto) ya que el lugar no cuenta con
            parqueadero privado.
          </p>
        </div>

        <div className="col-span-2 row-start-7 flex">
          <p className="pl-4 text-justify items-center m-auto">
            Llega a tiempo para que no te pierdas ningún momento mágico.
          </p>
        </div>

        <div className="col-start-3 row-start-7 flex m-auto">
          <img src={iconPunctuality} alt="Icono de puntualidad" />
        </div>

        <div className="row-start-8 flex m-auto">
          <img src={iconGift} alt="Icono de regalo" />
        </div>

        <div className="col-span-2 row-start-8 flex m-auto">
          <ul className="list-disc pr-4 text-justify">
            <li>
              Lista de regalos Falabella (Codigo 475071-03) haciendo click en el
              siguiente enlace:
              <br />
              <a
                href="https://www.noviosfalabella.com.co/public/resultadoBusquedaNovios.do?radTipoBusqueda=&valorSelectOrdenamiento=fecha&txtBusqueda=475071-03"
                target="_blank"
                className="flex mx-auto"
              >
                <button className="mx-auto border mb-5 mt-2 border-auburn bg-oldrose hover:bg-opacity-70 text-whitesmoke py-1 px-2">
                  Lista de regalos
                </button>
              </a>
            </li>
            <li>Lluvia de sobres (En persona o al Nequi 3016247581)</li>
          </ul>
        </div>

        <div className="col-span-3 row-start-9 text-justify">
          <p className="px-4 text-justify">
            Te pedimos encarecidamente que dejes a tus hijos pequeños con un
            familiar ya que no se permitirá la entrada de estos al evento.
          </p>
        </div>
      </div>
    </>
  );
}

export default MainRecommendations;
