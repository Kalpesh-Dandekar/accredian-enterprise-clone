import {
  BrainCircuit,
  BriefcaseBusiness,
  Globe,
  Lightbulb,
  BarChart3,
  Cog,
  Landmark,
} from "lucide-react";

const domains = [
  {
    icon: Lightbulb,
    title: "Product & Innovation Hub",
  },
  {
    icon: BrainCircuit,
    title: "Gen-AI Mastery",
  },
  {
    icon: BriefcaseBusiness,
    title: "Leadership Elevation",
  },
  {
    icon: BarChart3,
    title: "Tech & Data Insights",
  },
  {
    icon: Cog,
    title: "Operations Excellence",
  },
  {
    icon: Globe,
    title: "Digital Enterprise",
  },
  {
    icon: Landmark,
    title: "Fintech Innovation Lab",
  },
];

export default function Domains() {
  return (
    <section className="section-md bg-slate-50">
      <div className="container-custom">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
            Our Domain Expertise
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Specialized Programs{" "}
            <span className="text-blue-600">Designed for Innovation</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Explore enterprise-focused learning paths built around emerging
            technologies, leadership, and business transformation.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {domains.slice(0, 6).map((domain) => {
              const Icon = domain.icon;

              return (
                <div
                  key={domain.title}
                  className="group flex h-56 flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white px-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={40} strokeWidth={2} />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-slate-900">
                    {domain.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Bottom Card */}
          <div className="mt-8 flex justify-center">
            {(() => {
              const Icon = domains[6].icon;

              return (
                <div className="group flex h-56 w-full max-w-md flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white px-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={40} strokeWidth={2} />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-slate-900">
                    {domains[6].title}
                  </h3>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}