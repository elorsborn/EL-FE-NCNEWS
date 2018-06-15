import React from "react";

const Error404 = props => {
  console.log(props);
  if (props.match.path === "/articles/404")
    return <div>'No such article exists!'</div>;
  if (props.match.path === "/topics/:topic/404")
    return <div>No such topic exists!</div>;
};

Error404.prototypes = {};

export default Error404;
