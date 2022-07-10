import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FoundProvider } from "../context/found";
import BusinessFound from "./BusinessFound";

function WhatCustomerSees() {
  let webAddress = useParams();

  const [business, setBusiness] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`/business_search/${webAddress.website}`).then((resp) => {
      if (resp.ok) {
        resp.json().then((stuff) => setBusiness(stuff));
      } else {
        resp.json().then((mesg) => setError(mesg.error));
      }
    });
  }, [webAddress]);

  if (!business) return <p>Loading!</p>;

  return (
    <div className="business-found-wrapper">
      {error ? (
        error
      ) : (
        <FoundProvider>
          <BusinessFound companyInfo={business} />
        </FoundProvider>
      )}
    </div>
  );
}

export default WhatCustomerSees;
