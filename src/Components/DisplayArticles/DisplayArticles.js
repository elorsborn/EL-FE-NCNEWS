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
                {/* why article not articles */}
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
};

export default DisplayArticles;
