import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-white">
      <div className="container-custom grid min-h-[85vh] items-center gap-14 py-20 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <span className="mb-5 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Enterprise Learning Solutions
          </span>

          <h1 className="text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
            Upskill Your Workforce with
            <span className="text-blue-600"> Industry-Ready </span>
            Learning Programs
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Empower your employees with curated learning paths, industry
            certifications, and measurable outcomes designed for modern
            enterprises.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button>Book a Demo</Button>

            <Button variant="secondary">
              Explore Programs
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-6">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">500+</h3>
              <p className="mt-2 text-sm text-gray-600">
                Enterprise Clients
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">1M+</h3>
              <p className="mt-2 text-sm text-gray-600">
                Learners Upskilled
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">95%</h3>
              <p className="mt-2 text-sm text-gray-600">
                Completion Rate
              </p>
            </div>
          </div>
        </div>

        {/* Right Illustration Placeholder */}
        <div className="flex justify-center">
          <div className="flex aspect-square w-full max-w-lg items-center justify-center rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-100 to-white shadow-xl">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-4xl text-white">
                🎓
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                Enterprise Dashboard
              </h3>

              <p className="mt-3 px-8 text-gray-600">
                Replace this with the final Accredian hero illustration during
                the refinement phase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}