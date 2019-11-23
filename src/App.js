import React from "react";
import styles from "./styles/app.module.css";
import Header from "./components/Header";
import background from "./images/james-pond-1qkyck-UL3g-unsplash.jpg";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useMediaQuery } from "react-responsive";

const App = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 900 });
  const display = isDesktopOrLaptop
    ? "justify-content-between"
    : "justify-content-start";
  console.log(display);
  return (
    <div className={styles.app}>
      <Container
        fluid={true}
        className={`d-flex flex-column ${display}`}
        style={{ height: "50%" }}
      >
        <Row>
          <Header className={styles.header} />
        </Row>

        <Row></Row>
        <Row>
          <div className={styles.title}>Software Engineer.</div>
        </Row>
        <Row className={styles.subTitles}>
          <Col></Col>
          <Col className={styles.subTitle} xs={1}>
            JS
          </Col>
          <Col className={styles.subTitle} xs={1}>
            Python
          </Col>
          <Col className={styles.subTitle} xs={1}>
            C#
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <img className={styles.background} src={background} alt="Idea" />
    </div>
  );
};

export default App;
