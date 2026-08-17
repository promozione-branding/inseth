"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
const products = [

  {
    title: "Worm Gearboxes",
    description:
      "Compact gearboxes engineered for efficient power transmission.",
    image: "/pro2.jfif",
  },


  {
    title: "Three Phase Motors",
    description:
      "Heavy-duty induction motors designed for continuous industrial operation.",
    image: "/pro1.png",
  },  


  {
    title: "Brake Motors",
    description:
      "Reliable braking motors for precision and safety applications.",
    image: "/pro3.png",
  },
  {
    title: "Dual Voltage Motors",
    description:
      "Versatile motors supporting multiple industrial voltage standards.",
    image: "/pro1.png",
  },
  {
    title: "Foot Mounted Motors",
    description:
      "Durable foot-mounted motors built for long service life.",
    image: "/pro4.avif",
  },
  {
    title: "Flange Mounted Motors",
    description:
      "Space-saving flange-mounted motors for industrial machinery.",
    image: "/pro1.png",
  },
  {
    title: "Vibrator Motors",
    description:
      "High-performance motors for conveying, screening and vibration.",
    image: "/pro5.webp",
  },
  {
    title: "Custom Solutions",
    description:
      "Tailored motor and gearbox solutions for unique requirements.",
    image: "/pro5.webp",
  },
];

export default function ProductSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl w-full px-15 ">
        {/* Heading */}

        <div className="text-center mb-14">
          
          <span className="text-sm font-semibold uppercase tracking-[3px] text-orange-500">
            Our Product Range
          </span>

          <h2 className="mt-2 text-4xl font-bold text-[#072F55]">
           High-Quality Electric Motors for Every Industrial Application
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#004DCB]" />
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.title}
              className="group  border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#004DCB] hover:shadow-xl"
            >
              <div className="flex h-40 items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="max-h-46 w-auto object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {product.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {product.description}
              </p>

              <div className="mt-5 inline-flex items-center gap-2 text-[#0069CB] font-medium">
                Learn More
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}