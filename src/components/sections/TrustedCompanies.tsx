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
];

export default function TrustedCompanies() {
  return (
    <section className="section-md bg-white">
      <div className="container-custom">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Our <span className="text-blue-600">Proven Partnerships</span>
          </h2>

          <p className="mt-5 text-lg text-slate-600 md:text-xl">
            Successful Collaborations With the{" "}
            <span className="font-semibold text-blue-600">
              Industry&apos;s Best
            </span>
          </p>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 items-center justify-items-center gap-x-10 gap-y-12 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-12">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex h-20 items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={company.width}
                height={70}
                className="h-12 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}