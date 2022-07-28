import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => {
  return (
    <div>
      <ul>
        {articles.map((article) => (
          <Link key={article['article_id']} to={`/article/${article['article_id']}`}>
            <li>{article.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesList;
