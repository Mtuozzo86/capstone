import Review from "./Review";

function ReviewList({ reviews }) {
  const listOfReviews = reviews.map((review) => (
    <Review
      key={review.id}
      name={review.name}
      rating={review.rating}
      body={review.body}
      date={review.created_at}
    />
  ));
  return <>{listOfReviews}</>;
}

export default ReviewList;
