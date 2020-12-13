import React, { useState } from 'react';
import Modal from '../Modal';

const Project = ({ name }) => {

  const [photos] = useState([
    {
      name: 'Grocery aisle',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Grocery booth',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Building exterior',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    }
  ]);
  const [currentPhoto, setCurrentPhoto] = useState()
  const toggleModal = (image, i) => {
    setCurrentPhoto({...image, index: i});
    setIsModalOpen(!isModalOpen);
  }
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const currentPhotos = photos.filter((photo) => photo.name === name);

  return (
    <div>
        {isModalOpen && (
            <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
        )}
        <div className="flex-row">
            {currentPhotos.map((image, i) => (
            <img
                src={require(`../../assets/${name}/${i}.jpg`).default}
                alt={image.name}
                className="img-thumbnail mx-1"
                onClick={() => toggleModal(image, i)}
                key={image.name}
            />
        ))}

        </div>
    </div>
  );
};

export default Project;
