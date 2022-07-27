import { useState, useEffect } from 'react';
import {Header} from './Header';
import { getTopics } from '../api';
import TopicsList from './TopicsList';

const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => setTopics(topics));
  }, []);
  
  if (topics) {
    return (
      <main>
        <Header title={`Articles topics`} />
        <section>
          <TopicsList topics={topics} />
        </section>
      </main>
    );
  }
}

export default Topics;