import React, { Component } from "react";
import axios from "axios";
import CommentsByArticle from "../Comments/CommentsByArticle";
import Vote from "../Voting/Vote";

class Article extends Component {
  state = {
    article: {
      votes: 0,
      _id: ""
    }
  };

  render() {
    return (
      <section className="article-content">
        <Vote
          article_id={this.state.article._id}
          updateVote={this.updateVote}
        />
        <div>{this.state.article.votes}</div>
        <div className="article-title"> {this.state.article.title} </div>
        <div className="article-title"> {this.state.article.body} </div>

        <CommentsByArticle {...this.props} />
      </section>
    );
  }

  componentDidMount = async () => {
    const { article } = await this.fetchArticleById();
    this.setState({ article });
  };
  componentDidUpdate = async prevProps => {
    if (prevProps !== this.props) {
      const { article } = await this.fetchArticleById();
      this.setState({ article });
    }
  };

  fetchArticleById = async query => {
    const { data } = this.props.match
      ? await axios.get(
          `https://elliot-ncnews.herokuapp.com/api/articles/${
            this.props.match.params.article_id
          }/`
        )
      : await axios.get(`https://elliot-ncnews.herokuapp.com/api/articles/`);
    return data;
  };

  updateVote = direction => {
    const { article } = this.state;
    this.setState({
      article: { ...article, votes: article.votes + direction }
    });
  };
}

export default Article;
