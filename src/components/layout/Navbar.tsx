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

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-200/70 bg-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl"
          : "border-b border-slate-100 bg-white"
      }`}
    >
      <div className="container-custom">
        <div className="flex h-[84px] items-center justify-between">

          {/* Logo */}
          <a
            href="/"
            aria-label="Accredian Home"
            className="flex w-56 items-center transition-transform duration-300 hover:scale-[1.02]"
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


          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden flex-1 justify-center lg:flex"
          >
            <NavLinks />
          </nav>


          {/* Desktop CTA */}
          <div className="hidden w-56 justify-end lg:flex">
            <Button className="px-7 py-3">
              <span data-demo-button>
                Book Demo
              </span>
            </Button>
          </div>


          {/* Mobile Toggle */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="ml-auto flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:bg-slate-50 hover:shadow-md lg:hidden"
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
          id="mobile-navigation"
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            isMenuOpen ? "max-h-[600px] pb-6" : "max-h-0"
          }`}
        >
          <nav
            aria-label="Mobile Navigation"
            className="mt-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg"
          >
            <div className="flex flex-col gap-5">

              <a
                href="#programs"
                onClick={closeMenu}
                className="font-medium text-slate-700 transition-colors hover:text-[#2563eb]"
              >
                Programs
              </a>


              <a
                href="#domains"
                onClick={closeMenu}
                className="font-medium text-slate-700 transition-colors hover:text-[#2563eb]"
              >
                Domains
              </a>


              <a
                href="#why-accredian"
                onClick={closeMenu}
                className="font-medium text-slate-700 transition-colors hover:text-[#2563eb]"
              >
                Why Accredian
              </a>


              <a
                href="#cat-framework"
                onClick={closeMenu}
                className="font-medium text-slate-700 transition-colors hover:text-[#2563eb]"
              >
                CAT Framework
              </a>


              <a
                href="#testimonials"
                onClick={closeMenu}
                className="font-medium text-slate-700 transition-colors hover:text-[#2563eb]"
              >
                Success Stories
              </a>


              <a
                href="#faq"
                onClick={closeMenu}
                className="font-medium text-slate-700 transition-colors hover:text-[#2563eb]"
              >
                FAQs
              </a>


              {/* Mobile CTA */}
              <Button
                className="mt-2 w-full"
                onClick={closeMenu}
              >
                <span data-demo-button>
                  Book Demo
                </span>
              </Button>

            </div>
          </nav>
        </div>

      </div>
    </header>
  );
}