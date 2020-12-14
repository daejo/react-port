import React from 'react';

const Project = ({ project, i }) => {


  return (
        <div className="project-container">
            <div className="project-row">
                <h3>{project.name}</h3>
            </div>
            <div className="project-row">
                <p>{project.description}</p>
            </div>
            <div>
                <img src={require(`../../assets/img/projects/${i+1}.png`).default} alt="project completed by myself" class="project-img" />
            </div>
            <div>
                <p id="weblink-p">
                <a href={project.link} target="blank" class="project-links">
                    Deployed App </a>
                  || <a href={project.github} target="blank" class="project-links">
                        Github Repo
                    </a>
                </p>
            </div>
        </div> 
    );
};

export default Project;
