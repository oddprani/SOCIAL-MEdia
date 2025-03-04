
import React from 'react';
import { Home, Search, Film, Compass, Bell, PlusCircle, User, Zap, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  isActive: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, to, isActive }) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "flex items-center gap-3 px-6 py-3 w-full text-sm font-medium rounded-full transition-all",
        isActive ? "bg-black text-white" : "bg-[#c4c4c4] text-black hover:bg-opacity-80"
      )}
    >
      <span className="text-lg">{icon}</span>
      <span className="uppercase">{label}</span>
    </Link>
  );
};

const sidebarVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3 }
  }
};

const Sidebar: React.FC = () => {
  const location = useLocation();
  
  const checkActive = (path: string) => {
    if (path === '/odie') {
      return location.pathname === '/odie';
    }
    return location.pathname.includes(path);
  };

  return (
    <motion.aside 
      className="w-60 h-screen fixed left-0 top-0 pt-20 pb-4 px-4 bg-[#e5e5e5] flex flex-col overflow-hidden"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center gap-2 mb-8 pl-4">
        <Zap className="w-6 h-6" />
        <h2 className="text-xl font-bold">ODIE</h2>
      </div>
      
      <div className="flex-1 flex flex-col gap-3">
        <motion.div variants={itemVariants}>
          <SidebarItem 
            icon={<Home size={18} />} 
            label="HOME" 
            to="/odie" 
            isActive={checkActive('/odie') && !location.pathname.includes('/odie/')}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <SidebarItem 
            icon={<Search size={18} />} 
            label="SEARCH" 
            to="/odie/search" 
            isActive={checkActive('/odie/search')} 
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <SidebarItem 
            icon={<Film size={18} />} 
            label="REELS" 
            to="/odie/reels" 
            isActive={checkActive('/odie/reels')} 
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <SidebarItem 
            icon={<Compass size={18} />} 
            label="DISCOVER" 
            to="/odie/discover" 
            isActive={checkActive('/odie/discover')} 
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <SidebarItem 
            icon={<Bell size={18} />} 
            label="NOTIFICATIONS" 
            to="/odie/notifications" 
            isActive={checkActive('/odie/notifications')} 
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <SidebarItem 
            icon={<PlusCircle size={18} />} 
            label="CREATE" 
            to="/odie/create" 
            isActive={checkActive('/odie/create')} 
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <SidebarItem 
            icon={<User size={18} />} 
            label="PROFILE" 
            to="/odie/profile" 
            isActive={checkActive('/odie/profile')} 
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <SidebarItem 
            icon={<Settings size={18} />} 
            label="SETTINGS" 
            to="/odie/settings" 
            isActive={checkActive('/odie/settings')} 
          />
        </motion.div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
