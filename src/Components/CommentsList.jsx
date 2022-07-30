import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

const CommentsList = ({ comments }) => {
  const [likeComment, setLikeComment] = useState(0);

  const daysSinceCommentPosted = (data) => {
    let now = Date.parse(new Date());
    let postedDate = Date.parse(data);
    let timeElapsed = now - postedDate;
    let yearsSinceCommentPosted = Math.floor(
      timeElapsed / (1000 * 3600 * 24) / 365
    );
    return yearsSinceCommentPosted;
  };

  // const handleAddVotesonComment = (increment) => {
  //   setLikeComment((currVotes) => currVotes + increment);
  //   patchVotesOnComments(comment_id, { inc_votes: increment }).catch(() => {
  //     setError("This page is not working now.Try later!");
  //   });
  // };

  return (
    <div className="comments-container">
      <div className="comments-title">
        <h4>Comments: </h4>
      </div>
      {comments.map((articleComments, key) => (
        <div key={key} className="container-each-comment">
          <div className="comments-username-logo-container">
            <div className="comment-username-logo-date">
              <FaUserCircle />
            </div>
            <div className="comment-username-logo-date">
              {articleComments.author}
            </div>
            <div id="comment-date" className="comment-username-logo-date">
              {`${daysSinceCommentPosted(
                articleComments.created_at
              )} years ago`}
            </div>
          </div>
          <div className="comment-body">
            <div className="comment-body">{articleComments.body}</div>
          </div>
          <div className="comment-votes">
            <div className="comment-votes-item">
              <FiThumbsUp />
            </div>
            <div className="ccomment-votes-item">{articleComments.votes}</div>
            <div className="comment-votes-item">
              <FiThumbsDown />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
