import { useState } from "react";
import { useParams } from "react-router-dom";
import { patchVotesOnArticle } from "../api";

const VoteOnArticle = ({ votes }) => {
  const [articleVotes, setArticleVotes] = useState(0);
  const { article_id } = useParams();

  const handleVotesonArticle = (increment) => {
    setArticleVotes((currVotes) => currVotes + increment);
    patchVotesOnArticle(article_id, { inc_votes: increment });
  };

  return (
    <div id="vote-article">
      <button onClick={() => handleVotesonArticle(1)}>Add votes</button>
      <button onClick={() => handleVotesonArticle(-1)}>Delete votes</button>
      <p>This article has {votes + articleVotes} votes</p>
    </div>
  );
};

export default VoteOnArticle;
