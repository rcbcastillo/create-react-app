import { Link } from "react-router-dom";

const TopicsList = ({ topics }) => {
  return (
    <ul className="list-topics">
      {topics.map((articleTopic, key) => (
        <li key={key}>
          <div>
            <Link to={`/Articles/${articleTopic.slug}`}>
              {articleTopic.slug}
            </Link>
          </div>
          <div>{articleTopic.description}...</div>
        </li>
      ))}
    </ul>
  );
};

export default TopicsList;
