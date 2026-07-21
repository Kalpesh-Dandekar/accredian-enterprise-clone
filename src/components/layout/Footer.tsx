const footerLinks = {
  Programs: [
    "Data Science",
    "Artificial Intelligence",
    "Cloud Computing",
    "Cyber Security",
    "Software Development",
  ],
  Company: [
    "About Us",
    "Enterprise",
    "Success Stories",
    "Careers",
    "Contact",
  ],
  Resources: [
    "Blog",
    "Case Studies",
    "FAQs",
    "Privacy Policy",
    "Terms & Conditions",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="container-custom py-20">
        <div className="grid gap-14 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Accredian
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Empowering enterprises through world-class learning experiences,
              measurable outcomes, and future-ready workforce development.
            </p>

            <div className="mt-8 flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-blue-600">
                🌐
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-blue-600">
                💼
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-blue-600">
                📧
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-6 text-xl font-semibold text-white">
                {title}
              </h3>

              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="transition hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Accredian Enterprise. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}