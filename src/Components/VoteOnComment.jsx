import { useState } from "react";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { patchVotesOnComment } from "../api";

const VoteOnComment = ({ votes, commentId }) => {
  const [likeComment, setLikeComment] = useState(0);
  const [likeDisabled, setLikeDisabled] = useState(false);
  const [unlikeDisabled, setUnlikeDisabled] = useState(false);
  const [error, setError] = useState(null);

  let totalVotes = likeComment + votes;

  const handleVotesonComment = (increment) => {
    setLikeComment((currVotes) => currVotes + increment);
  };

  const onClickLikeBtn = () => {
    handleVotesonComment(1);
    setLikeDisabled(true);
    patchVotesOnComment(commentId, { inc_votes: 1 }).catch(() =>
      setError("This option is not available. Try later!")
    );
  };

  const onClickUnlikeBtn = () => {
    handleVotesonComment(-1);
    setUnlikeDisabled(true);
    patchVotesOnComment(commentId, { inc_votes: -1 });
  };

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className="comment-votes">
      <div className="comment-votes-item">
        <button
          className="comment-votes-icon"
          disabled={likeDisabled}
          onClick={() => onClickLikeBtn()}
        >
          <FiThumbsUp />
        </button>
      </div>
      <div className="comment-votes-item">{totalVotes}</div>
      <div className="comment-votes-item">
        <button
          className="comment-votes-icon"
          onClick={likeComment ? () => onClickUnlikeBtn() : null}
          disabled={unlikeDisabled}
        >
          <FiThumbsDown />
        </button>
      </div>
    </div>
  );
};

export default VoteOnComment;
