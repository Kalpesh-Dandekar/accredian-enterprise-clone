const navLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Solutions", href: "#solutions" },
  { label: "Why Accredian", href: "#why-accredian" },
  { label: "Success Stories", href: "#testimonials" },
  { label: "FAQs", href: "#faq" },
];

export default function NavLinks() {
  return (
    <nav className="hidden items-center gap-12 lg:flex">
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="group relative py-2 text-[15px] font-medium tracking-[0.01em] text-slate-700 transition-all duration-300 hover:text-[#2563eb]"
        >
          {link.label}

          <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#2563eb] transition-all duration-300 group-hover:w-full" />
        </a>
      ))}
    </nav>
  );
}