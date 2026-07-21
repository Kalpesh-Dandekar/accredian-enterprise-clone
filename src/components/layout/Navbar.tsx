"use client";

import { useState } from "react";
import Button from "../common/Button";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="container-custom flex h-20 items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-bold tracking-tight text-blue-600"
        >
          Accredian
        </a>

        {/* Desktop Navigation */}
        <NavLinks />

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button>Book Demo</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 lg:hidden"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <nav className="container-custom flex flex-col gap-5 py-6">
            <a
              href="#programs"
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              Programs
            </a>

            <a
              href="#solutions"
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              Solutions
            </a>

            <a
              href="#why-accredian"
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              Why Accredian
            </a>

            <a
              href="#testimonials"
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              Success Stories
            </a>

            <a
              href="#faq"
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              FAQs
            </a>

            <Button className="mt-2 w-full">Book Demo</Button>
          </nav>
        </div>
      )}
    </header>
  );
}