import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CalenderDays from "./CalenderDays";

function CalenderTest() {
  //   const [dayInfo, setDayInfo] = useState({});
  const [bookings, setBookings] = useState([]);
  const [selectedDay, setSelectedDay] = useState(new Date());
  const date = selectedDay.toLocaleDateString();

  function handleCalender(test) {
    setSelectedDay(test);
  }

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

  const timeFrame = nineToFive.map((time) => {
    return (
      <li onClick={() => handleClick(time)} key={time}>
        {time}
      </li>
    );
  });

  function handleClick(times) {
    const clickedTimeFrame = times;
    const listOfBookings = [...bookings, clickedTimeFrame];
    setBookings(listOfBookings);
  }

  return (
    <div>
      <p>{date}</p>
      <CalenderDays date={date} />
      <div>Select a time</div>
      <ul>{timeFrame}</ul>
      <h1>{bookings} : is booked</h1>
      <Calendar onChange={handleCalender} calendarType={"US"} />
    </div>
  );
}

export default CalenderTest;
