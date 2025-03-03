
import React from 'react';
import { Home, Search, Film, Compass, Bell, PlusCircle, User, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      className={cn(
        "sidebar-item flex items-center gap-3 px-4 py-3 w-full text-sm font-medium",
        isActive ? "active" : ""
      )}
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
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
  return (
    <motion.aside 
      className="w-60 h-screen fixed left-0 top-0 pt-20 pb-4 px-2 bg-sidebar border-r flex flex-col overflow-hidden"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center gap-2 px-4 py-3 mb-6">
        <Zap className="w-5 h-5" />
        <h2 className="text-lg font-semibold">ODIE</h2>
      </div>
      
      <div className="flex-1 flex flex-col">
        <motion.div variants={itemVariants}>
          <SidebarItem icon={<Home size={18} />} label="HOME" to="/odie" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <SidebarItem icon={<Search size={18} />} label="SEARCH" to="/odie/search" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <SidebarItem icon={<Film size={18} />} label="REELS" to="/odie/reels" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <SidebarItem icon={<Compass size={18} />} label="DISCOVER" to="/odie/discover" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <SidebarItem icon={<Bell size={18} />} label="NOTIFICATIONS" to="/odie/notifications" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <SidebarItem icon={<PlusCircle size={18} />} label="CREATE" to="/odie/create" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <SidebarItem icon={<User size={18} />} label="PROFILE" to="/odie/profile" />
        </motion.div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
