import Image from "next/image";

const companies = [
  {
    name: "Reliance",
    logo: "/companies/Reliance-Industries-Limited-Logo.png",
    width: 145,
  },
  {
    name: "HCL",
    logo: "/companies/hcl logo.png",
    width: 120,
  },
  {
    name: "IBM",
    logo: "/companies/ibm logo.png",
    width: 125,
  },
  {
    name: "MRF",
    logo: "/companies/mrf logo.png",
    width: 90,
  },
  {
    name: "ADP",
    logo: "/companies/ADP logo.png",
    width: 95,
  },
  {
    name: "Bayer",
    logo: "/companies/bayer logo.jpg",
    width: 90,
  },
] as const;

export default function TrustedCompanies() {
  return (
    <section
      id="trusted-companies"
      className="section-md bg-white"
      aria-labelledby="trusted-companies-heading"
    >
      <div className="container-custom">
        {/* Heading */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h2
            id="trusted-companies-heading"
            className="max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl"
          >
            Our <span className="text-blue-600">Proven Partnerships</span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            Successful Collaborations With the{" "}
            <span className="font-semibold text-blue-600">
              Industry&apos;s Best
            </span>
          </p>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {companies.map((company) => (
            <div
              key={company.name}
              className="group flex h-28 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={company.width}
                height={70}
                sizes="(max-width:640px) 120px, 145px"
                className="h-12 w-auto object-contain grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}