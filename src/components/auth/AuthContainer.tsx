
import React from 'react';
import { motion } from 'framer-motion';

interface AuthContainerProps {
  title: string;
  children: React.ReactNode;
}

const AuthContainer: React.FC<AuthContainerProps> = ({ title, children }) => {
  return (
    <div className="w-full max-w-md p-8 bg-gradient-to-br from-[#333333] to-[#222222] rounded-2xl shadow-lg text-white border border-gray-700">
      <motion.h1 
        className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AuthContainer;
