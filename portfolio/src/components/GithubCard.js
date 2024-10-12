import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { githubLinks } from '@/shared/constants';
const GithubCard = (props) => {
    return (_jsxs("div", { className: 'project-card', children: [_jsx("div", { className: 'project-card-image', children: _jsx("a", { href: githubLinks.gitHub, target: '_blank', rel: 'noopener noreferrer', children: _jsx("img", { src: props.image, alt: props.title }) }) }), _jsx("div", { className: "project-card-text-container", children: _jsx("h3", { children: props.title }) })] }));
};
export default GithubCard;
