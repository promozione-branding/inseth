
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
    <footer className="relative overflow-hidden bg-[#062B57] text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/footer-bg.jpg')" }}
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#062B57] via-[#0A4D8C] to-[#062B57]" />

      {/* Watermark */}
      <h2 className="absolute inset-0 top-0 hidden select-none items-center justify-center text-[120px] font-black text-white/5 xl:flex">
        AD MOTORONICS
      </h2>

      <div className="relative mx-auto w-full px-6 py-10 md:px-10 lg:px-12">
        {/* Top Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Information */}
          <div className="lg:col-span-2">
            <Image
              src="/logo.png"
              alt="AD Motoronics Logo"
              width={320}
              height={170}
              className="mb-6 rounded-sm"
            />

            <p className="text-[15px] leading-7 text-gray-300">
              AD Motoronics provides electric motors and power transmission
              solutions for a range of industrial applications. With a focus on
              dependable performance, efficiency, and durability, the company
              serves the needs of businesses looking for reliable motors,
              gearboxes, and related equipment for their operations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="relative mb-8 text-2xl font-bold">
              Quick Links
              <span className="absolute -bottom-3 left-0 h-1 w-14 bg-[#F58220]" />
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>
                <Link href="/" className="transition hover:text-[#41C4FF]">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition hover:text-[#41C4FF]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="transition hover:text-[#41C4FF]"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="transition hover:text-[#41C4FF]"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="transition hover:text-[#41C4FF]"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-[#41C4FF]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="relative mb-8 text-2xl font-bold">
              Our Products
              <span className="absolute -bottom-3 left-0 h-1 w-14 bg-[#F58220]" />
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>
                <Link href="/products" className="transition hover:text-[#41C4FF]">
                  Water Pumps
                </Link>
              </li>
              <li>
                <Link href="/products" className="transition hover:text-[#41C4FF]">
                  Centrifugal Pumps
                </Link>
              </li>
              <li>
                <Link href="/products" className="transition hover:text-[#41C4FF]">
                  Booster Pumps
                </Link>
              </li>
              <li>
                <Link href="/products" className="transition hover:text-[#41C4FF]">
                  Submersible Pumps
                </Link>
              </li>
              <li>
                <Link href="/products" className="transition hover:text-[#41C4FF]">
                  Electric Motors
                </Link>
              </li>
              <li>
                <Link href="/products" className="transition hover:text-[#41C4FF]">
                  Pump Controllers
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="relative mb-8 text-2xl font-bold">
              Industries
              <span className="absolute -bottom-3 left-0 h-1 w-14 bg-[#F58220]" />
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

        {/* Contact Row */}
        <div className="mt-8 border-t border-white/10 pt-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Phone */}
            <div className="flex flex-col items-start rounded-2xl bg-white/5 p-5 transition duration-300 hover:bg-white/10">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 text-2xl text-white">
                <FaPhoneAlt />
              </div>

              <div className="flex flex-col items-start">
                <h4 className="mb-3 text-lg font-semibold sm:text-xl">
                  Call Us
                </h4>

                <div className="flex flex-col gap-2 text-sm text-gray-300 sm:text-base">
                  <a
                    href="tel:+919873933882"
                    className="transition hover:text-[#41C4FF]"
                  >
                    +91 9873933882
                  </a>

                  <a
                    href="tel:+919953738992"
                    className="transition hover:text-[#41C4FF]"
                  >
                    +91 9953738992
                  </a>

                  <a
                    href="tel:+919810013496"
                    className="transition hover:text-[#41C4FF]"
                  >
                    +91 9810013496
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-start rounded-2xl bg-white/5 p-5 transition duration-300 hover:bg-white/10">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 text-2xl text-white">
                <FaEnvelope />
              </div>

              <div className="flex flex-col items-start">
                <h4 className="mb-3 text-lg font-semibold sm:text-xl">
                  Email Us
                </h4>

                <a
                  href="mailto:admotoronic@gmail.com"
                  className="break-all text-sm text-gray-300 transition hover:text-[#41C4FF] sm:text-base"
                >
                  admotoronic@gmail.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col items-start rounded-2xl bg-white/5 p-5 transition duration-300 hover:bg-white/10">
              <div className="mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/5 text-2xl text-white">
                <FaMapMarkerAlt />
              </div>

              <div className="flex flex-col items-start">
                <h4 className="mb-3 text-lg font-semibold sm:text-xl">
                  Office Address
                </h4>

                <p className="text-start text-sm leading-6 text-gray-300 sm:text-base">
                  A-91, Group Industrial Area,
                  <br />
                  Wazirpur Industrial Area,
                  <br />
                  Delhi - 110052
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-start rounded-2xl bg-white/5 p-5 transition duration-300 hover:bg-white/10">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 text-2xl text-white">
                <FaShareAlt />
              </div>

              <h4 className="mb-4 text-lg font-semibold sm:text-xl">
                Follow Us
              </h4>

              <div className="flex flex-wrap justify-start gap-3">
                {[
                  {
                    name: "Facebook",
                    icon: <FaFacebookF />,
                    href: "#",
                  },
                  {
                    name: "Instagram",
                    icon: <FaInstagram />,
                    href: "#",
                  },
                  {
                    name: "LinkedIn",
                    icon: <FaLinkedinIn />,
                    href: "#",
                  },
                  {
                    name: "YouTube",
                    icon: <FaYoutube />,
                    href: "#",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm transition-all duration-300 hover:bg-[#F58220] hover:text-[#062B57]"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Modal */}
        {openCertificate && (
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setOpenCertificate(false)}
          >
            <button
              type="button"
              onClick={() => setOpenCertificate(false)}
              aria-label="Close certificate"
              className="absolute right-8 top-8 text-4xl text-white"
            >
              &times;
            </button>

            <Image
              src="/certificate.png"
              alt="AD Motoronics Certificate"
              width={700}
              height={900}
              className="max-h-[90vh] w-auto rounded-2xl"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        )}
      </div>

      {/* Bottom Copyright */}
      <div className="relative border-t border-white/10 bg-[#041E3E]">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col items-center justify-between gap-5 lg:flex-row">
            <p className="text-center text-gray-300 lg:text-left">
              © {new Date().getFullYear()} AD Motoronics. All Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300">
              <Link
                href="/privacy-policy"
                className="text-center transition hover:text-[#41C4FF]"
              >
                Website Designed By Inquiry Bazaar Pvt. Ltd. <a className="font-bold text-amber-600" href="https://inquirybazaar.com/"> B2B Marketplace </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
