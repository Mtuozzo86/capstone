import React from "react";


function Contact({companyInfo}) {

  // if (!companyInfo.business) return <p>Loading email</p>;

  return (
    <div className="contact">
      <p>{companyInfo.email}</p>
    </div>
  );
}

export default Contact;
