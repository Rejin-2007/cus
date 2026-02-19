"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-x-hidden">

      {/* ================= TOP SECTION ================= */}
      <div className="max-w-7xl mx-auto w-full px-6 py-16 grid md:grid-cols-3 gap-10">

        {/* Logo & About */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="CUS Logo"
              width={45}
              height={45}
              className="object-contain"
            />
            <h2 className="text-xl font-semibold text-white">
              CUS Centre
            </h2>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            Centre for Under Graduate Studies (CUS) under
            University of Kerala, dedicated to structured learning
            for first and second year undergraduate students.
          </p>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-white transition">
                About
              </Link>
            </li>

            <li>
              <Link href="/program" className="hover:text-white transition">
                Program
              </Link>
            </li>

            <li>
              <Link href="/notice" className="hover:text-white transition">
                Notice
              </Link>
            </li>

            <li>
              <Link href="/faculty" className="hover:text-white transition">
                Faculty
              </Link>
            </li>
          </ul>
        </div>

        {/* ================= CONTACT INFO ================= */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Contact
          </h3>

          <div className="space-y-4 text-sm">

            <div className="flex gap-3">
              <FaMapMarkerAlt className="mt-1 text-blue-500 shrink-0" />
              <p>
                Centre for Under Graduate Studies <br />
                University Campus <br />
                Thiruvananthapuram, Kerala
              </p>
            </div>

            <div className="flex gap-3">
              <FaPhoneAlt className="mt-1 text-blue-500 shrink-0" />
              <p>0471 230 8167</p>
            </div>

            <div className="flex gap-3">
              <FaEnvelope className="mt-1 text-blue-500 shrink-0" />
              <p className="break-all">
                cusg@keralauniversity.ac.in
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500 relative px-6">

        <div className="max-w-7xl mx-auto w-full relative">
          © {new Date().getFullYear()} CUS Centre for Under Graduate Studies.
          All rights reserved.

          {/* Scroll to Top Button */}
          <button
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition"
          >
            <FaArrowUp className="text-white text-sm" />
          </button>
        </div>

      </div>
    </footer>
  );
}
