"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What types of water pumps do you offer?",
    a: "We offer centrifugal pumps, self-priming pumps, pressure booster pumps, monoblock pumps, submersible pumps, sewage pumps, and agricultural irrigation pumps for residential, commercial, and industrial applications.",
  },
  {
    q: "How do I choose the right water pump?",
    a: "The right pump depends on your flow rate, head height, water source, and application. Our experts help you select the most efficient pump based on your requirements.",
  },
  {
    q: "Are your pumps energy efficient?",
    a: "Yes. Our pumps are designed with high-efficiency motors that reduce electricity consumption while delivering consistent performance and long service life.",
  },
  {
    q: "Do you provide industrial water pumping solutions?",
    a: "Yes. We supply heavy-duty industrial pumps for factories, process plants, HVAC systems, water treatment plants, and commercial infrastructure projects.",
  },

 
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-14 bg-gradient-to-b from-[#F7FBFF] to-white overflow-hidden">

      {/* Background Decorations */}

      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-8">

          <span className="inline-flex text-xl items-center gap-2 bg-blue-100 text-[#F58220] px-5 py-2 rounded-full font-semibold">

            <HelpCircle size={18} />

            Frequently Asked Questions

          </span>


          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-8">

            Find answers to the most common questions regarding our
            water pumps, electric motors, installation, warranty,
            maintenance, and industrial pumping solutions.

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

                <button
                  onClick={() =>
                    setActive(open ? null : index)
                  }
                  className="w-full flex items-center justify-between text-left px-8 py-4 bg-white"
                >

                  <div className="flex items-center gap-5">

                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold transition ${
                        open
                          ? "bg-[#F58220] text-white"
                          : "bg-blue-100 text-[#F58220]"
                      }`}
                    >
                      {index + 1}
                    </div>

                    <h3 className="text-xl font-semibold text-[#062B57]">

                      {faq.q}

                    </h3>

                  </div>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      open ? "rotate-180 text-[#F58220]" : ""
                    }`}
                    size={26}
                  />

                </button>

                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    open ? "max-h-80" : "max-h-0"
                  }`}
                >

                  <div className="px-8 pb-8 pl-[92px]">

                    <p className="text-gray-600 leading-8">

                      {faq.a}

                    </p>

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