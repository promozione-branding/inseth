"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import { FiArrowRight, FiDownload } from "react-icons/fi";
import {
  BsLightningCharge,
  BsGear,
} from "react-icons/bs";
import { FaAward, FaCheckCircle } from "react-icons/fa";

export default function Hero() {
  // Only images change.
  // Text remains the same on every slide.
  const images = [
    "/123.webp",
    "/12345.webp",
  ];

  return (
    <section
      style={{ backgroundImage: "url('/bghero.jpg')" }}
      className="relative h-[95vh]  overflow-hidden bg-cover bg-center"
    >
      {/* ================= OVERLAY ================= */}

      <div className="absolute inset-0 bg-[#041C42]/75" />

      {/* ================= DECORATIVE BLUR ================= */}

      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="absolute right-[-250px] top-10 w-[700px] h-[700px] rounded-full bg-blue-600/20 blur-[140px]" />

      {/* ================= ROTATING RINGS ================= */}

      <div className="absolute right-20 top-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-orange-500/60 animate-spin [animation-duration:40s]" />

      <div className="absolute right-40 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-white/30 animate-spin [animation-duration:30s] [animation-direction:reverse]" />

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-20 max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* ================= LEFT ================= */}

          <div className="text-white">

            {/* Heading + Description */}

            <div className="mt-8 animate-[fade_.6s_ease]">

              <h1 className="text-5xl md:text-5xl font-bold leading-tight">
                High-Performance Electric Motors for Every Industrial Need
              </h1>

              <p className="mt-8 text-lg  text-white max-w-xl">
                At AD Motorincs, we deliver dependable, energy-efficient
                electric motors engineered for powerful performance, long
                service life, and demanding industrial applications.
              </p>

              <p className="mt-6 text-base font-semibold tracking-wide text-[#F58220]">
                Power • Precision • Performance
              </p>

            </div>

            {/* ================= CTA ================= */}

            <div className="flex flex-wrap gap-6 mt-12">

              <button className="group px-9 py-5 bg-[#F58220] text-white font-semibold text-lg shadow-[0_25px_50px_rgba(0,160,255,.35)] hover:scale-105 transition">

                <span className="flex items-center gap-3">
                  Request A Quote

                  <FiArrowRight className="group-hover:translate-x-1 transition" />
                </span>

              </button>

              <button className="px-9 py-5 rounded-lg border border-white/20 bg-orange-600/10 backdrop-blur-xl font-semibold text-lg hover:bg-white/20 transition">

                <span className="flex items-center gap-3">
                  Download Catalogue

                  <FiDownload />
                </span>

              </button>

            </div>

            {/* ================= TRUST ================= */}

            <div className="flex flex-wrap gap-8 mt-12">

              <div className="flex items-center gap-3">

                <FaAward className="text-yellow-400 text-2xl" />

                <span>
                  ISO 9001:2015 Certified
                </span>

              </div>

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-cyan-400 text-2xl" />

                <span>
                  25+ Years Experience
                </span>

              </div>

            </div>

          </div>

          {/* ================= RIGHT ================= */}

          <div className="relative flex items-center justify-center">

            {/* Glow */}

            <div className="absolute w-[700px] h-[700px] rounded-full bg-cyan-400/20 blur-[140px]" />

            {/* ================= IMAGE SLIDER ================= */}

            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{
                crossFade: true,
              }}
              loop={true}
              speed={900}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              className="w-full"
            >

              {images.map((image, index) => (

                <SwiperSlide key={image}>

                  <div className="relative flex justify-center">

                    <Image
                      src={image}
                      alt="AD Motorincs Electric Motor"
                      width={820}
                      height={720}
                      priority={index === 0}
                      className="relative z-20 w-full max-w-[720px] object-contain drop-shadow-[0_45px_70px_rgba(0,0,0,.55)] animate-[float_5s_ease-in-out_infinite]"
                    />

                  </div>

                </SwiperSlide>

              ))}

            </Swiper>

            {/* ================= COPPER CARD ================= */}

            <div className="absolute left-8 bottom-1 z-30">

              <div className="bg-white shadow-2xl p-6 w-60">

                <div className="flex items-center gap-3">

                  <BsGear className="text-3xl text-[#F58220]" />

                  <div>

                    <h4 className="font-bold text-slate-800">
                      100% Copper
                    </h4>

                    <p className="text-sm text-slate-500">
                      Winding Technology
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* ================= PROTECTION CARD ================= */}

            <div className="absolute right-8 bottom-5 z-30">

              <div className="bg-[#00C3FD] text-white shadow-2xl p-6 w-60">

                <div className="flex items-center gap-3">

                  <BsLightningCharge className="text-3xl animate-pulse" />

                  <div>

                    <h4 className="font-bold">
                      IP55 Protection
                    </h4>

                    <p className="text-sm text-cyan-100">
                      Industrial Grade Build
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ================= DECORATIVE LINES ================= */}

      <div className="absolute left-0 top-0 w-full h-full pointer-events-none">

        <div className="absolute top-24 left-20 w-40 h-px bg-gradient-to-r from-cyan-400 to-transparent opacity-40" />

        <div className="absolute bottom-40 right-20 w-56 h-px bg-gradient-to-l from-cyan-400 to-transparent opacity-40" />

      </div>

      {/* ================= ANIMATIONS ================= */}

      <style jsx global>{`

        @keyframes fade {
          from {
            opacity: 0;
            transform: translateY(35px);
          }

          to {
            opacity: 1;
            transform: translateY(0px);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-18px);
          }

          100% {
            transform: translateY(0px);
          }
        }

        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 0 rgba(34, 211, 238, 0.2);
          }

          50% {
            box-shadow: 0 0 60px rgba(34, 211, 238, 0.35);
          }

          100% {
            box-shadow: 0 0 0 rgba(34, 211, 238, 0.2);
          }
        }

      `}</style>

    </section>
  );
}