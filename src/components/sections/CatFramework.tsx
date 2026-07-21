const framework = [
  {
    step: "C",
    title: "Consult",
    description:
      "Understand business goals, workforce challenges, and future skill requirements.",
  },
  {
    step: "A",
    title: "Align",
    description:
      "Design learning pathways aligned with organizational objectives and employee growth.",
  },
  {
    step: "T",
    title: "Transform",
    description:
      "Deliver impactful learning experiences backed by measurable outcomes and analytics.",
  },
];

export default function CatFramework() {
  return (
    <section className="section-padding bg-gradient-to-b from-blue-50 to-white">
      <div className="container-custom">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Our Framework
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            The C.A.T. Enterprise Learning Framework
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            A structured approach that ensures every learning initiative creates
            measurable business value.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {framework.map((item) => (
            <div
              key={item.step}
              className="relative rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="absolute -top-8 left-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-3xl font-bold text-white shadow-lg">
                {item.step}
              </div>

              <div className="pt-10">
                <h3 className="text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-blue-600 p-10 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold">
            Enterprise Learning That Delivers Results
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-blue-100">
            From identifying skill gaps to measurable transformation, our
            framework helps organizations continuously build future-ready teams.
          </p>
        </div>
      </div>
    </section>
  );
}