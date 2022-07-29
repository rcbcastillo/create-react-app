import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleComments } from "../api";
import CommentForm from "./CommentForm";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleComments(article_id).then((comments) => setComments(comments));
  }, [article_id]);

  const addComment = (text, article_id) => {
    console.log("addComment:", text, article_id);
  };

  if (comments) {
    return (
      <div className="comments">
        <div className="form-title">Write comment</div>
        <CommentForm submitLabel="Write" handleSubmit={addComment} />
        <div className="comments-container">
          {comments.map((articleComments, key) => (
            <p
              key={key}
            >{`${articleComments.author}: ${articleComments.body}`}</p>
          ))}
        </div>
      </div>
    );
  }
};

export default Comments;
