import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CalendarDays from "./CalenderDays";
import Footer from "./CustomerComponents/Footer";

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
  const [clickedDay, setClickedDay] = useState(value.toLocaleDateString());

  function handleChange(e) {
    setValue(e);

    setClickedDay({
      chosenDay: e.toLocaleDateString(),
      availability: nineToFive,
    });
  }

  function handleClick(times) {
    setChosenTime(times);
  }

  return (
    <div className="schedule">
      <Calendar onChange={handleChange} value={value} calendarType={"US"} />
      <CalendarDays
        availability={availability}
        timeToReserve={chosenTime}
        day={clickedDay}
        onHandleClick={handleClick}
      />
      <Footer />
    </div>
  );
}

export default CalendarTest;
