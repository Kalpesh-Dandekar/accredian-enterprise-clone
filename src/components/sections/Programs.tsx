const programs = [
  {
    icon: "🤖",
    title: "Data Science & AI",
    description:
      "Build expertise in AI, Machine Learning, Deep Learning, Analytics, and Generative AI.",
  },
  {
    icon: "💻",
    title: "Software Development",
    description:
      "Master Full Stack Development, Backend, Frontend, Cloud, APIs, and System Design.",
  },
  {
    icon: "🛡️",
    title: "Cyber Security",
    description:
      "Enterprise security, ethical hacking, SOC operations, cloud security, and compliance.",
  },
  {
    icon: "☁️",
    title: "Cloud Computing",
    description:
      "AWS, Azure, Google Cloud, Kubernetes, Docker, Terraform, and DevOps practices.",
  },
  {
    icon: "📈",
    title: "Product & Business",
    description:
      "Product Management, Business Analytics, Agile, Leadership, and Digital Strategy.",
  },
  {
    icon: "🚀",
    title: "Digital Transformation",
    description:
      "Enterprise modernization powered by AI, automation, data, and cloud technologies.",
  },
];

export default function Programs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50/40 py-28">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-200/20 blur-[130px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-200/20 blur-[130px]" />

      <div className="container-custom relative z-10">

        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full border border-blue-200 bg-blue-100/70 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-blue-700">
            Programs
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900 md:text-6xl">
            Learning Programs for Every Enterprise
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Curated learning journeys designed to accelerate workforce capability
            across technology, leadership, business, and digital innovation.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {programs.map((program) => (

            <div
              key={program.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-300 hover:shadow-[0_30px_70px_rgba(37,99,235,.15)]"
            >

              {/* Top Accent */}

              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600" />

              {/* Glow */}

              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-blue-100 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

              {/* Icon */}

              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-3xl shadow-xl">
                {program.icon}
              </div>

              {/* Badge */}

              <span className="mt-6 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                Enterprise Program
              </span>

              {/* Title */}

              <h3 className="mt-5 text-2xl font-bold text-slate-900 transition group-hover:text-blue-700">
                {program.title}
              </h3>

              {/* Description */}

              <p className="mt-4 leading-8 text-slate-600">
                {program.description}
              </p>

              {/* CTA */}

              <button className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 group-hover:gap-4">
                Learn More
                <span>→</span>
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}