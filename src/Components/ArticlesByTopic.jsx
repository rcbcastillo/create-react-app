import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "./Header";
import { getArticlesByTopic } from "../api";
import ArticlesList from "./ArticlesList";
import SortByArticles from "./SortByArticles";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    getArticlesByTopic(topic).then((articles) => setArticles(articles));
  }, [topic]);

  if (articles) {
    return (
      <main>
        <Header title={`Topic: ${topic}`} />
        <SortByArticles />
        <section>
          <ArticlesList articles={articles} />
        </section>
      </main>
    );
  }
};

export default Articles;
