import React from 'react'
import { SelectedPage } from '../../shared/types'
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id={SelectedPage.Home}>
        <motion.div
        className='home-container'
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            <div className="home-glass-parent">
                
            </div>
        </motion.div>

    </section>
  )
}

export default Home