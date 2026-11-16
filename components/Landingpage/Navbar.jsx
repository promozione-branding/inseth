
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  ArrowUpRight,
  Package,
  Download,
  MessageCircle,
} from "lucide-react";

import { categories } from "@/Data";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(
    categories[0]?.id || null
  );
  const [mobileCategory, setMobileCategory] = useState(null);

  const selectedCategory = categories.find(
    (category) => category.id === activeCategory
  );

  return (
    <>
      {/* TOP BAR */}
      <div className="hidden lg:block bg-[#111827] text-slate-300 text-sm">
        <div className="max-w-[1450px] mx-auto px-8 h-11 flex items-center justify-between">

          <div className="flex items-center gap-8">
            <a
              href="tel:+919873933882"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <Phone size={15} />
              +91-9873933882
            </a>

            <a
              href="mailto:admotoronic@gmail.com"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <Mail size={15} />
              admotoronic@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-5">
            <span>ISO 9001:2015 Certified</span>
            <span className="h-4 w-px bg-slate-600" />
            <span>Mon - Sat : 9:00 AM - 7:00 PM</span>
          </div>

        </div>
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 px-2 sm:px-4 py-2 bg-white/70 backdrop-blur-xl">

        <nav className="relative mx-auto max-w-[1450px] h-[82px] flex items-center justify-between px-4 sm:px-7 rounded-2xl border border-slate-200 bg-white shadow-sm">

          {/* LOGO */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              width={220}
              height={90}
              alt="AD Motoronic"
              priority
              className="w-[155px] sm:w-[190px] h-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">

            <Link
              href="/"
              className="text-[16px] font-medium text-slate-800 hover:text-[#9D090D] transition"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-[16px] font-medium text-slate-800 hover:text-[#9D090D] transition"
            >
              About Us
            </Link>

            {/* PRODUCTS MEGA MENU */}
            <div
              className="h-[82px] flex items-center"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className={`flex items-center gap-2 text-[16px] font-medium transition ${
                  productsOpen
                    ? "text-[#9D090D]"
                    : "text-slate-800 hover:text-[#9D090D]"
                }`}
              >
                Our Products

                <ChevronDown
                  size={17}
                  className={`transition-transform duration-300 ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* MEGA MENU */}
              <div
                className={`absolute top-full left-50 w-fit pt-3 transition-all duration-300 ${
                  productsOpen
                    ? "visible opacity-100 translate-y-0"
                    : "invisible opacity-0 -translate-y-3 pointer-events-none"
                }`}
              >
                <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden">

                  <div className="grid grid-cols-[300px_1fr] min-h-[390px]">

                    {/* LEFT CATEGORY PANEL */}
                    <div className="bg-[#F7F8FA] p-6 border-r border-slate-200">

                      <div className="mb-6">
                        <p className="text-xs uppercase tracking-[2px] text-[#f58220] font-bold mb-2">
                          Explore
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900">
                          Our Category
                        </h3>

                        <p className="text-sm text-slate-500 mt-2">
                          Browse our product categories.
                        </p>
                      </div>

                      <div className="space-y-2">

                        {categories.map((category) => (
                          <Link 
                          href={`/categories/${category.id}`}
                            key={category.id}
                            onMouseEnter={() =>
                              setActiveCategory(category.id)
                            }
                            onClick={() =>
                              setActiveCategory(category.id)
                            }
                            className={`w-full flex items-center justify-between gap-3 px-4 py-4 rounded-xl text-left transition-all duration-200 ${
                              activeCategory === category.id
                                ? "bg-white text-[#f58220] shadow-sm border border-slate-200"
                                : "text-slate-900 hover:bg-white hover:text-[#9D090D]"
                            }`}
                          >
                            <span className="flex items-center gap-3">

                              <span
                                className={`w-9 h-9 flex items-center justify-center rounded-lg ${
                                  activeCategory === category.id
                                    ? "bg-[#9D090D]/10"
                                    : "bg-slate-200/70"
                                }`}
                              >
                                <Package size={18} />
                              </span>

                              <span className="text-sm font-semibold">
                                {category.name}
                              </span>

                            </span>

                            <ChevronRight
                              size={17}
                              className={
                                activeCategory === category.id
                                  ? "text-[#9D090D]"
                                  : "text-slate-400"
                              }
                            />
                          </Link>
                        ))}

                      </div>
                    </div>

                    {/* RIGHT PRODUCT PANEL */}
                    <div className="p-8">

                      <div className="flex items-center justify-between mb-7">

                        <div>
                          <p className="text-xs font-bold uppercase tracking-[2px] text-[#f58220] mb-2">
                            Product Collection
                          </p>

                          <h3 className="text-2xl font-bold text-slate-900">
                            {selectedCategory?.name}
                          </h3>

                          <p className="text-sm text-slate-500 mt-1">
                            Explore our range of products.
                          </p>
                        </div>

                        <span className="bg-slate-100 text-slate-600 px-4 py-2 rounded-full text-xs font-semibold">
                          {selectedCategory?.products?.length || 0} Products
                        </span>

                      </div>

                      <div className="grid grid-cols-2 gap-3">

                        {selectedCategory?.products?.map(
                          (product, index) => (
                            <Link
                              key={product.id}
                              href={`/products/${product.id}`}
                              onClick={() => setProductsOpen(false)}
                              className="group flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-[#f58220]/30 hover:bg-[#9D090D]/[0.03] transition-all duration-300"
                            >
                              <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 group-hover:bg-[#9D090D]/10 flex items-center justify-center text-slate-500 group-hover:text-[#f58220] transition">
                                <Package size={19} />
                              </span>

                              <span className="flex-1 min-w-0">
                                <span className="block text-sm font-semibold text-slate-800 group-hover:text-[#f58220] transition">
                                  {product.name}
                                </span>

                                <span className="block text-xs text-slate-400 mt-1">
                                  View Product
                                </span>
                              </span>

                              <ArrowUpRight
                                size={17}
                                className="text-slate-300 group-hover:text-[#f58220] transition"
                              />
                            </Link>
                          )
                        )}

                      </div>

                      {(!selectedCategory?.products ||
                        selectedCategory.products.length === 0) && (
                        <div className="py-16 text-center text-slate-400">
                          No products available in this category.
                        </div>
                      )}

                    </div>

                  </div>

                  {/* BOTTOM STRIP */}
                  <div className="px-8 py-4 bg-[#111827] flex items-center justify-between">

                    <p className="text-sm text-slate-300">
                      Need help choosing the right product?
                    </p>

                    <Link
                      href="/contact"
                      onClick={() => setProductsOpen(false)}
                      className="flex items-center gap-2 text-sm font-semibold text-white hover:text-orange-400 transition"
                    >
                      Talk to Our Experts
                      <ArrowUpRight size={16} />
                    </Link>

                  </div>

                </div>
              </div>
            </div>

            <Link
              href="/blog"
              className="text-[16px] font-medium text-slate-800 hover:text-[#9D090D] transition"
            >
              Blogs
            </Link>

            <Link
              href="/contact"
              className="text-[16px] font-medium text-slate-800 hover:text-[#9D090D] transition"
            >
              Contact Us
            </Link>

          </div>

          {/* DESKTOP CTA */}
          <div className="hidden lg:flex items-center gap-3">

            <a
              href="/catalogue.pdf"
              download
              className="flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition"
            >
              <Download size={16} />
              Catalogue
            </a>

            <Link
              href="/contact"
              className="rounded-full bg-[#F58220] px-7 py-3 text-sm font-bold text-white shadow-md hover:bg-[#e66e0d] hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Get Quote <span className="ml-1">→</span>
            </Link>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-slate-100 text-slate-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenu ? <X size={23} /> : <Menu size={23} />}
          </button>

        </nav>

        {/* MOBILE NAVIGATION */}
        <div
          className={`lg:hidden absolute top-full left-2 right-2 mt-1 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden transition-all duration-300 ${
            mobileMenu
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-3 pointer-events-none"
          }`}
        >

          <div className="p-5 space-y-1">

            <Link
              href="/"
              onClick={() => setMobileMenu(false)}
              className="block p-3 rounded-lg font-medium text-slate-800 hover:bg-slate-50"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenu(false)}
              className="block p-3 rounded-lg font-medium text-slate-800 hover:bg-slate-50"
            >
              About Us
            </Link>

            {/* MOBILE PRODUCTS */}
            <div>

              <button
                onClick={() =>
                  setMobileCategory(
                    mobileCategory === "products" ? null : "products"
                  )
                }
                className="w-full flex items-center justify-between p-3 rounded-lg font-medium text-slate-800 hover:bg-slate-50"
              >
                Our Products

                <ChevronDown
                  size={18}
                  className={`transition ${
                    mobileCategory === "products" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  mobileCategory === "products"
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">

                  <div className="pl-3 pt-2 space-y-2">

                    {categories.map((category) => (
                      <div
                        key={category.id}
                        className="rounded-xl bg-slate-50 overflow-hidden"
                      >

                        <Link
                        href="/categories/${a}"
                          onClick={() =>
                            setMobileCategory(
                              mobileCategory === category.id
                                ? "products"
                                : category.id
                            )
                          }
                          className="w-full flex items-center justify-between p-3 text-left text-sm font-semibold text-slate-700"
                        >
                          {category.name}

                          <ChevronDown
                            size={16}
                            className={`transition ${
                              mobileCategory === category.id
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </Link>

                        {mobileCategory === category.id && (
                          <div className="px-3 pb-3 space-y-1">

                            {category.products.map((product) => (
                              <Link
                                key={product.id}
                                href={`/products/${product.id}`}
                                onClick={() => {
                                  setMobileMenu(false);
                                  setMobileCategory(null);
                                }}
                                className="flex items-center justify-between p-2.5 rounded-lg text-sm text-slate-600 hover:bg-white hover:text-[#9D090D]"
                              >
                                {product.name}
                                <ArrowUpRight size={15} />
                              </Link>
                            ))}

                            {category.products.length === 0 && (
                              <p className="p-2 text-xs text-slate-400">
                                No products available.
                              </p>
                            )}

                          </div>
                        )}

                      </div>
                    ))}

                  </div>

                </div>
              </div>

            </div>

            <Link
              href="/blog"
              onClick={() => setMobileMenu(false)}
              className="block p-3 rounded-lg font-medium text-slate-800 hover:bg-slate-50"
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenu(false)}
              className="block p-3 rounded-lg font-medium text-slate-800 hover:bg-slate-50"
            >
              Contact Us
            </Link>

            <div className="grid grid-cols-2 gap-3 pt-4">

              <a
                href="/catalogue.pdf"
                download
                className="flex items-center justify-center gap-2 rounded-full border border-slate-300 py-3 text-sm font-semibold text-slate-700"
              >
                <Download size={16} />
                Catalogue
              </a>

              <Link
                href="/contact"
                onClick={() => setMobileMenu(false)}
                className="flex items-center justify-center rounded-full bg-[#F58220] py-3 text-sm font-bold text-white"
              >
                Get Quote →
              </Link>

            </div>

          </div>
        </div>

      </header>
    </>
  );
}
