import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DisplayArticles.css";
import Loading from "../Loading/Loading";
import { Row } from "react-materialize";

class DisplayArticles extends Component {
  render() {
    const sortedArticles = [...this.props.articles].sort((a, b) => {
      return b.votes - a.votes;
    });
    if (!sortedArticles.length) return <Loading />;
    return (
      <div className="articles-main">
        {sortedArticles.map((article, i) => {
          return (
            <div key={i} className="article-body">
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
    );
  }
}

export default DisplayArticles;
