import React from "react";
import { Link } from "react-scroll";
const MobileNavLinks = ({setToggle, link, href}) => {
    return (
        <li className="mr-8 list-none cursor-pointer hover:font-bold">
            <Link to={href} duration={500} offset={-50} className="transition-all duration-300 " onClick={(prev) => setToggle(!prev)}>
                {link}
            </Link>
        </li>
    );
};

export default MobileNavLinks;