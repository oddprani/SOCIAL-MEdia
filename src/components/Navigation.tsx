
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Monitor, MessageSquare, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname.includes(path);
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center p-4 bg-background/80 backdrop-blur-md"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="flex items-center gap-8">
        <Link 
          to="/odie" 
          className={`flex items-center justify-center gap-2 px-6 py-2 rounded-full transition-all ${isActive('/odie') ? 'bg-black text-white' : 'text-black hover:bg-gray-100'}`}
        >
          <Zap size={18} />
          <span className="font-medium">ODIE</span>
        </Link>
        
        <Link 
          to="/vidora" 
          className={`flex items-center justify-center gap-2 px-6 py-2 rounded-full transition-all ${isActive('/vidora') ? 'bg-black text-white' : 'text-black hover:bg-gray-100'}`}
        >
          <Monitor size={18} />
          <span className="font-medium">VIDORA</span>
        </Link>
        
        <Link 
          to="/sensei" 
          className={`flex items-center justify-center gap-2 px-6 py-2 rounded-full transition-all ${isActive('/sensei') ? 'bg-black text-white' : 'text-black hover:bg-gray-100'}`}
        >
          <MessageSquare size={18} />
          <span className="font-medium">SENSEI</span>
        </Link>
        
        <Link 
          to="/carnival" 
          className={`flex items-center justify-center gap-2 px-6 py-2 rounded-full transition-all ${isActive('/carnival') ? 'bg-black text-white' : 'text-black hover:bg-gray-100'}`}
        >
          <ShoppingBag size={18} />
          <span className="font-medium">CARNIVAL</span>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navigation;
