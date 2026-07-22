"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../common/Button";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(15,23,42,0.08)]"
          : "bg-white border-b border-slate-100"
      }`}
    >
      <div className="container-custom">
        <div className="flex h-[84px] items-center">
          {/* Logo */}
          <div className="flex w-56 items-center">
            <a
              href="/"
              className="transition duration-300 hover:scale-[1.02]"
            >
              <Image
                src="/logo.png"
                alt="Accredian"
                width={185}
                height={50}
                priority
                className="h-11 w-auto object-contain"
              />
            </a>
          </div>

          {/* Navigation */}
          <div className="hidden flex-1 justify-center lg:flex">
            <NavLinks />
          </div>

          {/* CTA */}
          <div className="hidden w-56 justify-end lg:flex">
            <Button className="px-7 py-3">
              Book Demo
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-auto flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:bg-slate-50 hover:shadow-md lg:hidden"
            aria-label="Toggle navigation"
          >
            <svg
              className="h-5 w-5 text-slate-700"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              viewBox="0 0 24 24"
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
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isMenuOpen ? "max-h-[500px] pb-6" : "max-h-0"
          }`}
        >
          <nav className="mt-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg">
            <div className="flex flex-col gap-5">
              <a
                href="#programs"
                className="font-medium text-slate-700 transition hover:text-[#2563eb]"
              >
                Programs
              </a>

              <a
                href="#solutions"
                className="font-medium text-slate-700 transition hover:text-[#2563eb]"
              >
                Solutions
              </a>

              <a
                href="#why-accredian"
                className="font-medium text-slate-700 transition hover:text-[#2563eb]"
              >
                Why Accredian
              </a>

              <a
                href="#testimonials"
                className="font-medium text-slate-700 transition hover:text-[#2563eb]"
              >
                Success Stories
              </a>

              <a
                href="#faq"
                className="font-medium text-slate-700 transition hover:text-[#2563eb]"
              >
                FAQs
              </a>

              <Button className="mt-2 w-full">
                Book Demo
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}