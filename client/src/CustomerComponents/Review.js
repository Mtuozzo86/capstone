function Review({ body, rating, name, date }) {
  const dateFormat = new Date(date);
  function convertRating(rating) {
    let emoji = "";
    for (let i = 0; i < rating; i++) {
      emoji += "🌟";
    }
    return emoji;
  }

  return (
    <div className="review-box">
      <div className="review-box-rating">{convertRating(rating)}</div>
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
