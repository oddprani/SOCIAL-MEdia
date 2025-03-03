
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label, className }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={cn(
        "platform-nav-item flex items-center justify-center gap-2 px-4 py-2 text-sm transition-all", 
        isActive ? "active" : "",
        className
      )}
    >
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </Link>
  );
};

export default NavItem;
