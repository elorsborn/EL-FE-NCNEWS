import React, { Component } from "react";
import axios from "axios";
import "./Homepage.css";

import DisplayArticles from "../DisplayArticles";

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
        <h2>this is my not that shitty homepage</h2>
        <DisplayArticles articles={this.state.articles} />
      </div>
    );
  }
  fetchData = async query => {
    const {
      data: { articles }
    } = await axios.get(`https://ro-nc-news.herokuapp.com/api/articles/`);
    return articles;
  };
}

export default Homepage;
