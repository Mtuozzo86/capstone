function ConfirmDate({ confirmation, onGoBack }) {
  function handleGoBack() {
    onGoBack(false);
  }

  return (
    <div className="confirm-page">
      <p className="confirm-page-info">
        Your date and time is {confirmation.date} at: {confirmation.booked_time}
      </p>
      <p>Please give your first name</p>
      <form>
        <input className="confirm-page-name-input" type="text" />
      </form>
      <button onClick={handleGoBack} className="confirm-date-button">
        Go Back
      </button>
    </div>
  );
}

export default ConfirmDate;
