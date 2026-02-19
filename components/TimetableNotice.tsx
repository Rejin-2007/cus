"use client";

import { motion } from "framer-motion";
import { FaClock, FaCalendarAlt, FaFileDownload } from "react-icons/fa";

/* ------------------ Type Definition ------------------ */
interface Timetable {
  title: string;
  updated: string;
  description: string;
  file: string;
}

/* ------------------ Data ------------------ */
const regularTimetable: Timetable = {
  title: "Regular Class Timetable",
  updated: "10 Feb 2026",
  description:
    "The regular class timetable for First & Second Year UG students is currently active as per the academic schedule.",
  file: "/timetables/regular.pdf", // replace with actual path
};

const specialTimetable: Timetable | null = null;
// If special timetable exists, replace null with Timetable object.

/* ------------------ Component ------------------ */
export default function TimetableNotice() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Timetable Notices
          </h2>
          <p className="text-gray-600 mt-3">
            Official timetable updates for UG First & Second Year students.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Regular Timetable */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition"
          >
            <div className="flex items-center gap-3 mb-4 text-blue-600">
              <FaClock className="text-xl" />
              <h3 className="text-xl font-semibold">
                {regularTimetable.title}
              </h3>
            </div>

            <div className="flex items-center text-gray-500 text-sm mb-4 gap-2">
              <FaCalendarAlt />
              Last Updated: {regularTimetable.updated}
            </div>

            <p className="text-gray-700 mb-6">
              {regularTimetable.description}
            </p>

            <a
              href={regularTimetable.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <FaFileDownload />
              Download Timetable
            </a>
          </motion.div>

          {/* Special Timetable */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition"
          >
            <div className="flex items-center gap-3 mb-4 text-red-600">
              <FaClock className="text-xl" />
              <h3 className="text-xl font-semibold">
                Special Timetable Notice
              </h3>
            </div>

            {specialTimetable ? (
              <>
                <div className="flex items-center text-gray-500 text-sm mb-4 gap-2">
                  <FaCalendarAlt />
                  Last Updated: {specialTimetable.updated}
                </div>

                <p className="text-gray-700 mb-6">
                  {specialTimetable.description}
                </p>

                <a
                  href={specialTimetable.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  <FaFileDownload />
                  Download Special Timetable
                </a>
              </>
            ) : (
              <p className="text-gray-500 italic">
                Currently no special timetable notice.
              </p>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
