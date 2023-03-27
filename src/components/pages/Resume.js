import React, { useState } from 'react';


export default function Resume() {
  const url = 'https://docs.google.com/document/d/1HcxOXHqPnS6Ly8whaHpX_rrkNCJcvBw6Dm7GElcG3v8/edit'

  const [resume] = useState({
    frontEnd: [
      'HTML',
      'CSS',
      'JavaScript',
      'JQuery',
      'React',
      'Bootstrap',
      'Tailwind',
      'Handlebars'
    ],
    backEnd: [
      'RESTful APIs',
      'Third Party APIs',
      'Server Side APIs',
      'Express.js',
      'Node.js',
      'MySQL, Sequelize, NoSql',
      'MongoDB, Mongoose',
      'GraphQL',
      'Insomnia Testing'
    ],
    projectManagement: [
      'Agile Methodology',
      'GitHub Kanban board',
      'MVP Driven',
      'MVC Framework'
    ],
    commSkills: [
      'Verbal',
      'Written',
      'Interpersonal',
      'Conflict resolution',
    ]
  });

  return (
    <div>
      <h2 className='title-lines'>Click the button to download my resume!</h2>
      <div className='resume-download'>
        <div className='resume-info'>
          <a href="https://docs.google.com/document/d/1HcxOXHqPnS6Ly8whaHpX_rrkNCJcvBw6Dm7GElcG3v8/edit" target="_blank">
            <img src={require('../../images/social-media-icons/document.png')} alt="Resume-lin" /></a>
        </div>
      </div>
      <div>
        <h5 className='prof-title'>Front End Proficiencies</h5>
        <ul className='prof-list'>
          {resume.frontEnd.map((proficiency) => (
            <li key={proficiency}>{proficiency}</li>
          ))}
        </ul>
      </div>
      <div>
        <h5 className='prof-title'>Back End Proficiencies</h5>
        <ul className='prof-list'>
          {resume.backEnd.map((proficiency) => (
            <li key={proficiency}>{proficiency}</li>
          ))}
        </ul>
      </div>
      <div>
        <h5 className='prof-title'>Project Management</h5>
        <ul className='prof-list'>
          {resume.projectManagement.map((proficiency) => (
            <li key={proficiency}>{proficiency}</li>
          ))}
        </ul>
      </div>
      <div>
        <h5 className='prof-title'>Communication Skills</h5>
        <ul className='prof-list'>
          {resume.commSkills.map((proficiency) => (
            <li key={proficiency}>{proficiency}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}