import OwnerAddressList from "./OwnerAddressList";

function OwnerAddress({ loggedInUser }) {
  console.log(loggedInUser.owner_addresses);
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

  return <p>{addresses}</p>;
}

export default OwnerAddress;
