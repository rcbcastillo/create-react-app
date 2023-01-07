import axios from 'axios';

export const getArticlesByTopic = (topics) => {
  return axios
    .get(`x/api/articles?topic=${topics}`)
    .then(({data:{articles}}) => articles)
};

export const getTopics = () => {
  return axios
    .get("x/api/topics")
    .then(({data:{topics}}) => topics)
};

export const getArticle = (article_id) => {
  return axios
  .get(`x/api/articles/${article_id}`)
  .then(({data:{article}}) => article)
};

export const patchVotesOnArticle = (article_id, votesToUpdate) => {
  return axios
  .patch(`x/api/articles/${article_id}`, votesToUpdate)
  .then (({data:{article}}) => article.votes)  
}

export const getArticleComments = (article_id) => {
  return axios
  .get(`x/api/articles/${article_id}/comments`, { params: { 'sort_by': "created_at", 'order': 'desc'} })
  .then(({data:{comments}}) => comments)
}

export const patchVotesOnComment = (comment_id, votesToUpdate) => {
  return axios
  .patch(`x/api/comments/${comment_id}`, votesToUpdate)
  .then(({data:{comment}}) => {
    return comment.votes;
  })
}

export const postArticleComment = (article_id, dataToSend) => {
  return axios
    .post(`x/api/articles/${article_id}/comments`, dataToSend)
    .then(({data}) => data);
}