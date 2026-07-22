import {
  BrainCircuit,
  BriefcaseBusiness,
  Globe,
  Lightbulb,
  BarChart3,
  Cog,
  Landmark,
  ArrowRight,
} from "lucide-react";

const domains = [
  {
    icon: Lightbulb,
    title: "Product & Innovation Hub",
    description:
      "Accelerate product thinking, innovation strategy, and customer-centric development.",
  },
  {
    icon: BrainCircuit,
    title: "Gen-AI Mastery",
    description:
      "Upskill teams in Generative AI, LLMs, prompt engineering, and intelligent automation.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Leadership Elevation",
    description:
      "Develop future leaders through communication, strategy, and decision-making programs.",
  },
  {
    icon: BarChart3,
    title: "Tech & Data Insights",
    description:
      "Turn enterprise data into actionable insights using analytics and visualization.",
  },
  {
    icon: Cog,
    title: "Operations Excellence",
    description:
      "Improve productivity through process optimization, automation, and lean practices.",
  },
  {
    icon: Globe,
    title: "Digital Enterprise",
    description:
      "Drive digital transformation with cloud, AI, and modern enterprise technologies.",
  },
  {
    icon: Landmark,
    title: "Fintech Innovation Lab",
    description:
      "Explore digital banking, financial technology, compliance, and secure payment systems.",
  },
] as const;

export default function Domains() {
  return (
    <section
      id="domains"
      className="section-md bg-white"
      aria-labelledby="domains-heading"
    >
      <div className="container-custom">
        <div className="mb-16 flex flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Domain Expertise
          </p>

          <h2
            id="domains-heading"
            className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl"
          >
            Specialized Learning Across{" "}
            <span className="text-blue-600">High-Growth Domains</span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            Enterprise-focused learning paths designed to build future-ready
            teams across technology, business, and innovation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {domains.map((domain) => {
            const Icon = domain.icon;

            return (
              <article
                key={domain.title}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {domain.title}
                </h3>

                <p className="mt-4 flex-grow leading-8 text-slate-600">
                  {domain.description}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5">
                  <span className="text-sm font-medium text-slate-500">
                    Enterprise Track
                  </span>

                  <span className="flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all duration-300 group-hover:gap-3">
                    Explore
                    <ArrowRight size={16} />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
