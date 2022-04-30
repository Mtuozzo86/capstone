import { useState } from "react";

function CalendarDays({ availability, onHandleClick, day }) {
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
    console.log("Date:", day, "Times:", times);
  }

  return (
    <div className="calender-availability">
      {timeFrame}
      <button className="confirm-date-button">Next</button>
    </div>
  );
}

export default CalendarDays;
