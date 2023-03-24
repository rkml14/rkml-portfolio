import React from 'react'; 


export default function ProjectCard({
    project 
}){
    return(
      
        <div className="card portfolio-card" >
            <div className="img-container"> 
                <img width="300px" height="300px" alt={project.name} src={`${process.env.PUBLIC_URL}/${project.image}`}/>
            </div>
            <div className="content">
                <ul> 
                    <li>
                        <strong>Name:</strong> {project.name}
                    </li>
                    <li>
                        <a href={project.deployedlink} target="_blank" ><strong>Deployed </strong></a>
                        <a href={project.githublink} target="_blank" ><strong>GitHub </strong></a>
                    </li>
                    <li>
                        <strong>Description</strong> {project.description}
                    </li>
                </ul>
            </div>
        </div>
      
    )
}