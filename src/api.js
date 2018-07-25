import axios from "axios";

const url = "https://elliot-ncnews.herokuapp.com/api";

export const fetchArticles = async query => {
  const {
    data: { articles }
  } = await axios.get(`${url}/articles/`);
  return articles;
};
