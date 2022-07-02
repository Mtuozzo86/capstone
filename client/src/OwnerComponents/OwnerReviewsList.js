import { useState } from "react";
import OwnerReview from "./OwnerReview";

function OwnerReviewsList({ reviews, onDeleteReview, onSetListOfReviews }) {
  const [listOfReviews, setListOfReviews] = useState(reviews);

  function handleResponseReply(editted) {
    const edits = listOfReviews.map((review) => {
      if (review.id === editted.id) {
        return {
          ...review,
          response: editted.response,
        };
      } else {
        return review;
      }
    });
    onSetListOfReviews(edits);
    setListOfReviews(edits);
  }

  const list = listOfReviews.map((review) => {
    return (
      <OwnerReview
        key={review.id}
        body={review.body}
        rating={review.rating}
        id={review.id}
        name={review.client.name}
        response={review.response}
        onDeleteReview={onDeleteReview}
        onResponseReply={handleResponseReply}
      />
    );
  });

  return (
    <div className="owner-review-list">
      <div>{list}</div>
    </div>
  );
}

export default OwnerReviewsList;
