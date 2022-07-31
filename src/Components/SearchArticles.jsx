import { Header } from "./Header";
import DropDownList from "./DropDownList";
import { useSearchParams } from "react-router-dom";

const SearchArticles = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // This function will be called whenever the text input changes
  const urlHandler = (event) => {
    let search;
    if (event.target.value) {
      search = {
        keyword: event.target.value,
      };
    } else {
      search = undefined;
    }

    setSearchParams(search, { replace: true });
  };

  return (
    <div className="-container">
      <div>
        <Header title={"Topic"} />
        <DropDownList className="sortby-articles" />
        <p>{"What should I do?"}</p>
      </div>
      <div id="articles-search-container">
        <input
          value={searchParams.keyword}
          onChange={urlHandler}
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default SearchArticles;
