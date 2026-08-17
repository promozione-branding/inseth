"use client";

import Link from "next/link";
import { Menu, X, ChevronDown, Phone, Mail, Droplets } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { categories } from "@/Data";
export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const products = categories.flatMap((category) =>
    category.products.map((product) => ({
      id: product.id,
      name: product.name,
    })),
  );

  return (
    <>
      <div className="hidden border-b border-slate-200 bg-slate-950 text-sm text-slate-300 lg:block">
        <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-white" />
              <span>+91-9873933882</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-white" />
              <span>jmdautomationsystems@gmail.com</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <span>ISO 9001:2015 Certified</span>

            <span className="h-4 w-px bg-slate-600" />

            <span>Mon - Sat : 9:00 AM - 7:00 PM</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 px-2 pb-2 z-50 py-1 bg-white/30 backdrop-blur-2xl">
        <nav className="mx-auto mt-1 py-2  flex h-25 w-full items-center justify-between rounded-2xl border border-slate-200/70 bg-white/90 px-8 ">
          {/* Logo */}

          <Link href="/" className="flex items-center justify-center ">
            <Image
              width={100}
              height={100}
              alt="ad"
              className="h-25 w-55 "
              src="/logo.png"
            ></Image>
          </Link>

          {/* Links */}

          <div className="hidden text-xl items-center gap-10 lg:flex">
            <Link href="/" className="font-medium hover:text-[#9D090D]">
              Home
            </Link>

            <Link href="/about" className="font-medium hover:text-[#9D090D]">
              About Us
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="flex items-center gap-1 font-medium hover:text-[#9D090D] transition">
                Our Products
                <ChevronDown
                  size={18}
                  className={`transition duration-300 ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown */}

              <div
                className={`absolute left-1/2 top-full mt-5 w-[700px] -translate-x-1/2 rounded-3xl bg-white shadow-2xl border border-gray-200 transition-all duration-300 ${
                  productsOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-3"
                }`}
              >
                <div className="grid grid-cols-2 gap-8 p-8">
                  <div>
                    <h3 className="text-xl font-bold mb-6 text-black">
                      Aluminium Series
                    </h3>

                    <div className="space-y-4 h-60 overflow-y-auto">
                      {products
                        // .slice(0, Math.ceil(products.length / 2))
                        .map((item) => (
                          <Link
                            key={item.id}
                            href={`/products/${item.id}`}
                            className="flex items-center gap-3 rounded-xl p-3 hover:bg-[#F58220]/20 transition"
                          >
                            <Droplets size={18} className="text-[#1BA3F7]" />

                            <span className="text-base">{item.name}</span>
                          </Link>
                        ))}
                    </div>
                  </div>

                  {/* <div>
                    <h3 className="text-xl font-bold mb-6 text-black">
                      Motors & Accessories
                    </h3>

                    <div className="space-y-4">
                      {products.slice(4).map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-3 rounded-xl p-3 hover:bg-[#F58220]/20 transition"
                        >
                          <Droplets size={18} className="text-[#1BA3F7]" />

                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            <Link href="/blog" className="font-medium hover:text-[#9D090D]">
              Blogs
            </Link>

            <Link href="/contact" className="font-medium hover:text-[#9D090D]">
              Contact Us
            </Link>
          </div>

          {/* CTA */}

          <div className="hidden lg:flex items-center gap-4">
            <button className="rounded-full border border-slate-300 px-5 py-2.5 font-medium hover:bg-slate-100">
              Download Catalogue
            </button>

            <button className="rounded-full bg-[#F58220]  px-7 py-3 font-semibold text-white shadow-lg transition hover:scale-105">
              Get Quote →
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
