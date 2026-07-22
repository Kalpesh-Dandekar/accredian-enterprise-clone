"use client";



import { useState } from "react";

import {

  ChevronDown,

  BookOpen,

  Truck,

  HelpCircle,

  MessageCircle,

} from "lucide-react";

import Button from "../common/Button";



const categories = [

  {

    title: "About the Course",

    icon: BookOpen,

  },

  {

    title: "About the Delivery",

    icon: Truck,

  },

  {

    title: "Miscellaneous",

    icon: HelpCircle,

  },

];



const faqs = [

  {

    question:

      "What types of corporate training programs does Accredian offer?",

    answer:

      "Accredian provides enterprise learning solutions in Data Science, AI, Cloud Computing, Cyber Security, Software Development, Leadership, Product Management, and many other high-demand domains.",

  },

  {

    question: "What domain specializations are available?",

    answer:

      "Our enterprise programs cover AI, Data Analytics, Full Stack Development, Cloud, DevOps, Cyber Security, Management, Business Leadership, and other emerging technology domains.",

  },

  {

    question: "Can learning pathways be customized for organizations?",

    answer:

      "Absolutely. Learning journeys are tailored around organizational goals, employee roles, and measurable business outcomes to maximize impact.",

  },

  {

    question: "How do organizations measure learning success?",

    answer:

      "Comprehensive dashboards, analytics, learner engagement metrics, assessments, and business outcome tracking help organizations evaluate ROI.",

  },

];



export default function FAQ() {

  const [openIndex, setOpenIndex] = useState(0);

  const [activeCategory, setActiveCategory] = useState(0);



  return (

    <section

      id="faq"

      aria-labelledby="faq-heading"

      className="section-md bg-white"

    >

      <div className="container-custom">



        {/* Heading */}



        <div className="mb-20 flex flex-col items-center text-center">



          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">

            FAQs

          </span>



          <h2

            id="faq-heading"

            className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl"

          >

            Frequently Asked{" "}

            <span className="text-blue-600">

              Questions

            </span>

          </h2>



          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">

            Everything you need to know about our enterprise learning

            solutions, delivery methods, certifications, and corporate

            upskilling programs.

          </p>



        </div>



        {/* Content */}



        <div className="grid items-start gap-16 lg:grid-cols-[240px_1fr]">



          {/* Categories */}



          <aside className="space-y-3">



            {categories.map((category, index) => {

              const Icon = category.icon;



              return (

                <button

                  key={category.title}

                  onClick={() => setActiveCategory(index)}

                  className={`group flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${

                    activeCategory === index

                      ? "border-blue-200 bg-blue-50"

                      : "border-slate-200 bg-white hover:border-blue-200 hover:shadow-sm"

                  }`}

                >



                  <div

                    className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all ${

                      activeCategory === index

                        ? "bg-blue-600 text-white"

                        : "bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600"

                    }`}

                  >

                    <Icon size={20} />

                  </div>



                  <div>



                    <p className="font-semibold text-slate-900">

                      {category.title}

                    </p>



                  </div>



                </button>

              );

            })}



          </aside>



          {/* FAQ Cards */}



          <div className="space-y-6">



            {faqs.map((faq, index) => (

              <article

                key={faq.question}

                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_40px_rgba(37,99,235,.08)]"

              >



                <button

                  onClick={() =>

                    setOpenIndex(openIndex === index ? -1 : index)

                  }

                  className="flex w-full items-center justify-between px-7 py-6 text-left"

                >



                  <div className="flex items-start gap-5">



                    <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-600">

                      {String(index + 1).padStart(2, "0")}

                    </span>



                    <h3 className="max-w-2xl text-lg font-semibold leading-7 text-slate-900">

                      {faq.question}

                    </h3>



                  </div>



                  <ChevronDown

                    size={22}

                    className={`ml-6 shrink-0 transition-all duration-300 ${

                      openIndex === index

                        ? "rotate-180 text-blue-600"

                        : "text-slate-500"

                    }`}

                  />



                </button>



                {openIndex === index && (



                  <div className="border-t border-slate-100 px-7 pb-7 pt-6">



                    <div className="ml-14">



                      <p className="leading-8 text-slate-600">

                        {faq.answer}

                      </p>



                    </div>



                  </div>



                )}



              </article>

            ))}



          </div>



        </div>

        {/* Bottom CTA */}



        <div className="mt-24">



          <div className="rounded-3xl border border-slate-200 bg-slate-50 px-8 py-10 lg:px-12">



            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">



              <div className="flex items-start gap-5">



                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">



                  <MessageCircle size={28} />



                </div>



                <div>



                  <h3 className="text-2xl font-bold text-slate-900">

                    Still have questions?

                  </h3>



                  <p className="mt-3 max-w-2xl leading-7 text-slate-600">

                    Our enterprise learning specialists are here to help you

                    choose the right upskilling strategy, learning pathways,

                    and certification programs for your workforce.

                  </p>



                </div>



              </div>



              <div className="flex shrink-0">



                <Button className="px-8 py-3.5">

                  Book a Demo

                </Button>



              </div>



            </div>



          </div>



        </div>



      </div>

    </section>

  );

}