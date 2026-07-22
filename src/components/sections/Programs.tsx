import {
  BrainCircuit,
  Code2,
  ShieldCheck,
  Cloud,
  BriefcaseBusiness,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Button from "../common/Button";

const programs = [
  {
    title: "Data Science & AI",
    description:
      "Build expertise in AI, Machine Learning, Deep Learning, Analytics, and Generative AI.",
    icon: BrainCircuit,
  },
  {
    title: "Software Development",
    description:
      "Master Full Stack Development, Backend, Frontend, Cloud, APIs, and System Design.",
    icon: Code2,
  },
  {
    title: "Cyber Security",
    description:
      "Enterprise security, ethical hacking, SOC operations, cloud security, and compliance.",
    icon: ShieldCheck,
  },
  {
    title: "Cloud Computing",
    description:
      "AWS, Azure, Google Cloud, Kubernetes, Docker, Terraform, and DevOps practices.",
    icon: Cloud,
  },
  {
    title: "Product & Business",
    description:
      "Product Management, Business Analytics, Agile, Leadership, and Digital Strategy.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Digital Transformation",
    description:
      "Enterprise modernization powered by AI, automation, data, and cloud technologies.",
    icon: Sparkles,
  },
] as const;

export default function Programs() {
  return (
    <section
      id="programs"
      className="section-md bg-white"
      aria-labelledby="programs-heading"
    >
      <div className="container-custom">
        <div className="mb-16 flex flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Programs
          </p>

          <h2
            id="programs-heading"
            className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl"
          >
            Learning Programs for{" "}
            <span className="text-blue-600">Every Enterprise</span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            Curated learning journeys designed to accelerate workforce capability
            across technology, leadership, business, and digital innovation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <article
                key={program.title}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="mb-8 h-1 w-16 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-24" />

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {program.title}
                </h3>

                <p className="mt-4 flex-grow leading-8 text-slate-600">
                  {program.description}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6">
                  <span className="text-sm font-semibold text-slate-500">
                    Enterprise Learning
                  </span>

                  <Button
                    variant="secondary"
                    className="group/button px-5 py-2.5"
                  >
                    Explore
                    <ArrowRight
                      size={18}
                      className="ml-2 transition-transform duration-300 group-hover/button:translate-x-1"
                    />
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
