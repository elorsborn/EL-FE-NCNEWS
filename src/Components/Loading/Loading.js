import React from "react";
import { Row, Col, ProgressBar } from "react-materialize";

const Loading = () => {
  return (
    <Row>
      <Col s={12}>
        <ProgressBar className="green" progress={70} />
      </Col>
      <Col s={12}>
        <ProgressBar className="green" />
      </Col>
    </Row>
  );
};

export default Loading;
