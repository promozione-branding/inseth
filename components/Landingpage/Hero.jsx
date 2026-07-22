"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import {
  FiArrowRight,
  FiDownload,
} from "react-icons/fi";

import {
  BsLightningCharge,
  BsTools,
  BsGear,
  BsTruck,
} from "react-icons/bs";

import {
  FaAward,
  FaCheckCircle,
} from "react-icons/fa";

export default function Hero() {

  const slides = [

    {
      image: "/heroimg.png",
      title: "High-Performance Motors for Every Industry",
      subtitle:
        "Delivering unmatched performance, energy efficiency and long-lasting reliability for residential, commercial and industrial applications.",
    },

    {
      image: "/heroimg2.png",
      title: "Industrial Pumping Solutions",
      subtitle:
        "High-performance centrifugal pumps engineered for maximum flow, superior efficiency and minimum maintenance.",
    },

  ];

  const [active, setActive] = useState(0);

  const features = [

    {
      icon: <BsLightningCharge />,
      text: "Energy Efficient",
    },

    {
      icon: <BsTools />,
      text: "Low Maintenance",
    },

    {
      icon: <BsGear />,
      text: "Copper Winding",
    },

    {
      icon: <BsTruck />,
      text: "Fast Delivery",
    },

  ];

  return (

<section
style={{backgroundImage:"url('/bghero.jpg')"}}
className="relative h-[95vh] overflow-hidden bg-cover bg-center"
>

{/* Overlay */}

<div className="absolute inset-0 bg-[#041C42]/75"/>

{/* Decorative Blur */}

<div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-cyan-500/20 blur-[140px]" />

<div className="absolute right-[-250px] top-10 w-[700px] h-[700px] rounded-full bg-blue-600/20 blur-[140px]" />

{/* Rotating Rings */}

<div className="absolute right-20 top-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-orange-500/60 animate-spin [animation-duration:40s]" />

<div className="absolute right-40 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-white/30 animate-spin [animation-duration:30s] [animation-direction:reverse]" />

<div className="relative z-20 max-w-7xl mx-auto px-6 min-h-screen flex items-center">

<div className="grid lg:grid-cols-2 gap-16 items-center w-full">

  {/* ================= LEFT ================= */}

<div className="text-white">

  {/* Premium Badge */}

  {/* <div className="inline-flex items-center gap-3 rounded-full border border-orange-500 bg-cyan-500/10 backdrop-blur-xl px-5 py-2">

    <span className="w-3 h-3 rounded-full bg-[#F58220] animate-pulse"></span>

    <span className="text-sm tracking-wide font-medium">
      India's Trusted Water Pump Manufacturer
    </span>

  </div> */}

  {/* Heading */}

  <div
    key={active}
    className="mt-8 animate-[fade_.6s_ease]"
  >

    <h1 className="text-5xl md:text-6xl  font-bold leading-3.9 ">

      {slides[active].title}

    

    </h1>

    <p className="mt-8 text-xl leading-9 text-white max-w-xl">

      {slides[active].subtitle}

    </p>

  </div>

  {/* Feature Cards */}

  {/* <div className="grid grid-cols-2 gap-5 mt-12">

    {features.map((item) => (

      <div
        key={item.text}
        className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:bg-cyan-500/10 transition duration-300"
      >

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center text-2xl shadow-lg">

            {item.icon}

          </div>

          <div>

            <h4 className="font-bold text-lg">

              {item.text}

            </h4>

            <p className="text-slate-400 text-sm">

              Premium Quality

            </p>

          </div>

        </div>

      </div>

    ))}

  </div> */}

  {/* CTA */}

  <div className="flex flex-wrap gap-6 mt-12">

    <button className="group px-9 py-5 rounded-xl bg-gradient-to-r from-[#F58220] to-blue-800 text-white font-semibold text-lg shadow-[0_25px_50px_rgba(0,160,255,.35)] hover:scale-105 transition">

      <span className="flex items-center gap-3">

        Request A Quote

        <FiArrowRight className="group-hover:translate-x-1 transition" />

      </span>

    </button>

    <button className="px-9 py-5 rounded-xl border border-white/20 bg-orange-600/10 backdrop-blur-xl font-semibold text-lg hover:bg-white/20 transition">

      <span className="flex items-center gap-3">

        Download Catalogue

        <FiDownload />

      </span>

    </button>

  </div>

  {/* Trust */}

  <div className="flex flex-wrap gap-8 mt-12">

    <div className="flex items-center gap-3">

      <FaAward className="text-yellow-400 text-2xl" />

      <span>ISO 9001:2015 Certified</span>

    </div>

    <div className="flex items-center gap-3">

      <FaCheckCircle className="text-cyan-400 text-2xl" />

      <span>25+ Years Experience</span>

    </div>

  </div>

</div>


{/* ================= RIGHT ================= */}

<div className="relative flex items-center justify-center">

  {/* Glow */}

  <div className="absolute w-[700px] h-[700px] rounded-full bg-cyan-400/20 blur-[140px]" />

  {/* Image Slider */}

  <Swiper
    modules={[Autoplay, EffectFade]}
    effect="fade"
    fadeEffect={{ crossFade: true }}
    loop
    speed={900}
    autoplay={{
      delay: 4500,
      disableOnInteraction: false,
    }}
    onSlideChange={(swiper) =>
      setActive(swiper.realIndex)
    }
    className="w-full"
  >

    {slides.map((slide) => (

      <SwiperSlide key={slide.title}>

        <div className="relative flex justify-center">

          <Image
            src={slide.image}
            alt={slide.title}
            width={820}
            height={720}
            priority
            className="relative z-20 w-full max-w-[720px] object-contain drop-shadow-[0_45px_70px_rgba(0,0,0,.55)] animate-[float_5s_ease-in-out_infinite]"
          />

        </div>

      </SwiperSlide>

    ))}

  </Swiper>

  {/* Energy Card */}

  {/* <div className="absolute left-0 top-16 z-30">

    <div className="rounded-2xl bg-white shadow-2xl p-6 w-56">

      <h3 className="text-4xl font-black text-cyan-600">
        98%
      </h3>

      <p className="mt-2 text-slate-700 font-semibold">
        Energy Efficient
      </p>

      <p className="text-sm text-slate-500 mt-2">
        Designed for maximum output with minimum power consumption.
      </p>

    </div>

  </div> */}

  {/* Warranty */}



  {/* Copper */}

  <div className="absolute left-8 -bottom-20 z-30">

    <div className="rounded-2xl bg-white shadow-2xl p-6 w-60">

      <div className="flex items-center gap-3">

        <BsGear className="text-3xl text-[#F58220] " />

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

  {/* Protection */}

  <div className="absolute right-8 -bottom-10 z-30">

    <div className="rounded-2xl bg-gradient-to-r from-[#F58220] to-blue-800 text-white shadow-2xl p-6 w-60">

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

  

    {/* ================= Decorative Lines ================= */}

    <div className="absolute left-0 top-0 w-full h-full pointer-events-none">

      <div className="absolute top-24 left-20 w-40 h-px bg-gradient-to-r from-cyan-400 to-transparent opacity-40"></div>

      <div className="absolute bottom-40 right-20 w-56 h-px bg-gradient-to-l from-cyan-400 to-transparent opacity-40"></div>

    </div>

    {/* ================= Animations ================= */}

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
          box-shadow: 0 0 0 rgba(34,211,238,.2);
        }

        50% {
          box-shadow: 0 0 60px rgba(34,211,238,.35);
        }

        100% {
          box-shadow: 0 0 0 rgba(34,211,238,.2);
        }

      }

    `}</style>

</section>

  );

}