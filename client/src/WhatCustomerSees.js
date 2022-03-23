import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function WhatCustomerSees() {
  let webAddress = useParams();
  const [business, setBusiness] = useState([]);
  const [error, setError] = useState([]);
  console.log("Error =", error);

  useEffect(() => {
    fetch(`/business/${webAddress.business}`)
      // .then((resp) => resp.json())
      // .then((stuff) => setBusiness(stuff[0]));
      .then((resp) => {
        if (resp.ok) {
          resp.json().then((stuff) => setBusiness(stuff));
        } else {
          resp.json().then((error) => setError(error));
        }
      });
  }, [webAddress.business]);

  return (
    <div>
      <div>
        <h2>Owner: {business.first_name + " " + business.last_name}</h2>
      </div>
      <div>Name of business: {business.business}</div>
    </div>
  );
}

export default WhatCustomerSees;
