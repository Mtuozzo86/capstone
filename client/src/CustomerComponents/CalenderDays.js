import { useState } from "react";
import ConfirmDate from "./ConfirmDate";

function CalendarDays({
  availability,
  onHandleClick,
  day,
  setViewCalendar,
  ownerId,
}) {
  const [confirmPage, setConfirmPage] = useState(false);
  const [availabilityPage, setAvailabilityPage] = useState(true);
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
    setAvailabilityPage(false);
    setViewCalendar(false);
  }

  function handleBack(goBack) {
    setConfirmPage(goBack);
    setAvailabilityPage(true);
    setViewCalendar(true);
  }

  return (
    <>
      {availabilityPage && (
        <div className="calender-availability">
          {timeFrame}
          <button onClick={handleNext} className="confirm-date-button">
            Next
          </button>
        </div>
      )}
      {confirmPage && (
        <ConfirmDate
          confirmation={confirmedTime}
          onGoBack={handleBack}
          ownerId={ownerId}
        />
      )}
    </>
  );
}

export default CalendarDays;
