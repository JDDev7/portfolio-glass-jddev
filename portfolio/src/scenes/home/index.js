import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import Modal from "@/components/Modal";
import CvModal from "@/components/CvModal";
import { githubLinks, webLinks, descriptions } from "@/shared/constants";
import { avatarBig, avatarSmall, githubIcon, linkedInIcon, reactIcon, dartIcon, flutterIcon, htmlicon, cssIcon, javaScriptIcon, typeScriptIcon, pythonIcon, reflexIcon, gitIcon, yellowJackWeb, passGen, weatherApp, calculadoraBar, diceApp, nextjsIcon, tailwindIcon, } from "@/shared/assets";
import ProjectCard from "@/components/ProjectCard";
import GithubCard from "@/components/GithubCard";
const Home = ({ setSelectedPage }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCvModalOpen, setIsCvModalOpen] = useState(false);
    const openCvModal = () => {
        setIsCvModalOpen(true);
    };
    const closeCvModal = () => {
        setIsCvModalOpen(false);
    };
    const [modalContent, setModalContent] = useState({
        title: "",
        description: "",
        image: "",
        techImages: [],
    });
    const openModal = (title, description, image, techImages) => {
        setModalContent({ title, description, image, techImages });
        setIsModalOpen(true);
    };
    const closeModal = () => setIsModalOpen(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 480px)");
    return (_jsx("section", { id: SelectedPage.Home, className: "home-section", children: _jsxs(motion.div, { className: "home-container", onViewportEnter: () => setSelectedPage(SelectedPage.Home), children: [_jsxs("div", { className: "home-glass-parent", children: [_jsx("div", { className: "presentation-card glass", children: _jsxs("div", { className: "presentation-card-content", children: [_jsxs("div", { className: "avatar-container", children: [_jsx("img", { src: isAboveSmallScreens ? avatarSmall : avatarBig, alt: "Avatar profile picture" }), _jsxs("div", { className: "social-buttons", children: [_jsx("button", { className: "social-button", onClick: () => window.open(githubLinks.gitHub, "_blank", "noopener noreferrer"), children: _jsx("img", { src: githubIcon, alt: "Github" }) }), _jsx("button", { className: "social-button", onClick: () => window.open(webLinks.linkedIn, "_blank", "noopener noreferrer"), children: _jsx("img", { src: linkedInIcon, alt: "LinkedIn" }) })] })] }), _jsxs("div", { className: "presentation-text-container", children: [_jsxs("div", { className: "presentation-text-header", children: [_jsx("h1", { children: "\u00A1Hola! Soy Jos\u00E9 Diego" }), _jsx("span", { children: "\uD83D\uDC4B" })] }), _jsxs("div", { className: "presentation-text-paragraph", children: [_jsx("p", { className: "paragraph-one", children: "Desarrollador Web y mobile Jr. de C\u00E1ceres, Extremadura enfocado al Frontend, principalmente con React y TypeScript." }), _jsx("p", { className: "paragraph-two", children: "Me encanta empaparme de nuevas tecnolog\u00EDas y estar siempre aprendiendo cosas nuevas dentro y fuera del mundo de la programaci\u00F3n." }), _jsx("p", { className: "paragraph-three", children: "Aqu\u00ED podr\u00E1s ver mis proyectos, descargar mi CV o contactar conmigo. \u00A1Trabajemos juntos!" })] }), _jsxs("div", { className: "cta-btn-container", children: [_jsx("button", { className: "cta-contact-btn", children: _jsx("a", { href: "#contacto", children: "Contactar" }) }), _jsx("button", { className: "cta-contact-btn", onClick: openCvModal, children: "Descargar CV" })] })] })] }) }), _jsxs("div", { className: "techs glass", children: [_jsx("div", { className: "tech-title", children: _jsx("h2", { children: "Tecnolog\u00EDas" }) }), _jsxs("div", { className: "techs-row", children: [_jsx("img", { src: htmlicon, alt: "html5" }), _jsx("img", { src: cssIcon, alt: "css3" }), _jsx("img", { src: javaScriptIcon, alt: "javascript" }), _jsx("img", { src: typeScriptIcon, alt: "typescript" }), _jsx("img", { src: reactIcon, alt: "react" }), _jsx("img", { src: pythonIcon, alt: "python" }), _jsx("img", { src: reflexIcon, alt: "reflex" }), _jsx("img", { src: dartIcon, alt: "dart" }), _jsx("img", { src: flutterIcon, alt: "flutter" }), _jsx("img", { src: gitIcon, alt: "git" })] })] }), _jsxs("div", { className: "projects-container glass", children: [_jsx("div", { className: "projects-title-container" }), _jsx("div", { className: "projects-title", children: _jsx("h1", { children: "Proyectos Destacados" }) }), _jsxs("div", { className: "projects-grid", children: [_jsx(ProjectCard, { image: yellowJackWeb, title: "Web YellowJack", github: githubLinks.githubYellow, directLink: webLinks.yellowJackWeb, techImages: [reactIcon, typeScriptIcon, cssIcon], openModal: () => openModal("Web YellowJack", `${descriptions.yellowJackWebDesc}`, yellowJackWeb, [
                                                reactIcon,
                                                typeScriptIcon,
                                                cssIcon,
                                            ]) }), _jsx(ProjectCard, { image: calculadoraBar, title: "Calculadora Bar", github: githubLinks.githubCalc, directLink: webLinks.yellowJackCalc, techImages: [htmlicon, javaScriptIcon, cssIcon], openModal: () => openModal("Calculadora de Bar", `${descriptions.yellowjackCalcDesc}`, calculadoraBar, [
                                                htmlicon,
                                                javaScriptIcon,
                                                cssIcon,
                                            ]) }), _jsx(ProjectCard, { image: passGen, title: "Generador Contrase\u00F1as", github: githubLinks.githubPassGen, directLink: webLinks.passGenWeb, techImages: [reactIcon, typeScriptIcon, cssIcon], openModal: () => openModal("Generador de Contraseñas", `${descriptions.passGenDesc}`, passGen, [
                                                pythonIcon,
                                                reflexIcon,
                                                cssIcon,
                                            ]) }), _jsx(ProjectCard, { image: weatherApp, title: "NextJS Weather APP", github: githubLinks.githubWeather, directLink: webLinks.weatherWeb, techImages: [nextjsIcon, typeScriptIcon, tailwindIcon], openModal: () => openModal("NextJS Weather APP", `${descriptions.webAppDesc}`, weatherApp, [
                                                nextjsIcon,
                                                typeScriptIcon,
                                                tailwindIcon,
                                            ]) }), _jsx(ProjectCard, { image: diceApp, title: "Dice App", github: githubLinks.githubDiceApp, techImages: [dartIcon, flutterIcon], openModal: () => openModal("Dice App", `${descriptions.diceAppDesc}`, diceApp, [
                                                dartIcon,
                                                flutterIcon,
                                            ]) }), _jsx(GithubCard, { image: githubIcon, title: "Ver m\u00E1s Proyectos en Github" })] })] })] }), _jsx(Modal, { isOpen: isModalOpen, closeModal: closeModal, title: modalContent.title, description: modalContent.description, image: modalContent.image, techImages: modalContent.techImages }), _jsx(CvModal, { isOpen: isCvModalOpen, closeCvModal: closeCvModal })] }) }));
};
export default Home;
