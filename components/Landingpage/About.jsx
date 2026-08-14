"use client";

import Image from "next/image";
import { FiCheckSquare, FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

export default function AboutPreview() {
  const features = [
    "Genuine & Quality Products",
    "Competitive Pricing",
    "Expert Technical Support",
    "Pan India Supply",
    "Fast Delivery",
    "Customer Satisfaction",
  ];

  const aboutImages = ["/pro1.png", "/pro3.png", "/heroimg.png"];

  return (
    <section className="py-15 relative bg-white">
      <div className="w-full mx-auto px-16">
        <div className="absolute top-0` left-7">
          <Image
            className="animate-pulse"
            width={200}
            height={200}
            src="/pattern.png"
          ></Image>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-3xl bg-[#0B3A70]/10 blur-3xl scale-95 group-hover:scale-100 transition duration-700"></div>

            <div className="relative overflow-hidden rounded-3xl  group">
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop={true}
                speed={1000}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                }}
                className="w-full h-[500px]"
              >
                {aboutImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={img}
                      alt={`Factory ${index + 1}`}
                      width={900}
                      height={650}
                      className="w-full h-[500px] object-contain "
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Right Content */}

          <div>
            <span className="inline-block uppercase tracking-[3px] text-[#F58220] font-semibold text-sm mb-4">
              About AD Motorincs
            </span>

            <h2 className="text-5xl font-black text-black leading-tight">
              Powering Industries
              <br />
              With Quality &<span className="text-[#00c3fd]"> Reliability</span>
            </h2>

            <p className="mt-5 text-black leading-8 text-lg">
              AD Motorincs is a trusted supplier of industrial electric motors,
              gearboxes and power transmission solutions. We deliver
              high-performance products backed by technical expertise,
              competitive pricing and reliable after-sales support for
              industries across India.
            </p>

            {/* Features */}

            <div className="grid grid-cols-2 gap-y-5 gap-x-10 mt-5">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-7 h-7  bg-[#00c3fd] flex items-center justify-center text-white flex-shrink-0">
                    <FiCheckSquare size={16} />
                  </div>

                  <span className="text-[#374151] font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Button */}

            <div className="mt-8">
              <button className="group bg-[#F58220]  transition-all duration-300 text-white px-8 py-4  font-semibold flex items-center gap-3 hover:scale-105">
                KNOW MORE ABOUT US
                <FiArrowRight className="group-hover:translate-x-1 transition" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
