"use client";

import { motion } from "framer-motion";
import { FaUniversity, FaBookOpen, FaUsers } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      
      {/* Background Image with subtle zoom animation */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />

      {/* Gradient Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-white space-y-8">
        
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <FaUniversity className="text-5xl text-blue-400 drop-shadow-lg" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold tracking-wide leading-tight"
        >
          CUS
          <span className="block text-blue-400 text-2xl md:text-3xl font-semibold mt-2">
            Centre for Under Graduate Studies
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-200 leading-relaxed"
        >
          UG Academic Block for First & Second Year Students —
          Dedicated structured study zones, collaborative learning areas,
          and a focused academic environment within the campus.
        </motion.p>

        {/* Feature Icons Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8 pt-4"
        >
          <div className="flex items-center gap-2 text-gray-300">
            <FaBookOpen className="text-blue-400" />
            <span>Structured Study Spaces</span>
          </div>

          <div className="flex items-center gap-2 text-gray-300">
            <FaUsers className="text-blue-400" />
            <span>Collaborative Learning</span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pt-6"
        >
          <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 transition duration-300 rounded-full font-semibold shadow-lg hover:scale-105">
            Explore Facilities
          </button>
        </motion.div>

      </div>
    </section>
  );
}
