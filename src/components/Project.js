import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ProjectCard({ project }) {
  return (
    <div className="project-cards">
      <Card style={{ width: '18rem' }} className="portfolio-card">
        <Card.Img variant="top" className="img-container" alt={project.name} src={`${process.env.PUBLIC_URL}/${project.image}`} />
        <Card.Body>
          <Card.Title style={{ textAlign: 'center' }}>
            {project.name}
          </Card.Title>
          <Card.Text style={{ textAlign: 'center' }}>
            {project.description}
          </Card.Text>
          <div className='button'>
            <style type="text/css">
              {`
            .btn-custom {
             background-color: #3C6E71;
            color: #353535;
             }
           `}
            </style>
          </div>
          <Button variant="custom" href={project.deployedlink} target="_blank" style={{ marginLeft: '10%' }}>Deployed</Button>
          <Button variant="custom" href={project.githublink} target="_blank" style={{ marginLeft: '10%' }} >Github</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
