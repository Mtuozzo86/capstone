import { AiFillStar } from "react-icons/ai";
console.log(<AiFillStar />);

function Review({ body, rating, name, date }) {
  const dateFormat = new Date(date);

  function convertRating(rating) {
    let key = 0;
    let emoji = [];
    for (let i = 0; i < rating; i++) {
      emoji.push(<AiFillStar key={key++} />);
    }
    return emoji;
  }
  const stars = convertRating(rating);

  return (
    <div className="review-box">
      <span className="review-box-rating">{stars}</span>
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
