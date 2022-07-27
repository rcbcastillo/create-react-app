import {Link} from 'react-router-dom'

const TopicsList = ({ topics }) => {
  return (
    <ul>
      {topics.map((articleTopic) => (
        <Link
          key={articleTopic.slug}
          to={`/Articles/${articleTopic.slug}`}
        >
          <li>{articleTopic.slug}</li>
        </Link>
      ))}
    </ul>
  );
};

export default TopicsList;