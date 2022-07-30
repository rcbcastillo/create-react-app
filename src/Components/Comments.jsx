import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleComments } from "../api";
import CommentsList from "./CommentsList";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleComments(article_id).then((comments) => setComments(comments));
  }, [article_id]);

  if (comments) {
    return (
      <div className="comments-onclick">
        <button onClick={() => setShowComments((current) => !current)}>
          {showComments ? "Hide comments" : "See comments"}
        </button>
        {showComments ? <CommentsList comments={comments} /> : null}
      </div>
    );
  }
};

export default Comments;
