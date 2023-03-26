import React from 'react';
import Projects from '../porfolioproject.json';
import ProjectCard from '../Project.js'

export default function Portfolio(){
    console.log(Projects);
    return (
        <div>
            <p>Some examples of my portfolio work:</p>
       <div className="card-wrap">

       {
        Projects.map(project => {
            return (<ProjectCard project={project}/>)
        })
       } 
       </div>
       </div>
    )
}