import React, { useState } from 'react'
import Link from '@/components/Link'
import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
    className?: string;
  };
  
  const Navbar = ({ selectedPage, setSelectedPage, className }: Props) => {
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 1440px)");
  return (
    <nav className={className}>
      {/* navbar menu */}
      <div className="nav-content">
        {isAboveSmallScreens ? ("" 
        ) : (
          <button
          className="navbar-toggle"
          style={{ display: isMenuToggled ? 'none' : 'block' }}
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
              <Link page='Experiencia' selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Link>
              <Link page='Contacto' selectedPage={selectedPage} setSelectedPage={setSelectedPage}></Link>
            </div>

          </div>
        )}
    </nav>
  )
}

export default Navbar