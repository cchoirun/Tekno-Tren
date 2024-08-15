import React from "react";
import hero from "../../assets/public/hero.png";
import bg_hero from "../../assets/public/laptop.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../Elements/Button/Index";

const Contact = () => {
    return (
        <section className="px-6 py-18 bg-gradient-to-br from-teal-100 to-emerald-200 md:px-12 lg:px-22">
          <div className="container grid items-center w-full gap-12 mx-auto md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="z-10"
            >
              <h1 className="mb-8 text-4xl font-bold text-black md:text-6xl">
                Tertarik?<br />
                Hubungi  <span className="text-blue-700">Kami</span>
              </h1>
              <Button variant = "bg-green-600 hover:bg-green-700">Hubungi</Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <img src={bg_hero} alt="Contact" className="w-full h-full rounded-lg" /> 
              
            </motion.div>
          </div>
    
        </section>
      );
}

export default Contact;