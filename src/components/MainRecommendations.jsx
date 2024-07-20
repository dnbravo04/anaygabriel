import iconAttendance from "../img/icon-attendance.png";
import iconWomen from "../img/icon-women.png";
import iconMen from "../img/icon-men.png";
import iconCar from "../img/icon-car.png";
import iconPunctuality from "../img/icon-punctuality.png";
import iconGift from "../img/icon-gift.png";
import green1 from "../img/colors/green1.png";
import green2 from "../img/colors/green2.png";
import green3 from "../img/colors/green3.png";
import green4 from "../img/colors/green4.png";
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

      <div className="grid grid-cols-3 grid-rows-[repeat(10, 0.5fr)] gap-3 mb-5">
        <div className="col-span-2">
          <p className="pl-4 text-justify">
            Te pedimos
            <strong>
              {" "}
              confirmar tu asistencia antes del 30 de Noviembre
            </strong>{" "}
            mediante el botón al final de la página. Por políticas del lugar
            solo se permitirá la entrada a personas en lista.
          </p>
        </div>

        <div className="col-start-3 flex my-auto">
          <img src={iconAttendance} alt="Icono de asistencia" srcSet="" />
        </div>

        <div className="row-start-2">
          <img src={iconWomen} alt="Icono de mujeres" srcSet="" />
        </div>

        <div className="col-span-2 row-start-2 flex my-auto">
          <p className="pr-4 text-justify">
            Mujeres elegantes, pueden usar vestidos por debajo de las rodillas o
            largos.
          </p>
        </div>
        <div className="col-span-3 row-start-3 flex m-3">
          <strong className=" text-justify m-auto">
            Los siguientes colores están prohibidos tanto para hombres como para
            mujeres:
          </strong>
        </div>
        <div className="col-span-3 row-start-4 flex m-auto">
          <div className="grid grid-cols-4 grid-rows-1 gap-4 mx-4">
            <div>
              <img src={rose1} />
            </div>
            <div>
              <img src={rose2} />
            </div>
            <div>
              <img src={rose3} />
            </div>
            <div>
              <img src={rose4} />
            </div>
          </div>
        </div>

        <div className="col-span-2 row-start-5 flex">
          <p className="pl-4 text-justify m-auto">
            Hombres, vestimenta formal o semi formal. Saco de traje opcional.
            Evitar los colores anteriormente mostrados.
          </p>
        </div>

        <div className="col-start-3 row-start-5 flex m-auto">
          <img src={iconMen} alt="Icono de hombres" srcSet="" />
        </div>

        <div className="row-start-6 flex m-auto">
          <img src={iconCar} alt="Icono de carro" srcSet="" />
        </div>

        <div className="col-span-2 row-start-6 flex">
          <p className="pr-4 text-justify m-auto">
            El lugar no cuenta con parqueadero privado.
          </p>
        </div>

        <div className="col-span-2 row-start-7 flex">
          <p className="pl-4 text-justify items-center m-auto">
            Llega a tiempo para que no te pierdas ningun momento mágico.
          </p>
        </div>

        <div className="col-start-3 row-start-7 flex m-auto">
          <img src={iconPunctuality} alt="Icono de puntualidad" srcSet="" />
        </div>

        <div className="row-start-8 flex m-auto">
          <img src={iconGift} alt="Icono de regalo" srcSet="" />
        </div>

        <div className="col-span-2 row-start-8 flex m-auto">
            <ul className="list-disc pr-4 text-justify">
              <li>
                Lista de regalos Falabella haciendo click{" "}
                <a
                  href="https://www.noviosfalabella.com.co/public/resultadoBusquedaNovios.do?radTipoBusqueda=&valorSelectOrdenamiento=fecha&txtBusqueda=475071-03"
                  target="_blank"
                  className="text-oldrose"
                >
                  aquí
                </a>
              </li>
              <li>Lluvia de sobres (En persona o al Nequi 3016247581)</li>
            </ul>
        </div>

        <div className="col-span-3 row-start-9 text-justify">
          <p className="px-4 text-justify">
            Te pedimos encarecidamente que dejes a tus hijos pequeños con un
            familiar ya que no se permitirá la entrada de estos a la ceremonia.
          </p>
        </div>
      </div>
    </>
  );
}

export default MainRecommendations;
