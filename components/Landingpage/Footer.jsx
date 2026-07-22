"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const [openCertificate, setOpenCertificate] = useState(false);

  return (
    <>
      <footer className="relative overflow-hidden bg-[#062B57] text-white">

        {/* Background */}

        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/footer-bg.jpg')" }}
        />

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#062B57] via-[#0A4D8C] to-[#062B57]" />

        {/* Watermark */}

        <h2 className="absolute inset-0  top-0 flex items-center justify-center text-[120px] font-black text-white/5 select-none hidden xl:flex">
        I.N. SETHS SONS
        </h2>

        <div className="relative max-w-7xl mx-auto px-6 py-10">

          {/* Top Grid */}

          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-10">

            {/* ========================= */}

            {/* Company */}

            {/* ========================= */}

            <div className="lg:col-span-2">

              <Image
                src="/logo.webp"
                alt="Logo"
                width={290}
                height={170}
                className="mb-6 bg-white rounded-sm"
              />

              <p className="text-gray-300 leading-8 text-[15px]">

                We are one of India's trusted suppliers of premium quality
                Water Pumps, Electric Motors, Pressure Booster Systems,
                Submersible Pumps and Industrial Pumping Solutions.

                Our products are engineered for superior performance,
                durability and energy efficiency across residential,
                commercial and industrial applications.

              </p>

           <div>


            
           </div>

           
            </div>

        

            <div>

              <h3 className="text-2xl font-bold mb-8 relative">

                Quick Links

                <span className="absolute left-0 -bottom-3 h-1 w-14 bg-[#41C4FF]" />

              </h3>

              <ul className="space-y-4 text-gray-300">

                <li>
                  <Link href="/" className="hover:text-[#41C4FF] transition">
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="/about" className="hover:text-[#41C4FF] transition">
                    About Us
                  </Link>
                </li>

                <li>
                  <Link href="/products" className="hover:text-[#41C4FF] transition">
                    Products
                  </Link>
                </li>

                <li>
                  <Link href="/industries" className="hover:text-[#41C4FF] transition">
                    Industries
                  </Link>
                </li>

                <li>
                  <Link href="/blogs" className="hover:text-[#41C4FF] transition">
                    Blogs
                  </Link>
                </li>

                <li>
                  <Link href="/contact" className="hover:text-[#41C4FF] transition">
                    Contact Us
                  </Link>
                </li>

              </ul>

            </div>

   

            <div>

              <h3 className="text-2xl font-bold mb-8 relative">

                Our Products

                <span className="absolute left-0 -bottom-3 h-1 w-14 bg-[#41C4FF]" />

              </h3>

              <ul className="space-y-4 text-gray-300">

                <li>
                  <Link href="#">
                    Water Pumps
                  </Link>
                </li>

                <li>
                  <Link href="#">
                    Centrifugal Pumps
                  </Link>
                </li>

                <li>
                  <Link href="#">
                    Booster Pumps
                  </Link>
                </li>

                <li>
                  <Link href="#">
                    Submersible Pumps
                  </Link>
                </li>

                <li>
                  <Link href="#">
                    Electric Motors
                  </Link>
                </li>

                <li>
                  <Link href="#">
                    Pump Controllers
                  </Link>
                </li>

              </ul>

            </div>

    

            <div>

              <h3 className="text-2xl font-bold mb-8 relative">

                Industries

                <span className="absolute left-0 -bottom-3 h-1 w-14 bg-[#41C4FF]" />

              </h3>

              <ul className="space-y-4 text-gray-300">

                <li>Residential Water Supply</li>

                <li>Agriculture</li>

                <li>Industrial Plants</li>

                <li>Commercial Buildings</li>

                <li>Fire Fighting Systems</li>

                <li>Water Treatment</li>

              </ul>

            </div>

            

            

          </div>



{/* ================= Contact Row ================= */}

<div className=" border-t border-white/10 mt-4">

  <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

    {/* Phone */}

    <div className="flex items-center gap-5 bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition">

      <div className="w-16 h-16 rounded-xl bg-[#41C4FF] flex items-center justify-center text-[#062B57] text-2xl">
        <FaPhoneAlt />
      </div>

      <div>
        <h4 className="font-semibold text-xl mb-1">
          Call Us
        </h4>

        <p className="text-gray-300">
          +91 98765 43210
        </p>

        <p className="text-gray-300">
          +91 91234 56789
        </p>
      </div>

    </div>

    {/* Email */}

    <div className="flex items-center gap-5 bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition">

      <div className="w-16 h-16 rounded-xl bg-[#41C4FF] flex items-center justify-center text-[#062B57] text-2xl">
        <FaEnvelope />
      </div>

      <div>
        <h4 className="font-semibold text-xl mb-1">
          Email Us
        </h4>

        <p className="text-gray-300">
          info@yourcompany.com
        </p>

        <p className="text-gray-300">
          sales@yourcompany.com
        </p>
      </div>

    </div>

    {/* Address */}

    <div className="flex items-center gap-5 bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition">

      <div className="w-16 h-16 rounded-xl bg-[#41C4FF] flex items-center justify-center text-[#062B57] text-2xl">
        <FaMapMarkerAlt />
      </div>

      <div>
        <h4 className="font-semibold text-xl mb-1">
          Office Address
        </h4>

        <p className="text-gray-300 leading-6">
          Plot No. 101,
          Industrial Area,
          Ahmedabad,
          Gujarat.
        </p>
      </div>

    </div>

    {/* Social */}

    <div className="bg-white/5 rounded-2xl p-6">

      <h4 className="text-xl font-semibold mb-5">
        Follow Us
      </h4>

      <div className="flex gap-4">

        {[
          <FaFacebookF />,
          <FaInstagram />,
          <FaLinkedinIn />,
          <FaYoutube />,
        ].map((icon, i) => (
          <a
            key={i}
            href="#"
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#41C4FF] hover:text-[#062B57] transition-all duration-300 flex items-center justify-center text-lg"
          >
            {icon}
          </a>
        ))}

      </div>

    </div>

  </div>

</div>
       

          {/* Certificate Modal */}

          {openCertificate && (

            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[999]">

              <button
                onClick={() => setOpenCertificate(false)}
                className="absolute top-8 right-8 text-4xl"
              >
                ×
              </button>

              <Image
                src="/certificate.png"
                alt="Certificate"
                width={700}
                height={900}
                className="rounded-2xl max-h-[90vh] w-auto"
              />

            </div>

          )}

    

       



        </div>

        {/* =============================== */}
        {/* Bottom Copyright */}
        {/* =============================== */}

        <div className="relative border-t border-white/10 bg-[#041E3E]">

          <div className="max-w-7xl mx-auto px-6 py-6">

            <div className="flex flex-col lg:flex-row items-center justify-between gap-5">

              <p className="text-gray-300 text-center lg:text-left">
                © {new Date().getFullYear()} Your Company Name.
                All Rights Reserved.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300">

                <Link
                  href="/privacy-policy"
                  className="hover:text-[#41C4FF] transition"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/terms-and-conditions"
                  className="hover:text-[#41C4FF] transition"
                >
                  Terms & Conditions
                </Link>

                <Link
                  href="/sitemap"
                  className="hover:text-[#41C4FF] transition"
                >
                  Sitemap
                </Link>

              </div>

            </div>

          </div>

        </div>

      </footer>

    </>
  );
}