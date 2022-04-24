function Review() {
  const date = new Date().toLocaleDateString();
  return (
    <div className="review-box">
      <div className="review-box-rating">⭐⭐⭐⭐⭐</div>
      <div>
        <p>
          Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor.
          Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor;
          hodor hodor - hodor
        </p>
        <p className="review-box-commenter">John Doe - {date}</p>
      </div>
    </div>
  );
}

export default Review;
