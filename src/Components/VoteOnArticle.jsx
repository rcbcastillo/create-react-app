import { useState } from "react";
import { useParams } from "react-router-dom";
import { patchVotesOnArticle } from "../api";

const VoteOnArticle = ({ votes }) => {
  const [articleVotes, setArticleVotes] = useState(0);
  const [buttonAddVotesDisabled, setButtonAddVotesDisabled] = useState(false);
  const [buttonDeleteVotesDisabled, setButtonDeleteVotesDisabled] =
    useState(false);
  const [error, setError] = useState(null);
  const { article_id } = useParams();

  let totalVotes = votes + articleVotes;

  const handleAddVotesonArticle = (change) => {
    setButtonAddVotesDisabled(true);
    setArticleVotes((currVotes) => currVotes + change);
    patchVotesOnArticle(article_id, { inc_votes: change }).catch(() => {
      setError("This page is not working now.Try later!");
    });
  };

  const handleDeleteVotesonArticle = (change) => {
    setButtonDeleteVotesDisabled(true);
    setArticleVotes((currVotes) => currVotes + change);
    patchVotesOnArticle(article_id, { inc_votes: change }).catch(() => {
      setError("This page is not working now.Try later!");
    });
  };

  if (error) return <p>{error}</p>;

  return (
    <div id="vote-article">
      <button
        disabled={buttonAddVotesDisabled}
        onClick={() => handleAddVotesonArticle(1)}
      >
        Add votes
      </button>
      <button
        disabled={buttonDeleteVotesDisabled}
        onClick={totalVotes > 0 ? () => handleDeleteVotesonArticle(-1) : 0}
      >
        Delete votes
      </button>
      <p>This article has {totalVotes} votes</p>
    </div>
  );
};

export default VoteOnArticle;
