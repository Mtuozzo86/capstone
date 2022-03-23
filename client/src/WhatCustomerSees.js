import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function WhatCustomerSees() {
  let webAddress = useParams();
  const [business, setBusiness] = useState([]);
  console.log(business);
  useEffect(() => {
    fetch(`/owners/${webAddress.business}`)
      .then((resp) => resp.json())
      .then((stuff) => setBusiness(stuff[0]));
  }, [webAddress.business]);

  return (
    <div>
      <div>
        <h2>Owner: {business.first_name + business.last_name}</h2>
      </div>
      <div>Name of business: {business.business}</div>
    </div>
  );
}

export default WhatCustomerSees;
