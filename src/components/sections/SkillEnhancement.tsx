import {

  ArrowRight,

  GraduationCap,

  BadgeCheck,

  BarChart3,

  Users,

  Sparkles,

} from "lucide-react";

import Button from "../common/Button";



const features = [

  {

    title: "Personalized Learning Paths",

    description:

      "Customized learning journeys aligned with employee roles, skill levels, and business objectives.",

    icon: GraduationCap,

  },

  {

    title: "Industry Certifications",

    description:

      "Earn globally recognized certifications that validate expertise and accelerate career growth.",

    icon: BadgeCheck,

  },

  {

    title: "Learning Analytics",

    description:

      "Track learning engagement, completion rates, and workforce performance with real-time insights.",

    icon: BarChart3,

  },

  {

    title: "Expert Coaching",

    description:

      "Receive mentorship from experienced professionals through interactive workshops and live sessions.",

    icon: Users,

  },

];



const stats = [

  {

    value: "500K+",

    label: "Professionals Upskilled",

  },

  {

    value: "98%",

    label: "Completion Rate",

  },

  {

    value: "250+",

    label: "Enterprise Partners",

  },

];



export default function SkillEnhancement() {

  return (

    <section

      id="skill-enhancement"

      className="section-md bg-white"

      aria-labelledby="skill-enhancement-heading"

    >

      <div className="container-custom">

        {/* Heading */}



        <div className="flex flex-col items-center text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">

            <Sparkles size={16} />

            Skill Enhancement

          </span>



          <h2

            id="skill-enhancement-heading"

            className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl"

          >

            Build a Workforce Ready for{" "}

            <span className="text-blue-600">Tomorrow</span>

          </h2>



          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">

            Empower your workforce with practical learning experiences,

            measurable business outcomes, and industry-leading mentorship

            designed to accelerate enterprise growth.

          </p>

        </div>



        {/* Stats */}



        <div className="mt-16 flex flex-wrap items-center justify-center gap-10 lg:gap-20">

          {stats.map((stat) => (

            <div

              key={stat.value}

              className="text-center"

            >

              <h3 className="text-5xl font-extrabold text-slate-900">

                {stat.value}

              </h3>



              <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-blue-600" />



              <p className="mt-4 text-base text-slate-500">

                {stat.label}

              </p>

            </div>

          ))}

        </div>



        {/* CTA */}



        <div className="mt-12 flex justify-center">

          <Button className="group px-8 py-4">

            Explore Learning



            <ArrowRight

              size={18}

              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"

            />

          </Button>

        </div>



        {/* Feature Cards */}



        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature) => {

            const Icon = feature.icon;



            return (

              <article

                key={feature.title}

                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,.12)]"

              >

                {/* Icon */}



                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">

                  <Icon size={30} />

                </div>



                {/* Accent */}



                <div className="mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 group-hover:w-20" />



                {/* Title */}



                <h3 className="mt-6 text-2xl font-bold text-slate-900">

                  {feature.title}

                </h3>



                {/* Description */}



                <p className="mt-4 flex-1 leading-8 text-slate-600">

                  {feature.description}

                </p>



                {/* Footer */}



                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">

                  <span className="text-sm font-medium text-slate-500">

                    Enterprise Learning

                  </span>



                  <span className="flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all duration-300 group-hover:gap-3">

                    Learn More



                    <ArrowRight size={16} />

                  </span>

                </div>

              </article>

            );

          })}

        </div>

      </div>



      {/* Bottom Divider */}



      <div className="mt-24 flex justify-center">

        <div className="h-px w-40 rounded-full bg-gradient-to-r from-transparent via-blue-300 to-transparent" />

      </div>

    </section>

  );

}



