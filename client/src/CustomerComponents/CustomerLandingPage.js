import { useState, useEffect } from "react";
import LeaveReview from "./LeaveReview";
import ReviewList from "./ReviewList";

function CustomerLandingPage({ companyInfo }) {
  useEffect(() => {
    if (companyInfo.id) {
      fetch(`/owners/${companyInfo.id}/reviews`)
        .then((r) => r.json())
        .then((data) => setTest(data));
    }
  }, [companyInfo.id]);

  const [test, setTest] = useState([]);

  function handleSubmitReview(review) {
    setTest([...test, review]);
  }

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
      <ReviewList reviews={test} />
      <LeaveReview
        companyInfo={companyInfo}
        onSubmitReview={handleSubmitReview}
      />
    </div>
  );
}

export default CustomerLandingPage;
