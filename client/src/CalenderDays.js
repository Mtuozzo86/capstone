import { useState } from "react";

function CalendarDays({ availability, day, onHandleClick, timeToReserve }) {
  console.log(timeToReserve);

  const [selectedTime, setSelectedTime] = useState("");

  const timeFrame = availability.map((time) => {
    return (
      <div
        className={
          selectedTime === time
            ? "calender-days-times-clicked"
            : "calender-days-times"
        }
        onClick={() => handleClick(time)}
        key={time}
      >
        {time}
      </div>
    );
  });

  function handleClick(times) {
    onHandleClick(times);
    setSelectedTime(times);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{day.chosenDay}</h1>
      <div>{timeFrame}</div>
    </div>
  );
}

export default CalendarDays;
