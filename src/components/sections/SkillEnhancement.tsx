import {
  ArrowRight,
  GraduationCap,
  BadgeCheck,
  BarChart3,
  Users,
  Sparkles,
} from "lucide-react";

const features = [
  {
    title: "Personalized Learning Paths",
    description:
      "Customized learning experiences aligned with individual roles, skill levels, and organizational objectives.",
    icon: GraduationCap,
  },
  {
    title: "Industry Certifications",
    description:
      "Gain globally recognized certifications that strengthen professional credibility and business value.",
    icon: BadgeCheck,
  },
  {
    title: "Learning Analytics",
    description:
      "Track engagement, performance, and learning outcomes with real-time enterprise dashboards.",
    icon: BarChart3,
  },
  {
    title: "Expert Coaching",
    description:
      "Receive continuous guidance from experienced mentors through interactive sessions.",
    icon: Users,
  },
];

export default function SkillEnhancement() {
  return (
    <section className="section-md bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container-custom">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <Sparkles size={16} />
              Skill Enhancement
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Empower Teams With
              <span className="block text-blue-600">
                Future-Ready Skills
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Accelerate workforce capability through practical learning,
              industry expertise, certifications, and measurable skill
              development designed for modern enterprises.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-5">
              <div>
                <h3 className="text-3xl font-bold text-blue-600">500K+</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Learners Upskilled
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600">98%</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Completion Rate
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600">250+</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Enterprise Clients
                </p>
              </div>
            </div>

            <button className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
              Explore Learning
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Right Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}