import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
const Job = ({ title, date, description }) => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "experience-education-job-container", children: [_jsx("div", { className: "experience-education-job-icon-container", children: _jsx(BriefcaseIcon, { className: "experience-education-job-icon" }) }), _jsxs("div", { className: "experience-education-job-vertical-container", children: [_jsx("div", { className: "experience-education-job-title", children: _jsx("h2", { children: title }) }), _jsx("div", { className: "experience-education-job-date", children: _jsx("h3", { children: date }) }), _jsx("div", { className: "experience-education-job-description", children: _jsx("p", { children: description }) })] })] }) }));
};
export default Job;
