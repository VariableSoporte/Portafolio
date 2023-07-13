import React from 'react';
import { Col } from 'react-bootstrap';

type ProjectCardProps = {
  title: string;
  description: string;
  imgUrl: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Project Image" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
