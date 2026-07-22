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
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50 to-white py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-200/30 blur-[130px]" />
        <div className="absolute right-10 bottom-0 h-64 w-64 rounded-full bg-cyan-200/30 blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">

        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-blue-700">
            Our Framework
          </span>

          <h2 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            The{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              C.A.T.
            </span>{" "}
            Enterprise Learning Framework
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            A structured learning methodology designed to align business
            objectives with workforce development and measurable outcomes.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-24 hidden lg:block">

          <div className="absolute left-[12%] right-[12%] top-10 h-1 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"></div>

          <div className="grid grid-cols-3 gap-16">

            {framework.map((item) => (
              <div key={item.step} className="text-center">

                {/* Circle */}

                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-3xl font-bold text-white shadow-2xl ring-8 ring-white">
                  {item.step}
                </div>

                {/* Title */}

                <h3 className="mt-8 text-3xl font-bold text-slate-900">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-4 leading-8 text-slate-600">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* Mobile */}

        <div className="mt-16 space-y-8 lg:hidden">

          {framework.map((item) => (
            <div
              key={item.step}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg"
            >
              <div className="flex items-center gap-5">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-2xl font-bold text-white">
                  {item.step}
                </div>

                <div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-slate-600">
                    {item.description}
                  </p>

                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-24 rounded-[32px] bg-gradient-to-r from-blue-700 to-cyan-500 p-12 shadow-[0_30px_70px_rgba(37,99,235,.3)]">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>

              <h3 className="text-4xl font-bold text-white">
                Enterprise Learning That Delivers Results
              </h3>

              <p className="mt-5 text-lg leading-8 text-blue-100">
                From identifying skill gaps to delivering measurable business
                transformation, our proven framework enables organizations to
                continuously build future-ready teams.
              </p>

            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur">

              <ul className="space-y-5 text-lg text-white">

                {[
                  "Skill Gap Assessment",
                  "Personalized Learning Paths",
                  "Business Impact Tracking",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-bold text-blue-700">
                      ✓
                    </div>

                    {item}

                  </li>
                ))}

              </ul>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}