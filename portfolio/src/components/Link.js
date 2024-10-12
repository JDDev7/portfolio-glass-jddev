import { jsx as _jsx } from "react/jsx-runtime";
import AnchorLink from "react-anchor-link-smooth-scroll";
function Link({ page, selectedPage, setSelectedPage, }) {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "");
    return (_jsx(AnchorLink, { className: `${selectedPage === lowerCasePage ? "link selected" : "link"}`, href: `#${lowerCasePage}`, onClick: () => setSelectedPage(lowerCasePage), children: page }));
}
export default Link;
