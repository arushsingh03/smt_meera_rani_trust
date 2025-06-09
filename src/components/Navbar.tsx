"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Programs", path: "/programs" },
    { name: "Gallery", path: "/gallery" },
    { name: "Certifications", path: "/certifications" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-emerald-100 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <div className="flex items-center space-x-3">
                {/* Logo Icon */}
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <span className="text-white text-xl font-bold">
                      <img src="/logo.avif" alt="Logo" width={50} height={50} />
                    </span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full animate-pulse"></div>
                </div>
                {/* Organization Name */}
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    SMT Meera Rani
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Samajik Utthan Sansthan
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                href={item.path}
                className="relative group px-4 py-2 text-slate-700 hover:text-emerald-600 font-medium transition-all duration-300 rounded-lg hover:bg-emerald-50"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300 rounded-full"></span>
              </Link>
            ))}

            {/* CTA Button */}
            <div className="ml-6 pl-6 border-l border-slate-200">
              <Link
                href="/donate"
                className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-2.5 rounded-xl hover:from-orange-600 hover:to-orange-500 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm"
              >
                Donate Now
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 focus:outline-none transition-all duration-300"
            >
              <svg
                className="h-6 w-6 transition-transform duration-300"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                style={{
                  transform: isMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-emerald-100 shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                href={item.path}
                className="block px-4 py-3 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl font-medium transition-all duration-300 transform hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-60"></div>
                  <span>{item.name}</span>
                </div>
              </Link>
            ))}

            <div className="pt-4 mt-4 border-t border-emerald-100">
              <Link
                href="/donate"
                className="block w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-3 rounded-xl hover:from-orange-600 hover:to-orange-500 transition-all duration-300 font-semibold shadow-lg text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
