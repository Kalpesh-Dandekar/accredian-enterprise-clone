const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We assess your organization's learning goals, workforce capabilities, and business objectives.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Customized learning pathways are created with industry-relevant content and certifications.",
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "Programs are launched with seamless onboarding, mentoring, and learner engagement.",
  },
  {
    number: "04",
    title: "Measure",
    description:
      "Track progress through dashboards, reports, and measurable business outcomes.",
  },
];

export default function Process() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Our Process
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            A Simple Process. Powerful Results.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            From strategy to measurable impact, every step is designed to help
            organizations build future-ready teams.
          </p>
        </div>

        <div className="relative mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold text-white">
                {step.number}
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}