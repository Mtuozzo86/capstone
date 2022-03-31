import { useState } from "react";

function CalenderTest({ clicked }) {
  const [bookings, setBookings] = useState([]);

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

  function handleClick(times) {
    // const clickedTime = nineToFive.filter((time) => time === times);
    // console.log(clickedTime);
    const clickedTimeFrame = times;
    const listOfBookings = [...bookings, clickedTimeFrame];
    setBookings(listOfBookings);
  }

  return (
    <div>
      <p>{clicked}</p>
      <div>Select a time</div>
      <ul>
        {nineToFive.map((time) => {
          return (
            <li onClick={() => handleClick(time)} key={time}>
              {time}
            </li>
          );
        })}
      </ul>
      <h1>{bookings} : is booked</h1>
    </div>
  );
}

export default CalenderTest;
