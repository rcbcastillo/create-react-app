import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "./Header";
import { getArticles } from "../api";
import ArticlesList from "./ArticlesList";
import SearchArticles from "./SearchArticles";

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
        <SearchArticles />
        <section>
          <ArticlesList articles={articles} />
        </section>
      </main>
    );
  }
};

export default Articles;
