import { useState, useEffect } from "react";
import "../CSS/OwnerProfile.css";
import OwnerProfileAddBusiness from "./OwnerProfileAddBusiness";

function OwnerProfile({ owner }) {
  useEffect(() => {
    fetch(`/owners/${owner.id}`)
      .then((resp) => resp.json())
      .then((info) => setOwnerBusiness(info.business));
  }, []);

  const fullName = owner.first_name + " " + owner.last_name;
  const { business, email, phone, website, occupation } = owner;

  const [addBusiness, setAddBusiness] = useState(false);
  const [ownerBusiness, setOwnerBusiness] = useState(business);
  console.log(ownerBusiness);

  function handleCancelAddBusiness() {
    setAddBusiness(false);
  }

  function handleAddBusiness(addedBusiness) {
    console.log(addedBusiness);
    setOwnerBusiness(addedBusiness);
    setAddBusiness(false);
  }

  return (
    <div className="owner-profile-wrapper">
      <div>
        <p>
          Set your info here. Add additional information for your clients to see
          when they view your information. To see.
        </p>
      </div>

      <h3>{fullName}</h3>

      <div className="owner-profile__info-container">
        <div>
          {ownerBusiness ? (
            ownerBusiness
          ) : (
            <p
              className="owner-profile__info-container-business"
              onClick={() => setAddBusiness(true)}
            >
              Add your business
            </p>
          )}
          {addBusiness ? (
            <OwnerProfileAddBusiness
              owner={owner}
              onCancelAddBusiness={handleCancelAddBusiness}
              onAddBusiness={handleAddBusiness}
            />
          ) : null}
        </div>
        <div>{email ? email : <p>Enter an email</p>}</div>
        <div>{occupation ? occupation : <p>Enter your occupation</p>}</div>
      </div>
    </div>
  );
}

export default OwnerProfile;
