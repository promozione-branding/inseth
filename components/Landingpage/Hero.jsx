"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import { FiArrowRight, FiDownload } from "react-icons/fi";
import {
  BsLightningCharge,
  BsTools,
  BsGear,
  BsTruck,
} from "react-icons/bs";

export default function Hero() {
  const slides = [
    {
      image: "/heroimg.png",
      title: "Premium Industrial Motors",
      subtitle:
        "High efficiency electric motors engineered for reliable industrial performance and long service life.",
    },
    {
      image: "/heroimg2.png",
      title: "Heavy Duty Gearboxes",
      subtitle:
        "Precision engineered gearboxes delivering maximum torque with minimum maintenance.",
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
      text: "High Torque",
    },
    {
      icon: <BsTruck />,
      text: "Fast Delivery",
    },
  ];

  return (
    <section
      style={{ backgroundImage: "url(/bghero.jpg)" }}
      className="relative overflow-hidden min-h-screen bg-cover bg-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#08254F]/60" />

      {/* Left Gradient */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-[65%] bg-gradient-to-r from-[#061C45] via-[#061C45]/90 to-transparent" />

        <div className="absolute left-[-15%] top-1/2 -translate-y-1/2 w-[900px] h-[800px] rounded-full bg-[#041735]/40 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 lg:pt-0 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* LEFT */}
          <div className="text-white">
            <div
              key={active}
              className="animate-[fade_.5s_ease]"
            >
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-black leading-tight">
                {slides[active].title}
              </h1>

              <p className="mt-6 text-lg text-gray-300 leading-8 max-w-xl">
                {slides[active].subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-7 mt-9">
              {features.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 text-gray-200 text-sm"
                >
                  <span className="text-[#ff8c1a] text-lg">
                    {item.icon}
                  </span>

                  {item.text}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="bg-[#ff8c1a] hover:bg-orange-600 transition px-8 py-4 rounded-md font-semibold flex items-center gap-2">
                REQUEST A QUOTE
                <FiArrowRight />
              </button>

              <button className="border border-gray-500 hover:border-[#ff8c1a] hover:text-[#ff8c1a] transition px-8 py-4 rounded-md font-semibold flex items-center gap-2">
                DOWNLOAD CATALOGUE
                <FiDownload />
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center lg:justify-end">
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
                  <div className="flex justify-center">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={850}
                      height={650}
                      priority
                      className="w-full max-w-[720px] object-contain drop-shadow-[0_35px_45px_rgba(0,0,0,.55)] select-none"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
}