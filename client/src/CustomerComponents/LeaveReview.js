import { useState } from "react";

function LeaveReview({ companyInfo }) {
  const [reviewBody, setReviewBody] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState(1);
  function handleChange(e) {
    e.preventDefault();
  }

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
    });
  }
  return (
    <div className="leave-review-container">
      <form onSubmit={handleSubmit} className="leave-review">
        Name
        <input
          className="leave-review__name"
          type="text"
          onChange={(e) => setName(e.target.value)}
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
          className="leave-review__text-area"
          cols="50"
          rows="4"
          onChange={(e) => setReviewBody(e.target.value)}
        />
        <button className="leave-review__submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
export default LeaveReview;
