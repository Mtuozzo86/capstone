import ReviewList from "./ReviewList";

function CustomerLandingPage({ companyInfo }) {
  console.log(companyInfo.reviews);

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
    </div>
  );
}

export default CustomerLandingPage;
