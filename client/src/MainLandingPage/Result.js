import { Link } from "react-router-dom";

function Result({ business, website }) {
  console.log(business);

  return (
    <Link to={`/business/${website}`}>
      <h3>{business}</h3>
    </Link>
  );
}

export default Result;
