import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar/Navbar";
import { SelectedPage } from "./shared/types";
import Home from "./scenes/home/index";
import Experience from "./scenes/experience";
import BackToTopButton from "./components/goBackToTop";
import Contact from "./scenes/contact";
import Footer from "./scenes/footer";
function App() {
    const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
    const [isTopOfPage, setIsTopOfPage] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Home);
            }
            if (window.scrollY !== 0) {
                setIsTopOfPage(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, { isTopOfPage: isTopOfPage, selectedPage: selectedPage, setSelectedPage: setSelectedPage, className: isTopOfPage ? "" : "transparent-navbar" }), _jsx(Home, { setSelectedPage: setSelectedPage }), _jsx(Experience, { setSelectedPage: setSelectedPage }), _jsx(Contact, { setSelectedPage: setSelectedPage }), _jsx(Footer, {}), _jsx(BackToTopButton, {})] }));
}
export default App;
