import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "./useCountdown";

const ExpiredNotice = () => {
  return (
    <div>
      <h2 className="flex items-center justify-center text-center font-semibold text-3xl mx-2 pb-4">¡Es hoy, no te esperamos!</h2>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="flex items-center justify-center">
      <DateTimeDisplay
        value={days}
        type={days > 1 || days < 1 ? "Días" : "Día"}
      />
      <DateTimeDisplay
        value={hours}
        type={hours > 1 || hours < 1 ? "Horas" : "Hora"}
      />
      <DateTimeDisplay
        value={minutes}
        type={minutes > 1 || minutes < 1 ? "Minutos" : "Minuto"}
      />
      <DateTimeDisplay
        value={seconds}
        type={seconds > 1 || seconds < 1 ? "Segundos" : "Segundo"}
      />
    </div>
  );
};

const BogCountdownTimer = () => {
  const SEVENTEEN_JAN_2025 = new Date("2025-01-18");
  SEVENTEEN_JAN_2025.setHours(19);

  const [days, hours, minutes, seconds] = useCountdown(SEVENTEEN_JAN_2025);

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

export default BogCountdownTimer;

