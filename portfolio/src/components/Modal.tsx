import React from 'react';

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  description: string;
  image: string;
  techImages: string[];
};

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, title, description, image, techImages }) => {
  if (!isOpen) return null; // No renderizar el modal si no está abierto

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h1>{title}</h1>
        <img src={image} alt={title} className="modal-image" />
        <p>{description}</p>
        <div className="modal-tech-images">
          {techImages.map((tech, index) => (
            <img key={index} src={tech} alt={`Tech ${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
