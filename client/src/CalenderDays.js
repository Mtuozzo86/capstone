function CalendarDays({ availability, day, onHandleClick, timeToReserve }) {
  const timeFrame = availability.map((time) => {
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
      <div>{timeToReserve}</div>
    </div>
  );
}

export default CalendarDays;
