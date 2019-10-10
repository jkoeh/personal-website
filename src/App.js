import React from "react";
import "./App.css";
import Header from "./components/Header";
import background from "./images/james-pond-1qkyck-UL3g-unsplash.jpg";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
var appStyle = {
  margin: "0",
  padding: "0",
  height: "100%"
};
var backgroundStyle = {
  left: 0,
  top: -50,
  width: "110%",
  zIndex: -1,
  filter: "grayscale(100%)",
  opacity: 0.3,
  position: "absolute"
};
var titleStyle = {
  marginTop: "20%",
  color: "white",
  textAlign: "center",
  fontSize: "50px",
  textTransform: "uppercase",
  padding: 0,
  borderBottom: "1px solid #fff",
  width: "50%",
  marginLeft: "25%"
};
var headerStyle = {
  position: "absolute"
};

const subTitle = {
  fontSize: 25,
  color: "#fff",
  margin: "20px",
  textAlign: "center"
};
function App() {
  return (
    <div className="App" style={appStyle}>
      <Container fluid={true}>
        <Header style={headerStyle} />
        <div style={titleStyle}>Software Engineer.</div>
        <Row className="justify-content-md-center">
          <Col style={subTitle} xs="1">
            AI
          </Col>
          <Col style={subTitle} xs="1">
            Dev
          </Col>
        </Row>
      </Container>
      <img style={backgroundStyle} src={background} alt="Idea" />
    </div>
  );
}

export default App;
