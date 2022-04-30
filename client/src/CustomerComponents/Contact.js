import Footer from "./Footer";

function Contact({ companyInfo }) {
  return (
    <div className="contact">
      <p>{companyInfo.email}</p>
      <Footer />
    </div>
  );
}

export default Contact;
