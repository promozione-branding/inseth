"use client";

import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0">

        <Image
          src="/ctabg.jpg"
          alt="Industrial Background"
          fill
          priority
          className="object-cover"
        />

      </div>

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-[#0b1b35]/70"></div>

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-center min-h-[420px]">

          <div className="text-center">

            <span className="uppercase tracking-[2px] text-gray-200 text-sm md:text-base font-medium">
              GENERATING MORE VALUE AT EVERY LEVEL AND BUILDING A BETTER WORLD FOR EVERYONE
            </span>

            <h2 className="mt-8 text-white font-light leading-tight text-4xl md:text-6xl ">

              Looking for a quality and affordable
              <br />

              services for{" "}

              <span className="font-extrabold">
                your next project?
              </span>

            </h2>

            <div className="mt-14">

              <button className="bg-[#F58220] transition-all duration-300 text-white font-semibold text-lg px-12 py-5  shadow-2xl hover:scale-105">

                Get a Quote

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}