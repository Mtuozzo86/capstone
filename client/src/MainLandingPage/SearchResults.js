import Result from "./Result";

function SearchResults({ results }) {
  const listOfResults = results.map((result) => {
    return (
      <Result
        key={result.id}
        business={result.business}
        website={result.website}
        image={result.image}
      />
    );
  });
  return <>{listOfResults}</>;
}

export default SearchResults;
