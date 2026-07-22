import {
  MessageSquare,
  Target,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const framework = [
  {
    step: "C",
    title: "Consult",
    icon: MessageSquare,
    description:
      "Understand business goals, workforce challenges, and future skill requirements.",
    points: [
      "Business Discovery",
      "Skill Gap Analysis",
      "Strategic Planning",
    ],
  },
  {
    step: "A",
    title: "Align",
    icon: Target,
    description:
      "Design learning pathways aligned with organizational objectives and employee growth.",
    points: [
      "Learning Roadmaps",
      "Custom Curriculum",
      "Role Alignment",
    ],
  },
  {
    step: "T",
    title: "Transform",
    icon: TrendingUp,
    description:
      "Deliver impactful learning experiences backed by measurable outcomes and analytics.",
    points: [
      "Learning Delivery",
      "Impact Tracking",
      "Continuous Growth",
    ],
  },
];

export default function CatFramework() {
  return (
    <section
      className="section-md bg-white"
      id="framework"
      aria-labelledby="framework-heading"
    >
      <div className="container-custom">
        {/* Heading */}
        <div className="mb-20 flex flex-col items-center text-center">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            Our Framework
          </span>

          <h2
            id="framework-heading"
            className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl"
          >
            Our Proven{" "}
            <span className="text-blue-600">C.A.T.</span>{" "}
            Framework
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            A structured enterprise learning methodology that helps organizations
            discover skill gaps, align learning with business objectives,
            and transform workforce performance through measurable outcomes.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative hidden lg:block">
          {/* Line */}
          <div className="absolute left-[16%] right-[16%] top-10 h-[2px] bg-slate-200">
            <div className="h-full w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600" />
          </div>

          <div className="grid grid-cols-3 gap-10">
            {framework.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.step} className="relative text-center">
                  {/* Timeline Node */}
                  <div className="relative z-20 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-8 border-white bg-blue-600 shadow-lg">
                    <span className="text-3xl font-black text-white">
                      {item.step}
                    </span>
                  </div>

                  {/* Card */}
                  <article className="group relative mt-8 flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,.12)]">
                    {/* Watermark */}
                    <span className="absolute right-5 top-3 text-8xl font-black text-slate-100 transition-transform duration-300 group-hover:scale-110">
                      {item.step}
                    </span>

                    {/* Icon */}
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={30} />
                    </div>

                    {/* Title */}
                    <h3 className="relative z-10 mt-6 text-2xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="relative z-10 mt-4 leading-8 text-slate-600">
                      {item.description}
                    </p>

                    {/* Divider */}
                    <div className="relative z-10 my-6 h-px bg-slate-200" />

                    {/* Highlights */}
                    <ul className="relative z-10 space-y-3">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-3 text-sm text-slate-600"
                        >
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
                            ✓
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Footer */}
                    <div className="relative z-10 mt-auto pt-8">
                      <button className="group/btn inline-flex items-center text-sm font-semibold text-blue-600">
                        Learn More
                        <ArrowRight
                          size={16}
                          className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1"
                        />
                      </button>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="mt-14 space-y-6 lg:hidden">
          {framework.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.step}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,.12)]"
              >
                {/* Watermark */}
                <span className="absolute right-4 top-2 text-7xl font-black text-slate-100">
                  {item.step}
                </span>

                <div className="relative z-10 flex items-start gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {item.description}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-3 text-sm text-slate-600"
                        >
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
                            ✓
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    <button className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600">
                      Learn More
                      <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}