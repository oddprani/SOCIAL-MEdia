
import React from "react";
import { motion } from "framer-motion";

const CollegeSidebar: React.FC = () => {
  return (
    <motion.aside 
      className="w-48 bg-gray-200 shadow-md"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-4">
        <h2 className="font-bold text-lg mb-6">H.O.D</h2>
        
        <nav className="space-y-4">
          <motion.button 
            className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg text-sm font-medium shadow hover:bg-teal-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            STUDENT DETAILS
          </motion.button>
          
          <motion.button 
            className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg text-sm font-medium shadow hover:bg-teal-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ASSIGN SUBJECTS
          </motion.button>
          
          <motion.button 
            className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg text-sm font-medium shadow hover:bg-teal-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            FACULTY
          </motion.button>
        </nav>
      </div>
    </motion.aside>
  );
};

export default CollegeSidebar;
