function CalendarDays({ day, onHandleClick }) {
  console.log(day.chosenDay);

  const timeFrame = day.availability.map((time) => {
    return (
      <li onClick={() => handleClick(time)} key={time}>
        {time}
      </li>
    );
  });

  function handleClick(times) {
    onHandleClick(times);
  }

  return (
    <div>
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
