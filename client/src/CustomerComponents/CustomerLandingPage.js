import Review from "./Review";

function CustomerLandingPage({ companyInfo }) {
  const fullName = companyInfo.first_name + " " + companyInfo.last_name;
  if (!companyInfo.business) {
    return <p>Loading! </p>;
  }

  return (
    <div className="business-found">
      <div className="business-found-company-name">
        <h1>{companyInfo.business}</h1>
      </div>
      <div className="business-found-owner">
        <img
          className="profile-picture"
          src={companyInfo.image}
          alt="Profile"
        />
        <div className="profile-name">{fullName}</div>
      </div>
      <Review />
    </div>
  );
}

export default CustomerLandingPage;
