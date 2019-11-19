import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <Container fluid={true}>
      <Row className={`${styles.header} justify-content-between`}>
        <Col className={styles.headerItem} xl="2">
          Johann Koeh
        </Col>
        <Col className={styles.headerItem} xl={{ span: 2, offset: 3 }}></Col>
        <Col className={styles.headerItem} xl="1">
          Home
        </Col>
        <Col className={styles.headerItem} xl="1">
          About
        </Col>
        <Col className={styles.headerItem} xl="1">
          Portfolio
        </Col>
        <Col className={`${styles.headerItem} ${styles.strong}`} xl="1">
          Contact
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
