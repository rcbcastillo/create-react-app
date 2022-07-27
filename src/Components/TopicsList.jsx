import {Link} from 'react-router-dom'

const TopicsList = ({ topics }) => {
  return (
    <ul>
      {topics.map((articleTopic) => (
        <Link
          key={articleTopic.topic}
          to={`./Articles/${articleTopic.topic}`}
        >
          <li>{articleTopic.topic}</li>
        </Link>
      ))}
    </ul>
  );
};

export default TopicsList;