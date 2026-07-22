import Image from "next/image";

import {

  Star,

  Quote,

  ArrowUpRight,

} from "lucide-react";



const testimonials = [

  {

    logo: "/companies/ADP logo.png",

    company: "ADP",

    role: "Enterprise Learning Partner",

    feedback:

      "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",

  },

  {

    logo: "/companies/bayer logo.jpg",

    company: "Bayer",

    role: "Global Workforce Partner",

    feedback:

      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",

  },

];



export default function Testimonials() {

  return (

    <section

      id="testimonials"

      className="section-md bg-white"

      aria-labelledby="testimonials-heading"

    >

      <div className="container-custom">



        {/* Heading */}



        <div className="mb-20 flex flex-col items-center text-center">



          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">

            Testimonials

          </span>



          <h2

            id="testimonials-heading"

            className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl"

          >

            Trusted by{" "}

            <span className="text-blue-600">

              Leading Enterprises

            </span>

          </h2>



          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">

            Discover how organizations across industries are transforming

            workforce learning through Accredian's enterprise solutions.

          </p>



        </div>



        {/* Testimonial Cards */}



        <div className="grid gap-8 lg:grid-cols-2">



          {testimonials.map((item) => (



            <article

              key={item.company}

              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,.12)]"

            >



              {/* Quote Decoration */}



              <Quote

                size={120}

                className="absolute right-6 top-5 text-slate-100 transition-transform duration-300 group-hover:scale-110"

              />



              {/* Rating */}



              <div className="relative z-10 flex items-center gap-1">



                {[...Array(5)].map((_, index) => (

                  <Star

                    key={index}

                    size={18}

                    className="fill-yellow-400 text-yellow-400"

                  />

                ))}



              </div>



              {/* Feedback */}



              <blockquote className="relative z-10 mt-8 text-lg leading-9 text-slate-600">



                "{item.feedback}"



              </blockquote>



              {/* Divider */}



              <div className="my-8 h-px bg-slate-200" />



              {/* Company */}



              <div className="flex items-center justify-between">



                <div className="flex items-center gap-5">



                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white p-3">



                    <Image

                      src={item.logo}

                      alt={item.company}

                      width={80}

                      height={80}

                      className="h-10 w-auto object-contain"

                    />



                  </div>



                  <div>



                    <h3 className="text-lg font-bold text-slate-900">

                      {item.company}

                    </h3>



                    <p className="mt-1 text-sm text-slate-500">

                      {item.role}

                    </p>



                  </div>



                </div>



                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">



                  <ArrowUpRight size={20} />



                </div>



              </div>

            </article>



          ))}



        </div>



        {/* Trust Metrics */}



        <div className="mt-20 rounded-3xl border border-slate-200 bg-slate-50 px-8 py-10">



          <div className="grid gap-8 text-center md:grid-cols-3">



            <div>



              <h3 className="text-4xl font-extrabold text-blue-600">

                500+

              </h3>



              <p className="mt-2 text-slate-600">

                Enterprise Partners

              </p>



            </div>



            <div>



              <h3 className="text-4xl font-extrabold text-blue-600">

                95%

              </h3>



              <p className="mt-2 text-slate-600">

                Client Satisfaction

              </p>



            </div>



            <div>



              <h3 className="text-4xl font-extrabold text-blue-600">

                1M+

              </h3>



              <p className="mt-2 text-slate-600">

                Professionals Upskilled

              </p>



            </div>



          </div>



        </div>



      </div>

    </section>

  );

}