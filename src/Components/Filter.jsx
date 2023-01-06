import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showFilteredArticles = searchParams.get("filter") === "active";

  return (
    <div>
      <div>
        <button onClick={setSearchParams({ filter: "active" })}>
          Filtered Articles
        </button>
        <button onClick={setSearchParams({})}>Reset filter</button>
      </div>
      {showFilteredArticles ? (
        <h2>Showing filtered articles</h2>
      ) : (
        <h2>Showing all articles</h2>
      )}
    </div>
  );
};

export default Filter;
