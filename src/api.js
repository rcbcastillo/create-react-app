import axios from 'axios';

export const getArticles = (topics) => {
  return axios
    .get(`https://nc-news-example-2.herokuapp.com/api/articles?topic=${topics}`)
    .then(({data:{articles}}) => articles)
    .catch((error) => Promise.reject(error));
};

export const getTopics = () => {
  return axios
    .get("https://nc-news-example-2.herokuapp.com/api/topics")
    .then(({data:{topics}}) => topics)
    .catch((error) => Promise.reject(error));
};

export const getArticle = (article_id) => {
  return axios
  .get(`https://nc-news-example-2.herokuapp.com/api/articles/${article_id}`)
  .then(({data:{article}}) => article)
  .catch((error) => Promise.reject(error));
};

export const patchVotesOnArticle = (article_id, votesToUpdate) => {
  return axios
  .patch(`https://nc-news-example-2.herokuapp.com/api/articles/${article_id}`, votesToUpdate)
  .then (({data:{article}}) => article.votes)
  .catch((error) => Promise.reject(error));
}
