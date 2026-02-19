"use client";

import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaWifi, FaBook } from "react-icons/fa";

export default function FacilitiesSection() {
  const facilities = [
    {
      icon: <FaChalkboardTeacher size={30} />,
      title: "Smart Classrooms",
      desc: "Equipped with modern teaching aids and digital presentation systems.",
    },
    {
      icon: <FaBook size={30} />,
      title: "Structured Study Zones",
      desc: "Quiet and collaborative spaces designed for academic focus.",
    },
    {
      icon: <FaWifi size={30} />,
      title: "Campus Connectivity",
      desc: "High-speed internet access within the academic block.",
    },
  ];

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-16">
          Facilities & Infrastructure
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {facilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
