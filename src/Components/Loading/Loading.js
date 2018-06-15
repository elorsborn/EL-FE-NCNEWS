import React from "react";
import { Row, Col, ProgressBar } from "react-materialize";

const Loading = () => {
  return (
    <Row>
      <Col s={12}>
        <ProgressBar progress={70} color="blue" />
      </Col>
      <Col s={12}>
        <ProgressBar />
      </Col>
    </Row>
  );
};

export default Loading;
