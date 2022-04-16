function OwnerLandingPageDashboard({ loggedInUser }) {
  return (
    <div className="landing-page-user-info-container">
      <div className="user-info-name">{loggedInUser.first_name}</div>
      <p>Appointments:</p>
      <p>Customers:</p>
    </div>
  );
}

export default OwnerLandingPageDashboard;
