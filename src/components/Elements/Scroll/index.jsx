import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Title = ({ children,style, initialX = 0, scrollRange = [0, 0.9], moveDistance = -600, className = '' }) => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, scrollRange, [initialX, initialX + moveDistance]);

  return (
    <motion.h1
      style={{ x }}
      className={`z-10 mt-auto font-bold text-white transition-all ease-in-out text-3xl md:text-5xl lg:text-9xl whitespace-nowrap duration-3000 ${className}`}
      initial={{ x: initialX }}
      
      
    >
      {children}
    </motion.h1>
  );
};

export default Title;
