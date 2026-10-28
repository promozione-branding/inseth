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
  FaShareAlt,
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
          I.N. SETH SONS
        </h2>

        <div className="relative w-full mx-auto px-17 py-10">
          {/* Top Grid */}

          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-10">
            <div className="lg:col-span-2">
              <Image
                src="/logo.png"
                alt="Logo"
                width={320}
                height={170}
                className="mb-6  rounded-sm"
              />

              <p className="text-gray-300  text-[15px]">
                AD Motoronics is a company that people in India trust to make
                electric motors. They make motors for factories and other places
                that need strong motors. AD Motoronics also makes motors,
                gearboxes and other things that help get power from one place to
                another. The people, at AD Motoronics design their products to
                work well and last a long time. They want their electric motors
                to keep working in homes, offices and factories. AD Motoronics
                electric motors are made to be efficient and work well every
                time you use them.
              </p>

              <div></div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 relative">
                Quick Links
                <span className="absolute left-0 -bottom-3 h-1 w-14 bg-[#F58220]" />
              </h3>

              <ul className="space-y-4 text-gray-300">
                <li>
                  <Link href="/" className="hover:text-[#41C4FF] transition">
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about"
                    className="hover:text-[#41C4FF] transition"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    href="/products"
                    className="hover:text-[#41C4FF] transition"
                  >
                    Products
                  </Link>
                </li>

                <li>
                  <Link
                    href="/industries"
                    className="hover:text-[#41C4FF] transition"
                  >
                    Industries
                  </Link>
                </li>

                <li>
                  <Link
                    href="/blogs"
                    className="hover:text-[#41C4FF] transition"
                  >
                    Blogs
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="hover:text-[#41C4FF] transition"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 relative">
                Our Products
                <span className="absolute left-0 -bottom-3 h-1 w-14 bg-[#F58220]" />
              </h3>

              <ul className="space-y-4 text-gray-300">
                <li>
                  <Link href="#">Water Pumps</Link>
                </li>

                <li>
                  <Link href="#">Centrifugal Pumps</Link>
                </li>

                <li>
                  <Link href="#">Booster Pumps</Link>
                </li>

                <li>
                  <Link href="#">Submersible Pumps</Link>
                </li>

                <li>
                  <Link href="#">Electric Motors</Link>
                </li>

                <li>
                  <Link href="#">Pump Controllers</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 relative">
                Industries
                <span className="absolute left-0 -bottom-3 h-1 w-14 bg-[#F58220]" />
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

          <div className="border-t border-white/10 mt-4 pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Phone */}
              <div className="flex flex-col items-start text-center bg-white/5 rounded-2xl p-5 hover:bg-white/10 transition duration-300">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl mb-4 bg-white/5">
                  <FaPhoneAlt />
                </div>

                <div className="flex items-start flex-col">
                  <h4 className="font-semibold text-lg sm:text-xl mb-2">
                    Call Us
                  </h4>

                  <p className="text-gray-300 text-start text-sm sm:text-base break-all">
                    +91-9873933882
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col items-start text-center bg-white/5 rounded-2xl p-5 hover:bg-white/10 transition duration-300">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl mb-4 bg-white/5">
                  <FaEnvelope />
                </div>

                <div className="flex items-start flex-col">
                  <h4 className="font-semibold text-lg sm:text-xl mb-2">
                    Email Us
                  </h4>

                  <p className="text-gray-300 text-start text-sm sm:text-base break-all">
                    jmdautomationsystems@gmail.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-col items-start  text-center bg-white/5 rounded-2xl p-5 hover:bg-white/10 transition duration-300">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl mb-4 bg-white/5 shrink-0">
                  <FaMapMarkerAlt />
                </div>

                <div className="flex items-start flex-col">
                  <h4 className="font-semibold text-lg sm:text-xl mb-2">
                    Office Address
                  </h4>

                  <p className="text-gray-300 text-start text-sm sm:text-base leading-6">
                    M-145, Street No. 9, Behind Inderlok Metro Station Gate No.
                    2, Shastri Nagar, Delhi-110052
                  </p>
                </div>
              </div>

              {/* Social */}
              <div className="flex flex-col items-start text-center bg-white/5 rounded-2xl p-5 hover:bg-white/10 transition duration-300">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl mb-4 bg-white/5">
                  <FaShareAlt />
                </div>

                <h4 className="text-lg sm:text-xl font-semibold mb-4">
                  Follow Us
                </h4>

                <div className="flex gap-3 justify-center flex-wrap">
                  {[
                    <FaFacebookF key="facebook" />,
                    <FaInstagram key="instagram" />,
                    <FaLinkedinIn key="linkedin" />,
                    <FaYoutube key="youtube" />,
                  ].map((icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#F58220] hover:text-[#062B57] transition-all duration-300 flex items-center justify-center text-sm"
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
                © {new Date().getFullYear()} Copyright © 2026 I.N. Seth Sons.
                All Right Reserved.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300">
                <Link
                  href="/privacy-policy"
                  className="hover:text-[#41C4FF] transition"
                >
                  Website Designed By Inquiry Bazaar Pvt. Ltd. B2B Marketplace
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
