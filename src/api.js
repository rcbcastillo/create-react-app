import axios from 'axios';

export const getArticles = (topics) => {
  return axios
    .get(`https://nc-news-example-2.herokuapp.com/api/articles?topic=${topics}`)
    .then(({data:{articles}}) => articles)
};

export const getTopics = () => {
  return axios
    .get("https://nc-news-example-2.herokuapp.com/api/topics")
    .then(({data:{topics}}) => topics)
};

export const getArticle = (article_id) => {
  return axios
  .get(`https://nc-news-example-2.herokuapp.com/api/articles/${article_id}`)
  .then(({data:{article}}) => article)
};

export const patchVotesOnArticle = (article_id, votesToUpdate) => {
  return axios
  .patch(`https://nc-news-example-2.herokuapp.com/api/articles/${article_id}`, votesToUpdate)
  .then (({data:{article}}) => article.votes)  
}

export const getArticleComments = (article_id) => {
  return axios
  .get(`https://nc-news-example-2.herokuapp.com/api/articles/${article_id}/comments`, { params: { 'sort_by': "created_at", 'order': 'desc'} })
  .then(({data:{comments}}) => comments)
}

export const patchVotesOnComment = (comment_id, votesToUpdate) => {
  return axios
  .patch(`https://nc-news-example-2.herokuapp.com/api/comments/${comment_id}`, votesToUpdate)
  .then(({data:{comment}}) => {
    console.log(comment.votes)
    return comment.votes;
  })
}