import {

  ArrowRight,

  CheckCircle2,

  Sparkles,

} from "lucide-react";

import Button from "../common/Button";



const highlights = [

  "500+ Enterprise Partners",

  "1M+ Professionals Upskilled",

  "95% Program Completion",

];



export default function CTA() {

  return (

    <section className="section-lg bg-white">

      <div className="container-custom">



        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 px-8 py-20 lg:px-16 lg:py-24">



          {/* Background */}



          <div className="absolute inset-0">



            <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />



            <div className="absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-cyan-300/15 blur-3xl" />





            <div

              className="absolute inset-0 opacity-[0.08]"

              style={{

                backgroundImage: `

                  linear-gradient(to right, white 1px, transparent 1px),

                  linear-gradient(to bottom, white 1px, transparent 1px)

                `,

                backgroundSize: "72px 72px",

              }}

            />



          </div>





          {/* Main Content */}



          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">





            {/* Badge */}



            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">



              <Sparkles

                size={16}

                className="text-cyan-200"

              />



              <span className="text-sm font-semibold tracking-wide text-white">

                Enterprise Learning Solutions

              </span>



            </div>







            {/* Heading */}



            <h2

              className="mx-auto mt-8 max-w-5xl text-center text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-[5.2rem]"

            >



              Build a{" "}



              <span className="text-cyan-200">

                Future-Ready

              </span>



              <br />



              Workforce



            </h2>







            {/* Description */}



            <p

              className="mx-auto mt-10 max-w-3xl text-center text-lg leading-9 text-blue-100"

            >



              Equip your teams with industry-leading learning programs,

              personalized career pathways, and measurable business

              outcomes designed to accelerate organizational growth.



            </p>







            {/* Highlights */}



            <div className="mx-auto mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-4">



              {highlights.map((item) => (



                <div

                  key={item}

                  className="flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-md"

                >



                  <CheckCircle2

                    size={18}

                    className="text-cyan-200"

                  />



                  <span className="whitespace-nowrap text-sm font-medium text-white">

                    {item}

                  </span>



                </div>



              ))}



            </div>







            {/* Metrics */}



            <div className="mx-auto mt-16 w-full max-w-5xl border-y border-white/15 py-12">



              <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3">



                <div className="flex flex-col items-center">



                  <h3 className="text-5xl font-black text-white">

                    500+

                  </h3>



                  <p className="mt-3 text-blue-100">

                    Enterprise Clients

                  </p>



                </div>





                <div className="flex flex-col items-center">



                  <h3 className="text-5xl font-black text-white">

                    1M+

                  </h3>



                  <p className="mt-3 text-blue-100">

                    Professionals Trained

                  </p>



                </div>





                <div className="flex flex-col items-center">



                  <h3 className="text-5xl font-black text-white">

                    95%

                  </h3>



                  <p className="mt-3 text-blue-100">

                    Learner Satisfaction

                  </p>



                </div>



              </div>



            </div>





            {/* CTA */}

            {/* CTA Button */}



            <div className="mx-auto mt-16 flex flex-col items-center justify-center">



              <Button

                className="group min-w-[300px] rounded-2xl bg-white px-10 py-4 text-lg font-semibold text-blue-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100"

              >



                <span className="flex items-center justify-center">



                  Book a Free Consultation



                  <ArrowRight

                    size={20}

                    className="ml-3 transition-transform duration-300 group-hover:translate-x-1"

                  />



                </span>



              </Button>





              <p className="mx-auto mt-6 max-w-xl text-center text-base leading-8 text-blue-100">



                Schedule a personalized consultation with our enterprise

                learning experts and discover the right learning strategy

                tailored to your business goals.



              </p>



            </div>





          </div>





          {/* Decorative Elements */}



          <div className="pointer-events-none absolute left-12 top-14 h-3 w-3 rounded-full bg-white/30" />



          <div className="pointer-events-none absolute right-16 top-20 h-2.5 w-2.5 rounded-full bg-cyan-200/70" />



          <div className="pointer-events-none absolute left-20 bottom-16 h-3.5 w-3.5 rounded-full bg-white/20" />



          <div className="pointer-events-none absolute right-24 bottom-20 h-3 w-3 rounded-full bg-cyan-200/60" />



        </div>



      </div>



    </section>

  );

}