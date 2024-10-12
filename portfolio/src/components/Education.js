import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
const Education = ({ title, dateAndCenter, description }) => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "experience-education-job-container", children: [_jsx("div", { className: "experience-education-job-icon-container", children: _jsx(AcademicCapIcon, { className: "experience-education-job-icon" }) }), _jsxs("div", { className: "experience-education-job-vertical-container", children: [_jsx("div", { className: "experience-education-job-title", children: _jsx("h2", { children: title }) }), _jsx("div", { className: "experience-education-job-date", children: _jsx("h3", { children: dateAndCenter }) }), description && _jsx("div", { className: "experience-education-job-description", children: _jsx("p", { children: description }) })] })] }) }));
};
export default Education;
