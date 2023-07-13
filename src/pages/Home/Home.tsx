import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../App.css';
import TrackVisibility from 'react-on-screen';

import headerImg from '../../assets/img/header-img.svg';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ['Web Developer', 'Web Designer'];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
	<div style={{display : 'flex', width: '100%', height: '100%'}}>
		
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={6} className="text-start" style={{ width: '45%', height: '100%' }}>
            <TrackVisibility partialVisibility style={{ marginTop:'200px', marginLeft:'60px'}}>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h1>
                    {`Hola soy`}<br/> {`Luis Zerna`}<br/>{' '}
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Me considero una persona que se motiva por el aprendizaje, el trabajo en equipo y la sana diversion 
					tengo experiencia en el ambito del desarrollo web y mobil. <br/>
					"El éxito no es la clave de la felicidad. La felicidad es la clave del éxito."
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={6} className="text-end">
            <TrackVisibility partialVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                  <img src={headerImg} alt="Header Img" style={{ width: '50%', height: '100%', marginTop: '-520px'  }} />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
	</div>);
};

export default Home;
