const domains = [
  {
    icon: "💻",
    title: "Technology",
    description:
      "Software Engineering, Full Stack, Cloud, DevOps, AI & Machine Learning.",
  },
  {
    icon: "📊",
    title: "Data & Analytics",
    description:
      "Data Science, Business Analytics, Visualization and Decision Intelligence.",
  },
  {
    icon: "🛡️",
    title: "Cyber Security",
    description:
      "Network Security, SOC, Cloud Security, Ethical Hacking and Governance.",
  },
  {
    icon: "☁️",
    title: "Cloud Computing",
    description:
      "AWS, Azure, GCP, Kubernetes, Docker and Infrastructure Automation.",
  },
  {
    icon: "📈",
    title: "Business Leadership",
    description:
      "Leadership, Product Management, Strategy and Digital Transformation.",
  },
  {
    icon: "🤖",
    title: "Artificial Intelligence",
    description:
      "Generative AI, LLMs, AI Agents and Enterprise AI Solutions.",
  },
];

export default function Domains() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Domains
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Learning Across Every Critical Domain
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Enterprise learning programs covering the most in-demand technology
            and business domains.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {domains.map((domain) => (
            <div
              key={domain.title}
              className="rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 text-5xl">
                {domain.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                {domain.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {domain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}