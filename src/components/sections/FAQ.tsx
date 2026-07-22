"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Button from "../common/Button";

const categories = [
  "About the Course",
  "About the Delivery",
  "Miscellaneous",
];

const faqs = [
  {
    question:
      "What types of corporate training programs does Accredian offer?",
    answer:
      "Accredian provides enterprise learning solutions in Data Science, AI, Cloud Computing, Cyber Security, Software Development, Leadership, Product Management and many other high-demand domains.",
  },
  {
    question: "What domain specializations are available?",
    answer:
      "Our enterprise programs cover a wide range of domains including AI, Data Analytics, Full Stack Development, Cloud, DevOps, Cyber Security, Management, and Business Leadership.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="section-sm bg-white">
      <div className="container-custom">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Frequently Asked{" "}
            <span className="text-blue-600">Questions</span>
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Everything you need to know about our enterprise learning
            solutions.
          </p>
        </div>

        {/* Content */}

        <div className="mt-16 grid gap-10 lg:grid-cols-[280px_1fr]">
          {/* Categories */}

          <div className="space-y-4">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(index)}
                className={`w-full rounded-xl border px-6 py-5 text-left text-base font-semibold transition ${
                  activeCategory === index
                    ? "border-blue-600 bg-blue-600 text-white shadow-md"
                    : "border-slate-200 bg-white text-slate-700 hover:border-blue-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ */}

          <div className="rounded-2xl border border-slate-200 bg-white">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="border-b border-slate-200 last:border-b-0"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? -1 : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-6 text-left"
                >
                  <span className="pr-6 text-lg font-semibold text-slate-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={22}
                    className={`transition duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}

        <div className="mt-14 flex justify-center">
          <Button className="px-8 py-3.5">
            Enquire Now
          </Button>
        </div>
      </div>
    </section>
  );
}