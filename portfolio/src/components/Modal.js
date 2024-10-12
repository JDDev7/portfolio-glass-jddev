import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Modal = ({ isOpen, closeModal, title, description, image, techImages }) => {
    if (!isOpen)
        return null; // No renderizar el modal si no está abierto
    return (_jsx("div", { className: "modal", children: _jsxs("div", { className: "modal-content", children: [_jsx("span", { className: "close", onClick: closeModal, children: "\u00D7" }), _jsxs("div", { className: "content", children: [_jsx("h1", { children: title }), _jsx("img", { src: image, alt: title, className: "modal-image" }), _jsx("p", { children: description }), _jsx("div", { className: "modal-tech-images", children: techImages.map((tech, index) => (_jsx("img", { src: tech, alt: `Tech ${index}` }, index))) })] })] }) }));
};
export default Modal;
