import React from "react";
import { Row, Col, Preloader } from "react-materialize";

const Loading = () => {
  return (
    <Row>
      <Col s={4}>
        <Preloader size="big" />
      </Col>
      <Col s={4}>
        <Preloader flashing />
      </Col>
      <Col s={4}>
        <Preloader size="small" />
      </Col>
    </Row>
  );
};

export default Loading;
