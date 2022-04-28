import { Link } from "react-router-dom";

function Result({ business, website, image }) {
  return (
    <Link to={`/business/${website}`}>
      <h3>
        <img className="result-image-icon" src={image} alt="" />
        {business}
      </h3>
    </Link>
  );
}

export default Result;
