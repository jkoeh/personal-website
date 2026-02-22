import { useState } from 'react';
import styles from './styles/app.module.css';
import Header from './components/Header';
import backgroundWebp from './images/james-pond-1qkyck-UL3g-unsplash.webp';
import backgroundJpg from './images/james-pond-1qkyck-UL3g-unsplash.jpg';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
  const [projectTypeSelected, setProjectType] = useState('');

  return (
    <div className={styles.app}>
      <Container fluid className="d-flex flex-column justify-content-start">
        <Row>
          <Header className={styles.header} />
        </Row>

        <Row></Row>
        <Row>
          <div className={styles.title}>
            {projectTypeSelected} Engineer.
          </div>
        </Row>
        <Row className={styles.subTitles}>
          <Col></Col>
          <Col className={styles.subTitle} xs={1} onClick={() => setProjectType('ML')}>
            ML
          </Col>
          <Col className={styles.subTitle} xs={1} onClick={() => setProjectType('Front End')}>
            Front End
          </Col>
          <Col className={styles.subTitle} xs={1} onClick={() => setProjectType('Back End')}>
            Back End
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <div className={styles.projectList}>
        <div className={styles.ticTacToe}></div>
        <div>
          <h2>Tic-Tac-Toe</h2>
          <p>Try your skill with this simple tic-tac-toe build purely with react</p>
          <p>
            <a
              className="btn btn-secondary"
              href="http://johann-tic-tac-toe.s3-website.us-east-2.amazonaws.com/"
            >
              View Detail
            </a>
          </p>
        </div>
      </div>

      <picture>
        <source srcSet={backgroundWebp} type="image/webp" />
        <img
          className={styles.background}
          src={backgroundJpg}
          alt=""
          width="1920"
          height="1280"
          decoding="async"
          fetchpriority="low"
        />
      </picture>
    </div>
  );
}

export default App;
