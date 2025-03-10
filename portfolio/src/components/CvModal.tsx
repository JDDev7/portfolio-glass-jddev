import React from 'react';
import { spCvUrl, enCvUrl } from '@/shared/constants';
type ModalProps = {
  isOpen: boolean;
  closeCvModal: () => void; 
};

const CvModal: React.FC<ModalProps> = ({ isOpen, closeCvModal}) => {
  if (!isOpen) return null; // No renderizar el modal si no está abierto


    const handleDownload = (cvLanguage: string) => {
      const url = cvLanguage === 'Español' ? spCvUrl : enCvUrl;
      const fileName = cvLanguage === 'Español' ? 'CV_Jose_Diego_Moreno_2025[Spanish].pdf' : 'CV_Jose_Diego_Moreno_2025[English].pdf';
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      link.click();
    };
  

  return (
<div className="modal">
  <div className="cv-modal-content">
    <span className="close" onClick={closeCvModal}>&times;</span>
    <div className="content">
      <h1>Descargar Curriculum</h1>
      <p>Elige el idioma en el que quieres descargar mi CV</p>
      <div className="cv-modal-buttons">
        <button onClick={() => handleDownload('Español')}>Español</button>
        <button onClick={() => handleDownload('English')}>English</button>
      </div>
    </div>
  </div>
</div>
  );
};

export default CvModal;
