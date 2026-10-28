"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What types of electric motors does AD Motoronics manufacture?",
    a: (
      <>
        AD Motoronics offers a range of{" "}
        <strong>industrial electric motors</strong> designed for different
        applications, including manufacturing machinery, conveyors, pumps,
        material handling systems, and other industrial equipment.
      </>
    ),
  },
  {
    q: "How do I choose the right electric motor for my application?",
    a: (
      <>
        The right motor depends on factors such as <strong> power, speed, torque,
        voltage, load, duty cycle, and mounting arrangement. </strong> Our technical
        team can help you select a suitable motor based on your application
        requirements.
      </>
    ),
  },
  {
    q: "Does AD Motoronics supply electric motors across India?",
    a: (
      <>
        Yes, AD Motoronics provides <strong> electric motor solutions across India, </strong> 
        serving customers from various industrial sectors and locations.
      </>
    ),
  },
  {
    q: "Does AD Motoronics provide technical and after-sales support?",
    a: (
      <>
        Yes. We provide <strong> technical consultation and after-sales support </strong> to
        help customers with product selection, installation-related
        requirements, and ongoing motor performance.
      </>
    ),
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-14 bg-gradient-to-b from-[#F7FBFF] to-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40" />

      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-50" />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        {/* Heading */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 bg-blue-100 text-[#F58220] px-5 py-2 rounded-full font-semibold text-xl">
            <HelpCircle size={18} />
            Frequently Asked Questions
          </span>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-8">
            Find answers to the most common questions regarding our electric
            motors, installation, warranty, maintenance, and industrial
            motor solutions.
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const open = active === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  open
                    ? "border-[#1BA3F7] shadow-xl"
                    : "border-gray-200 hover:border-[#1BA3F7]/40"
                }`}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => setActive(open ? null : index)}
                  className="w-full flex items-center justify-between text-left px-5 md:px-8 py-4 bg-white"
                >
                  <div className="flex items-center gap-4 md:gap-5">
                    {/* Number */}
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-xl flex items-center justify-center font-bold transition-all duration-300 ${
                        open
                          ? "bg-[#F58220] text-white"
                          : "bg-blue-100 text-[#F58220]"
                      }`}
                    >
                      {index + 1}
                    </div>

                    {/* Question */}
                    <h3 className="text-base md:text-xl font-semibold text-black">
                      {faq.q}
                    </h3>
                  </div>

                  {/* Arrow */}
                  <ChevronDown
                    className={`shrink-0 ml-3 transition-transform duration-300 ${
                      open ? "rotate-180 text-[#F58220]" : "text-gray-500"
                    }`}
                    size={24}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-500 ${
                    open
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 md:px-8 pb-6 md:pl-[92px] md:pr-12">
                      <p className="text-gray-600 text-base md:text-lg leading-7">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}