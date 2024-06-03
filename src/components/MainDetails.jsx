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
        <button className="flex items-center justify-center mx-auto mt-4 bg-oldrose hover:bg-auburn text-whitesmoke font-bold py-2 px-4 rounded">
          Agregar al calendario
        </button>
      </div>
      <div className="items-center justify-center">
        <img src={iconPlace} className="w-[75px] mx-auto" />
        <h2 className="flex items-center justify-center font-italianno text-4xl">
          lugar
        </h2>
        <p className="flex items-center justify-center mx-auto font-bold text-4xl">Sitio aún por definir</p>
        <p className="flex items-center justify-center mx-auto">Puerto Colombia, Atlantico</p>

        <button className="flex items-center justify-center mx-auto mt-4 bg-oldrose hover:bg-auburn text-whitesmoke font-bold py-2 px-4 rounded">
          ¿Como llegar?
        </button>
      </div>
      <div className="items-center justify-center">
        <img src={iconClock} className="w-[75px] mx-auto" />
        <h2 className="flex items-center justify-center font-medium font-italianno text-4xl">
          hora
        </h2>
        <p className="flex items-center justify-center font-bold text-3xl">10:00am</p>
      </div>
      <br />
    </div>
  );
}

export default MainDetails;
