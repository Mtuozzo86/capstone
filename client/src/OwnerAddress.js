import OwnerAddressList from "./OwnerAddressList";
import CreateOwnerAddress from "./OwnerForms/CreateOwnerAddress";
import { useState, useEffect } from "react";

function OwnerAddress({ loggedInUser }) {
  const { owner_addresses } = loggedInUser;
  const [addressList, setAddressList] = useState([]);

  useEffect(() => {
    fetch("/owner_addresses")
      .then((resp) => resp.json())
      .then((info) => setAddressList(info));
  }, []);

  function handleAddress(addressInfo) {
    const newAddress = addressInfo;
    const updatedAddressList = [...addressList, newAddress];
    setAddressList(updatedAddressList);
  }

  const addresses = addressList.map((item) => {
    return (
      <OwnerAddressList
        key={item.id}
        street={item.street}
        city={item.city}
        state={item.state}
        zip={item.zip}
      />
    );
  });

  return (
    <div className="address-flex-container">
      <div className="address">
        <h4 className="address-h4">Your Addresses</h4>
        <div className="address-container">
          <br />
          {addresses}
        </div>
      </div>
      <div className="add-address">Add Address</div>
      <CreateOwnerAddress
        loggedInUser={loggedInUser}
        onSetAddress={handleAddress}
      />
    </div>
  );
}

export default OwnerAddress;
