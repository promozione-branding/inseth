"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { categories } from "@/Data";
import { FaPhone } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
// const products = [
//   {
//     title: "Worm Gearboxes",
//     description:
//       "Compact gearboxes engineered for efficient power transmission.",
//     image: "/pro2.jfif",
//   },

//   {
//     title: "Three Phase Motors",
//     description:
//       "Heavy-duty induction motors designed for continuous industrial operation.",
//     image: "/pro1.png",
//   },

//   {
//     title: "Brake Motors",
//     description:
//       "Reliable braking motors for precision and safety applications.",
//     image: "/pro3.png",
//   },
//   {
//     title: "Dual Voltage Motors",
//     description:
//       "Versatile motors supporting multiple industrial voltage standards.",
//     image: "/pro1.png",
//   },
//   {
//     title: "Foot Mounted Motors",
//     description: "Durable foot-mounted motors built for long service life.",
//     image: "/pro4.avif",
//   },
//   {
//     title: "Flange Mounted Motors",
//     description: "Space-saving flange-mounted motors for industrial machinery.",
//     image: "/pro1.png",
//   },
//   {
//     title: "Vibrator Motors",
//     description:
//       "High-performance motors for conveying, screening and vibration.",
//     image: "/pro5.webp",
//   },
//   {
//     title: "Custom Solutions",
//     description:
//       "Tailored motor and gearbox solutions for unique requirements.",
//     image: "/pro5.webp",
//   },
// ];

const products = categories.flatMap((category) => category.products || []).slice(0,8);
console.log(products);

export default function ProductSection() {
  return (
    <section className="bg-white pt-5 pb-12">
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
          {products?.map((product) => (
            <div
              key={product?.name}
              className="group  border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#004DCB] hover:shadow-xl"
            >
              <div className="flex h-40 items-center justify-center">
                <Image
                  src={product.image?.[0]?.src}
                  alt={product.image?.[0]?.alt || product.name}
                  width={200}
                  height={200}
                  className="max-h-46 w-auto object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {product?.name}
              </h3>
              {/* 
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {product?.description}
              </p> */}

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

      <section className="px-6 pt-9">
  <div
    className="mx-auto max-w-7xl rounded-2xl px-8 py-10 shadow-lg"
    style={{
      background:
        "linear-gradient(196deg, rgba(229, 127, 41, 1) 27%, rgba(0, 195, 253, 1) 100%)",
    }}
  >
    <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
      
      {/* Text */}
      <div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-[2px] text-white/90">
          Need Expert Assistance?
        </p>

        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Looking for the Right Electric Motor?
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/90 md:text-base">
          Talk to our experts today and get the right motor solution for
          your industrial application.
        </p>
      </div>

      {/* Call Button */}
      <a
        href="tel:+919873933882"
        className="inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-7 py-3.5 font-semibold text-[#E57F29] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <span className="flex p-2  items-center justify-center rounded-full bg-[#E57F29] text-white">
         <BiSolidPhoneCall size={30}/>
        </span>

        Call Now
      </a>
    </div>
  </div>
</section>
    </section>
  );
}
