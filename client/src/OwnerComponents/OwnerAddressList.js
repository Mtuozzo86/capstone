import { MdOutlineRemoveCircleOutline } from "react-icons/md";

function OwnerAddressList({ street, city, state, zip }) {
  return (
    <div className="address-box">
      <div className="delete">
        <MdOutlineRemoveCircleOutline />
      </div>
      <p>{street}</p>
      <p>{city}</p>
      <p>{state}</p>
      <p>{zip}</p>
    </div>
  );
}

export default OwnerAddressList;
