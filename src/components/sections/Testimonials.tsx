const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Head of Learning",
    company: "TechNova",
    feedback:
      "Accredian transformed the way our teams learn. The programs were practical, engaging, and directly aligned with our business goals.",
  },
  {
    name: "Rahul Sharma",
    role: "Engineering Manager",
    company: "CloudSync",
    feedback:
      "The structured learning paths and expert mentorship significantly improved our team's technical capabilities within months.",
  },
  {
    name: "Emily Davis",
    role: "HR Director",
    company: "FinEdge",
    feedback:
      "The analytics dashboard gave us clear visibility into employee progress and learning outcomes. It has become a key part of our L&D strategy.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Trusted by Enterprise Leaders
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            Hear what organizations say about their learning transformation
            journey with Accredian.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 text-5xl text-blue-600">❝</div>

              <p className="leading-8 text-gray-600">
                {testimonial.feedback}
              </p>

              <div className="mt-8 border-t border-gray-100 pt-6">
                <h3 className="text-lg font-bold text-gray-900">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {testimonial.role}
                </p>

                <p className="text-sm font-semibold text-blue-600">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}