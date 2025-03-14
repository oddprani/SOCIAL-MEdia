
import React from "react";
import { motion } from "framer-motion";

const CollegeHeader: React.FC = () => {
  return (
    <motion.header 
      className="bg-teal-600 text-white p-4 shadow-md flex items-center justify-between"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="flex items-center">
        <img 
          src="/lovable-uploads/0d2a6230-8227-42ce-977a-c0d372cd42f2.png" 
          alt="College Logo" 
          className="h-12 w-12 mr-4"
        />
        <h1 className="text-2xl font-bold">Government Engineering College Chamarajanagara</h1>
      </div>
      <div>
        <img 
          src="/lovable-uploads/0d2a6230-8227-42ce-977a-c0d372cd42f2.png" 
          alt="College Emblem" 
          className="h-12 w-12"
        />
      </div>
    </motion.header>
  );
};

export default CollegeHeader;
