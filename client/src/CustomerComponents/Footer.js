import { Link } from "react-router-dom";
function Footer({ business }) {
  return (
    <div className="footer">
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to={`/business/${business.website}`}>
        <p>{business.business}</p>
      </Link>
    </div>
  );
}

export default Footer;
