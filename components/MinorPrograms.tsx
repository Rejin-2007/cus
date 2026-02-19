"use client";

export default function MinorPrograms() {
  const minors = [
    "Philosophy",
    "Biochemistry",
    "Archaeology",
    "Nano Science & Nano Technology",
    "Biotechnology",
    "Journalism",
    "Manuscriptology & Palaeography",
    "Electronics & Photonics",
    "Environment & Climate Change Sciences",
    "English",
    "Library and Information Science",
    "Finance & Taxation Management",
    "Russian Language & Literature",
    "Tamil Language & Literature",
    "Artificial Intelligence",
    "Machine Learning",
    "Energy & Functional Materials",
    "Chemistry",
    "German",
    "Arabic Language & Literature",
    "Sociology",
    "Psychology",
    "Data Science",
    "French",
    "Biostatistics & Demography",
    "Sanskrit Language & Literature",
    "Travel & Tourism",
    "Human Resource Management",
    "Marketing",
    "Supply Chain & Logistics",
    "Economics",
    "History",
    "Statistics",
    "Data Analytics",
    "Applied Linguistics",
    "Cyber Security Laws and Intellectual Property Rights",
    "West Asian Studies",
    "Botany",
    "Biodiversity Conservation",
    "Zoology",
    "Malayalam & Kerala Studies",
    "Hindi",
    "Physics",
    "Fisheries Science",
    "Applied Aquaculture",
    "Marine Biology",
    "Aquatic Sciences & Fisheries",
    "Geology",
    "Mathematics",
    "Public Administration",
    "Political Science and International Relations",
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            Minor Programmes
          </h2>
          <p className="text-gray-500 mt-4">
            Interdisciplinary Minor Options Available
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {minors.map((program, index) => (
            <div
              key={index}
              className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 text-blue-700 transition text-sm font-medium border"
            >
              {program}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
