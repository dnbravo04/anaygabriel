import iconCalendar from "../img/icon-calendar.png";
import iconPlace from "../img/icon-place.png";
import iconClock from "../img/icon-hour.png";
import CountdownTimer from "../assets/CountdownTimer";

function MainDetails() {
  return (
    <div className="text-oldrose">
      <div>
        <img src={iconCalendar} className="w-[60px] mx-auto" />
        <h2 className="flex items-center justify-center font-italianno text-4xl">
          Faltan
        </h2>
        <CountdownTimer />
        <button className="flex w-3/4 items-center justify-center mx-auto border font-semibold border-auburn bg-oldrose bg-opacity-50 hover:bg-opacity-70 text-whitesmoke py-2 px-8">
          <a target="_blank" href="https://calendar.app.google/KsHjD3YJ6xVi48e67">Agregar al Calendario</a>
        </button>
      </div>
      <div className="items-center justify-center">
        <img src={iconPlace} className="w-[75px] mx-auto" />
        <h2 className="flex items-center justify-center font-italianno text-4xl">
          Lugar
        </h2>
        <p className="flex items-center text-center justify-center mx-auto font-bold text-3xl">
          Hotel Puerto Colombia
        </p>
        <p className="flex items-center justify-center mx-auto mb-4">
          Calle 2 # 5-58, Puerto Colombia, Atlantico
        </p>
        <a target="_blank" href="https://maps.app.goo.gl/cAJDpGcbnUQ5Kj9eA">
          <button
            className="flex w-3/4 items-center justify-center mx-auto border font-semibold border-auburn bg-oldrose bg-opacity-50 hover:bg-opacity-70 text-whitesmoke py-2 px-8"
            type="button"
          >
            ¿Como llegar?
          </button>
        </a>
      </div>
      <div className="items-center justify-center">
        <img src={iconClock} className="w-[75px] mx-auto" />
        <h2 className="flex items-center justify-center font-medium font-italianno text-4xl">
          Hora
        </h2>
        <p className="flex items-center justify-center font-bold text-3xl">
          5:00pm
        </p>
      </div>
      <br />
    </div>
  );
}

export default MainDetails;
