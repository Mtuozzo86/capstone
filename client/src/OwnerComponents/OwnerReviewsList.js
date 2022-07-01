import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import OwnerReview from "./OwnerReview";

function OwnerReviewsList({ reviews, onDeleteReview, onSetListOfReviews }) {
  const [listOfReviews, setListOfReviews] = useState(reviews);
  const [response, setResponse] = useState("");
  const [reviewId, setReviewId] = useState(null);
  const [input, setInput] = useState("");
  function convertRating(rating) {
    let key = 0;
    let emoji = [];
    for (let i = 0; i < rating; i++) {
      emoji.push(<AiFillStar key={key++} />);
    }
    return emoji;
  }

  //   function handleDelete(id) {
  //     fetch(`/reviews/${id}`, {
  //       method: "DELETE",
  //     });
  //     onDeleteReview(id);
  //   }

  //   function handleSubmit(e) {
  //     e.preventDefault();

  //     fetch(`/reviews/${reviewId}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-type": "Application/json",
  //       },
  //       body: JSON.stringify({ response }),
  //     })
  //       .then((r) => r.json())
  //       .then((edit) => handleEdit(edit))
  //       .then(setInput(""));
  //   }

  function handleResponseReply(editted) {
    console.log(editted);

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
  function handleEdit(editted) {
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

  return (
    <div className="owner-review-list">
      <div>{list}</div>
    </div>
  );
}

export default OwnerReviewsList;
