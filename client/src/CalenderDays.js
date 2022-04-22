function CalendarDays({ day, onHandleClick }) {
  console.log(day.chosenDay);

  const timeFrame = day.availability.map((time) => {
    return (
      <div
        className="calender-days-times"
        onClick={() => handleClick(time)}
        key={time}
      >
        {time}
      </div>
    );
  });

  function handleClick(times) {
    onHandleClick(times);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{day.chosenDay}</h1>
      <div>{timeFrame}</div>
      <h2>Booked Days</h2>
      <div>
        {day.bookings.map((booked) => {
          return <li key={booked}>{booked}</li>;
        })}
      </div>
    </div>
  );
}

export default CalendarDays;
