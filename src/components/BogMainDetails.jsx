import iconCalendar from "../img/icon-calendar-bog.png";
import iconPlace from "../img/icon-place-bog.png";
import iconClock from "../img/icon-hour-bog.png";
import BogCountdownTimer from "../assets/BogCountdownTimer";

function BogMainDetails() {
  return (
    <div className="text-mossgreen">
      <div>
        <img src={iconCalendar} className="w-[60px] mx-auto" />
        <h2 className="flex items-center justify-center font-italianno text-4xl">
          Faltan
        </h2>
        <BogCountdownTimer />
        <button className="flex w-3/4 items-center justify-center mx-auto border font-semibold border-pakistangreen bg-mossgreen bg-opacity-50 hover:bg-opacity-70 text-whitesmoke py-2 px-8">
          <a
            target="_blank"
            href="https://calendar.app.google/bscqqia2UjqHMzBV7"
          >
            Agregar al Calendario
          </a>
        </button>
      </div>
      <div>
        <img src={iconPlace} className="w-[75px] mx-auto" />
        <h2 className="flex items-center justify-center font-italianno text-4xl">
          Lugar de la recepción
        </h2>
        <p className="flex items-center text-center justify-center mx-auto font-bold text-3xl">
          Capilla de Tierralinda
        </p>
        <p className="flex items-center justify-center mx-auto mb-4">
          Calle 127D # 45A-21, Bogotá, Colombia
        </p>
        <a target="_blank" href="https://maps.app.goo.gl/6aYRxFeb3M1MYHV37">
          <button
            className="flex w-3/4 items-center justify-center mx-auto border font-semibold border-pakistangreen bg-mossgreen bg-opacity-50 hover:bg-opacity-70 text-whitesmoke py-2 px-8"
            type="button"
          >
            ¿Como llegar?
          </button>
        </a>
      </div>
      <div className="items-center justify-center">
        <img src={iconClock} className="w-[75px] mx-auto" />
        <h2 className="flex items-center justify-center font-medium font-italianno text-4xl">
          Hora de la recepción
        </h2>
        <p className="flex items-center justify-center font-bold text-3xl">
          7:00pm
        </p>
      </div>
      <br />
    </div>
  );
}

export default BogMainDetails;
