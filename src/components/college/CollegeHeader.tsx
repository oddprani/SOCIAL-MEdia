
import React from "react";
import { motion } from "framer-motion";
import { Search, Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const CollegeHeader: React.FC = () => {
  return (
    <motion.header 
      className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-4 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="lg:hidden text-white">
              <Menu className="h-6 w-6" />
            </Button>
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/0d2a6230-8227-42ce-977a-c0d372cd42f2.png" 
                alt="College Logo" 
                className="h-12 w-12 mr-4"
              />
              <div>
                <h1 className="text-xl font-bold leading-tight hidden sm:block">Government Engineering College</h1>
                <p className="text-sm text-blue-100 hidden sm:block">Chamarajanagara, Karnataka</p>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <div className="relative">
              <div className="flex items-center bg-blue-800/50 rounded-full px-4 py-2">
                <Search className="h-4 w-4 mr-2 text-blue-100" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-none outline-none text-sm text-white placeholder-blue-200 w-32 lg:w-64"
                />
              </div>
            </div>
            
            <Button variant="ghost" size="icon" className="text-white relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </Button>
            
            <div className="flex items-center">
              <div className="w-9 h-9 rounded-full bg-blue-800 flex items-center justify-center border-2 border-white ml-2">
                <span className="text-sm font-semibold">AB</span>
              </div>
            </div>
          </div>
          
          <div className="flex md:hidden items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-white">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default CollegeHeader;
