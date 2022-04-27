import { AiFillStar } from "react-icons/ai";

function Review({ body, rating, name, date }) {
  const dateFormat = new Date(date);

  function convertRating(rating) {
    let emoji = "";
    for (let i = 0; i < rating; i++) {
      emoji += "⭐";
    }
    return emoji;
  }

  return (
    <div className="review-box">
      <span className="review-box-rating">{convertRating(rating)}</span>
      <div>
        <p>{body}</p>
        <p className="review-box-commenter">
          {name} - {dateFormat.toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default Review;
