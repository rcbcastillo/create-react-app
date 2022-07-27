import axios from 'axios';

export const getArticles = (topics) => {
  return axios
    .get(`https://nc-news-example-2.herokuapp.com/api/articles?topic=${topics}`)
    .then(({data:{articles}}) => articles);
};


export const getTopics = () => {
  return axios
    .get("https://nc-news-example-2.herokuapp.com/api/topics")
    .then(({data:{topics}}) => topics);
};

export const getArticle = (article_id) => {
  return axios
  .get(`https://nc-news-example-2.herokuapp.com/api/articles/${article_id}`)
  .then(({data:{article}}) => article);
};