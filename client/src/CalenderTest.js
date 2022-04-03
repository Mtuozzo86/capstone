import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CalendarDays from "./CalenderDays";
// import CalenderDays from "./CalenderDays";

function CalenderTest() {
  const [value, setValue] = useState(new Date());

  function handleChange(e) {
    setValue(e);
  }

  return (
    <div>
      <Calendar onChange={handleChange} value={value} calendarType={"US"} />
      <CalendarDays day={value.toLocaleDateString()} />
    </div>
  );
}

export default CalenderTest;
