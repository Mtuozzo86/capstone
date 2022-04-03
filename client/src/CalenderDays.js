import { useState } from "react";

function CalendarDays({ day }) {
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
      <h1>{day}</h1>
      <div>{timeFrame}</div>
      <h2>Booked Days</h2>
      <div>
        {bookings.map((booked) => {
          return <li key={booked}>{booked}</li>;
        })}
      </div>
    </div>
  );
}

export default CalendarDays;
