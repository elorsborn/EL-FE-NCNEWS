import React from "react";
import { Link } from "react-router-dom";
import "./DisplayArticles.css";

const DisplayArticles = ({ articles }) => {
  const sortedArticles = [...articles].sort((a, b) => {
    return b.comments - a.comments; // reddit does it by votes but all votes at this stage are 0
  });
  return (
    <div>
      {sortedArticles.map((article, i) => {
        return (
          <div key={i} className="article-card">
            <div>
              <div className="upvote">upvote</div>
              <div className="votes">{article.votes}</div>
              <div className="downvote">downvote</div>
              <div className="title">
                <Link to={`/articles/${article._id}`}>{article.title}</Link>
              </div>
              <div className="user">
                {/* <Link to={`users/${username}`}> */}
                Submitted by {article.created_by.username}
                {/* </Link> */}
              </div>
              <div className="comments">
                <Link to={`/articles/${article._id}/comments`}>
                  {article.comments} Comments
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayArticles;
