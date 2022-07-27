import axios from 'axios';

export const getArticles = (topics) => {
  return axios
    .get(`https://nc-news-example-2.herokuapp.com/api/articles?topic=${topics}`)
    .then(({data:{articles}}) => articles);
};


export const getTopics = () => {
  return axios
    .get("https://nc-news-example-2.herokuapp.com/api/topics")
    .then(({data}) => {
      console.log(data)
      return data;
    });
};

