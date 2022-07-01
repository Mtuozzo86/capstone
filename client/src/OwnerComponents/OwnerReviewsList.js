import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";

function OwnerReviewsList({ reviews, onDeleteReview }) {
  const [response, setResponse] = useState("");
  const [reviewId, setReviewId] = useState(null);
  function convertRating(rating) {
    let key = 0;
    let emoji = [];
    for (let i = 0; i < rating; i++) {
      emoji.push(<AiFillStar key={key++} />);
    }
    return emoji;
  }

  function handleDelete(id) {
    fetch(`/reviews/${id}`, {
      method: "DELETE",
    });
    onDeleteReview(id);
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`/reviews/${reviewId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({ response }),
    }).then((r) => r.json());
  }

  const list = reviews.map((review) => {
    return (
      <div key={review.id} className="owner-review-box">
        <span className="review-box-rating">
          <MdOutlineRemoveCircleOutline
            onClick={() => handleDelete(review.id)}
          />
          {convertRating(review.rating)}
        </span>
        <p>{review.client.name}</p>
        <p>{review.body}</p>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setResponse(e.target.value)}
            className="owner-review-response"
            type="text"
          />
          <button type="submit" onClick={() => setReviewId(review.id)}>
            Submit
          </button>
        </form>
      </div>
    );
  });

  return (
    <div className="owner-review-list">
      <div>{list}</div>
    </div>
  );
}

export default OwnerReviewsList;
