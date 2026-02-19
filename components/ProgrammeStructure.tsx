import { FaBook, FaFlask, FaLayerGroup, FaSearch } from "react-icons/fa";

export default function ProgrammeStructure() {
  const components = [
    {
      icon: <FaBook />,
      title: "Foundation Courses",
      desc: "Ability Enhancement (AEC), Skill Enhancement (SEC), Value Addition (VAC) and Multidisciplinary Courses (MDC).",
    },
    {
      icon: <FaLayerGroup />,
      title: "Discipline Specific Major",
      desc: "Core subject specialization within the chosen major discipline.",
    },
    {
      icon: <FaFlask />,
      title: "Minor / Multidisciplinary",
      desc: "Interdisciplinary minor or multidisciplinary exposure.",
    },
    {
      icon: <FaSearch />,
      title: "Research Component",
      desc: "Dissertation, internship, and field surveys for research experience.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">
            Programme Structure
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {components.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition border text-center"
            >
              <div className="text-3xl text-blue-600 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
