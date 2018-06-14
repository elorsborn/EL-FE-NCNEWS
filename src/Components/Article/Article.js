import React, { Component } from "react";
import axios from "axios";

class Article extends Component {
  state = {
    article: {}
  };

  componentDidMount = async () => {
    const { article } = await this.fetchData();
    this.setState({ article });
  };
  componentDidUpdate = async prevProps => {
    if (prevProps !== this.props) {
      const { article } = await this.fetchData();
      this.setState({ article });
    }
  };

  render() {
    return (
      <section>
        <h1>Article goes here</h1>
        <div className="article-content">
          <div className="article-title"> {this.state.article.title} </div>
          <div className="article-title"> {this.state.article.body} </div>
        </div>
      </section>
    );
  }
  fetchData = async query => {
    const { data } = this.props.match
      ? await axios.get(
          `https://elliot-ncnews.herokuapp.com/api/articles/${
            this.props.match.params.article_id
          }/`
        )
      : await axios.get(`https://elliot-ncnews.herokuapp.com/api/articles/`);
    return data;
  };
}

export default Article;
