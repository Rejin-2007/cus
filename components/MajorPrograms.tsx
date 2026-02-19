"use client";

import { FaGraduationCap } from "react-icons/fa";

export default function MajorPrograms() {
  const bscPrograms = [
    "Biology",
    "Chemistry",
    "Computer Science",
    "Geology",
    "Mathematics",
    "Physics",
    "Psychology",
  ];

  const baPrograms = [
    "Economics",
    "English",
    "Hindi",
    "History",
    "Malayalam and Kerala Studies",
    "Politics & International Relations",
    "Sanskrit",
  ];

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            Major Programmes
          </h2>
          <p className="text-gray-500 mt-4">
            Honours with Research under FYUGP structure
          </p>
        </div>

        {/* BSc Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <FaGraduationCap className="text-blue-600 text-2xl" />
            <h3 className="text-2xl font-semibold text-gray-800">
              B.Sc Honours with Research
            </h3>
            
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {bscPrograms.map((program, index) => (
              <div
                key={index}
                className="p-5 bg-white text-amber-500 rounded-xl shadow-sm hover:shadow-lg transition border"
              >
                {program}
              </div>
            ))}
          </div>
        </div>

        {/* BA Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <FaGraduationCap className="text-purple-600 text-2xl" />
            <h3 className="text-2xl font-semibold text-gray-800">
              B.A Honours with Research
            </h3>
            
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {baPrograms.map((program, index) => (
              <div
                key={index}
                className="p-5 bg-white text-amber-500  rounded-xl shadow-sm hover:shadow-lg transition border"
              >
                {program}
              </div>
            ))}
          </div>
        </div>

        {/* BCom & BBA */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-white rounded-2xl shadow-md border">
            <h3 className="text-xl font-semibold text-amber-500  mb-4">
              B.Com Honours with Research
            </h3>
            
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-md border">
            <h3 className="text-xl font-semibold text-amber-500  mb-4">
              BBA Honours with Research
            </h3>
            
          </div>
        </div>

      </div>
    </section>
  );
}
