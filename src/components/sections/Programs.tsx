const programs = [
  {
    title: "Data Science & AI",
    description:
      "Build expertise in AI, Machine Learning, Deep Learning, and Analytics.",
  },
  {
    title: "Software Development",
    description:
      "Master Full Stack, Backend, Frontend, Cloud, and System Design.",
  },
  {
    title: "Cyber Security",
    description:
      "Enterprise security, ethical hacking, SOC, and cloud security.",
  },
  {
    title: "Cloud Computing",
    description:
      "AWS, Azure, Google Cloud, Kubernetes, Docker, and DevOps.",
  },
  {
    title: "Product & Business",
    description:
      "Product Management, Business Analytics, Agile, and Leadership.",
  },
  {
    title: "Digital Transformation",
    description:
      "Enterprise modernization using AI-powered digital solutions.",
  },
];

export default function Programs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Programs
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Learning Programs for Every Enterprise
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Curated programs designed to accelerate workforce capability across
            technology, business, and leadership.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-2xl text-white">
                📘
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {program.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {program.description}
              </p>

              <button className="mt-8 font-semibold text-blue-600 transition hover:translate-x-1">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}