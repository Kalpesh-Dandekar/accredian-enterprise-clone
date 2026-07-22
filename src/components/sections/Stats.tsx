const stats = [
  {
    number: "500+",
    label: "Enterprise Partners Across Diverse Industries",
  },
  {
    number: "1M+",
    label: "Professionals Successfully Upskilled Worldwide",
  },
  {
    number: "95%",
    label: "Course Completion Rate Through Guided Learning",
  },
  {
    number: "4.8/5",
    label: "Average Learner Satisfaction Rating",
  },
] as const;

export default function Stats() {
  return (
    <section
      id="stats"
      className="section-md bg-white"
      aria-labelledby="stats-heading"
    >
      <div className="container-custom">
        {/* Heading */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h2
            id="stats-heading"
            className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl"
          >
            Our <span className="text-blue-600">Track Record</span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            The Numbers Behind{" "}
            <span className="font-semibold text-blue-600">
              Our Success
            </span>
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative flex flex-col items-center px-8 text-center transition-all duration-300 hover:-translate-y-1"
            >
              {/* Divider */}
              {index !== stats.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-28 -translate-y-1/2 border-r border-slate-200 lg:block" />
              )}

              {/* Number Badge */}
              <div className="rounded-full bg-blue-100 px-8 py-3 transition-all duration-300 group-hover:bg-blue-600">
                <span className="text-4xl font-bold text-blue-600 transition-colors duration-300 group-hover:text-white md:text-5xl">
                  {stat.number}
                </span>
              </div>

              {/* Label */}
              <p className="mt-5 max-w-[240px] text-lg font-medium leading-8 text-slate-800">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}