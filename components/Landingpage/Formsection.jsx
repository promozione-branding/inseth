"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

export default function FeaturedProductsSection() {
  const products = [
    {
      id: 1,
      title: "Ribbon Blender",
      category: "Mixing Machine",
      image: "/pro1.png",
      description:
        "Heavy-duty ribbon blender designed for efficient powder and granule mixing with uniform blending performance.",
    },
    {
      id: 2,
      title: "Pulverizer Machine",
      category: "Grinding Machine",
      image: "/pro2.jfif",
      description:
        "Industrial pulverizer for high-capacity grinding applications with low power consumption.",
    },
    {
      id: 3,
      title: "Rotary Bottle Washer",
      category: "Bottle Cleaning",
      image: "/pro3.png",
      description:
        "Automatic rotary bottle washing system suitable for pharmaceutical and food industries.",
    },
    {
      id: 4,
      title: "Storage Tank",
      category: "Processing Equipment",
      image: "/pro4.avif",
      description:
        "Premium stainless steel storage tanks manufactured for hygienic liquid storage applications.",
    },
    {
      id: 5,
      title: "Pasteurizer",
      category: "Dairy Equipment",
      image: "/pro5.webp",
      description:
        "Energy-efficient pasteurizer ensuring consistent product quality and food safety.",
    },
  ];

  return (
    <section className="relative bg-[#f7f8fb] py-14 overflow-hidden">

      <div className="w-full mx-auto px-15">

        <div className="grid lg:grid-cols-12 gap-14 items-start">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-8">

            {/* Heading */}
            <div className="flex items-start justify-between gap-10 mb-7">

              <div>

                <span className="inline-block text-[#F58220] font-semibold uppercase tracking-[3px] mb-3">
                  Featured Products
                </span>

                <h2 className="text-4xl  font-extrabold leading-tight text-[#072F55] max-w-3xl">

                  Engineered For

                  <span className="text-[#004DCB]">
                    {" "}Industrial Excellence
                  </span>

                </h2>

                <p className="mt-4 text-gray-600 text-lg leading-8 max-w-4xl">
                  Discover our premium range of industrial processing machines
                  designed with precision engineering, high durability, and
                  unmatched performance for every manufacturing industry.
                </p>

              </div>

              {/* Slider Arrows */}

              <div className="hidden md:flex gap-3 mt-4">

                <button className="products-prev h-12 w-12 rounded-full bg-white shadow-lg hover:bg-[#ff5a14] hover:text-white transition flex items-center justify-center">

                  <ChevronLeft size={22} />

                </button>

                <button className="products-next h-12 w-12 rounded-full bg-white shadow-lg hover:bg-[#ff5a14] hover:text-white transition flex items-center justify-center">

                  <ChevronRight size={22} />

                </button>

              </div>

            </div>

            {/* Swiper */}

            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop
              speed={900}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".products-prev",
                nextEl: ".products-next",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 2,
                },
              }}
            >

              {products.map((product) => (

                <SwiperSlide key={product.id} className="h-auto">

                  {/* Product Card Starts Here */}

                                    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 h-full flex flex-col">

                    {/* Product Image */}

                    <div className="relative overflow-hidden">

                      <Image
                        src={product.image}
                        alt={product.title}
                        width={600}
                        height={420}
                        className="w-full h-[300px] object-contain transition-transform duration-700 group-hover:scale-110"
                      />

                      <span className="absolute top-5 left-5 bg-[#004DCB] text-white text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full">
                        {product.category}
                      </span>

                    </div>

                    {/* Content */}

                    <div className="flex flex-col flex-1 p-5">

                      <h3 className="text-3xl font-bold text-[#28367C]">
                        {product.title}
                      </h3>

                      <p className="mt-3 text-gray-600 leading-8 flex-1">
                        {product.description}
                      </p>

                      <button className="mt-4 inline-flex items-center gap-2 text-[#004DCB] font-semibold hover:gap-4 transition-all duration-300">

                        View Product

                        <span>→</span>

                      </button>

                    </div>

                  </div>

                </SwiperSlide>

              ))}

            </Swiper>

          </div>

          {/* ================= RIGHT SIDE FORM ================= */}

          <div className="lg:col-span-4">

            <div className="bg-white rounded-3xl shadow-2xl p-5 sticky top-14">


              <h3 className="text-3xl font-bold text-[#072F55] leading-tight mt-3">

                Request A

                <span className="block text-[#004DCB]">
                  Free Consultation
                </span>

              </h3>

              <p className="text-gray-600 mt-2 leading-7">
                Looking for the right industrial solution? Fill out the form and
                our experts will contact you shortly.
              </p>

              <form className="mt-4 space-y-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-14 rounded-xl border border-gray-200 px-5 outline-none focus:border-[#ff5a14] transition"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full h-14 rounded-xl border border-gray-200 px-5 outline-none focus:border-[#ff5a14] transition"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full h-14 rounded-xl border border-gray-200 px-5 outline-none focus:border-[#ff5a14] transition"
                />

            
                <textarea
                  rows={5}
                  placeholder="Tell us your requirement..."
                  className="w-full rounded-xl border border-gray-200 p-5 outline-none resize-none focus:border-[#ff5a14] transition"
                />

                <button
                  type="submit"
                  className="w-full h-14 rounded-xl bg-gradient-to-r from-[#F58220] to-blue-800 hover:bg-[#28367C] text-white font-semibold text-lg transition duration-300"
                >
                  Send Inquiry
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}