import { useState } from "react";
import { useParams } from "react-router-dom";
import { patchVotesOnArticle } from "../api";

const VoteOnArticle = ({ votes }) => {
  const [articleVotes, setArticleVotes] = useState(0);
  const { article_id } = useParams();
  const [error, setError] = useState(null);

  const handleVotesonArticle = (increment) => {
    setArticleVotes((currVotes) => currVotes + increment);
    patchVotesOnArticle(article_id, { inc_votes: increment }).catch((err) => {
      setError("This page is not working now.Try later!");
    });
  };

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div id="vote-article">
      <button onClick={() => handleVotesonArticle(1)}>Add votes</button>
      <button onClick={() => handleVotesonArticle(-1)}>Delete votes</button>
      <p>This article has {votes + articleVotes} votes</p>
    </div>
  );
};

export default VoteOnArticle;
