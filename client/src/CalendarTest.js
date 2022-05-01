import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CalendarDays from "./CalenderDays";

function CalendarTest() {
  const nineToFive = [
    "9:00am - 9:45am",
    "10:00am - 10:45am",
    "11:00am - 11:45am",
    "12:00pm - 12:45pm",
    "1:00pm - 1:45pm",
    "2:00pm - 2:45pm",
    "3:00pm - 3:45pm",
    "4:00pm - 4:45pm",
  ];

  const [value, setValue] = useState(new Date());
  const [chosenTime, setChosenTime] = useState("");
  const [availability, setAvailability] = useState(nineToFive);
  const [day, setDay] = useState(value.toLocaleDateString());
  const [viewCalendar, setViewCalendar] = useState(true);

  function handleChange(e) {
    setValue(e);
    setDay(e.toLocaleDateString());
  }

  function handleClick(times) {
    setChosenTime(times);
  }

  return (
    <div className="schedule">
      {viewCalendar && (
        <Calendar onChange={handleChange} value={value} calendarType={"US"} />
      )}

      <CalendarDays
        availability={availability}
        timeToReserve={chosenTime}
        day={day}
        setViewCalendar={setViewCalendar}
        // onHandleClick={handleClick}
      />
    </div>
  );
}

export default CalendarTest;
