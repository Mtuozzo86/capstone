import { useEffect } from "react";
import { useParams } from "react-router-dom";

function WhatCustomerSees() {
  let webAddress = useParams();

  useEffect(() => {
    fetch(`/owners/${webAddress.business}`)
      .then((resp) => resp.json())
      .then((stuff) => console.log(stuff[0]));
  }, []);
  return <h1>test</h1>;
}

export default WhatCustomerSees;
