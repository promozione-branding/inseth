"use client";

import Reveal from "@/components/Landingpage/Reveal";
import { BiBadgeCheck, BiWrench } from "react-icons/bi";
import { BsArrowUpRight, BsArrowUpRightCircle, BsEye } from "react-icons/bs";
import { FaGauge, FaIndianRupeeSign } from "react-icons/fa6";
import { FcFactory } from "react-icons/fc";
import { FiTarget } from "react-icons/fi";
import { LuHeartHandshake, LuSettings2 } from "react-icons/lu";

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{ backgroundImage: "url('/ctabg.jpg')" }}
        className="w-full  bg-cover bg-center h-[50vh] md:h-[60vh] relative"
      >
        <div className="px-5 absolute inset-0 text-center flex items-center justify-center ">
          <h2 className=" text-white p-2 text-2xl md:text-6xl font-bold z-10">
            About AD Motorincs
          </h2>
        </div>

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute inset-0 bg-black/30"></div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-6 md:py-15 bg-[#F8FAFC]">
        <div className=" mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className=" text-black">
           
              {" "}
              <h2 className="text-4xl leading-snug font-semibold mb-5">
                Trusted Electric Motor Manufacturer{" "}
                <span className="text-[#F58220]"> in India</span>
              </h2>
           

            <div className="text-justify space-y-3 text-base">
             
                <p>
                  AD Motorincs is a trusted electric motor manufacturer
                  dedicated to providing reliable, efficient, and
                  high-performance motor solutions for diverse industrial
                  applications. We focus on delivering quality Electric Motors
                  designed to meet the performance, durability, and operational
                  requirements of modern industries.
                </p>
             

                <p>
                  With a strong focus on engineering, product quality, and
                  customer satisfaction, we aim to build long-term relationships
                  with businesses looking for dependable industrial electric
                  motors and power transmission solutions.
                </p>
             

                <p>
                  Our products are suitable for a wide range of applications,
                  including manufacturing machinery, conveyors, pumps, material
                  handling equipment, packaging machines, processing equipment,
                  automation systems, and other industrial applications.
                </p>
             
            </div>
          </div>

         
            <img src="/c.webp" className="w-full h-full" />
         
        </div>
      </section>

      {/* VISION */}
      <section className="relative py-6 md:py-16 bg-gradient-to-b from-white via-orange-50/30 to-white overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-orange-100/50 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-20 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          {/*
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-[#F58220] text-sm font-semibold mb-4">
          Our Purpose
        </span>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Driven by{" "}
          <span className="text-[#F58220]">Purpose</span>,
          <br className="hidden md:block" /> Built for the Future
        </h2>

        <p className="mt-4 text-gray-600 text-base md:text-lg leading-7">
          Our mission and vision guide everything we do — from engineering
          reliable motors to building long-lasting relationships with our
          customers.
        </p>
      </div>
    */}

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-7 lg:gap-10">
            {/* Mission Card */}
           
              <div className="group relative h-full bg-white rounded-3xl p-7 md:p-10 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Top Accent */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#F58220]" />

                {/* Decorative Circle */}
                <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-orange-50 group-hover:scale-110 transition-transform duration-500" />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-orange-100 text-[#F58220] flex items-center justify-center mb-7 group-hover:bg-[#F58220] group-hover:text-white transition-all duration-500">
                    <FiTarget size={30} />
                  </div>

                  <span className="text-sm font-semibold uppercase tracking-widest text-[#F58220]">
                    What We Do
                  </span>

                  <h3 className="text-3xl font-bold text-gray-900 mt-2 mb-6">
                    Our Mission
                  </h3>

                  <div className="space-y-5 text-gray-600 leading-7 text-base md:text-lg">
                   
                      <p>
                        Our goal is to be a name that people trust when it comes
                        to making motors. We want to create products that solve
                        technical challenges and ensure our customers are
                        completely satisfied with what we do.
                      </p>
                   

                      <p>
                        We continuously improve our products and services to
                        meet the evolving needs of industries and machine
                        manufacturers, delivering dependable solutions that
                        support their success.
                      </p>
                   
                  </div>

                  {/* Bottom Highlight */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                      <span className="w-8 h-1 rounded-full bg-[#F58220]" />
                      Reliable Engineering
                    </div>
                  </div>
                </div>
              </div>
           

            {/* Vision Card */}
              <div className="group relative h-full bg-gray-900 rounded-3xl p-7 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute -right-20 -top-20 w-56 h-56 rounded-full bg-[#F58220]/10 group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#F58220]/5 rounded-full blur-2xl" />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-[#F58220] text-white flex items-center justify-center mb-7 group-hover:scale-105 transition-transform duration-500">
                    <BsEye size={30} />
                  </div>

                  <span className="text-sm font-semibold uppercase tracking-widest text-orange-400">
                    Where We're Going
                  </span>

                  <h3 className="text-3xl font-bold text-white mt-2 mb-6">
                    Our Vision
                  </h3>

                  <div className="space-y-5 text-gray-300 leading-7 text-base md:text-lg">
                      <p>
                        Our goal is to make{" "}
                        <strong className="text-white">AD Motorincs</strong> a
                        recognized{" "}
                        <strong className="text-orange-400">
                          Electric Motor Manufacturer in India
                        </strong>
                        .
                      </p>
                   

                      <p>
                        We want AD Motorincs to be known for producing reliable
                        products backed by strong engineering skills, consistent
                        quality, and a commitment to customer satisfaction.
                      </p>
                   
                  </div>

                  {/* Bottom Highlight */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-3 text-sm font-semibold text-gray-300">
                      <span className="w-8 h-1 rounded-full bg-[#F58220]" />
                      Building a Better Future
                    </div>
                  </div>
                </div>
              </div>
           
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="relative py-6 md:py-16 bg-[#F8FAFC] overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-200 rounded-full blur-[160px] opacity-30" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-200 rounded-full blur-[160px] opacity-30" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Heading */}
         
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
              <span className="inline-flex px-4 py-2 rounded-full bg-orange-100 text-[#F58220] text-sm font-semibold mb-4">
                Our Expertise
              </span>

              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                Our Electric Motor{" "}
                <span className="text-[#F58220]">Solutions</span>
              </h2>

              <p className="mt-4 text-gray-600 text-base md:text-lg leading-7">
                At <strong>AD Motorincs</strong>, we provide reliable motor and
                power transmission solutions designed to meet the needs of
                different industrial applications.
              </p>
            </div>
         

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* CARD 1 */}
           
              <div className="group relative h-full overflow-hidden bg-white p-7 md:p-8 rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                {/* Top Accent */}
                <span className="absolute top-0 left-0 w-full h-1 bg-[#F58220]" />

                {/* Number */}
                <div className="relative z-10 w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-[#F58220] font-bold text-lg group-hover:bg-[#F58220] group-hover:text-white transition-all duration-300">
                  01
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Electric Motor Solutions
                </h3>

                <p className="text-gray-600 leading-7 mb-5">
                  We offer a wide range of motor and power transmission
                  solutions designed for industrial applications.
                </p>

                <ul className="space-y-3 text-gray-600 text-sm md:text-base">
                  {[
                    "Industrial Electric Motors",
                    "AC Motors",
                    "Three Phase Motors",
                    "Geared Motors",
                    "Gearboxes",
                    "Power Transmission Products",
                    "Application-Specific Motor Solutions",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#F58220] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
           

            {/* CARD 2 */}
              <div className="group relative h-full overflow-hidden bg-white p-7 md:p-8 rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                {/* Top Accent */}
                <span className="absolute top-0 left-0 w-full h-1 bg-[#F58220]" />

                {/* Number */}
                <div className="relative z-10 w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-[#F58220] font-bold text-lg group-hover:bg-[#F58220] group-hover:text-white transition-all duration-300">
                  02
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Commitment to Quality
                </h3>

                <p className="text-gray-600 leading-7 mb-6">
                  Quality is at the heart of everything we do. We work to
                  provide motor solutions that deliver dependable performance
                  and long-term value.
                </p>

                <ul className="space-y-3 text-gray-600 text-sm md:text-base">
                  {[
                    "Reliable product performance",
                    "Efficient operation",
                    "Durable construction",
                    "Consistent quality",
                    "Application suitability",
                    "Customer-focused service",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#F58220] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-gray-600 text-sm md:text-base leading-6">
                  A reliable electric motor helps machines operate smoothly,
                  improve productivity, and support longer equipment life.
                </p>
              </div>
           

            {/* CARD 3 */}
              <div className="group relative h-full overflow-hidden bg-gray-900 p-7 md:p-8 rounded-3xl border border-gray-800 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                {/* Top Accent */}
                <span className="absolute top-0 left-0 w-full h-1 bg-[#F58220]" />

                {/* Number */}
                <div className="relative z-10 w-14 h-14 bg-[#F58220] rounded-2xl flex items-center justify-center mb-6 text-white font-bold text-lg">
                  03
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  Technical Expertise
                </h3>

                <p className="text-gray-300 leading-7 mb-6">
                  Choosing the right motor depends on your application. We help
                  customers understand their requirements and select a suitable
                  motor solution.
                </p>

                <p className="text-gray-300 text-sm md:text-base leading-7 mb-5">
                  Important factors include:
                </p>

                <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-gray-300 text-sm">
                  {[
                    "Power",
                    "Speed",
                    "Torque",
                    "Voltage",
                    "Load",
                    "Duty Cycle",
                    "Mounting",
                    "Operating Conditions",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F58220] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 pt-5 border-t border-white/10">
                  <p className="text-gray-300 text-sm md:text-base leading-6">
                    Whether you need a motor for a{" "}
                    <span className="text-white font-medium">
                      conveyor, machine, pump, packaging system, or material
                      handling equipment
                    </span>
                    , our team can help you find the right solution.
                  </p>
                </div>
              </div>
           
          </div>

          {/* Bottom Highlight */}
            <div className="mt-10 md:mt-14  rounded-2xl p-5 md:p-7 text-center ">
              <p className="text-gray-700 text-base md:text-lg leading-7">
                <strong className="text-gray-900">
                  Need help choosing the right motor?
                </strong>{" "}
                Share your application requirements with AD Motorincs and let
                our team help you find a suitable motor solution.
              </p>
            </div>
         
        </div>
      </section>

      <section className="relative py-6 md:py-16 bg-gray-950 text-white overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#F58220]/10 rounded-full blur-[140px]" />

        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          {/* Heading */}
         
            <div className="max-w-3xl mb-10 md:mb-14">
              <span className="inline-flex items-center gap-2 text-[#F58220] text-sm font-semibold uppercase tracking-[0.2em]">
                Industries We Serve
              </span>

              <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Serving Diverse{" "}
                <span className="text-[#F58220]">Industrial Applications</span>
              </h2>

              <p className="mt-5 text-gray-400 text-base md:text-lg leading-7 max-w-2xl">
                Our electric motor solutions are designed to support a wide
                range of industries, machinery, and industrial applications
                requiring reliable performance and power transmission.
              </p>
            </div>
         

          {/* MAIN CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
            {/* ================= STICKY IMAGE ================= */}
            <div className="hidden md:block md:sticky md:top-24 self-start">
             
                <div className="relative h-[calc(100vh-6rem)] max-h-[700px] min-h-[500px] rounded-3xl overflow-hidden">
                  {/* Image */}
                  <img
                    src="/a.webp"
                    alt="Industrial electric motor applications"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Orange Glow */}
                  <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#F58220]/30 rounded-full blur-[100px]" />

                  {/* Image Content */}
                  <div className="absolute  inset-x-0 bottom-0 p-8 md:p-10">
                    <span className="inline-block text-xs uppercase tracking-[0.2em] font-semibold text-[#F58220] mb-3">
                      AD Motorincs
                    </span>

                    <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                      Powering Industries
                      <br />
                      With Reliable Motors
                    </h3>

                    <p className="mt-4 text-gray-300 leading-7 max-w-md">
                      Reliable electric motor solutions designed for demanding
                      industrial applications and continuous performance.
                    </p>
                  </div>
                </div>
             
            </div>

            {/* ================= RIGHT CONTENT ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Manufacturing */}
                <div className="group min-h-[220px] p-6 md:p-5 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-[#F58220]/40 transition-all duration-300">
                  <div className="flex items-center relative justify-between mb-6">
                    <span className="text-[#F58220] absolute right-1 text-3xl  font-bold">01</span>

                    <BsArrowUpRight
                      size={20}
                      className="text-gray-600 group-hover:text-[#F58220] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold mb-3">
                    Manufacturing Industry
                  </h3>

                  <p className="text-gray-400 text-sm leading-6">
                    Electric motors are used in production machinery, processing
                    equipment, and automated manufacturing systems.
                  </p>
                </div>
             

              {/* Material Handling */}
               
                <div className="group min-h-[220px] p-6 md:p-5 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-[#F58220]/40 transition-all duration-300">
                  <div className="flex items-center relative justify-between mb-6">
                    <span className="text-[#F58220] absolute right-1 text-3xl  font-bold">02</span>

                    <BsArrowUpRight
                      size={20}
                      className="text-gray-600 group-hover:text-[#F58220] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold mb-3">
                    Material Handling
                  </h3>

                  <p className="text-gray-400 text-sm leading-6">
                    Motors and geared motors support conveyors, lifting systems,
                    material handling equipment, and warehouse machinery.
                  </p>
                </div>
             

              {/* Packaging */}
               
                <div className="group min-h-[220px] p-6 md:p-5 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-[#F58220]/40 transition-all duration-300">
                  <div className="flex relative items-center justify-between mb-6">
                    <span className="text-[#F58220] absolute right-1 text-3xl   font-bold">03</span>

                    <BsArrowUpRight
                      size={20}
                      className="text-gray-600 group-hover:text-[#F58220] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold mb-3">
                    Packaging Industry
                  </h3>

                  <p className="text-gray-400 text-sm leading-6">
                    Reliable motor performance supports packaging machinery that
                    requires controlled and consistent movement.
                  </p>
                </div>
             

              {/* Engineering */}
              
                <div className="group min-h-[220px] p-6 md:p-5 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-[#F58220]/40 transition-all duration-300">
                  <div className="flex items-center relative justify-between mb-6">
                    <span className="text-[#F58220] absolute right-1 text-3xl font-bold">04</span>

                    <BsArrowUpRight
                      size={20}
                      className="text-gray-600 group-hover:text-[#F58220] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold mb-3">
                    Engineering Industry
                  </h3>

                  <p className="text-gray-400 text-sm leading-6">
                    Industrial electric motors are used across a variety of
                    engineering machines and equipment.
                  </p>
                </div>
             

              {/* Processing */}
              
                
             
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="relative py-6 md:py-16 bg-gradient-to-b from-white to-orange-50/30 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          {/* Heading */}
         
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-[#F58220] text-sm font-semibold mb-4">
                Why Choose Us
              </span>

              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                Why Choose <span className="text-[#F58220]">AD Motorincs?</span>
              </h2>

              <p className="mt-4 text-gray-600 text-base md:text-lg leading-7">
                We combine reliable engineering, technical expertise, and
                customer-focused service to deliver dependable electric motor
                solutions for industrial applications.
              </p>
            </div>
         

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
            {/* Quality */}
           
              <div className="group h-full bg-white border border-gray-100 rounded-2xl p-6 md:p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#F58220] flex items-center justify-center mb-5 group-hover:bg-[#F58220] group-hover:text-white transition-all duration-300">
                  <BiBadgeCheck size={25} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Quality-Focused Solutions
                </h3>

                <p className="text-gray-600 leading-7">
                  We focus on providing electric motor solutions designed for
                  reliable and efficient industrial operation.
                </p>
              </div>
           

            {/* Application Guidance */}
             
              <div className="group h-full bg-white border border-gray-100 rounded-2xl p-6 md:p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#F58220] flex items-center justify-center mb-5 group-hover:bg-[#F58220] group-hover:text-white transition-all duration-300">
                  <LuSettings2 size={25} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Application-Based Guidance
                </h3>

                <p className="text-gray-600 leading-7">
                  Every application is different. We assist customers in
                  selecting suitable motor specifications for their specific
                  requirements.
                </p>
              </div>
           

            {/* Reliable Performance */}
            
              <div className="group h-full bg-white border border-gray-100 rounded-2xl p-6 md:p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#F58220] flex items-center justify-center mb-5 group-hover:bg-[#F58220] group-hover:text-white transition-all duration-300">
                  <FaGauge size={25} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Reliable Performance
                </h3>

                <p className="text-gray-600 leading-7">
                  Our motor solutions are designed to deliver consistent and
                  dependable performance across demanding applications.
                </p>
              </div>
           

            {/* Competitive Pricing */}
              <div className="group h-full bg-white border border-gray-100 rounded-2xl p-6 md:p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#F58220] flex items-center justify-center mb-5 group-hover:bg-[#F58220] group-hover:text-white transition-all duration-300">
                  <FaIndianRupeeSign size={25} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Competitive Pricing
                </h3>

                <p className="text-gray-600 leading-7">
                  We provide cost-effective motor solutions while maintaining
                  dependable product quality and performance.
                </p>
              </div>
           

            {/* Technical Support */}
              <div className="group h-full bg-white border border-gray-100 rounded-2xl p-6 md:p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#F58220] flex items-center justify-center mb-5 group-hover:bg-[#F58220] group-hover:text-white transition-all duration-300">
                  <BiWrench size={25} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Technical Support
                </h3>

                <p className="text-gray-600 leading-7">
                  Our team provides technical assistance during product
                  selection and helps customers understand their motor
                  requirements.
                </p>
              </div>
           

            {/* Customer Satisfaction */}
              <div className="group h-full bg-white border border-gray-100 rounded-2xl p-6 md:p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#F58220] flex items-center justify-center mb-5 group-hover:bg-[#F58220] group-hover:text-white transition-all duration-300">
                  <LuHeartHandshake size={25} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Customer Satisfaction
                </h3>

                <p className="text-gray-600 leading-7">
                  We build long-term relationships through dependable products,
                  responsive communication, and reliable service.
                </p>
              </div>
           
          </div>
        </div>
      </section>

      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/bag/cta.jpg"
            alt="Garbage Bags"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90" />
        </div>

        <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-600/30 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-[120px]" />

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-14 text-center text-white shadow-2xl">
            {/* Heading */}
           
              <h2 className="text-3xl md:text-5xl font-semibold mb-4 md:mb-6 leading-tight">
                Looking for a Reliable{" "}
                <span className="text-[#F58220]">
                  Electric Motor Manufacturer?
                </span>
              </h2>
           

            {/* Content */}
              <p className="text-white/80 max-w-3xl mx-auto leading-relaxed mb-8 text-base md:text-lg">
                Whether you need{" "}
                <span className="text-white font-medium">
                  AC motors, three-phase motors, or geared motors
                </span>
                , AD Motorincs can help you find the right solution for your
                industrial application.
              </p>
           

            {/* Highlight */}
              <p className="text-base md:text-lg font-semibold text-[#F58220] mb-8">
                AD Motorincs – Reliable Electric Motor Solutions for Industrial
                Applications.
              </p>
           

            {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-[#F58220] hover:bg-[#d96f16] transition-all rounded-full font-semibold shadow-lg hover:scale-105 duration-300"
                >
                  Request a Quote
                </a>

                <a
                  href="/products"
                  className="px-8 py-4 border border-white/30 hover:border-[#F58220] hover:text-[#F58220] transition-all rounded-full font-semibold backdrop-blur-md"
                >
                  Explore Our Products
                </a>
              </div>
           
          </div>
        </div>
      </section>
    </>
  );
}
