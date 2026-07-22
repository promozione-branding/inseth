"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from "lucide-react";

const testimonials = [
  {
    text: "We have been using their water pumps for over three years. The performance, efficiency, and reliability are outstanding. Their technical support team always responds quickly whenever assistance is required.",
    name: "Rajesh Patel",
    designation: "Industrial Contractor",
  },
  {
    text: "Excellent quality motors with low power consumption. Installation was smooth and the after-sales service has been exceptional. Highly recommended for industrial applications.",
    name: "Amit Sharma",
    designation: "Manufacturing Plant",
  },
  {
    text: "Their pump solutions have significantly improved our water distribution system. The products are durable, efficient, and built for long-term performance.",
    name: "Sunil Verma",
    designation: "Water Treatment Company",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setIndex((index + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  };

  const current = testimonials[index];

  return (
    <section className="relative overflow-hidden py-8">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#062A57] via-[#0A4D8C] to-[#0A6CB8]" />

      <div className="absolute inset-0 bg-[url('/centrifugal-water-pump-500x500.webp')] opacity-10" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-5">

          <span className="uppercase tracking-[5px] text-[#F58220] font-semibold">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl font-black text-white">
            What Our Customers Say
          </h2>

      

        </div>

        {/* Card */}

        <div className="relative">

          <AnimatePresence mode="wait">

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6  shadow-2xl"
            >

              <Quote
                className="mx-auto text-[#F58220] mb-3"
                size={65}
              />

              <p className="text-xl md:text-2xl text-center text-white leading-10 max-w-4xl mx-auto italic">
                "{current.text}"
              </p>

            

              <div className="mt-7 text-center">

                <h3 className="text-2xl font-bold text-white">
                  {current.name}
                </h3>

                <p className="text-blue-200 mt-2">
                  {current.designation}
                </p>

              </div>

            </motion.div>

          </AnimatePresence>

          {/* Buttons */}

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 w-14 h-14 rounded-full bg-white shadow-xl hover:bg-[#F58220] hover:text-white transition flex items-center justify-center"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 w-14 h-14 rounded-full bg-white shadow-xl hover:bg-[#F58220] hover:text-white transition flex items-center justify-center"
          >
            <ChevronRight />
          </button>

        </div>

        {/* Dots */}

        <div className="flex justify-center gap-3 mt-10">

          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`transition-all duration-300 rounded-full ${
                index === i
                  ? "w-10 h-3 bg-white"
                  : "w-3 h-3 bg-[#F58220]"
              }`}
            />
          ))}

        </div>

      </div>
    </section>
  );
}