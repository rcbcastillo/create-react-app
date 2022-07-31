import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleComments } from "../api";
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const { article_id } = useParams();

  const addComment = (text) => {
    console.log(text);
  };

  useEffect(() => {
    getArticleComments(article_id).then((comments) => setComments(comments));
  }, [article_id]);

  if (comments) {
    return (
      <div className="comments">
        <div className="write-comments">
          <div className="form-title">Write comment</div>
          <CommentForm handleSubmit={addComment} />
        </div>
        <div className="comments-onclick">
          <button onClick={() => setShowComments((current) => !current)}>
            {showComments ? "Hide comments" : "See comments"}
          </button>
          {showComments ? <CommentsList comments={comments} /> : null}
        </div>
      </div>
    );
  }
};

export default Comments;
