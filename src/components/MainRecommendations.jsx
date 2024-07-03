import iconAttendance from "../img/icon-attendance.png";
import iconWomen from "../img/icon-women.png";
import iconMen from "../img/icon-men.png";
import iconCar from "../img/icon-car.png";
import iconPunctuality from "../img/icon-punctuality.png";
import iconGift from "../img/icon-gift.png";

function MainRecommendations() {
  return (
    <>
      <h2 className="flex items-center justify-center font-italianno text-6xl text-oldrose mt-2">
        Recomendaciones
      </h2>

      <div className="grid grid-cols-3 grid-rows-[repeat(7, 0.5fr)] gap-4 mb-5">
        <div className="col-span-2">
          <p className="pl-4 text-justify">
            Es fundamental que los invitados confirmen su asistencia antes de la
            fecha de la boda. Esto ayuda a los organizadores a planificar
            adecuadamente la logística y la recepción.
          </p>
        </div>

        <div className="col-start-3">
          <img src={iconAttendance} alt="Icono de asistencia" srcSet="" />
        </div>

        <div className="row-start-2">
          <img src={iconWomen} alt="Icono de mujeres" srcSet="" />
        </div>

        <div className="col-span-2 row-start-2">
          <p className="pr-4 text-justify">
            Vestidos elegantes, trajes de cóctel o atuendos formales son comunes
            en las bodas. Evita colores demasiado llamativos o vestimenta
            inapropiada. Las mujeres deben vestirse de manera apropiada para la
            ocasión.
          </p>
        </div>

        <div className="col-span-2 row-start-3">
          <p className="pl-4 text-justify">
            Los hombres deben usar trajes formales o esmoquin. La elección del
            color y el estilo debe estar en línea con el código de vestimenta
            especificado en la invitación.
          </p>
        </div>

        <div className="col-start-3 row-start-3">
          <img src={iconMen} alt="Icono de hombres" srcSet="" />
        </div>

        <div className="row-start-4">
          <img src={iconCar} alt="Icono de carro" srcSet="" />
        </div>

        <div className="col-span-2 row-start-4">
          <p className="pr-4 text-justify">
            Asegúrate de conocer las opciones de estacionamiento disponibles en
            el lugar de la boda. Si es necesario, coordina con otros invitados
            para compartir viajes o utilizar servicios de transporte.
          </p>
        </div>

        <div className="col-span-2 row-start-5">
          <p className="pl-4 text-justify">
            Llega a tiempo a la ceremonia y la recepción. La puntualidad es una
            muestra de respeto hacia los novios y los demás invitados.
          </p>
        </div>

        <div className="col-start-3 row-start-5">
          <img src={iconPunctuality} alt="Icono de puntualidad" srcSet="" />
        </div>

        <div className="row-start-6">
          <img src={iconGift} alt="Icono de regalo" srcSet="" />
        </div>

        <div className="col-span-2 row-start-6">
          <p className="pr-4 text-justify">
            Si los novios han especificado una preferencia, sigue sus
            indicaciones en cuanto a regalos. Algunas parejas prefieren recibir
            sobres con dinero en lugar de regalos físicos.
          </p>
        </div>

        <div className="col-span-3 row-start-7 text-center">
          <p className="px-4 text-justify">
            En general, las bodas son eventos formales y no suelen ser
            apropiados para niños pequeños o mascotas. Si no se ha especificado
            lo contrario, es recomendable dejar a los niños y las mascotas en
            casa para evitar distracciones durante la ceremonia.
          </p>
        </div>
      </div>
    </>
  );
}

export default MainRecommendations;
