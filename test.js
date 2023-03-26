import React from 'react'; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ProjectCard({project})
{
  return (
    <Card style={{ width: '18rem' }} className="card portfolio-card">
      <Card.Img variant="top" className="img-container" alt={project.name} src={`${process.env.PUBLIC_URL}/${project.image}`} />
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>
        {project.description}
        </Card.Text>
        <Button variant="primary" href={project.deployedlink} target="_blank">Deployed</Button>
        <Button variant="primary" href={project.githublink} target="_blank">Deployed</Button>
      </Card.Body>
    </Card>
  );
}

