import { Link } from "react-router-dom";

const TopicsList = ({ topics }) => {
  return (
    <ul>
      {topics.map((articleTopic) => (
        <li key={articleTopic.slug}>
          <Link to={`/Articles/${articleTopic.slug}`}>{articleTopic.slug}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TopicsList;
