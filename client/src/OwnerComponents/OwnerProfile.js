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
      .then((person) => setLoggedInUser(person));
  }, [owner]);

  const [loggedInUser, setLoggedInUser] = useState(owner);

  const { email, occupation } = owner;
  const fullName = owner.first_name + " " + owner.last_name;

  const [addBusiness, setAddBusiness] = useState(false);
  const [addOwnerBio, setAddOwnerBio] = useState(false);
  const [addOwnerAvatar, setAddOwnerAvatar] = useState(false);
  const [addOwnerOccupation, setAddOwnerOccupation] = useState(false);

  const [ownerOccupation, setOwnerOccupation] = useState(occupation);

  function handleCancelAddOccupation() {
    setAddOwnerOccupation(false);
  }

  function handleAddOccupation(occu) {
    setOwnerOccupation(occu);
    setAddOwnerOccupation(false);
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
        setLoggedInUser(info);
      });
  }

  function handleAddAttribute(attribute, val) {
    setLoggedInUser({ ...loggedInUser, [attribute]: [val] });
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
          {loggedInUser.business ? (
            <div className="test">
              <div>{loggedInUser.business}</div>
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
              handleCancel={setAddBusiness}
              onAddAttribute={handleAddAttribute}
              setAddBusiness={setAddBusiness}
            />
          ) : null}
        </div>
        <div>
          {/* AVATAR IMAGE */}
          {loggedInUser.image ? (
            <div className="test">
              <div>
                <img
                  className="owner-profile__image-avatar"
                  src={loggedInUser.image}
                  alt=""
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
              handleCancel={setAddOwnerAvatar}
              onAddAttribute={handleAddAttribute}
              setAddOwnerAvatar={setAddOwnerAvatar}
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
          {loggedInUser.biography ? (
            <div className="test">
              <div>{loggedInUser.biography}</div>
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
              handleCancel={setAddOwnerBio}
              onAddBio={handleAddAttribute}
              setAddOwnerBio={setAddOwnerBio}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default OwnerProfile;
