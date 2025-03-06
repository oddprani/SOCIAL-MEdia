
import React from 'react';
import { Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const AuthHeader: React.FC = () => {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center p-4 bg-black/30 backdrop-blur-md border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <div className="flex items-center gap-8">
        <a href="/odie" className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full transition-transform hover:scale-105">
          <Zap size={16} />
          <span className="font-medium">ODIE</span>
        </a>
        <a href="/vidora" className="flex items-center justify-center gap-2 px-4 py-2 hover:text-pink-500 transition-colors">
          <span className="font-medium">VIDORA</span>
        </a>
        <a href="/sensei" className="flex items-center justify-center gap-2 px-4 py-2 hover:text-pink-500 transition-colors">
          <span className="font-medium">SENSEI</span>
        </a>
        <a href="/carnival" className="flex items-center justify-center gap-2 px-4 py-2 hover:text-pink-500 transition-colors">
          <span className="font-medium">CARNIVAL</span>
        </a>
      </div>
    </motion.nav>
  );
};

export default AuthHeader;
