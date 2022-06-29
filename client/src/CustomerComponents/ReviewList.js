import Review from "./Review";

function ReviewList({ reviews }) {
  if (!reviews) {
    return <p>No reviews</p>;
  }
  const listOfReviews = reviews.map((review) => (
    <Review
      key={review.id}
      rating={review.rating}
      body={review.body}
      date={review.created_at}
      name={review.client.name}
    />
  ));

  return <>{listOfReviews}</>;
}

export default ReviewList;
