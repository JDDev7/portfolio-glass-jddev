import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { spCvUrl, enCvUrl } from '@/shared/constants';
const CvModal = ({ isOpen, closeCvModal }) => {
    if (!isOpen)
        return null; // No renderizar el modal si no está abierto
    const handleDownload = (cvLanguage) => {
        const url = cvLanguage === 'Español' ? spCvUrl : enCvUrl;
        const fileName = cvLanguage === 'Español' ? 'CV_Jose_Diego_Moreno_2024[Spanish].pdf' : 'CV_Jose_Diego_Moreno_2024[English].pdf';
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        link.click();
    };
    return (_jsx("div", { className: "modal", children: _jsxs("div", { className: "cv-modal-content", children: [_jsx("span", { className: "close", onClick: closeCvModal, children: "\u00D7" }), _jsxs("div", { className: "content", children: [_jsx("h1", { children: "Descargar Curriculum" }), _jsx("p", { children: "Elige el idioma en el que quieres descargar mi CV" }), _jsxs("div", { className: "cv-modal-buttons", children: [_jsx("button", { onClick: () => handleDownload('Español'), children: "Espa\u00F1ol" }), _jsx("button", { onClick: () => handleDownload('English'), children: "English" })] })] })] }) }));
};
export default CvModal;
