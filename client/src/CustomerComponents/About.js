import React from "react";

function About({companyInfo}) {
  

  if (companyInfo.business === undefined) {
    return <p>This aint working</p>;
  }

  return (
    <div className="about">
      <p>{companyInfo.biography}</p>
    </div>
  );
}

export default About;
