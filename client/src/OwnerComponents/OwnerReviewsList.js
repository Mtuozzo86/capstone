import { AiFillStar } from "react-icons/ai";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";

function OwnerReviewsList({ reviews, onDeleteReview }) {
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

  const list = reviews.map((review) => {
    return (
      <div key={review.id} className="review-box">
        <span className="review-box-rating">
          <MdOutlineRemoveCircleOutline
            onClick={() => handleDelete(review.id)}
          />
          {convertRating(review.rating)}
        </span>

        <p>{review.client.name}</p>
        <p>{review.body}</p>
      </div>
    );
  });

  return <div>{list}</div>;
}

export default OwnerReviewsList;
