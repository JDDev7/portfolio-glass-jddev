import { mail, webLinks } from '@/shared/constants';
import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };

const Contact = ({ setSelectedPage }: Props) => {
  return (
    <section id={SelectedPage.Contact} className="contact-section">
      <motion.div className='contact-container' onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}>
        <div className="contact-glass-parent">
            <div className="contact glass">
                <div className="contact-title">
                    <h1>Contacto</h1>
                </div>
                <div className="contact-content">
                    <h2>¿Trabajamos juntos?</h2>
                    <p>Si estás interesado en trabajar conmigo para algun proyecto o tienes alguna consulta, no dudes en ponerte en contacto conmigo y responderé lo más rápido posible.</p>
                </div>
                <div className="contact-buttons">
                    <button className='contact-button'><a href={mail} target="_blank" rel="noopener noreferrer">Contactar por Email</a></button>
                    <button className='contact-button'><a href={webLinks.linkedIn} target="_blank" rel="noopener noreferrer">Contactar por LinkedIn</a></button>
                </div>
            </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact