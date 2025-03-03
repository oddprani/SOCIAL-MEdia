
import React from 'react';
import NavItem from './NavItem';
import { Zap, Monitor, MessageSquare, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center p-4 bg-background/80 backdrop-blur-md border-b"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="flex items-center gap-8">
        <NavItem to="/odie" icon={<Zap size={18} />} label="ODIE" />
        <NavItem to="/vidora" icon={<Monitor size={18} />} label="VIDORA" />
        <NavItem to="/sensei" icon={<MessageSquare size={18} />} label="SENSEI" />
        <NavItem to="/carnival" icon={<ShoppingBag size={18} />} label="CARNIVAL" />
      </div>
    </motion.nav>
  );
};

export default Navigation;
