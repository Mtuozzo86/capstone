import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NoPageFoundError from "./NoPageFoundError";
import BusinessFound from "./BusinessFound";

function WhatCustomerSees() {
  let webAddress = useParams();
  const [business, setBusiness] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`/business/${webAddress.business}`)
      // .then((resp) => resp.json())
      // .then((stuff) => setBusiness(stuff[0]));
      .then((resp) => {
        if (resp.ok) {
          resp.json().then((stuff) => setBusiness(stuff));
        } else {
          resp.json().then(setError(true));
        }
      });
  }, [webAddress.business]);

  return <div>{error ? <NoPageFoundError /> : <BusinessFound companyInfo={business}/>}</div>;
}

export default WhatCustomerSees;
