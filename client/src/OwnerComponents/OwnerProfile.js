import { useState, useEffect } from "react";
import "../CSS/OwnerProfile.css";
import OwnerProfileAddBio from "./OwnerProfileAddBio";
import OwnerProfileAddBusiness from "./OwnerProfileAddBusiness";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";

function OwnerProfile({ owner }) {
  useEffect(() => {
    fetch(`/owners/${owner.id}`)
      .then((resp) => resp.json())
      .then((info) => {
        setOwnerBusiness(info.business);
        setOwnerBio(info.biography);
      });
  }, [owner.id]);

  const fullName = owner.first_name + " " + owner.last_name;
  const { business, email, phone, website, occupation, biography } = owner;

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
    setOwnerBio(bio);
    setAddOwnerBio(false);
  }

  function handleDeleteBusiness() {
    fetch(`owners/${owner.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ business: null }),
    })
      .then((resp) => resp.json())
      .then((info) => setOwnerBusiness(info.business));
  }

  return (
    <div className="owner-profile-wrapper">
      <div>
        <p>
          Set your info here. Add additional information for your clients to see
          when they view your information.
        </p>
      </div>

      <h3>{fullName}</h3>

      <div className="owner-profile__info-container">
        <div>
          {ownerBusiness ? (
            <div className="test">
              <div>{ownerBusiness}</div>
              <div className="delete">
                <MdOutlineRemoveCircleOutline onClick={handleDeleteBusiness} />
              </div>
            </div>
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
