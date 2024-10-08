import React, {act, useEffect, useState} from "react";
import { NavLinks } from "../../../constants";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { IoMdMenu } from "react-icons/io";
import MobileNavLinks from "./MobileNavLink";
import NavLink from "./Navlink";
import logo from "../../../assets/public/logo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState(null);
    useEffect(() => {
        const scrollActive = () => {
            setActive(window.scrollY > 20 );
        };
        window.addEventListener("scroll", scrollActive);
        return () => window.removeEventListener("scroll", scrollActive);
    }, [active]);
    return (
        <div className={`${ active ? "shadow-lg bg-white": ""} fixed top-0 right-0 z-20 w-full px-5 md:px-10 lg:px-15`}>
            <div>
                <div className={`${active ? "py-2 transition-all duration-300": "py-4 "} container flex items-center justify-between py-6 mx-auto`}>
                    <div className="flex items-center justify-between w-full gap-4 mx-2">
                        <div>
                            <img src={logo} alt="" className="h-auto w-36 " />  
                        </div>
                        <div className="">
                            <IoMdMenu className="text-4xl cursor-pointer sm:hidden" onClick={() => setToggle(true)}/>
                        </div>
                    </div>
                    <div className="items-center hidden sm:flex">
                        {NavLinks.map(navLink => {
                            return <NavLink key={navLink.id} {...navLink}
                            />;
                        })}
                    </div>
                    <div>
                    
                    {/* <Link to="/login" className="px-4 py-1 font-medium text-md text-orange_main">
                        <motion.span
                            whileHover={{ scale: 1.05, color: "#FFA135" }} // Warna orange gelap saat hover
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                            Masuk
                        </motion.span>
                    </Link>
                    
                    <Link to="/register" >
                        <motion.button
                            className="px-4 py-1 font-medium text-white rounded-full text-md bg-orange_main"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0)", color :"#FFA135" }} // Warna orange gelap saat hover
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                        Daftar
                        </motion.button>
                    </Link> */}
                    
                    </div>
                    {toggle && (
                        <div className="fixed top-0 right-0 z-20 flex flex-col items-center justify-center h-full gap-8 py-12 bg-white shadow-lg w-96 text-blue_main">
                            {NavLinks.map(navLink => {
                            return <MobileNavLinks key={navLink.id} {...navLink} setToggle={setToggle}/>;
                            })}
                            <HiX className="absolute text-3xl cursor-pointer right-12 top-12" onClick={(prev) => setToggle(!prev)}/>
                        </div>
                        )}
                </div>
            </div>
        </div>
    )
};

export default Navbar;