import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading/Loading";
import "./Topics.css";
import { Row } from "react-materialize";

class Topics extends Component {
  state = {
    articles: []
  };

  componentDidMount = async () => {
    try {
      const { articles } = await this.fetchArticlesbyTopic();
      this.setState({ articles });
    } catch (err) {
      if (err.response.status === 404) this.props.history.push("404");
    }
  };

  componentDidUpdate = async prevProps => {
    if (prevProps !== this.props) {
      const { articles } = await this.fetchArticlesbyTopic();
      this.setState({ articles });
    }
  };

  fetchArticlesbyTopic = async query => {
    const { data } = this.props.match
      ? await axios.get(
          `https://elliot-ncnews.herokuapp.com/api/topics/${
            this.props.match.params.topic
          }/articles`
        )
      : await axios.get(`https://elliot-ncnews.herokuapp.com/api/articles/`);
    return data;
  };

  render() {
    const sortedArticles = [...this.state.articles].sort((a, b) => {
      return b.votes - a.votes;
    });
    if (!sortedArticles.length) return <Loading />;

    return (
      <div className="topics-main">
        <p className="topics-title">
          {sortedArticles[0].belongs_to.charAt(0).toUpperCase() +
            sortedArticles[0].belongs_to.slice(1)}
        </p>
        <div className="articles-main">
          {sortedArticles.map(article => {
            return (
              <div key={article._id} className="article-body">
                <Row className="title">
                  <Link to={`/articles/${article._id}`}>{article.title}</Link>
                </Row>
                <Row className="user">
                  Submitted by {article.created_by.username}
                </Row>
                <Row className="comments">
                  <Link to={`/articles/${article._id}`}>
                    {article.comments} Comments
                  </Link>
                </Row>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Topics;
