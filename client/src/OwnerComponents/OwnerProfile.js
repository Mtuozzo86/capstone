import { useState, useEffect } from "react";
import "../CSS/OwnerProfile.css";
import OwnerProfileAddBio from "./OwnerProfileAddBio";
import OwnerProfileAddBusiness from "./OwnerProfileAddBusiness";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import OwnerProfileAddAvatar from "./OwnerProfileAddAvatar";
import OwnerProfileAddOwnerOccupation from "./OwnerProfileAddOccupation";

function OwnerProfile({ owner }) {
  useEffect(() => {
    fetch(`/owners/${owner.id}`)
      .then((resp) => resp.json())
      .then((info) => {
        setOwnerBusiness(info.business);
        setOwnerBio(info.biography);
        setOwnerAvatar(info.image);
        setOwnerOccupation(info.occupation);
      });
  }, []);

  const { business, email, phone, website, occupation, biography, image } =
    owner;
  const fullName = owner.first_name + " " + owner.last_name;

  const [addBusiness, setAddBusiness] = useState(false);
  const [ownerBusiness, setOwnerBusiness] = useState(business);
  const [addOwnerBio, setAddOwnerBio] = useState(false);
  const [ownerBio, setOwnerBio] = useState(biography);
  const [addOwnerAvatar, setAddOwnerAvatar] = useState(false);
  const [ownerAvatar, setOwnerAvatar] = useState(image);
  const [addOwnerOccupation, setAddOwnerOccupation] = useState(false);
  const [ownerOccupation, setOwnerOccupation] = useState(occupation);

  function handleCancelAddBusiness() {
    setAddBusiness(false);
    setAddOwnerBio(false);
  }

  function handleCancelAddAvatar() {
    setAddOwnerAvatar(false);
  }

  function handleCancelAddOccupation() {
    setAddOwnerOccupation(false);
  }

  function handleAddBusiness(addedBusiness) {
    setOwnerBusiness(addedBusiness);
    setAddBusiness(false);
  }

  function handleAddOccupation(occu) {
    setOwnerOccupation(occu);
    setAddOwnerOccupation(false);
  }

  function handleAddBio(bio) {
    setOwnerBio(bio);
    setAddOwnerBio(false);
  }

  function handleAddAvatar(img) {
    setOwnerAvatar(img);
    setAddOwnerAvatar(false);
  }

  function handleDeleteBusiness(attr) {
    const attribute = attr;
    fetch(`owners/${owner.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ [attribute]: null }),
    })
      .then((resp) => resp.json())
      .then((info) => {
        setOwnerBusiness(info.business);
        setOwnerAvatar(info.image);
        setOwnerBio(info.biography);
        setOwnerOccupation(info.occupation);
      });
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
          {/* BUSINESS NAME */}
          {ownerBusiness ? (
            <div className="test">
              <div>{ownerBusiness}</div>
              <div className="delete">
                <MdOutlineRemoveCircleOutline
                  onClick={() => handleDeleteBusiness("business")}
                />
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
        <div>
          {/* AVATAR IMAGE */}
          {ownerAvatar ? (
            <div className="test">
              <div>
                <img
                  className="owner-profile__image-avatar"
                  src={ownerAvatar}
                />
              </div>
              <div className="delete">
                <MdOutlineRemoveCircleOutline
                  onClick={() => handleDeleteBusiness("image")}
                />
              </div>
            </div>
          ) : (
            <p
              className="owner-profile__info-container-business"
              onClick={() => setAddOwnerAvatar(true)}
            >
              Add an image
            </p>
          )}
          {addOwnerAvatar ? (
            <OwnerProfileAddAvatar
              owner={owner}
              onHandleCancel={handleCancelAddAvatar}
              onAddAvatar={handleAddAvatar}
            />
          ) : null}
        </div>
        <div>{email ? email : <p>Enter an email</p>}</div>
        <div>
          {/* OCCUPATION */}
          {ownerOccupation ? (
            <div className="test">
              <div>{ownerOccupation}</div>
              <div className="delete">
                <MdOutlineRemoveCircleOutline
                  onClick={() => handleDeleteBusiness("occupation")}
                />
              </div>
            </div>
          ) : (
            <p
              className="owner-profile__info-container-business"
              onClick={() => setAddOwnerOccupation(true)}
            >
              Enter your occupation
            </p>
          )}
          {addOwnerOccupation ? (
            <OwnerProfileAddOwnerOccupation
              owner={owner}
              onCancelAddOccupation={handleCancelAddOccupation}
              onAddOccupation={handleAddOccupation}
            />
          ) : null}
        </div>
        <div>
          {/* BIOGRAPHY */}
          {ownerBio ? (
            <div className="test">
              <div>{ownerBio}</div>
              <div className="delete">
                <MdOutlineRemoveCircleOutline
                  onClick={() => handleDeleteBusiness("biography")}
                />
              </div>
            </div>
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
