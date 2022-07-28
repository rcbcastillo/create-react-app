import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => {
  return (
    <div>
      <ul>
        {articles.map((article) => (
          <li>
            <Link
              key={article["article_id"]}
              to={`/article/${article["article_id"]}`}
            ></Link>
            {article.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesList;
