import { useState, useEffect } from "react";
import { postArticleComment } from "../api";
import { useParams } from "react-router-dom";

const CommentForm = ({ handleSubmit }) => {
  const [bodyComment, setBodyComment] = useState("");
  const [errorBodyComment, setBodyCommentError] = useState(null);
  const [errorPostComment, setErrorPostComment] = useState(null);
  const { article_id } = useParams();
  const isTextAreaDisabled = bodyComment.length === 0;
  const dataToSend = { body: bodyComment, username: "jessjelly" };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(bodyComment);
    setBodyComment("");
    postArticleComment(article_id, dataToSend).catch(() =>
      setErrorPostComment("This website is not working now. Try later!")
    );
  };

  useEffect(() => {
    if (bodyComment.length > 500) {
      setBodyCommentError("Comment should be less than 500 characters");
    }
  }, [bodyComment]);

  if (errorPostComment) return <p>{errorPostComment}</p>;

  return (
    <form onSubmit={onSubmit}>
      {errorBodyComment ? <p>{errorBodyComment}</p> : null}
      <input
        placeholder="here ..."
        className="form-textarea"
        value={bodyComment}
        type="bodyComment"
        onChange={(event) => setBodyComment(event.target.value)}
      />
      <button className="form-submit" disabled={isTextAreaDisabled}>
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
