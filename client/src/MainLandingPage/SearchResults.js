import Result from "./Result";

function SearchResults({ results }) {
  if (results.length === 0) {
    return <p>Nothing found</p>;
  }
  const listOfResults = results.map((result) => {
    return (
      <Result
        key={result.id}
        business={result.business}
        website={result.website}
      />
    );
  });
  return <>{listOfResults}</>;
}

export default SearchResults;
