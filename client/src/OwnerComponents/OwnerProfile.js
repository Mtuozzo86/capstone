import "../CSS/OwnerProfile.css";

function OwnerProfile({ owner }) {
  const fullName = owner.first_name + " " + owner.last_name;
  const { business, email, phone, website, occupation } = owner;

  return (
    <div className="owner-profile-wrapper">
      <h2>Set your information here</h2>
      <h3>{fullName}</h3>
      <p>{business ? business : "Add the name of your business"}</p>
      <p>{email ? email : "Add an email"}</p>
      <p>{phone ? phone : "Add a phone number"}</p>
      <p>{website ? website : "Add your website"}</p>
      <p>{occupation ? occupation : "Add your occupation"}</p>
    </div>
  );
}

export default OwnerProfile;
