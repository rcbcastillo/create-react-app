import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => {
  return (
    <div>
      <ul>
        {articles.map((article) => (
          <li key={article["article_id"]}>
            <Link to={`/article/${article["article_id"]}`}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesList;
