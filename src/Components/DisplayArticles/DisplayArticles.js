import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DisplayArticles.css";
import Loading from "../Loading/Loading";

class DisplayArticles extends Component {
  render() {
    const sortedArticles = [...this.props.articles].sort((a, b) => {
      return b.votes - a.votes;
    });
    if (!sortedArticles.length) return <Loading className="Preloader" />;
    return (
      <div className="articles-body">
        {sortedArticles.map((article, i) => {
          return (
            <div key={i} className="article-card">
              <div>
                <div className="votes">{article.votes}</div>

                <div className="title">
                  <Link to={`/articles/${article._id}`}>{article.title}</Link>
                </div>
                <div className="user">
                  Submitted by {article.created_by.username}
                </div>
                <div className="comments">
                  <Link to={`/articles/${article._id}`}>
                    {article.comments} Comments
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayArticles;
