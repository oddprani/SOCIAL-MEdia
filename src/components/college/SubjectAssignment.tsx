
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Info, Check } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const SubjectAssignment: React.FC = () => {
  const [selectedScheme, setSelectedScheme] = useState<string>("");
  const [selectedSem, setSelectedSem] = useState<string>("");
  const [selectedTeachers, setSelectedTeachers] = useState<{[key: string]: string}>({});
  const [selectedWeeks, setSelectedWeeks] = useState<{[key: string]: string}>({});
  const [showTimeDropdown, setShowTimeDropdown] = useState<{[key: string]: boolean}>({});

  const handleTeacherSelect = (rowId: string, teacher: string) => {
    setSelectedTeachers(prev => ({ ...prev, [rowId]: teacher }));
  };

  const handleWeekSelect = (rowId: string, day: string) => {
    setSelectedWeeks(prev => ({ ...prev, [rowId]: day }));
    setShowTimeDropdown(prev => ({ ...prev, [rowId]: false }));
  };

  const toggleTimeDropdown = (rowId: string) => {
    setShowTimeDropdown(prev => ({ ...prev, [rowId]: !prev[rowId] }));
  };

  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex gap-4 mb-6">
        <div className="flex items-center gap-2">
          <label className="font-medium bg-gray-200 px-3 py-1 rounded-md">SCHEME</label>
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center bg-gray-100 px-3 py-1 rounded-md">
                <span className="mr-2">{selectedScheme || "Select"}</span>
                <Info size={16} />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-48">
              <div className="space-y-2">
                <button 
                  className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
                  onClick={() => setSelectedScheme("2018")}
                >
                  2018
                </button>
                <button 
                  className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
                  onClick={() => setSelectedScheme("2021")}
                >
                  2021
                </button>
                <button 
                  className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
                  onClick={() => setSelectedScheme("2023")}
                >
                  2023
                </button>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex items-center gap-2">
          <label className="font-medium bg-gray-200 px-3 py-1 rounded-md">SEM</label>
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center bg-gray-100 px-3 py-1 rounded-md">
                <span className="mr-2">{selectedSem || "Select"}</span>
                <Info size={16} />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-48">
              <div className="space-y-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                  <button 
                    key={sem}
                    className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
                    onClick={() => setSelectedSem(sem.toString())}
                  >
                    {sem}
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">SL NO</th>
              <th className="border px-4 py-2 text-left">SEM</th>
              <th className="border px-4 py-2 text-left">SUB CODE</th>
              <th className="border px-4 py-2 text-left">SUBJECT</th>
              <th className="border px-4 py-2 text-left">lecturer/professors</th>
              <th className="border px-4 py-2 text-left">week</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: "01", sem: "5th", code: "bcs 501", subject: "software eng" },
              { id: "02", sem: "5th", code: "bcs 502", subject: "CN" },
              { id: "03", sem: "5th", code: "bcs 502", subject: "CN" },
              { id: "04", sem: "5th", code: "bcs 502", subject: "CN" },
              { id: "05", sem: "5th", code: "bcs 502", subject: "CN" },
            ].map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{row.id}</td>
                <td className="border px-4 py-2">{row.sem}</td>
                <td className="border px-4 py-2">{row.code}</td>
                <td className="border px-4 py-2">{row.subject}</td>
                <td className="border px-4 py-2">
                  {row.id === "02" ? (
                    <div className="flex items-center gap-2">
                      <span>YOGESH SIR</span>
                      <Info size={16} className="text-gray-500" />
                    </div>
                  ) : row.id === "03" ? (
                    <div className="flex items-center gap-2">
                      <span>SANDEEP SIR</span>
                      <Info size={16} className="text-gray-500" />
                    </div>
                  ) : row.id === "04" ? (
                    <div className="flex items-center gap-2">
                      <span>SUREKHA MAM</span>
                      <Info size={16} className="text-gray-500" />
                    </div>
                  ) : (
                    <Popover>
                      <PopoverTrigger asChild>
                        <button className="flex items-center gap-2">
                          <span>{selectedTeachers[row.id] || "select teacher"}</span>
                          <Info size={16} className="text-gray-500" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-48">
                        <div className="space-y-2">
                          {["YOGESH SIR", "SANDEEP SIR", "SUREKHA MAM", "RAGHU SIR"].map(teacher => (
                            <button 
                              key={teacher}
                              className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded flex items-center justify-between"
                              onClick={() => handleTeacherSelect(row.id, teacher)}
                            >
                              <span>{teacher}</span>
                              {selectedTeachers[row.id] === teacher && <Check size={16} className="text-green-500" />}
                            </button>
                          ))}
                        </div>
                      </PopoverContent>
                    </Popover>
                  )}
                </td>
                <td className="border px-4 py-2">
                  <div className="relative">
                    <Popover>
                      <PopoverTrigger asChild>
                        <button 
                          className="flex items-center gap-2"
                          onClick={() => toggleTimeDropdown(row.id)}
                        >
                          <span>{selectedWeeks[row.id] || "select week"}</span>
                          <Info size={16} className="text-gray-500" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-64">
                        <div className="bg-white rounded shadow-lg">
                          <ul className="space-y-1 max-h-60 overflow-y-auto">
                            {["monday", "tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(day => (
                              <li key={day}>
                                <button 
                                  className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center justify-between"
                                  onClick={() => handleWeekSelect(row.id, day)}
                                >
                                  <span className="capitalize">{day}</span>
                                  {selectedWeeks[row.id] === day && <Check size={16} className="text-green-500" />}
                                </button>
                              </li>
                            ))}
                          </ul>
                          {showTimeDropdown[row.id] && (
                            <div className="absolute right-full top-0 w-48 bg-white p-2 border border-gray-200 rounded shadow-lg space-y-1">
                              {["08:30-09:30", "09:30-10:30", "11:30-12:30", "12:30-01:30", "10:30-11:30"].map(time => (
                                <div key={time} className="flex items-center gap-2">
                                  <input type="checkbox" id={`time-${time}`} />
                                  <label htmlFor={`time-${time}`} className="w-full">{time}</label>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-end">
        <motion.button
          className="bg-teal-600 text-white px-6 py-2 rounded-md font-medium hover:bg-teal-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ASSIGN
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SubjectAssignment;
