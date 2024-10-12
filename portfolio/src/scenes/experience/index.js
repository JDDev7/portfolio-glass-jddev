import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Education from "@/components/Education";
import Job from "@/components/Job";
import { jobDescriptions } from "@/shared/constants";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
const Experience = ({ setSelectedPage }) => {
    return (_jsx("section", { id: SelectedPage.Experience, className: "experience-section", children: _jsx(motion.div, { className: "experience-container", onViewportEnter: () => setSelectedPage(SelectedPage.Experience), children: _jsxs("div", { className: "experience-glass-parent", children: [_jsx("div", { className: "experience glass", children: _jsxs("div", { className: "experience-content", children: [_jsx("div", { className: "experience-title", children: _jsx("h1", { children: "Experiencia" }) }), _jsx(Job, { title: "PCBox", date: "2018", description: jobDescriptions.pcBox }), _jsx(Job, { title: "PANORAMAWEB", date: "2020", description: jobDescriptions.panoramaweb }), _jsx(Job, { title: "Freelance", date: "2024", description: jobDescriptions.freelance })] }) }), _jsx("div", { className: "education glass", children: _jsxs("div", { className: "education-content", children: [_jsx("div", { className: "education-title-container", children: _jsx("div", { className: "education-title", children: _jsx("h1", { children: "Educaci\u00F3n" }) }) }), _jsx(Education, { title: "Educaci\u00F3n Secundaria Obligatoria", dateAndCenter: "2017 - CEPA Maestro Mart\u00EDn Cisneros" }), _jsx(Education, { title: "Certificado de Profesionalidad Nivel 1", dateAndCenter: "2018 - Educatec", description: "Operaciones Auxiliares y Mantenimiento de Sistemas Microinform\u00E1ticos" }), _jsx(Education, { title: "Certificado de Profesionalidad Nivel 2", dateAndCenter: "2019 - Centro de formacion SEXPE C\u00E1ceres", description: "Confecci\u00F3n y publicaci\u00F3n de p\u00E1ginas web" })] }) })] }) }) }));
};
export default Experience;
