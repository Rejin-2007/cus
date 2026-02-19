"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaHome,
  FaInfoCircle,
  FaBook,
  FaBullhorn,
  FaUsers,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
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
          <span className="hidden sm:block font-semibold text-gray-800">
            CUS
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <Link href="/" className="flex items-center gap-2 hover:text-blue-600 transition">
            <FaHome />
            Home
          </Link>

          <Link href="/about" className="flex items-center gap-2 hover:text-blue-600 transition">
            <FaInfoCircle />
            About
          </Link>

          <Link href="/program" className="flex items-center gap-2 hover:text-blue-600 transition">
            <FaBook />
            Program
          </Link>

          <Link href="/notice" className="flex items-center gap-2 hover:text-blue-600 transition">
            <FaBullhorn />
            Notice
          </Link>

          <Link href="/faculty" className="flex items-center gap-2 hover:text-blue-600 transition">
            <FaUsers />
            Faculty
          </Link>

        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col px-6 py-6 space-y-5 text-gray-700 font-medium">

            <Link
              href="/"
              className="flex items-center gap-3 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              <FaHome />
              Home
            </Link>

            <Link
              href="/about"
              className="flex items-center gap-3 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              <FaInfoCircle />
              About
            </Link>

            <Link
              href="/program"
              className="flex items-center gap-3 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              <FaBook />
              Program
            </Link>

            <Link
              href="/notice"
              className="flex items-center gap-3 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              <FaBullhorn />
              Notice
            </Link>

            <Link
              href="/faculty"
              className="flex items-center gap-3 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              <FaUsers />
              Faculty
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}
