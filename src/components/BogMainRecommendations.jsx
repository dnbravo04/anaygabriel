import iconAttendance from "../img/icon-attendance-bog.png";
import iconWomen from "../img/icon-women-bog.png";
import iconMen from "../img/icon-men-bog.png";
import iconCar from "../img/icon-car-bog.png";
import iconPunctuality from "../img/icon-punctuality-bog.png";
import iconGift from "../img/icon-gift-bog.png";

function BogMainRecommendations() {
  return (
    <>
      <h2 className="flex items-center justify-center font-italianno text-6xl text-mossgreen mt-2">
        Recomendaciones
      </h2>

      <div className="grid grid-cols-3 grid-rows-[repeat(9, 0.5fr)] gap-3 mb-5">
        <div className="col-span-2">
          <p className="pl-4 text-right">
            Te pedimos
            <strong> confirmar tu asistencia antes del 30 de Noviembre</strong>
            mediante el botón al final de la página.
          </p>
        </div>

        <div className="col-start-3 flex my-auto">
          <img src={iconAttendance} alt="Icono de asistencia" />
        </div>

        <div className="row-start-2">
          <img src={iconWomen} alt="Icono de mujeres" />
        </div>

        <div className="col-span-2 row-start-2 flex my-auto">
          <p className="pr-4">
            Mujeres elegantes, pueden usar vestidos por debajo de las rodillas o
            largos.
          </p>
        </div>

        <div className="col-span-2 row-start-3 flex">
          <p className="pl-4 m-auto text-right">
            Hombres, vestimenta formal o semi formal. Saco de traje opcional.
          </p>
        </div>

        <div className="col-start-3 row-start-3 flex m-auto">
          <img src={iconMen} alt="Icono de hombres" />
        </div>

        <div className="row-start-4 flex m-auto">
          <img src={iconCar} alt="Icono de carro" />
        </div>

        <div className="col-span-2 row-start-4 flex">
          <p className="pr-4 m-auto">
            El lugar cuenta con parqueadero libre. Sin embargo, llega temprano
            ya que los cupos de este son limitados.
          </p>
        </div>

        <div className="col-span-2 row-start-5 flex">
          <p className="pl-4 text-right items-center m-auto">
            Llega a tiempo para que no te pierdas ningun momento mágico.
          </p>
        </div>

        <div className="col-start-3 row-start-5 flex m-auto">
          <img src={iconPunctuality} alt="Icono de puntualidad" />
        </div>

        <div className="row-start-6 flex m-auto">
          <img src={iconGift} alt="Icono de regalo" />
        </div>

        <div className="col-span-2 row-start-6 flex m-auto">
          <ul className="list-disc pr-4">
            <li>
              Lista de regalos Falabella (Codigo 475071-03) haciendo click en el
              siguiente enlace:
              <br />
              <a
                href="https://www.noviosfalabella.com.co/public/resultadoBusquedaNovios.do?radTipoBusqueda=&valorSelectOrdenamiento=fecha&txtBusqueda=475071-03"
                target="_blank"
                className="flex mx-auto"
              >
                <button className="mx-auto border mb-5 mt-2 border-pakistangreen bg-mossgreen hover:bg-opacity-70 text-whitesmoke py-1 px-2">
                  Lista de regalos
                </button>
              </a>
            </li>
            <li>Lluvia de sobres (En persona o al Nequi 3016247581)</li>
          </ul>
        </div>

        <div className="col-span-3 row-start-7">
          <p className="px-4 text-center">
            Te pedimos encarecidamente que dejes a tus hijos pequeños con un
            familiar ya que no se permitirá la entrada de estos al evento.
          </p>
        </div>
      </div>
    </>
  );
}

export default BogMainRecommendations;
