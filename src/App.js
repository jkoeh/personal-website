import React from "react";
import styles from "./styles/app.module.css";
import Header from "./components/Header";
import background from "./images/james-pond-1qkyck-UL3g-unsplash.jpg";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <div className={styles.app}>
      <Container fluid={true}>
        <Header className={styles.header} />
        <div className={styles.title}>Software Engineer.</div>
        <Row className="justify-content-md-center">
          <Col className={styles.subTitle} xs="2">
            Python
          </Col>

          <Col className={styles.subTitle} xs="2">
            JS
          </Col>

          <Col className={styles.subTitle} xs="2">
            C#
          </Col>
        </Row>
      </Container>
      <img className={styles.background} src={background} alt="Idea" />
    </div>
  );
}

export default App;
