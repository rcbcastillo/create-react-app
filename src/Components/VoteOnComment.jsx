import { useState } from "react";
//import { useParams } from "react-router-dom";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
//import { patchVotesOnComment } from "../api";

const VoteOnComment = () => {
  const [likeComment, setLikeComment] = useState(0);
  //   const [commentVotes, setCommentsVotes] = useState([]);
  //   const { comment_id } = useParams();
  //   let totalVotes = likeComment;

  // patchVotesOnComment(comment_id, { inc_votes: increment }).catch(() => {
  //   setError("This page is not working now.Try later!");
  // });

  const handleVotesonComment = (increment) => {
    setLikeComment((currVotes) => currVotes + increment);
  };

  return (
    <div className="comment-votes">
      <div className="comment-votes-item">
        <FiThumbsUp onClick={() => handleVotesonComment(1)} />
      </div>
      <div className="ccomment-votes-item">{likeComment}</div>
      <div className="comment-votes-item">
        <FiThumbsDown onClick={() => handleVotesonComment(-1)} />
      </div>
    </div>
  );
};

export default VoteOnComment;
