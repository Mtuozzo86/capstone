import Review from "./Review";

function ReviewList({ reviews }) {
  console.log(reviews);

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
      response={review.response}
    />
  ));

  return <>{listOfReviews}</>;
}

export default ReviewList;
