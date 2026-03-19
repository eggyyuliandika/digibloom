"use client";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Service", href: "#services" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="w-[130px] h-20 flex items-center justify-center">
            <Image src="/logoo.png" width={900} height={100} alt="Logo" />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-gray-600 hover:text-[#1B3A6B] font-medium text-sm transition-colors"
          >
            About Us
          </a>
          <a
            href="#services"
            className="text-gray-600 hover:text-[#1B3A6B] font-medium text-sm transition-colors"
          >
            Service
          </a>
          <a
            href="#projects"
            className="text-gray-600 hover:text-[#1B3A6B] font-medium text-sm transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="bg-[#1B3A6B] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-[#0F2347] transition-all hover:shadow-lg"
          >
            Contact Us
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 border-t border-gray-100">
          <a
            href="#about"
            className="text-gray-600 font-medium text-sm py-2"
            onClick={() => setOpen(false)}
          >
            About Us
          </a>
          <a
            href="#services"
            className="text-gray-600 font-medium text-sm py-2"
            onClick={() => setOpen(false)}
          >
            Service
          </a>
          <a
            href="#projects"
            className="text-gray-600 font-medium text-sm py-2"
            onClick={() => setOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="bg-[#1B3A6B] text-white px-5 py-2.5 rounded-full font-semibold text-sm text-center"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
