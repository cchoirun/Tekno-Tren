import React from "react";
import { Link } from "react-scroll";

const NavLink = ({href, link}) => {
    return (
        <li className="mr-8 list-none cursor-pointer hover:text-black hover:font-semibold text-slate-800">
            <a href="\"  duration={500} offset={-50} className="transition-all duration-300 ">
                {link}
            </a>
        </li>
    );
};

export default NavLink;