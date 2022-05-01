import { useState } from "react";
import ConfirmDate from "./CustomerComponents/ConfirmDate";

function CalendarDays({ availability, onHandleClick, day }) {
  console.log("Current day:", day);
  const [confirmPage, setConfirmPage] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [confirmedTime, setConfirmedTime] = useState({
    booked_time: "",
    date: "",
  });

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
    // onHandleClick(times);
    setSelectedTime(times);
  }

  function handleNext() {
    setConfirmedTime({
      booked_time: selectedTime,
      date: day,
    });
    setConfirmPage(true);
  }

  return (
    <div className="calender-availability">
      {timeFrame}
      <button onClick={handleNext} className="confirm-date-button">
        Next
      </button>
    </div>
  );
}

export default CalendarDays;
