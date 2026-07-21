import Button from "../common/Button";

export default function CTA() {
  return (
    <section className="section-padding bg-blue-600">
      <div className="container-custom">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 p-12 text-center shadow-2xl lg:p-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
            Ready to Transform Your Workforce?
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold leading-tight text-white lg:text-5xl">
            Build Future-Ready Teams with
            <span className="text-blue-200"> Enterprise Learning </span>
            That Delivers Real Business Impact
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Empower your workforce with industry-leading programs, expert
            mentorship, measurable learning outcomes, and scalable enterprise
            solutions tailored to your organization's goals.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Button className="bg-white text-blue-700 hover:bg-blue-50">
              Book a Free Demo
            </Button>

            <Button
              variant="secondary"
              className="border-white bg-transparent text-white hover:bg-white hover:text-blue-700"
            >
              Explore Programs
            </Button>
          </div>

          <div className="mt-14 grid gap-8 border-t border-white/20 pt-10 sm:grid-cols-3">
            <div>
              <h3 className="text-3xl font-bold text-white">500+</h3>
              <p className="mt-2 text-blue-100">
                Enterprise Partners
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">1M+</h3>
              <p className="mt-2 text-blue-100">
                Professionals Trained
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">95%</h3>
              <p className="mt-2 text-blue-100">
                Learning Completion
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}