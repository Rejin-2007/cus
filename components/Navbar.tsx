"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaHome,
  FaBullhorn,
  FaBuilding,
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-transparent shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="CUS Logo"
            width={45}
            height={45}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">

          <Link href="/" className="flex items-center gap-2 hover:text-blue-600 transition">
            <FaHome />
            Home
          </Link>

          <Link href="/notices" className="flex items-center gap-2 hover:text-blue-600 transition">
            <FaBullhorn />
            Notices
          </Link>

          <Link href="/facilities" className="flex items-center gap-2 hover:text-blue-600 transition">
            <FaBuilding />
            Facilities
          </Link>

          <Link href="/contact" className="flex items-center gap-2 hover:text-blue-600 transition">
            <FaPhoneAlt />
            Contact
          </Link>

        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col px-6 py-4 space-y-4 text-gray-700 font-medium">

            <Link
              href="/"
              className="flex items-center gap-3 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              <FaHome />
              Home
            </Link>

            <Link
              href="/notices"
              className="flex items-center gap-3 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              <FaBullhorn />
              Notices
            </Link>

            <Link
              href="/facilities"
              className="flex items-center gap-3 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              <FaBuilding />
              Facilities
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-3 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              <FaPhoneAlt />
              Contact
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}
