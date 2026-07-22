import Image from "next/image";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Button from "../common/Button";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-custom pt-20 pb-8">
        {/* Top */}
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-center">
          {/* Logo & Social */}
          <div>
            <Image
              src="/logo.png"
              alt="Accredian"
              width={190}
              height={60}
              priority
            />

            <div className="mt-6 flex items-center gap-4 text-[28px] text-slate-500">
              <a href="#">
                <FaFacebookSquare className="transition hover:text-blue-600" />
              </a>

              <a href="#">
                <FaLinkedin className="transition hover:text-blue-600" />
              </a>

              <a href="#">
                <FaTwitter className="transition hover:text-sky-500" />
              </a>

              <a href="#">
                <FaInstagram className="transition hover:text-pink-500" />
              </a>

              <a href="#">
                <FaYoutube className="transition hover:text-red-500" />
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-start lg:items-end">
            <Button className="rounded-xl px-8 py-3">
              Enquire Now
            </Button>

            <p className="mt-3 text-base text-slate-600">
              Speak with our Learning Advisor
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-slate-200" />

        {/* Links */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* Company */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-slate-900">
              Accredian
            </h3>

            <ul className="space-y-3 text-base text-slate-600">
              <li>
                <a href="#" className="transition hover:text-blue-600">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-blue-600">
                  Blog
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-blue-600">
                  Why Accredian
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-slate-900">
              Contact Us
            </h3>

            <div className="space-y-4 text-base leading-7 text-slate-600">
              <p>
                Email:{" "}
                <a
                  href="mailto:enterprise@accredian.com"
                  className="font-medium text-blue-600 hover:underline"
                >
                  enterprise@accredian.com
                </a>
              </p>

              <p>
                4th Floor, 250, Phase IV,
                <br />
                Udyog Vihar, Sector 18,
                <br />
                Gurugram, Haryana
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-slate-200 pt-6">
          <p className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Accredian • A Brand of FullStack
            Education Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}