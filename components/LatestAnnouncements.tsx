"use client";

import { motion } from "framer-motion";
import { FaBullhorn, FaCalendarAlt } from "react-icons/fa";

const announcements = [
  {
    id: 1,
    title: "Internal Assessment Schedule Published",
    date: "18 Feb 2026",
    category: "Academic",
    description:
      "The internal assessment timetable for Semester II has been released. Students are advised to check the notice board.",
  },
  {
    id: 2,
    title: "Library Study Hours Extended",
    date: "15 Feb 2026",
    category: "Facility",
    description:
      "Evening study hours have been extended till 7:00 PM for first and second year UG students.",
  },
  {
    id: 3,
    title: "Student ID Verification Notice",
    date: "12 Feb 2026",
    category: "Notice",
    description:
      "All students must submit their APAAR ID copy to the administrative office before the deadline.",
  },
];

export default function LatestAnnouncements() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex justify-center mb-4">
            <FaBullhorn className="text-4xl text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Latest Announcements
          </h2>
          <p className="text-gray-600 mt-3">
            Stay updated with important academic and administrative notices.
          </p>
        </motion.div>

        {/* Announcement Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {announcements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                  {item.category}
                </span>

                <div className="flex items-center text-gray-500 text-sm gap-2">
                  <FaCalendarAlt />
                  {item.date}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>

              <button className="mt-4 text-blue-600 font-medium hover:underline">
                Read More →
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
