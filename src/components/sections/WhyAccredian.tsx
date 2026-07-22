import {
  BarChart3,
  Award,
  Building2,
  GraduationCap,
  Users,
  Laptop,
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
];

export default function WhyAccredian() {
  return (
    <section className="section-md bg-slate-50">
      <div className="container-custom">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Why Accredian
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Learning That Delivers Results
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A modern enterprise learning ecosystem designed to help
            organizations build stronger teams through scalable training and
            measurable outcomes.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-20 max-w-6xl">
          {/* Center Line */}
          <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-500 via-blue-400 to-cyan-400 lg:block" />

          <div className="space-y-14">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const left = index % 2 === 0;

              return (
                <div
                  key={feature.title}
                  className={`relative flex items-center ${
                    left ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  {/* Desktop Card */}
                  <div
                    className={`hidden w-[45%] lg:block ${
                      left ? "pr-14 text-right" : "pl-14"
                    }`}
                  >
                    <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">
                      <div
                        className={`mb-5 flex ${
                          left ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div className="rounded-2xl bg-blue-50 p-4 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                          <Icon size={28} />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900">
                        {feature.title}
                      </h3>

                      <p className="mt-4 leading-7 text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-1/2 hidden -translate-x-1/2 lg:flex">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-blue-600 shadow-lg">
                      <Icon size={26} className="text-white" />
                    </div>
                  </div>

                  {/* Mobile */}
                  <div className="flex w-full gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:hidden">
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