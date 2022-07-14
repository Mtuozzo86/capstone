import React, { useContext } from "react";
import { FoundContext } from "../context/found";

function Contact() {
  const ctx = useContext(FoundContext);
  console.log(ctx);
  if (!ctx.business) return <p>Loading email</p>;

  return (
    <div className="contact">
      <p>{ctx.business.email}</p>
    </div>
  );
}

export default Contact;
