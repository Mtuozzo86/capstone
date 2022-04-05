import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CalendarDays from "./CalenderDays";

function CalenderTest() {
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
  const [clickedDay, setClickedDay] = useState({
    chosenDay: value.toLocaleDateString(),
    availability: nineToFive,
    bookings: [],
  });

  function handleChange(e) {
    setValue(e);

    setClickedDay({
      chosenDay: e.toLocaleDateString(),
      availability: nineToFive,
      bookings: [],
    });
  }

  function handleClick(times) {
    const removeTime = clickedDay.availability.filter((time) => time !== times);
    const clickedTimeFrame = times;
    const listOfBookings = [...clickedDay.bookings, clickedTimeFrame];
    setClickedDay({
      chosenDay: clickedDay.chosenDay,
      availability: removeTime,
      bookings: listOfBookings,
    });
  }

  return (
    <div>
      <Calendar onChange={handleChange} value={value} calendarType={"US"} />
      <CalendarDays day={clickedDay} onHandleClick={handleClick} />
    </div>
  );
}

export default CalenderTest;
