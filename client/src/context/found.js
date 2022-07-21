import React, { useState } from "react";



const FoundContext = React.createContext();

function FoundProvider({ children }) {
  

  return (
    <FoundContext.Provider value={{  }}>
      {children}
    </FoundContext.Provider>
  );
}
export { FoundContext, FoundProvider };
