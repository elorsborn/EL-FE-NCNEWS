import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Topics extends Component {
  state = {
    articles: []
  };

  componentDidMount = async () => {
    const { articles } = await this.fetchArticlesbyTopic();
    this.setState({ articles });
  };
  componentDidUpdate = async prevProps => {
    if (prevProps !== this.props) {
      const { articles } = await this.fetchArticlesbyTopic();
      this.setState({ articles });
    }
  };

  render() {
    return (
      <div>
        {this.state.articles.map((article, i) => {
          return (
            <div key={i} className="article-card">
              <div>
                <div className="upvote">upvote</div>
                <div className="votes">{article.votes}</div>
                <div className="downvote">downvote</div>
                <div className="title">
                  <Link to={`/article/${article._id}`}>{article.title}</Link>
                </div>
                <div className="user">
                  Submitted by {article.created_by.username}
                </div>
                <div className="comments">
                  <a href="/articles/:article_id/comments">
                    {article.comments} Comments
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
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
}

export default Topics;
