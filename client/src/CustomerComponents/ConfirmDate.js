import { useState } from "react";

function ConfirmDate({ confirmation, onGoBack }) {
  const [name, setName] = useState("");
  function handleGoBack() {
    onGoBack(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <div className="confirm-page">
      <p className="confirm-page-info">
        Your date and time is {confirmation.date} at: {confirmation.booked_time}
      </p>
      <p>Please give your first name and click next to confirm</p>
      <form className="confirm-page-submit-form" onSubmit={handleSubmit}>
        <input
          className="confirm-page-name-input"
          type="text"
          onChange={(e) => e.target.value}
        />
        <button type="submit" className="confirm-date-confirm-button">
          Confirm
        </button>
      </form>
      <button onClick={handleGoBack} className="confirm-date-back-button">
        {" "}
        Go Back
      </button>
    </div>
  );
}

export default ConfirmDate;
