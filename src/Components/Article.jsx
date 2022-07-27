import { useState, useEffect } from "react";  
import { useParams } from "react-router-dom"; 
import {Header} from './Header';
import {getArticle} from '../api'


const Article = () => {
    const [article, setArticle] = useState();
    const {article_id} = useParams();

    useEffect (() => {
      getArticle(article_id)
      .then((article) => setArticle(article))
    }, [article_id])

    if (article) {
      return (
        <main>
          <Header title={article.title} />
          <h3>{article.topic}</h3>
          <section>
            <p>{article.body}</p>
            <p>{article.author}</p>                   
            <p>{article.created_at}</p>          
          </section>
        </main>
      )
    }   
}

export default Article;