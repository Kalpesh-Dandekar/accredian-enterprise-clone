import Image from "next/image";

const testimonials = [
  {
    logo: "/companies/ADP logo.png",
    company: "ADP",
    feedback:
      "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
  },
  {
    logo: "/companies/bayer logo.jpg",
    company: "Bayer",
    feedback:
      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-custom">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
            Testimonials from{" "}
            <span className="text-blue-600">Our Partners</span>
          </h2>

          <p className="mt-4 text-xl text-slate-600">
            What <span className="text-blue-600">Our Clients</span> Are Saying
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {testimonials.map((item) => (
            <div
              key={item.company}
              className="rounded-[24px] border border-slate-200 bg-white p-12 transition-shadow duration-300 hover:shadow-lg"
            >
              <Image
                src={item.logo}
                alt={item.company}
                width={80}
                height={80}
                className="h-16 w-auto object-contain"
              />

              <p className="mt-10 text-lg leading-9 text-slate-700">
                "{item.feedback}"
              </p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="mt-10 flex justify-center gap-3">
          <span className="h-3 w-3 rounded-full bg-blue-600" />
          <span className="h-3 w-3 rounded-full bg-slate-300" />
        </div>
      </div>
    </section>
  );
}