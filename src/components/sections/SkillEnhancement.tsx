const features = [
  {
    icon: "🎓",
    title: "Personalized Learning",
    description:
      "Adaptive learning journeys tailored to every employee's role, experience, and career goals.",
  },
  {
    icon: "📚",
    title: "Industry Certifications",
    description:
      "Globally recognized certifications that enhance credibility and professional growth.",
  },
  {
    icon: "📈",
    title: "Skill Analytics",
    description:
      "Monitor workforce progress with powerful dashboards and actionable insights.",
  },
  {
    icon: "🤝",
    title: "Expert Mentorship",
    description:
      "Learn from experienced professionals through live sessions and mentoring.",
  },
  {
    icon: "⚡",
    title: "Hands-on Projects",
    description:
      "Real-world case studies and capstone projects to reinforce practical learning.",
  },
  {
    icon: "🚀",
    title: "Career Growth",
    description:
      "Upskill teams with future-ready competencies that drive business impact.",
  },
];

export default function SkillEnhancement() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Skill Enhancement
            </p>

            <h2 className="mt-4 text-4xl font-bold text-gray-900">
              Transform Employees into High-Performing Professionals
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Deliver engaging learning experiences that improve productivity,
              retention, and organizational success through practical,
              industry-focused education.
            </p>

            <button className="mt-10 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
              Start Learning
            </button>
          </div>

          {/* Right */}
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-4 text-4xl">
                  {feature.icon}
                </div>

                <h3 className="text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}