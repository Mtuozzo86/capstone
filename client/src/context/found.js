import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

const FoundContext = React.createContext();

function FoundProvider({ children }) {
  let webAddress = useParams();
  const [business, setBusiness] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`/business_search/${webAddress.website}`).then((resp) => {
      if (resp.ok) {
        resp.json().then((stuff) => setBusiness(stuff));
      } else {
        resp.json().then((mesg) => setError(mesg.error));
      }
    });
  }, [webAddress.website]);

  return (
    <FoundContext.Provider value={{ business, setBusiness, error, setError }}>
      {children}
    </FoundContext.Provider>
  );
}
export { FoundContext, FoundProvider };
