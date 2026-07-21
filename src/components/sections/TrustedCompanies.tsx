const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Adobe",
  "Infosys",
  "TCS",
  "Accenture",
  "Deloitte",
];

export default function TrustedCompanies() {
  return (
    <section className="border-y border-gray-100 bg-white py-16">
      <div className="container-custom">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Trusted by Leading Enterprises
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900">
            Empowering Teams Across Industries
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Organizations trust Accredian to deliver scalable learning
            experiences that improve workforce capabilities and business
            outcomes.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
          {companies.map((company) => (
            <div
              key={company}
              className="flex h-24 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <span className="text-sm font-semibold text-gray-700">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}