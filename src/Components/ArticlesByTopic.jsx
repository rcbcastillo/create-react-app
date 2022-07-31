import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "./Header";
import { getArticles } from "../api";
import ArticlesList from "./ArticlesList";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    getArticles(topic).then((articles) => setArticles(articles));
  }, [topic]);

  if (articles) {
    return (
      <main>
        <Header title={`Topic: ${topic}`} />
        <section>
          <ArticlesList articles={articles} />
        </section>
      </main>
    );
  }
};

export default Articles;
