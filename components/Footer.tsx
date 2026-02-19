"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 relative">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

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
            Centre for Under Graduate Studies (CUS), University of Kerala.
            Dedicated to academic excellence and student development.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 pt-2">
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-sky-500 transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/notices" className="hover:text-white transition">
                Notices
              </Link>
            </li>
            <li>
              <Link href="/facilities" className="hover:text-white transition">
                Facilities
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <div className="space-y-4 text-sm">

            <div className="flex gap-3">
              <FaMapMarkerAlt className="mt-1 text-blue-500" />
              <p>
                University of Kerala <br />
                Thiruvananthapuram, Kerala
              </p>
            </div>

            <div className="flex gap-3">
              <FaPhoneAlt className="mt-1 text-blue-500" />
              <p>0471 230 8167</p>
            </div>

            <div className="flex gap-3">
              <FaEnvelope className="mt-1 text-blue-500" />
              <p>info@keralauniversity.ac.in</p>
            </div>

          </div>
        </div>

        

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500 relative">

        © {new Date().getFullYear()} CUS Centre for Under Graduate Studies.
        All rights reserved.

        {/* Scroll to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition"
        >
          <FaArrowUp className="text-white text-sm" />
        </button>
      </div>
    </footer>
  );
}
