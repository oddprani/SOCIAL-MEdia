
import React from "react";
import { motion } from "framer-motion";

const ClassTimetable: React.FC = () => {
  // Table data structure
  const headerRow = ["TIME", "9.30 to 10.25", "10.25 To11.20", "11.20 To 11.30", "11.30 To 12.25", "12.25 To 1.20", "1.20 To 2.00", "2.00 To 2.55", "2.55 To 3.50", "3.50 To 4.45"];
  
  const timetableData = [
    {
      day: "Monday",
      periods: ["IWM BCA/BSC", "CC BC5081", "", "ML BC5082", "IKS BIK5099", "", "NSS BNSK65(B)"],
    },
    {
      day: "Tuesday",
      periods: ["ML BC5082", "CD BC5013C", "", "IWM BC5081", "IWM BCV/BSC", "", "Project Phase 1 BC5083 (B2)"],
    },
    {
      day: "Wednesday",
      periods: ["CC BC5081", "BC5013C", "", "BAIL(CC)(E)(B)(5601 (B))", "BC5L006(B)", "", "BC5083 (B1)"],
    },
    {
      day: "Thursday",
      periods: ["IWM BC5013C", "BC5082", "", "BC5L606(B)", "NSS BNSK65(B)", "", "Project Phase 1"],
    },
    {
      day: "Friday",
      periods: ["CC BC5081", "CD BC5013C", "", "BAIL(CC)(E)(B)(5601 (B))", "BC5L006(B)", "", "NSS BNSK65(B)"],
    },
    {
      day: "Saturday",
      periods: ["", "", "", "", "", "", "BNSK65(B1)"],
    },
  ];

  const courseInfo = [
    { code: "BC5081", name: "Cloud Computing (Open Stack /Google)", hours: "3 8 2", faculty: "Dr. Yogesh A C" },
    { code: "BC5082", name: "Machine Learning", hours: "4 8 0", faculty: "Prof Surekha V" },
    { code: "BC5013C", name: "Compiler Design", hours: "3 8 0", faculty: "Prof Yamuna R" },
    { code: "BCV/BSC", name: "Integrated Waste Management for a Smart City", hours: "3 8 0", faculty: "Prof Raghu" },
    { code: "BC5083", name: "Project Phase I", hours: "0 8 4", faculty: "Sri Vichya-Pro Vee" },
    { code: "BC5L606", name: "Machine Learning LAB", hours: "0 8 2", faculty: "Prof Surekha V" },
    { code: "BAIL/CC", name: "Generative AI", hours: "0 8 2", faculty: "Prof Surekha V" },
    { code: "BNSK65B", name: "National Service Scheme (NSS)", hours: "0 8 2", faculty: "Prof Nagesh" },
    { code: "BIK5099", name: "Indian Knowledge System", hours: "1 8 0", faculty: "Prof Geetha" },
  ];

  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-center text-xl font-bold mb-4">CLASS TIME TABLE FOR ACADEMIC YEAR 2025</h2>
      
      <div className="mb-4 text-sm">
        <p>Name of Institution: Government Engineering College, Chamarajanagar</p>
        <p>Name of Program Board: Department of Computer Science and Engineering</p>
        <p>Name of Class Coordinator: Dr Yogesh A C</p>
        <div className="flex justify-end">
          <div className="text-right">
            <p>W.E.F: 10-02-2025</p>
            <p>Class: VI SEM</p>
            <p>USN: CS-03</p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1 text-sm">TIME</th>
              <th className="border px-2 py-1 text-sm">9.30 to 10.25</th>
              <th className="border px-2 py-1 text-sm">10.25 To 11.20</th>
              <th className="border px-2 py-1 text-sm">11.20 To 11.30</th>
              <th className="border px-2 py-1 text-sm">11.30 To 12.25</th>
              <th className="border px-2 py-1 text-sm">12.25 To 1.20</th>
              <th className="border px-2 py-1 text-sm">1.20 To 2.00</th>
              <th className="border px-2 py-1 text-sm">2.00 To 2.55</th>
              <th className="border px-2 py-1 text-sm">2.55 To 3.50</th>
              <th className="border px-2 py-1 text-sm">3.50 To 4.45</th>
            </tr>
          </thead>
          <tbody>
            {timetableData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-amber-50" : "bg-amber-100"}>
                <td className="border px-2 py-1 font-medium">{row.day}</td>
                {Array(8).fill(0).map((_, cellIndex) => (
                  <td key={cellIndex} className="border px-2 py-1 text-sm text-center">
                    {cellIndex < row.periods.length ? row.periods[cellIndex] : ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-1 text-sm">Course Code</th>
              <th className="border px-3 py-1 text-sm">Course Name</th>
              <th className="border px-3 py-1 text-sm">TEACHING HOURS</th>
              <th className="border px-3 py-1 text-sm">Name of Teaching Faculty</th>
            </tr>
          </thead>
          <tbody>
            {courseInfo.map((course, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-amber-50" : "bg-amber-100"}>
                <td className="border px-3 py-1 text-sm">{course.code}</td>
                <td className="border px-3 py-1 text-sm">{course.name}</td>
                <td className="border px-3 py-1 text-sm text-center">{course.hours}</td>
                <td className="border px-3 py-1 text-sm">{course.faculty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4 text-sm font-bold">
        <div>COORDINATOR</div>
        <div>HOD</div>
        <div>PRINCIPAL</div>
      </div>
    </motion.div>
  );
};

export default ClassTimetable;
