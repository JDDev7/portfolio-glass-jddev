import React, { useState } from 'react'
import Link from '../../components/Link'
import { SelectedPage } from '../../shared/types'
import useMediaQuery from '../../hooks/useMediaQuery'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
  };
  
  const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 480px)");
  
  return (
    <nav>
      {/* navbar menu */}
      <div className="nav-content">
        {isAboveSmallScreens ? (
          <div className='links-container'>
            <Link page='Inicio' selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Link>
            <Link page='Proyectos' selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Link>
            <Link page='Contacto' selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Link>
          </div>  
        ) : (
          <button
            className="navbar-toggle"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <Bars3Icon className='mobile-menu-icon'></Bars3Icon>
          </button>
        )}

        </div>
        {/* mobile menu */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className='mobile-menu-container'>
            {/* Close Icon */}
            <div className='close-icon-container'>
            <button
              className="close-menu-btn"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <XMarkIcon className="close-menu-icon" />
            </button>
            </div>
            <div className="mobile-menu-items">
              <Link page='Inicio' selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Link>
              <Link page='Proyectos' selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Link>
              <Link page='Contacto' selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Link>
            </div>

          </div>
        )}
    </nav>
  )
}

export default Navbar