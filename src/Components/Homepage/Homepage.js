import React, { Component } from "react";
import axios from "axios";
import "./Homepage.css";

import DisplayArticles from "../DisplayArticles/DisplayArticles";

class Homepage extends Component {
  state = {
    articles: []
  };

  componentDidMount = async () => {
    const articles = await this.fetchData();
    this.setState({ articles });
  };
  render() {
    return (
      <div>
        <DisplayArticles articles={this.state.articles} />
      </div>
    );
  }
  fetchData = async query => {
    const {
      data: { articles }
    } = await axios.get(`https://elliot-ncnews.herokuapp.com/api/articles/`);
    return articles;
  };
}

export default Homepage;
