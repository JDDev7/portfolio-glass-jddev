import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Link from '@/components/Link';
import useMediaQuery from '@/hooks/useMediaQuery';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
const Navbar = ({ selectedPage, setSelectedPage, className }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 1440px)");
    return (_jsxs("nav", { className: className, children: [_jsx("div", { className: "nav-content", children: isAboveSmallScreens ? ("") : (_jsx("button", { className: "navbar-toggle", style: { display: isMenuToggled ? 'none' : 'block' }, onClick: () => setIsMenuToggled(!isMenuToggled), children: _jsx(Bars3Icon, { className: 'mobile-menu-icon' }) })) }), !isAboveSmallScreens && isMenuToggled && (_jsxs("div", { className: 'mobile-menu-container', children: [_jsx("div", { className: 'close-icon-container', children: _jsx("button", { className: "close-menu-btn", onClick: () => setIsMenuToggled(!isMenuToggled), children: _jsx(XMarkIcon, { className: "close-menu-icon" }) }) }), _jsxs("div", { className: "mobile-menu-items", children: [_jsx(Link, { page: 'Inicio', selectedPage: selectedPage, setSelectedPage: setSelectedPage }), _jsx(Link, { page: 'Experiencia', selectedPage: selectedPage, setSelectedPage: setSelectedPage }), _jsx(Link, { page: 'Contacto', selectedPage: selectedPage, setSelectedPage: setSelectedPage })] })] }))] }));
};
export default Navbar;
