import { useState, useEffect } from "react";
import LeaveReview from "./LeaveReview";
import ReviewList from "./ReviewList";

function CustomerLandingPage({ companyInfo }) {
  useEffect(() => {
    fetch(`/owners/${companyInfo.id}`)
      .then((r) => r.json())
      .then((data) => console.log(data));
  });

  const [test, setTest] = useState("false");
  function handleSubmitReview(review) {}

  const fullName = companyInfo.first_name + " " + companyInfo.last_name;
  if (!companyInfo.business) {
    return <p>Loading! </p>;
  }

  return (
    <div className="business-found">
      <div className="business-found-company-name">
        <h4>{companyInfo.business}</h4>
      </div>
      <div className="business-found-owner">
        <img
          className="profile-picture"
          src={companyInfo.image}
          alt="Profile"
        />
        <div className="profile-name">{fullName}</div>
      </div>
      <ReviewList reviews={companyInfo.reviews} />
      <LeaveReview
        companyInfo={companyInfo}
        onSubmitReview={handleSubmitReview}
      />
    </div>
  );
}

export default CustomerLandingPage;
