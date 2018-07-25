import React, { Component } from "react";
import * as api from "../../api";
import DisplayArticles from "../DisplayArticles/DisplayArticles";

class Homepage extends Component {
  state = {
    articles: []
  };

  componentDidMount = async () => {
    const articles = await api.fetchArticles();
    this.setState({ articles });
  };

  render() {
    return (
      <div className="homepage-main">
        <DisplayArticles articles={this.state.articles} />
      </div>
    );
  }
}

export default Homepage;
