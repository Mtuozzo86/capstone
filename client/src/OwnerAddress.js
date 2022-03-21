import OwnerAddressList from "./OwnerAddressList";
import CreateOwnerAddress from "./OwnerForms/CreateOwnerAddress";
import { useState, useEffect } from "react";

function OwnerAddress({ loggedInUser }) {
  const [addressList, setAddressList] = useState([]);

  useEffect(() => {
    fetch("/owners")
      .then((resp) => resp.json())
      .then((stuff) => console.log(stuff.owner_addresses));
  }, []);

  function handleAddress(addressInfo) {
    setAddressList(addressInfo);
  }

  console.log(addressList);
  const addresses = loggedInUser.owner_addresses.map((item) => {
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
