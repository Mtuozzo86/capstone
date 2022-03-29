import { useState, useEffect } from "react";
import "../CSS/OwnerProfile.css";
import OwnerProfileAddBio from "./OwnerProfileAddBio";
import OwnerProfileAddBusiness from "./OwnerProfileAddBusiness";

function OwnerProfile({ owner }) {
  useEffect(() => {
    fetch(`/owners/${owner.id}`)
      .then((resp) => resp.json())
      .then((info) => setLoggedInUser(info));
  }, [owner.id]);
  const [loggedInUser, setLoggedInUser] = useState({});

  const fullName = loggedInUser.first_name + " " + loggedInUser.last_name;
  const { business, email, phone, website, occupation, biography } =
    loggedInUser;

  const [addBusiness, setAddBusiness] = useState(false);
  const [ownerBusiness, setOwnerBusiness] = useState(business);
  const [addOwnerBio, setAddOwnerBio] = useState(false);
  const [ownerBio, setOwnerBio] = useState(biography);

  function handleCancelAddBusiness() {
    setAddBusiness(false);
    setAddOwnerBio(false);
  }

  function handleAddBusiness(addedBusiness) {
    setOwnerBusiness(addedBusiness);
    setAddBusiness(false);
  }

  function handleAddBio(bio) {
    console.log(bio);
    setOwnerBio(bio);
    setAddOwnerBio(false);
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
        <div>
          {ownerBio ? (
            ownerBio
          ) : (
            <p
              className="owner-profile__info-container-business"
              onClick={() => setAddOwnerBio(true)}
            >
              Enter something about yourself
            </p>
          )}
          {addOwnerBio ? (
            <OwnerProfileAddBio
              owner={owner}
              onHandleCancel={handleCancelAddBusiness}
              onAddBio={handleAddBio}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default OwnerProfile;
