import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NoPageFoundError from "./NoPageFoundError";
import BusinessFound from "./BusinessFound";
import { Routes, Route } from "react-router-dom";
import About from "./About";

function WhatCustomerSees() {
  let webAddress = useParams();

  const [business, setBusiness] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`/${webAddress.business}`).then((resp) => {
      if (resp.ok) {
        resp.json().then((stuff) => setBusiness(stuff));
      } else {
        resp.json().then((mesg) => setError(mesg.error));
      }
    });
  }, [webAddress.business]);

  return (
    <div className="business-found-wrapper">
      {error ? (
        error
      ) : (
        <BusinessFound companyInfo={business} urlParam={webAddress} />
      )}
    </div>
  );
}

export default WhatCustomerSees;
