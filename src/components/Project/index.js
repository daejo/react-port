import React, { useState } from 'react';
// import Modal from '../Modal';

const Project = ({ project, i }) => {

    
    // const [currentPhoto, setCurrentPhoto] = useState()
    // const toggleModal = (image, i) => {
    //     setCurrentPhoto({...image, index: i});
    //     setIsModalOpen(!isModalOpen);
    // }
    // const [isModalOpen, setIsModalOpen] = useState(false); 
    // const currentPhotos = project.filter((project) => photo.name === name);

  return (
    <div>
    {/* {isModalOpen && (
        <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
    )} */}
        <div className="flex-container">
            <div className="flex-row">
                <h3>{project.name}</h3>
            </div>
            <div className="flex-row">
                <p>{project.description}</p>
            </div>
            <div className="flex-row">
                <img src={require(`../../assets/img/projects/${i+1}.png`).default} alt="project completed by myself"></img>
            </div>
            <div className="flex-row">
                <p><a href={project.link} target="blank">
                    Visit Deployed Application
                </a></p>
                <p><a href={project.github} target="blank">
                    Visit Github Repository
                </a></p>
            
            </div>
        </div>
    </div>    
    );
};

export default Project;
