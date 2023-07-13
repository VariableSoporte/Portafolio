import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';
import projImg1 from '../../assets/img/asistenteFarmacia.png';
import projImg2 from '../../assets/img/intiKilla.png';
import projImg3 from '../../assets/img/portafolio.png';
import colorSharp2 from '../../assets/img/color-sharp2.png';
import '../../App.css';
import TrackVisibility from 'react-on-screen';

type Project = {
  title: string;
  description: string;
  imgUrl: string;
};
export type ProyectosProps = {
}

const Proyectos: React.FC<ProyectosProps>  = ({}) => {
	const projects: Project[] = [
		{
		  title: 'Asistente de Farmacia',
		  description: 'Projecto que tiene como finalidad dar soporte a las farmacias al poder recomendar medicamentos ' + 'que se puede recetar en distintos casos de ciertas molestias por parte de los clientes. (Python, SQLite)',
		  imgUrl: projImg1,
		},
		{
		  title: 'IntiKilla (Pagina Web)',
		  description: 'Es una pagina web para poder publicitar los productos artesanales del cliente, realizado con (Angular, JavaScript, Boostrap)',
		  imgUrl: projImg2,
		},
		{
		  title: 'Portafolio (Pagina Web)',
		  description: 'Una pagina web que permite mostrar las habilidades adquiridas en: React, Typescript, Boostrap y Material',
		  imgUrl: projImg3,
		}
	  ];
	
	  return (
		<section className="project" id="project">
		  <Container>
			<Row>
			  <Col size={12}>
				<TrackVisibility>
				  {({ isVisible }) => (
					<div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
					  <h2>Proyectos</h2>
					  <p>
						Proyectos que muestran disftintas habilidades adquiridas a lo largo del tiempo, entre ellas se encuentra: <br/>
						React, Angular, Boostrap, Material, JavaScript, TypeScript y Python.
					  </p>
					  <Tab.Container id="projects-tabs" defaultActiveKey="first">
						
						<Tab.Content id="slideInUp" className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
						  <Tab.Pane eventKey="first">
							<Row style={{marginLeft:'25%',marginRight:'30px', width:'50%'}}>
							  {projects.map((project, index) => (
								<ProjectCard key={index} {...project} />
							  ))}
							</Row>
						  </Tab.Pane>
						  <Tab.Pane eventKey="section">
							<p>
							Mi objetivo es seguir creciendo como profesional y ofrecer soluciones creativas y de calidad a través de mi experiencia en diseño web y desarrollo. Si estás buscando un colaborador comprometido, innovador y apasionado por la programación, ¡estoy aquí para ayudarte!
							</p>
						  </Tab.Pane>
						  
						</Tab.Content>
					  </Tab.Container>
					</div>
				  )}
				</TrackVisibility>
			  </Col>
			</Row>
		  </Container>
		  <img className="background-image-right" src={colorSharp2} alt="Background Image" />
		</section>
	  );
};

export default Proyectos;
