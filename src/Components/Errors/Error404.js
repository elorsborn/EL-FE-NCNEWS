import React from "react";
import "./Error404.css";

const Error404 = props => {
  console.log(props);
  if (props.match.path === "/")
    return (
      <div className="Error-container">
        <div className="Error-title">404</div>
        <p className="Error-message">
          Sorry, we can't find the page you're looking for.
        </p>
      </div>
    );
  if (props.match.path === "/articles/404")
    return (
      <div className="Error-container">
        <div className="Error-title">404</div>
        <p className="Error-message">Sorry, that article doesn't exist.</p>
      </div>
    );
  if (props.match.path === "/topics/:topic/404")
    return (
      <div className="Error-container">
        <div className="Error-title">404</div>
        <p className="Error-message">Sorry, that topic doesn't exist.</p>
      </div>
    );
};

Error404.prototypes = {};

export default Error404;
