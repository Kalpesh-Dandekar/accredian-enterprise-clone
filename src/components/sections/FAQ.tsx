"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How does Accredian help enterprises upskill employees?",
    answer:
      "Accredian offers industry-aligned learning programs, mentorship, certifications, analytics, and enterprise dashboards to help organizations continuously upskill their workforce.",
  },
  {
    question: "Can learning paths be customized?",
    answer:
      "Yes. Learning journeys can be tailored according to business objectives, employee roles, and organizational requirements.",
  },
  {
    question: "Do employees receive certifications?",
    answer:
      "Yes. Learners receive industry-recognized certifications after successfully completing eligible programs.",
  },
  {
    question: "How can organizations track learning progress?",
    answer:
      "Through enterprise dashboards with real-time insights, reports, completion rates, and engagement analytics.",
  },
  {
    question: "Are live mentor sessions included?",
    answer:
      "Yes. Many enterprise programs include live mentor support, doubt-solving sessions, and project guidance.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Everything you need to know about enterprise learning with
            Accredian.
          </p>
        </div>

        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-8 py-6 text-left transition hover:bg-gray-50"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>

                <span className="text-2xl font-bold text-blue-600">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="border-t border-gray-100 px-8 py-6">
                  <p className="leading-8 text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}