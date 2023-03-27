import React from 'react';


export default function AboutMe() {
  return (
    <div className="about-me">
      <div className='my-name'>
        <h1>About Me</h1>
      </div>
      <div className="image">
        <img className="headshot" src={require('../../images/headshot/rkml.png')} alt="Rebecca-with-sheep" />
      </div>

      <p className="bio-line">Hi, I'm Rebecca, and I'm a web developer based in Toronto, Canada!
      </p>

      <p className="about-text">Currently I an enrolled in the University of Toronto's Full Stack Development Bootcamp, learning & developing my knowledge of JavaScript, HTML, CSS, MERN and more!  I decided to make a change to field I have a lot of passion for after creating several websites for other people!
      </p>

      <p className="about-text">I'm always seeking to further my knowledge, experience and to take on new challenges as I continue to grow as a developer!  As a former Credit Analyst, my logical and solutions-driven work ethic are skills I want to bring to my new field.
      </p>

      <p className="about-text">When I'm not coding, you can find me training my working Border Collies in sheepherding, competing in sheepdog trials and generally getting mucky on a farm! The ability to be thinking several steps ahead, and adapting on the fly help me bring a unique perspective to my work as a web developer.
      </p>

    </div>
    )
}


