import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CalendarDays from "./CalenderDays";
// import CalenderDays from "./CalenderDays";

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
  const [availability, setAvailability] = useState(nineToFive);
  const [bookings, setBookings] = useState([]);
  const [value, onChange] = useState(new Date());

  const selectedDay = {
    day: value.toLocaleDateString(),
    availability: availability,
    booked: bookings,
  };

  console.log(selectedDay);

  const timeFrame = availability.map((time) => {
    return (
      <li onClick={() => handleClick(time)} key={time}>
        {time}
      </li>
    );
  });

  function handleClick(times) {
    const removeTime = availability.filter((time) => time !== times);
    const clickedTimeFrame = times;
    const listOfBookings = [...bookings, clickedTimeFrame];
    setBookings(listOfBookings);
    setAvailability(removeTime);
  }

  return (
    <div>
      {timeFrame}
      <Calendar onChange={onChange} value={value} calendarType={"US"} />
      <CalendarDays day={selectedDay} />
    </div>
  );
}

export default CalenderTest;
