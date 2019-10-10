import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const headerStyle = {
    fontSize: 25,
    color: "#fff",
    margin: "20px"
  };
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1400 });
  const strongStyle = {
    border: "1px solid #fff",

    marginLeft: 15
  };

  return (
    <Container fluid={true}>
      <Row style={headerStyle} className="justify-content-between">
        <Col xl="2">Johann Koeh</Col>
        <Col xl={{ span: 2, offset: 3 }}></Col>
        <Col xl="1">Home</Col>
        <Col xl="1">About</Col>
        <Col xl="1">Portfolio</Col>
        <Col xl="1" style={isDesktopOrLaptop ? strongStyle : {}}>
          Contact
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
