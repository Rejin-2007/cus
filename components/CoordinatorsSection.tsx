"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function CoordinatorsSection() {
  return (
    <section className="relative overflow-x-hidden bg-linear-to-b from-gray-50 to-white py-24 px-6">
      <div className="max-w-6xl mx-auto w-full">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
            Coordinators
            <span className="block h-1 w-16 bg-blue-600 mx-auto mt-3 rounded-full"></span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Administrative leadership guiding the academic activities of
            CUS Centre for Under Graduate Studies.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-stretch"
        >

          {/* Director Card */}
          <motion.div
            variants={cardVariant}
            className="group bg-white p-8 rounded-3xl shadow-md border border-gray-100 text-center transition hover:shadow-2xl duration-300"
          >
            <div className="overflow-hidden rounded-2xl w-44 h-44 mx-auto mb-6">
              <Image
                src="/sam.jpeg"
                alt="Dr. Sam Solomon"
                width={200}
                height={200}
                className="object-cover w-full h-full transition duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="text-2xl font-semibold text-gray-800">
              Dr. Sam Solomon
            </h3>

            <span className="inline-block mt-2 px-4 py-1 text-sm bg-blue-600 text-white rounded-full shadow-sm">
              Director, CUS
            </span>

            <p className="text-gray-600 text-sm mt-4">
              Professor & Head, Department of Optoelectronics
            </p>

            <div className="mt-6 space-y-3 text-gray-700 text-sm">
              <div className="flex items-center justify-center gap-2">
                <FaPhoneAlt className="text-blue-600" />
                04712308167 (O), 9847314237 (M)
              </div>

              <div className="flex items-center justify-center gap-2 break-all">
                <FaEnvelope className="text-blue-600" />
                profsamsolomon@keralauniversity.ac.in
              </div>
            </div>
          </motion.div>

          {/* Assistant Director Card */}
          <motion.div
            variants={cardVariant}
            className="group bg-white p-8 rounded-3xl shadow-md border border-gray-100 text-center transition hover:shadow-2xl duration-300"
          >
            <div className="overflow-hidden rounded-2xl w-44 h-44 mx-auto mb-6">
              <Image
                src="/lakhshmi.jpg"
                alt="Lakshmi Sukumar"
                width={200}
                height={200}
                className="object-cover w-full h-full transition duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="text-2xl font-semibold text-gray-800">
              Lakshmi Sukumar
            </h3>

            <span className="inline-block mt-2 px-4 py-1 text-sm bg-blue-600 text-white rounded-full shadow-sm">
              Acadamic Co-ordinator, CUS
            </span>

            <p className="text-gray-600 text-sm mt-4">
              Associate Professor, Institute of English
              <br />
              University of Kerala, Thiruvananthapuram
            </p>

            <div className="mt-6 space-y-3 text-gray-700 text-sm">
              <div className="flex items-center justify-center gap-2">
                <FaPhoneAlt className="text-blue-600" />
                N/A
              </div>

              <div className="flex items-center justify-center gap-2 break-all">
                <FaEnvelope className="text-blue-600" />
                drlakshmisukumar@keralauniversity.ac.in
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
