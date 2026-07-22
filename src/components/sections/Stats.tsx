const stats = [
  {
    number: "10K+",
    label: "Professionals Trained For Exceptional Career Success",
  },
  {
    number: "200+",
    label: "Sessions Delivered With Unmatched Learning Excellence",
  },
  {
    number: "5K+",
    label: "Active Learners Engaged In Dynamic Courses",
  },
  {
    number: "98%",
    label: "Learner Satisfaction Across Enterprise Programs",
  },
];

export default function Stats() {
  return (
    <section className="section-md bg-white">
      <div className="container-custom">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Our <span className="text-blue-600">Track Record</span>
          </h2>

          <p className="mt-5 text-lg text-slate-600 md:text-xl">
            The Numbers Behind{" "}
            <span className="font-semibold text-blue-600">
              Our Success
            </span>
          </p>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-y-12 md:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-y-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative flex flex-col items-center px-8 text-center"
            >
              {/* Divider */}
              {index !== stats.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-32 -translate-y-1/2 border-r border-slate-200 lg:block" />
              )}

              {/* Number */}
              <div className="rounded-full bg-blue-100 px-8 py-3">
                <span className="text-4xl font-bold text-blue-600 md:text-5xl">
                  {stat.number}
                </span>
              </div>

              {/* Label */}
              <p className="mt-6 max-w-[260px] text-lg font-medium leading-8 text-slate-900">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}