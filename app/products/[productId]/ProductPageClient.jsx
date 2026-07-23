"use client";

import React, { useState } from "react";
import { categories } from "@/Data";
import Image from "next/image";
import Head from "next/head";
import { redirect } from "next/navigation";
import Enquiry from "@/components/Enquiry";

import {
  Shield,
  Droplet,
  Zap,
  Cog,
  CheckCircle2,
  Download,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function ProductPage({ params }) {
  const { productId } = React.use(params);

  const [isFormOpen, setIsFormOpen] = useState(false);

  const allProducts = categories.flatMap((c) => c.products);
  const product = allProducts.find((p) => p.id === productId);

  if (!product) redirect("/");

  const [activeImage, setActiveImage] = useState(product.image[0]);
  const [zoom, setZoom] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;

    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setOrigin(`${x}% ${y}%`);
  };

  const features = [
    {
      icon: <Droplet size={34} />,
      title: "High Water Flow",
      desc: "Designed for maximum water discharge with excellent pressure.",
    },
    {
      icon: <Shield size={34} />,
      title: "Rust Resistant",
      desc: "Premium corrosion resistant body ensures longer life.",
    },
    {
      icon: <Zap size={34} />,
      title: "Energy Efficient",
      desc: "Consumes less electricity while delivering higher output.",
    },
    {
      icon: <Cog size={34} />,
      title: "Low Maintenance",
      desc: "Heavy-duty engineering minimizes servicing requirements.",
    },
  ];

  return (
    <>
      <Head>
        <title>{product.metaTitle || product.name}</title>

        <meta
          name="description"
          content={product.metaDescription || product.name}
        />
      </Head>

      {/* HERO */}

      <section className="relative h-[60vh] overflow-hidden">

        <Image
          src="/bghero.webp"
          fill
          priority
          alt={product.name}
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#062B57]/80" />

        <div className="relative z-10 h-full flex items-center">

          <div className="max-w-7xl mx-auto px-6 w-full">

            <span className="uppercase tracking-[4px] text-[#F58220] font-semibold">
              Premium Industrial Pump
            </span>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-white mt-5">
              {product.name}
            </h1>

            <p className="text-xl text-blue-100 mt-8 max-w-2xl leading-9">
              Premium quality industrial water pumps engineered for reliable
              performance, energy efficiency and long operational life for
              residential, commercial and industrial applications.
            </p>

          </div>

        </div>

      </section>

      {/* PRODUCT */}

      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">

        <div className="w-full mx-auto px-16">

          <div className="grid lg:grid-cols-2 gap-16">

            {/* IMAGE */}

            <div>

              <div className="rounded-3xl bg-white border border-blue-100 shadow-2xl p-8">

                <div
                  className="relative h-[600px] overflow-hidden cursor-zoom-in"
                  onMouseMove={handleMove}
                  onMouseEnter={() => setZoom(true)}
                  onMouseLeave={() => setZoom(false)}
                >
                  <Image
                    fill
                    src={activeImage.src}
                    alt={activeImage.alt}
                    className="object-contain transition duration-300"
                    style={{
                      transformOrigin: origin,
                      transform: zoom ? "scale(1.45)" : "scale(1)",
                    }}
                  />
                </div>

                <div className="flex gap-4 mt-6">

                  {product.image.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(img)}
                      className={`rounded-xl border overflow-hidden ${
                        activeImage.src === img.src
                          ? "border-blue-600"
                          : "border-slate-200"
                      }`}
                    >
                      <Image
                        src={img.src}
                        width={90}
                        height={90}
                        alt=""
                        className="object-cover"
                      />
                    </button>
                  ))}

                </div>

              </div>

            </div>

            {/* SPECIFICATIONS */}


                        <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-2xl">

              <div className="bg-gradient-to-r from-[#F58220] to-blue-800 px-8 py-6">

                <h2 className="text-3xl font-bold text-white">
                  Product Specifications
                </h2>

                <p className="text-blue-100 mt-2">
                  Technical details and performance specifications
                </p>

              </div>

              <div className="divide-y divide-slate-200">

                {product.specs?.map((spec, index) => (

                  <div
                    key={index}
                    className="flex justify-between items-center px-8 py-5 hover:bg-blue-50 transition"
                  >

                    <span className="font-semibold text-slate-800">
                      {spec.label}
                    </span>

                    <span className="text-slate-600 font-medium">
                      {spec.value}
                    </span>

                  </div>

                ))}

              </div>

              <div className="grid md:grid-cols-3 gap-4 p-8">

                <button
                  onClick={() => setIsFormOpen(true)}
                  className="flex justify-center items-center gap-2 rounded-xl bg-[#0A63C9] py-4 font-semibold text-white hover:bg-[#094ea0] transition"
                >
                  Request Quote
                  <ArrowRight size={18} />
                </button>

                <a
                  href={`https://wa.me/919876543210?text=Hello, I'm interested in ${product.name}`}
                  target="_blank"
                  className="flex justify-center items-center gap-2 rounded-xl bg-[#25D366] py-4 text-white font-semibold hover:opacity-90 transition"
                >
                  <Phone size={18} />
                  WhatsApp
                </a>

                <a
                  href="/catalogue.pdf"
                  download
                  className="flex justify-center items-center gap-2 rounded-xl border-2 border-[#0A63C9] text-[#0A63C9] py-4 font-semibold hover:bg-[#0A63C9] hover:text-white transition"
                >
                  <Download size={18} />
                  Catalogue
                </a>

              </div>

            </div>

          </div>

        </div>

        {isFormOpen && (
          <Enquiry
            isOpen={isFormOpen}
            onClose={() => setIsFormOpen(false)}
          />
        )}

      </section>

      {/* ================= PRODUCT OVERVIEW ================= */}

  {/* ================= PRODUCT OVERVIEW + STICKY ENQUIRY ================= */}

<section className="py-15 bg-slate-50">

  <div className="w-full mx-auto px-10">

    <div className="grid lg:grid-cols-3 gap-14 items-start">

      {/* ================= LEFT CONTENT ================= */}

      <div className="lg:col-span-2">

        <span className="uppercase tracking-[4px] text-[#F58220] font-semibold">
          Product Details
        </span>

        <h2 className="text-5xl font-bold text-[#062B57] mt-4 mb-12">
          Product Overview
        </h2>

        <div className="space-y-8">

          {Array.isArray(product.description) ? (

            product.description.map((block, i) => {

              if (block.type === "h2")
                return (
                  <h3
                    key={i}
                    className="text-3xl font-bold text-[#062B57]"
                  >
                    {block.text}
                  </h3>
                );

              if (block.type === "p")
                return (
                  <p
                    key={i}
                    className="text-lg leading-9 text-slate-700"
                    dangerouslySetInnerHTML={{
                      __html: block.text,
                    }}
                  />
                );

              if (block.type === "ul")
                return (

                  <ul
                    key={i}
                    className="space-y-5"
                  >

                    {block.items.map((item, j) => (

                      <li
                        key={j}
                        className="flex items-start gap-4"
                      >

                        <CheckCircle2
                          size={22}
                          className="text-[#F58220] mt-1 flex-shrink-0"
                        />

                        <span
                          className="text-lg leading-8 text-slate-700"
                          dangerouslySetInnerHTML={{
                            __html: item,
                          }}
                        />

                      </li>

                    ))}

                  </ul>

                );

              return null;

            })

          ) : (

            <p
              className="text-lg leading-9 text-slate-700"
              dangerouslySetInnerHTML={{
                __html: product.description,
              }}
            />

          )}

        </div>

      </div>

      {/* ================= STICKY ENQUIRY ================= */}

      <div className="lg:sticky lg:top-20">

        <div className="rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden">

          {/* Header */}

          <div className="bg-gradient-to-r from-[#F58220] to-blue-800 p-5 text-white">

            <h3 className="text-3xl font-bold">
              Quick Inquiry
            </h3>

            <p className="mt-2 text-blue-100">
              Looking for pricing or technical assistance?
              Fill the form and our team will contact you shortly.
            </p>

          </div>

          {/* Form */}

          <form className="p-8 space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full h-14 rounded-xl border border-slate-300 px-5 outline-none focus:border-[#0A63C9]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full h-14 rounded-xl border border-slate-300 px-5 outline-none focus:border-[#0A63C9]"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full h-14 rounded-xl border border-slate-300 px-5 outline-none focus:border-[#0A63C9]"
            />

            <input
              type="text"
              value={product.name}
              readOnly
              className="w-full h-14 rounded-xl bg-slate-100 border border-slate-300 px-5 text-slate-700"
            />

            <textarea
              rows={5}
              placeholder="Your Requirement..."
              className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none resize-none focus:border-[#0A63C9]"
            />

            <button
              type="submit"
              className="w-full h-14 rounded-xl bg-gradient-to-r from-[#F58220] to-blue-800 text-white font-semibold text-lg hover:scale-[1.02] transition"
            >
              Send Inquiry
            </button>

          </form>

          {/* Bottom Contact */}

          <div className="border-t p-6 bg-slate-50">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">

                <Phone className="text-cyan-600" size={22} />

              </div>

              <div>

                <p className="text-sm text-slate-500">
                  Need Immediate Help?
                </p>

                <h4 className="font-bold text-lg text-[#062B57]">
                  +91 98765 43210
                </h4>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

    

  


       

      {/* ================= RELATED PRODUCTS ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[4px] text-[#0A63C9] font-semibold">
              Explore More
            </span>

            <h2 className="text-5xl font-bold text-[#062B57] mt-4">
              Related Products
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {allProducts
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((item) => (

                <div
                  key={item.id}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                >

                  <div className="relative h-64 bg-slate-50">

                    <Image
                      src={item.image[0].src}
                      alt={item.name}
                      fill
                      className="object-contain p-8 group-hover:scale-110 transition duration-500"
                    />

                  </div>

                  <div className="p-6">

                    <h3 className="text-2xl font-bold text-[#062B57]">
                      {item.name}
                    </h3>

                    <button
                      onClick={() =>
                        (window.location.href = `/products/${item.id}`)
                      }
                      className="mt-6 w-full rounded-xl bg-[#0A63C9] py-3 text-white font-semibold hover:bg-[#084b99] transition"
                    >
                      View Product
                    </button>

                  </div>

                </div>

              ))}

          </div>

        </div>

      </section>

      {/* ================= ENQUIRY MODAL ================= */}

      {isFormOpen && (

        <Enquiry
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
        />

      )}

    </>

  );

}