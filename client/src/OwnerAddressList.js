function OwnerAddressList({ street, city, state, zip }) {
  return (
    <div className="address-box">
      <p>{street}</p>
      <p>{city}</p>
      <p>{state}</p>
      <p>{zip}</p>
    </div>
  );
}

export default OwnerAddressList;
