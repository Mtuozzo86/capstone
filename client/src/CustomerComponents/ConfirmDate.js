import { useState } from "react";

function ConfirmDate({ confirmation, onGoBack, ownerId }) {
  const [name, setName] = useState("");

  function handleGoBack() {
    onGoBack(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const confirmationData = {
      booked_time: confirmation.booked_time,
      date: confirmation.date,
      customer: name,
      owner_id: ownerId,
    };
    fetch(`/appointments`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ confirmationData }),
    })
      .then((r) => r.json())
      .then((info) => console.log(info));
  }

  return (
    <div className="confirm-page">
      <p className="confirm-page-info">
        Your date and time is{" "}
        <strong>
          <em>{confirmation.date}</em>
        </strong>{" "}
        at: {confirmation.booked_time}
      </p>
      <p>Please give your first name and click next to confirm</p>
      <form className="confirm-page-submit-form" onSubmit={handleSubmit}>
        <input
          className="confirm-page-name-input"
          type="text"
          onChange={(e) => setName(e.target.value)}
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
