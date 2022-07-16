import { useEffect, useState } from "react";
import OwnerReview from "./OwnerReview";

function OwnerReviewsList({ reviews, onSetListOfReviews }) {
  const [listOfReviews, setListOfReviews] = useState(reviews);
  // useEffect(() => {
  //   fetch(`owner/${}`)
  // })

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

  function handleDeleteReviews(id) {
    const renderReview = reviews.filter((review) => review.id !== id);

    onSetListOfReviews(renderReview);
    setListOfReviews(renderReview);
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
        onDeleteReview={handleDeleteReviews}
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
