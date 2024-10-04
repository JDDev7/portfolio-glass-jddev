import { useState } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    description: '',
    image: '',
    techImages: [] as string[],
  });

  const openModal = (title: string, description: string, image: string, techImages: string[]) => {
    setModalContent({ title, description, image, techImages });
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return {
    isModalOpen,
    modalContent,
    openModal,
    closeModal,
  };
};
