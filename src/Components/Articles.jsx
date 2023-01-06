import SortByArticles from "./SortByArticles";
import { Header } from "./Header";
import Filter from "./Filter";

const Articles = () => {
  return (
    <main>
      <Header title={`Articles`} />
      <div>
        <Filter />
        <SortByArticles />
      </div>
    </main>
  );
};

export default Articles;
