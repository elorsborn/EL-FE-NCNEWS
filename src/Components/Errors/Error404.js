import React from "react";
import "./Error404.css";

const Error404 = props => {
  if (props.match.path === "/")
    return (
      <div className="Error-container">
        <div className="Error-title">404</div>
        <p className="Error-message">
          Sorry, we can't find the page you're looking for.
        </p>
      </div>
    );
};

export default Error404;
