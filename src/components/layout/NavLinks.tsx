const navLinks = [
  {
    label: "Programs",
    href: "#programs",
  },
  {
    label: "Solutions",
    href: "#solutions",
  },
  {
    label: "Why Accredian",
    href: "#why-accredian",
  },
  {
    label: "Success Stories",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faq",
  },
];

export default function NavLinks() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}