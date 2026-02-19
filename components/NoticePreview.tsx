"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function NoticePreview() {
    const notices = [
        {
            title: "Submission of APAAR ID",
            date: "19 Feb 2026",
            description:
                "Students must submit signed copies through class representatives.",
        },
        {
            title: "Internal Assessment Schedule",
            date: "25 Feb 2026",
            description:
                "The internal assessment timetable for Semester I has been published.",
        },
    ];

    return (
        <section className="bg-linear-to-b from-gray-50 to-white py-24 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                            Latest Notices
                        </h2>
                        <p className="text-gray-500 mt-3">
                            Stay updated with recent announcements and academic updates.
                        </p>
                    </div>

                    <Link
                        href="/notice"
                        className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
                    >
                        View All <FaArrowRight size={14} />
                    </Link>
                </div>

                {/* Notice Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    {notices.map((notice, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Date Badge */}
                            <div className="inline-block mb-4 px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-600 rounded-full">
                                {notice.date}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                                {notice.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                                {notice.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
