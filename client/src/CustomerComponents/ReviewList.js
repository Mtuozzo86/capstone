import Review from "./Review";

function ReviewList({ reviews }) {
  console.log(reviews);

  const listOfReviews = reviews.map((review) => (
    <Review
      key={review.id}
      rating={review.rating}
      body={review.body}
      date={review.created_at}
      name={review.client.name}
    />
  ));
  console.log(listOfReviews);

  return <>{listOfReviews}</>;
}

export default ReviewList;
