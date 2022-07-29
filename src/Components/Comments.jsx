import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleComments } from "../api";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleComments(article_id).then((comments) => setComments(comments));
  }, [article_id]);

  if (comments) {
    return (
      <ul>
        {comments.map((articleComments, key) => (
          <p
            key={key}
          >{`${articleComments.author}: ${articleComments.body}`}</p>
        ))}
      </ul>
    );
  }
};

export default Comments;
