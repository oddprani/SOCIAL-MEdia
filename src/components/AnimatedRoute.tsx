
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedRouteProps {
  children: React.ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: 10,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4,
};

const AnimatedRoute: React.FC<AnimatedRouteProps> = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full min-h-screen pt-20"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedRoute;
