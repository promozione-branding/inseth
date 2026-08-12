"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import {
  FaIndustry,
  FaOilCan,
  FaBolt,
  FaWarehouse,
  FaCogs,
  FaTruckMoving,
  FaWater,
  FaFlask,
} from "react-icons/fa";

export default function IndustriesSection() {
  const industries = [
    {
      title: "Cement",
      image: "/cement.jpg",
      icon: <FaIndustry />,
    },
    {
      title: "Textile",
      image: "/textile.jpg",
      icon: <FaOilCan />,
    },
    {
      title: "packaging",
      image: "/pack.jpeg",
      icon: <FaBolt />,
    },
    {
      title: "Pharmaceuticals",
      image: "/Pharmaceuticals.jpg",
      icon: <FaWarehouse />,
    },
    {
      title: "Steel ",
      image: "/steel.jfif",
      icon: <FaCogs />,
    },
    {
      title: "Mining",
      image: "/mining.jfif",
      icon: <FaTruckMoving />,
    },
   
    {
      title: "Chemical",
      image: "/chemical.jfif",
      icon: <FaFlask />,
    },
  ];

  return (
    <section className="py-10 bg-[#F7F9FC] overflow-hidden">
      <div className="w-full mx-auto px-18">

        <div className="text-center mb-10">

          <span className="text-[#F58220] uppercase tracking-[4px] font-semibold">
            Industries We Serve
          </span>

          <h2 className="mt-4 text-5xl font-black text-[#072F55]">
            Delivering Solutions Across
            <span className="text-[#00c3fd]"> Every Industry</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg leading-8">
            Our motors, gearboxes and power transmission products are trusted
            by industries across India for unmatched efficiency,
            reliability and long service life.
          </p>

        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={25}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
         
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {industries.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group relative overflow-hidden rounded-2xl shadow-xl h-[430px] cursor-pointer">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#08254F] via-[#08254F]/40 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8">

                  <div className="w-16 h-16 rounded-xl bg-[#00c3fd] text-white flex items-center justify-center text-3xl mb-6 group-hover:rotate-12 transition">
                    {item.icon}
                  </div>

                  <h3 className="text-white text-3xl font-bold">
                    {item.title}
                  </h3>

                  <div className="mt-4 w-14 h-1 bg-[#F58220] group-hover:w-28 transition-all duration-500" />

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}