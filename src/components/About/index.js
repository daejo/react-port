import React from 'react';
import splashLogo from '../../assets/img/splash-logo.png';
import behanceLogo from '../../assets/img/behance-icon.png';
import linkedinLogo from '../../assets/img/linkedin-icon.png';
import githubLogo from '../../assets/img/github-icon.png';

function About() {

  return (
    <section id="splash" >
      <div id="splash-left">
        <p>
          <img src={splashLogo} alt="face logo"/>
        </p>
      </div>
      <div id="splash-right">
        <p class="splashhead">Hi I am</p>
        <p class="splashhead">//David Joaquin//</p>
        <div class="splash-images">
          <a href="https://www.behance.net/davidjoaquin" target="_blank"><img src={behanceLogo} alt="behance logo"/></a>
          <a href="https://www.linkedin.com/in/david-joaquin" target="_blank"><img src={linkedinLogo} alt="linkedin logo"/></a>
          <a href="https://github.com/daejo" target="_blank"><img src={githubLogo} alt="github logo"/></a>
        </div>
      </div>
    </section>
  )
}

export default About