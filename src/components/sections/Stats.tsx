const stats = [
  {
    number: "500+",
    label: "Enterprise Partners",
  },
  {
    number: "1M+",
    label: "Professionals Upskilled",
  },
  {
    number: "95%",
    label: "Completion Rate",
  },
  {
    number: "4.8/5",
    label: "Learner Satisfaction",
  },
];

export default function Stats() {
  return (
    <section className="bg-blue-600 py-20">
      <div className="container-custom">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm transition duration-300 hover:bg-white/20"
            >
              <h2 className="text-5xl font-extrabold text-white">
                {stat.number}
              </h2>

              <p className="mt-4 text-lg text-blue-100">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}