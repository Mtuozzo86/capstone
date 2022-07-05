import { useState } from "react";

function LeaveReview({ companyInfo, onSubmitReview }) {
  const [reviewBody, setReviewBody] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState(1);
  const [errors, setErrors] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const reviewForm = {
      name: name,
      rating: rating,
      body: reviewBody,
    };

    fetch(`/owners/${companyInfo.id}/leavereview`, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(reviewForm),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((data) => onSubmitReview(data));
        setErrors(false);
        setName("");
        setReviewBody("");
      } else {
        resp.json().then(setErrors(true));
      }
    });
  }

  return (
    <div className="leave-review-container">
      <form onSubmit={handleSubmit} className="leave-review">
        Name
        <input
          className={errors ? "leave-review__name-error" : "leave-review__name"}
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder={errors ? "Enter your name" : ""}
          value={name}
        />
        Rating
        <select
          className="leave-review__rating"
          name="rating"
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        Say hello
        <textarea
          className={
            errors ? "leave-review__text-area-error" : "leave-review__text-area"
          }
          cols="50"
          rows="4"
          onChange={(e) => setReviewBody(e.target.value)}
          placeholder={errors ? "Field required" : ""}
          value={reviewBody}
        />
        <button className="leave-review__submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
export default LeaveReview;
