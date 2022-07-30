import { FaUserCircle } from "react-icons/fa";
import VoteOnComment from "./VoteOnComment";

const CommentsList = ({ comments }) => {
  const daysSinceCommentPosted = (data) => {
    let now = Date.parse(new Date());
    let postedDate = Date.parse(data);
    let timeElapsed = now - postedDate;
    let yearsSinceCommentPosted = Math.floor(
      timeElapsed / (1000 * 3600 * 24) / 365
    );
    return yearsSinceCommentPosted;
  };

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
          <VoteOnComment
            votes={articleComments.votes}
            commentId={articleComments.comment_id}
          />
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
