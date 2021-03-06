import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CalendarDays from "./CalenderDays";
// calendar
function CalendarTest({ ownerId, booked }) {
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
  const [availability, setAvailability] = useState([]);
  const [day, setDay] = useState(value.toLocaleDateString());
  const [viewCalendar, setViewCalendar] = useState(true);
  if (!booked) {
    return <p>Loading</p>;
  }

  const unavailable = booked.map((obj) => {
    return obj.booked_time;
  });

  const freeTime = nineToFive.filter(function (val) {
    return unavailable.indexOf(val) === -1;
  });

  function compare(newDay) {
    const result = booked.filter((each) => {
      if (each.date === newDay) {
        setAvailability(freeTime);
      } else {
        setAvailability(nineToFive);
      }
    });
    return result;
  }

  function handleChange(e) {
    setValue(e);
    setDay(e.toLocaleDateString());

    setAvailability(freeTime);
  }
  function handleChange(e) {
    setValue(e);
    setDay(e.toLocaleDateString());
    setAvailability(compare(day));
    compare(e.toLocaleDateString());
    if (booked.length === 0) {
      setAvailability(nineToFive);
    }
  }

  console.log(day);
  function handleClick(times) {
    setChosenTime(times);
  }

  return (
    <div className="schedule">
      {viewCalendar && (
        <Calendar
          minDate={new Date()}
          onChange={handleChange}
          value={value}
          calendarType={"US"}
        />
      )}

      <CalendarDays
        availability={availability}
        // timeToReserve={chosenTime}
        day={day}
        setViewCalendar={setViewCalendar}
        ownerId={ownerId}
        // onHandleClick={handleClick}
      />
    </div>
  );
}

export default CalendarTest;
