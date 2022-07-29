import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "./Header";
import { getArticle } from "../api";
import VoteOnArticle from "./VoteOnArticle";
import Comments from "./Comments";

const Article = () => {
  const [article, setArticle] = useState();
  const { article_id } = useParams();

  useEffect(() => {
    getArticle(article_id).then((article) => setArticle(article));
  }, [article_id]);

  if (article) {
    return (
      <main>
        <Header title={`Topic: ${article.topic}`} />
        <section>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
          <p>{`Author: ${article.author}`}</p>
          <p>{`Posted: ${article.created_at}`}</p>
          <VoteOnArticle votes={article.votes} />
          <h4 className="comments">Comments:</h4>
          <Comments />
        </section>
      </main>
    );
  }
};

export default Article;
