import React from 'react';


function Resume() {

  return (
    <div className='resume'>
      <h2 className="title-lines">Resume</h2>
      <a href={`${process.env.PUBLIC_URL}/Rebecca-Lawrence-resume.pdf`} download="Rebecca-Lawrence-resume">My Resume</a>
    </div>

  )

  //links to downloadable resume & list of developer's prficiences of which i don't think i have any at the moment. GOGOGO imposter syndrome 
}

export default Resume;