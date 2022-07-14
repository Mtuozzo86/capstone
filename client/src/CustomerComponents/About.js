import React, { useContext } from "react";
import { FoundContext } from "../context/found";
function About() {
  const found = useContext(FoundContext);

  if (found.business === null) {
    return <p>This aint working</p>;
  }

  return (
    <div className="about">
      <p>{found.business.biography}</p>
    </div>
  );
}

export default About;
