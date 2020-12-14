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
          <img src={behanceLogo} alt="behance logo"/>
          <img src={linkedinLogo} alt="linkedin logo"/>
          <img src={githubLogo} alt="github logo"/>
        </div>
      </div>
    </section>
  )
}

export default About