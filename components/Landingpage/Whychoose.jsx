"use client";

import Image from "next/image";
import {
  FiCheckCircle,
  FiShield,
  FiTruck,
  FiHeadphones,
  FiSettings,
  FiAward,
} from "react-icons/fi";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FiAward size={30} />,
      title: "Premium Quality Products",
      desc: "We supply genuine industrial motors and gearboxes from trusted manufacturers ensuring maximum reliability.",
    },
    {
      icon: <FiSettings size={30} />,
      title: "Technical Expertise",
      desc: "Our experienced team helps you select the perfect solution for every industrial application.",
    },
    {
      icon: <FiTruck size={30} />,
      title: "Fast Delivery",
      desc: "Strong logistics network enables quick delivery across India with safe packaging.",
    },
    {
      icon: <FiHeadphones size={30} />,
      title: "Dedicated Support",
      desc: "Our engineers provide prompt technical assistance before and after every purchase.",
    },
  ];

  return (
    <section className="relative py-12 bg-gradient-to-b from-orange-50 to-[#f7f9fc] overflow-hidden">
      <div className="w-full mx-auto px-16">

        <div className="grid lg:grid-cols-2 gap-20 ">








   {/* RIGHT */}

          <div>

            <span className="uppercase tracking-[4px] text-[#F58220] font-semibold">
              WHY CHOOSE US
            </span>

            <h2 className="mt-2 text-4xl font-black leading-tight text-[#08254F]">
              Trusted Industrial
              <br />
              Power Transmission
              <span className="text-[#004DCB]"> Solutions</span>
            </h2>

            <p className="mt-2 text-lg text-gray-600 leading-8">
              We provide high-performance industrial motors, gearboxes,
              geared motors and power transmission products backed by
              technical expertise, competitive pricing and dependable
              after-sales support. We provide high-performance industrial motors, gearboxes,
              geared motors and power transmission products backed by
              technical expertise, competitive pricing and dependable
              after-sales support. We provide high-performance industrial motors, gearboxes,
              geared motors and power transmission products backed by
              technical expertise, competitive pricing and dependable
              after-sales support. We provide high-performance industrial motors, gearboxes,
              geared motors and power transmission products backed by
              technical 
            </p>

            {/* Features */}

            {/* <div className="grid sm:grid-cols-4 gap-6 mt-7">

              {features.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#ED3A20]/10 flex items-center justify-center text-[#ED3A20] group-hover:bg-[#ED3A20] group-hover:text-white transition">

                    {item.icon}

                  </div>

                  <h3 className="mt-3 text-md font-bold text-[#08254F]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-600 leading-7">
                    {item.desc}
                  </p>

                </div>
              ))}

            </div> */}

            {/* Checklist */}

            <div className="grid sm:grid-cols-2 gap-4 mt-7">

              {[
                "100% Genuine Products",
                "Competitive Pricing",
                "Pan India Supply",
                "Quick Response",
                "Expert Consultation",
                "After Sales Support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <FiCheckCircle className="text-[#004DCB] text-xl" />

                  <span className="font-medium text-[#08254F]">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <button className="mt-10 bg-gradient-to-r from-[#F58220] to-blue-800 transition-all duration-300 text-white px-10 py-4 rounded-lg font-semibold">
              Get Free Consultation
            </button>

          </div>






          {/* LEFT */}

          <div className="relative">

            <div className="absolute -left-8 -top-8 w-40 h-40 rounded-full bg-[#ED3A20]/10 blur-3xl"></div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">

              <Image
                src="/test.jpeg"
                alt="Industrial Motors"
                width={700}
                height={700}
                className="w-full h-[620px] object-cover"
              />

            </div>

            {/* Floating Experience Card */}

            <div className="absolute bottom-8 -right-8 bg-[#F58220] text-white rounded-2xl shadow-2xl px-8 py-7">

              <h2 className="text-5xl font-black">25+</h2>

              <p className="mt-2 font-medium">
                Years of
                <br />
                Industry Experience
              </p>

            </div>

          </div>

       

        </div>

      </div>
    </section>
  );
}