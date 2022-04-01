function CalendarDays({ day }) {
  return (
    <h1>
      {day.day}
      <>{day.appointments}</>
      <br />
      {day.booked}
    </h1>
  );
}

export default CalendarDays;
