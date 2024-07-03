import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "./useCountdown";

const ExpiredNotice = () => {
  return (
    <div>
      <h2>¡Hoy!</h2>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="flex items-center justify-center">
    <DateTimeDisplay value={days} type={days > 1 || days < 1 ? "Días" : "Día"} />
    <DateTimeDisplay value={hours} type={hours > 1 || hours < 1 ? "Horas":"Hora"} />
    <DateTimeDisplay value={minutes} type={minutes > 1 || minutes < 1 ? "Minutos" : "Minuto"} />
    <DateTimeDisplay value={seconds} type={seconds > 1 || seconds < 1 ? "Segundos": "Segundo"} />
  </div>
  );
};

const CountdownTimer = () => {
  const TEN_JAN_2025 = new Date('2025-01-10').getTime();
  const [days, hours, minutes, seconds] = useCountdown(TEN_JAN_2025);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
