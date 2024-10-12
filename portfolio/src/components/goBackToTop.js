import { jsx as _jsx } from "react/jsx-runtime";
import { ArrowUpIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        setIsVisible(scrollTop > 100);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (_jsx("div", { className: `back-to-top ${isVisible ? 'visible' : ''}`, onClick: scrollToTop, children: _jsx(ArrowUpIcon, { className: 'back-to-top-icon' }) }));
};
export default BackToTopButton;
