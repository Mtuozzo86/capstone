import { useState, useEffect } from "react";
import "../CSS/OwnerProfile.css";
import OwnerProfileAddBio from "./OwnerProfileAddBio";
import OwnerProfileAddBusiness from "./OwnerProfileAddBusiness";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import OwnerProfileAddAvatar from "./OwnerProfileAddAvatar";
import OwnerProfileAddOwnerOccupation from "./OwnerProfileAddOccupation";
import OptionBox from "./OptionBox";

function OwnerProfile({ owner }) {
  useEffect(() => {
    fetch(`/owners/${owner.id}`)
      .then((resp) => resp.json())
      .then((person) => setLoggedInUser(person));
  }, [owner]);

  const [loggedInUser, setLoggedInUser] = useState(owner);
  const [addBusiness, setAddBusiness] = useState(false);
  const [addOwnerBio, setAddOwnerBio] = useState(false);
  const [addOwnerAvatar, setAddOwnerAvatar] = useState(false);
  const [addOwnerOccupation, setAddOwnerOccupation] = useState(false);

  const fullName = owner.first_name + " " + owner.last_name;

  function handleDeleteImage() {
    fetch(`owners/${owner.id}/remove`, {
      method: "PATCH",
    })
      .then((resp) => resp.json())
      .then((owner) => setLoggedInUser(owner));
  }

  function handleDeleteBusiness(attr) {
    fetch(`owners/${owner.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ [attr]: "" }),
    })
      .then((resp) => resp.json())
      .then((info) => {
        setLoggedInUser(info);
      });
  }

  function handleAddAttribute(attribute, val) {
    console.log(attribute, val);
    setLoggedInUser({ ...loggedInUser, [attribute]: [val] });
  }

  return (
    <div className="owner-profile-wrapper">
      <div>
        <p>
          Set your info here. Add additional information for your clients to see
          when they view your page.
        </p>
      </div>

      <h3>{fullName}</h3>

      <div className="owner-profile__info-container">
        <div>
          {/* BUSINESS NAME */}

          {loggedInUser.business ? (
            <div className="test">
              <div>{loggedInUser.business}</div>
              <MdOutlineRemoveCircleOutline
                className="delete"
                onClick={() => handleDeleteBusiness("business")}
              />
            </div>
          ) : (
            <p
              className="owner-profile__info-container-business"
              onClick={() => setAddBusiness(true)}
            >
              Add your business
            </p>
          )}

          {addBusiness && (
            <OwnerProfileAddBusiness
              owner={owner}
              handleCancel={setAddBusiness}
              onAddAttribute={handleAddAttribute}
              setAddBusiness={setAddBusiness}
            />
          )}
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
              <MdOutlineRemoveCircleOutline
                className="delete"
                onClick={() => handleDeleteImage()}
              />
            </div>
          ) : (
            <p
              className="owner-profile__info-container-business"
              onClick={() => setAddOwnerAvatar(true)}
            >
              Add an image
            </p>
          )}
          {addOwnerAvatar && (
            <OwnerProfileAddAvatar
              owner={owner}
              handleCancel={setAddOwnerAvatar}
              onAddAttribute={handleAddAttribute}
              setAddOwnerAvatar={setAddOwnerAvatar}
            />
          )}
        </div>
        <div>
          {loggedInUser.email ? loggedInUser.email : <p>Enter an email</p>}
        </div>
        <div>
          {/* OCCUPATION */}
          {loggedInUser.occupation ? (
            <div className="test">
              <div>{loggedInUser.occupation}</div>
              <MdOutlineRemoveCircleOutline
                className="delete"
                onClick={() => handleDeleteBusiness("occupation")}
              />
            </div>
          ) : (
            <p
              className="owner-profile__info-container-business"
              onClick={() => setAddOwnerOccupation(true)}
            >
              Enter your occupation
            </p>
          )}
          {addOwnerOccupation && (
            <OwnerProfileAddOwnerOccupation
              owner={owner}
              handleCancel={setAddOwnerOccupation}
              onAddOccupation={handleAddAttribute}
              setAddOwnerOccupation={setAddOwnerOccupation}
            />
          )}
        </div>
        <div>
          {/* BIOGRAPHY */}
          {loggedInUser.biography ? (
            <div className="test">
              <div>{loggedInUser.biography}</div>
              <MdOutlineRemoveCircleOutline
                className="delete"
                onClick={() => handleDeleteBusiness("biography")}
              />
            </div>
          ) : (
            <p
              className="owner-profile__info-container-business"
              onClick={() => setAddOwnerBio(true)}
            >
              Enter something about yourself
            </p>
          )}
          {addOwnerBio && (
            <OwnerProfileAddBio
              owner={owner}
              handleCancel={setAddOwnerBio}
              onAddBio={handleAddAttribute}
              setAddOwnerBio={setAddOwnerBio}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default OwnerProfile;
