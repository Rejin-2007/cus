"use client";

import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          About CUS
        </h2>

        <p className="text-gray-600 mt-6 leading-relaxed max-w-3xl mx-auto">
          Centre for Under Graduate Studies (CUS) is the dedicated academic
          block for first and second year students, providing structured
          classrooms and focused study spaces.
        </p>

        <Link
          href="/about"
          className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
