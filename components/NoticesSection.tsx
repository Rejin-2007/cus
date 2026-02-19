import Link from "next/link";
import { FaBell, FaCalendarAlt, FaFileAlt } from "react-icons/fa";

const notices = [
  {
    id: 1,
    title: "Semester 1 Internal Examination Schedule Released",
    date: "15 February 2026",
    description:
      "The internal examination timetable for Semester 1 UG students has been published. Students are advised to check the detailed schedule and prepare accordingly.",
    link: "#",
  },
  {
    id: 2,
    title: "Library Extended Working Hours",
    date: "12 February 2026",
    description:
      "The Central Library will remain open from 8:00 AM to 8:00 PM during examination preparation weeks for first and second year students.",
    link: "#",
  },
  {
    id: 3,
    title: "Scholarship Document Verification Notice",
    date: "10 February 2026",
    description:
      "Students who have applied for government scholarships are requested to complete document verification at the department office before 20 February 2026.",
    link: "#",
  },
];

export default function NoticesSection() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 flex justify-center items-center gap-3">
            <FaBell className="text-blue-600" />
            Latest Notices
          </h2>
          <p className="text-gray-600 mt-3">
            Stay updated with important announcements and academic updates.
          </p>
        </div>

        {/* Notices Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <FaCalendarAlt className="text-blue-500" />
                {notice.date}
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {notice.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {notice.description}
              </p>

              <Link
                href={notice.link}
                className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
              >
                <FaFileAlt />
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
