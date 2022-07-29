import { useState, useEffect } from "react";

const CommentForm = ({ handleSubmit }) => {
  const [bodyComment, setBodyComment] = useState("");
  const [errorBodyComment, setBodyCommentError] = useState(null);
  const isTextAreaDisabled = bodyComment.length === 0;

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(bodyComment);
    setBodyComment("");
  };

  useEffect(() => {
    if (bodyComment.length > 500) {
      setBodyCommentError("Comment should be less than 500 characters");
    }
  }, [bodyComment]);

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
