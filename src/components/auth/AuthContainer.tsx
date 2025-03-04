
import React from 'react';
import { motion } from 'framer-motion';

interface AuthContainerProps {
  title: string;
  children: React.ReactNode;
}

const AuthContainer: React.FC<AuthContainerProps> = ({ title, children }) => {
  return (
    <div className="w-full max-w-md p-8 bg-[#333333] rounded-2xl shadow-lg text-white">
      <motion.h1 
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h1>
      
      {children}
    </div>
  );
};

export default AuthContainer;
