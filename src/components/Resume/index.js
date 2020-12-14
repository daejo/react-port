import React from 'react';
import resumeFile from '../../assets/pdf/resume.pdf'
import devMastery from '../../assets/img/web-mastery.png'

function Resume() {
    return (
        <div className="flex-container" id="resume-cont">
            <h3>
                Web proficiency
            </h3>
                <img src={devMastery} alt="logos for html, css, and javascript" id="webprof"/>
            <div className="flex-row">
                <a href={resumeFile} target="_blank">Download Resume</a>
            </div>
        </div>
    );
}

export default Resume;