import {
  Award,
  BarChart3,
  Building2,
  GraduationCap,
  Laptop,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Industry-Aligned Curriculum",
    description:
      "Programs designed with industry experts to ensure practical, job-ready skills.",
    icon: GraduationCap,
  },
  {
    title: "Dedicated Success Managers",
    description:
      "Personalized support to help organizations achieve measurable learning outcomes.",
    icon: Users,
  },
  {
    title: "Real-Time Analytics",
    description:
      "Track employee progress, engagement, and performance through intuitive dashboards.",
    icon: BarChart3,
  },
  {
    title: "Flexible Learning",
    description:
      "Self-paced, instructor-led, and blended learning options for every organization.",
    icon: Laptop,
  },
  {
    title: "Enterprise Ready",
    description:
      "Scalable learning solutions for startups, SMBs, and global enterprises.",
    icon: Building2,
  },
  {
    title: "Recognized Certifications",
    description:
      "Industry-recognized certifications that strengthen employee credibility and career growth.",
    icon: Award,
  },
] as const;

export default function WhyAccredian() {
  return (
    <section
      id="why-accredian"
      className="section-md bg-white"
      aria-labelledby="why-accredian-heading"
    >
      <div className="container-custom">
        {/* Heading */}
        <div className="mb-20 flex flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Why Accredian
          </p>

          <h2
            id="why-accredian-heading"
            className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl"
          >
            Learning That{" "}
            <span className="text-blue-600">Delivers Results</span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            A modern enterprise learning ecosystem designed to help
            organizations build stronger teams through scalable training,
            measurable outcomes, and continuous workforce growth.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-6xl">
          {/* Timeline Line */}
          <div className="absolute left-1/2 hidden h-full w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-600 via-sky-500 to-cyan-400 lg:block" />

          <div className="space-y-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={feature.title}
                  className={`relative flex items-center ${
                    isLeft ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  {/* Desktop Card */}
                  <div
                    className={`hidden w-[45%] lg:block ${
                      isLeft ? "pr-16" : "pl-16"
                    }`}
                  >
                    <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_12px_35px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_24px_60px_rgba(37,99,235,0.12)]">
                      {/* Icon */}
                      <div className="mb-6 flex justify-start">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                          <Icon size={30} />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-slate-900">
                        {feature.title}
                      </h3>

                      <p className="mt-4 leading-8 text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-1/2 hidden -translate-x-1/2 lg:flex">
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-blue-600 shadow-xl">
                      <Icon size={28} className="text-white" />

                      <span className="absolute -bottom-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-bold text-blue-600 shadow">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Mobile */}
                  <div className="flex w-full gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:border-blue-200 hover:shadow-lg lg:hidden">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {feature.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}