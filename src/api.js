import axios from "axios";

export const fetchData = async query => {
  const {
    data: { articles }
  } = await axios.get(`https://elliot-ncnews.herokuapp.com/api/articles/`);
  return articles;
};
