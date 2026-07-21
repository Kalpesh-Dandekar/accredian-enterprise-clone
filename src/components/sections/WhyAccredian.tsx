const features = [
  {
    title: "Industry-Aligned Curriculum",
    description:
      "Programs designed with industry experts to ensure practical, job-ready skills.",
    icon: "🎯",
  },
  {
    title: "Dedicated Success Managers",
    description:
      "Personalized support to help organizations achieve measurable learning outcomes.",
    icon: "🤝",
  },
  {
    title: "Real-Time Analytics",
    description:
      "Track employee progress, engagement, and performance through intuitive dashboards.",
    icon: "📊",
  },
  {
    title: "Flexible Learning",
    description:
      "Self-paced, instructor-led, and blended learning options for every organization.",
    icon: "💻",
  },
  {
    title: "Enterprise Ready",
    description:
      "Scalable solutions built for startups, SMBs, and large enterprises.",
    icon: "🏢",
  },
  {
    title: "Recognized Certifications",
    description:
      "Industry-recognized certifications that improve employee credibility and growth.",
    icon: "🏆",
  },
];

export default function WhyAccredian() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Why Accredian
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Built for Modern Enterprise Learning
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Everything organizations need to train, upskill, and retain top
            talent through one intelligent learning platform.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}