
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import CollegeHeader from "@/components/college/CollegeHeader";
import CollegeSidebar from "@/components/college/CollegeSidebar";
import SubjectAssignment from "@/components/college/SubjectAssignment";
import ClassTimetable from "@/components/college/ClassTimetable";

const CollegeTimetable: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Government Engineering College Chamarajanagara - Timetable Management</title>
      </Helmet>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <CollegeHeader />
        <div className="flex flex-1">
          <CollegeSidebar />
          <motion.div 
            className="flex-1 p-6 overflow-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <SubjectAssignment />
              <ClassTimetable />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CollegeTimetable;
