import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { mail, webLinks } from '@/shared/constants';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
const Contact = ({ setSelectedPage }) => {
    return (_jsx("section", { id: SelectedPage.Contact, className: "contact-section", children: _jsx(motion.div, { className: 'contact-container', onViewportEnter: () => setSelectedPage(SelectedPage.Contact), children: _jsx("div", { className: "contact-glass-parent", children: _jsxs("div", { className: "contact glass", children: [_jsx("div", { className: "contact-title", children: _jsx("h1", { children: "Contacto" }) }), _jsxs("div", { className: "contact-content", children: [_jsx("h2", { children: "\u00BFTrabajamos juntos?" }), _jsx("p", { children: "Si est\u00E1s interesado en trabajar conmigo para algun proyecto o tienes alguna consulta, no dudes en ponerte en contacto conmigo y responder\u00E9 lo m\u00E1s r\u00E1pido posible." })] }), _jsxs("div", { className: "contact-buttons", children: [_jsx("button", { className: 'contact-button', children: _jsx("a", { href: mail, target: "_blank", rel: "noopener noreferrer", children: "Contactar por Email" }) }), _jsx("button", { className: 'contact-button', children: _jsx("a", { href: webLinks.linkedIn, target: "_blank", rel: "noopener noreferrer", children: "Contactar por LinkedIn" }) })] })] }) }) }) }));
};
export default Contact;
