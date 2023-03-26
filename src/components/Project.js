import React from 'react'; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Project.css';

export default function ProjectCard({project})
{
  return (
    <div className="project-cards">  
    <Card style={{ width: '18rem' }} className="card portfolio-card">
      <Card.Img variant="top" className="img-container" alt={project.name} src={`${process.env.PUBLIC_URL}/${project.image}`} />
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>
        {project.description}
        </Card.Text>
        <Button variant="primary" href={project.deployedlink} target="_blank">Deployed</Button>
        <Button variant="primary" href={project.githublink} target="_blank" style={{ marginLeft: '.5rem' }} >Github</Button>
      </Card.Body>
    </Card>
    </div>
  );
}
