import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import colorSharp from "../../assets/img/color-sharp.png";

const Habilidades: React.FC = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div style={{display : 'flex', width: '85%', height: '90%', marginRight: '20px'}}>
    <section className="skill" id="skills" >
      <div className="container" style={{marginLeft: '80px', marginTop: '20px'}}>
        <div className="row" >
          <div className="col-12" >
            <div className="skill-bx">
              <h2>Habilidades</h2>
              <p>Las distintas habilidades se lograron por distintos cursos realizados.
                <br /> Mis preferencias al momento de programar tienden al uso de React con TypeScript.</p>
              <Carousel
                responsive={responsive}
                infinite={false}
                autoPlay={false}
                transitionDuration={500000} // Ajusta la duración de la transición en milisegundos
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item" style={{marginLeft:'30px',marginRight:'30px', width:'125px'}} >
                  <img src={meter1} alt="Image" />
                  <h5>Java</h5>
                </div>
                <div className="item" style={{marginLeft:'30px',marginRight:'30px', width:'125px'}}>
                  <img src={meter3} alt="Image" />
                  <h5>Java<br/>Script</h5>
                </div>
                <div className="item" style={{marginLeft:'30px',marginRight:'30px', width:'125px'}}>
                  <img src={meter2} alt="Image" />
                  <h5>Angular</h5>
                </div>
                <div className="item" style={{marginLeft:'30px',marginRight:'30px', width:'125px'}}>
                  <img src={meter2} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item" style={{marginLeft:'30px',marginRight:'30px', width:'125px'}}>
                  <img src={meter3} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item" style={{marginLeft:'30px',marginRight:'30px', width:'125px'}}>
                  <img src={meter2} alt="Image" />
                  <h5>Type<br/>Script</h5>
                </div>
                
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
    </div>
  );
};

export default Habilidades;
